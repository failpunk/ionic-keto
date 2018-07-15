import { AnalyticsProvider } from '../../providers/analytics.provider';
import { AuthProvider } from '../../providers/auth.provider';
import { Component } from '@angular/core';
import { DatabaseProvider } from '../../providers/database.provider';
import { ModalController, NavController, Platform } from 'ionic-angular';
import { ExperimentsProvider } from '../../providers/experiments.provider';
import { Facebook } from '@ionic-native/facebook';
import { SubscriptionProvider } from '../../providers/subscription';
import { ParseUserModel } from '../../models/parse-user.model';
import { AppConfigQuery } from '../../query/app-config.query';
import { TermsModal } from '../payment/terms-modal';
import { PrivacyModal } from '../payment/privacy-modal';
import { PaymentRetentionModal } from './payment-retention-modal';
import { ConfigProvider } from '../../providers/config.provider';
import { TipsPage } from '../../pages/tips//tips';

@Component({
    selector: 'payment-about',
    templateUrl: 'payment.html'
})
export class PaymentPage {
    user: ParseUserModel;
    parseConfig: any = {};
    productId;

    reviews = [];
    faqData = [];

    postPaymentHeading;
    postPaymentSubHeading;

    showPaymentSummary: any = true;
    initialized = false;
    saving = false;

    text = {
        loading: 'Loading Cute Puppy Pics...',
        title: 'Easy Puppy Training',
        desc: 'Happy Dogs, Happy Owners',
        bullets: [
            'Step By Step Training Guides',
            'Tips, Tricks, and Additional Tools',
            'Access to 100+ Lessons',
            'Vetted by 10 Professional Dog Trainers'
        ]
    };

    constructor(
        public analytics: AnalyticsProvider,
        public auth: AuthProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public experiments: ExperimentsProvider,
        public navCtrl: NavController,
        private platform: Platform,
        public subscription: SubscriptionProvider,
        public facebook: Facebook,
        public modalCtrl: ModalController,
    ) {
        this.platform.ready().then(readySource => {
            this.init();
        });

        this.reviews = this.db.getReveiews();
        this.faqData = this.db.getFaqData();

        this.getUser();
    }

    async init() {
        this.parseConfig = await new AppConfigQuery().getConfig();

        this.postPaymentHeading = await this.experiments.variable('_post_payment_screen_heading', 'Confirm Now!');
        this.postPaymentSubHeading = await this.experiments.variable(
            '_post_payment_screen_subheading',
            'Free for 3 days'
        );


        this.showPaymentSummary = await this.experiments.variable('_show_payment_summary_text', true);

        this.productId = await this.experiments.variable('_subscription_product_id', this.config.ITUNES_PRODUCT_ID);
        await this.subscription.loadProducts(this.productId);

        this.initialized = true;
    }

    showModal(type) {
        let modal;

        if (type == 'terms') {
            modal = this.modalCtrl.create(TermsModal);
        } else {
            modal = this.modalCtrl.create(PrivacyModal);
        }

        modal.present();

        modal.onDidDismiss(() => {});
    }

    async getUser() {
        this.user = await this.auth.currentUser();
    }

    get paymentButtonText() {
        return this.parseConfig.paymentCtaText || 'Subscribe Now';
    }

    get termsAtBottom() {
        return this.parseConfig.termsAtBottom;
    }

    get product() {
        return this.subscription.products[0] || {};
    }

    ionViewDidEnter() {
        this.analytics.track('PaymentPage');
    }

    async nextPage() {
        this.navCtrl.push(TipsPage);
    }

    async signOut() {
        await this.auth.logout();
    }

    async buyProduct() {
        this.analytics.track('Initiated Checkout', { price: this.product.priceAsDecimal });
        this.facebook.logEvent('Initiated Checkout');

        this.saving = true;

        try {
            // this.subscription.subscription = { id: 12345, get: () => 1562023917000 }; // fake test subscription
            await this.subscription.buyProduct(this.productId);

            this.analytics.track('Purchased', { price: this.product.priceAsDecimal, product_id: this.productId });
            this.facebook.logEvent('Purchased');

            await this.createUser();

            this.nextPage();
        } catch (error) {
            this.analytics.track('Purchase Unsuccessful', error);
            console.log('ERROR -->', error);

            this.openPaymentRetention();
            this.saving = false;
        }
    }

    async createUser() {
        let user = await this.auth.createRandomUser();

        user.set('subscription', {
            subscription_id: this.subscription.subscription.id,
            expiration: this.subscription.subscription.get('expiration'),
            price: this.product.price
        });

        await user.save();

        this.analytics.track('Completed Registration');
        this.facebook.logEvent('Completed Registration');
    }

    openPaymentRetention() {
        let modal = this.modalCtrl.create(PaymentRetentionModal);

        modal.present();

        modal.onDidDismiss(tryPaymentAgain => {
            if (tryPaymentAgain) {
                this.buyProduct();
            }
        });
    }
}
