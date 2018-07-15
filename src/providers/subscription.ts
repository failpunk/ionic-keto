import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { AppConfigQuery } from '../query/app-config.query';
import { SubscriptionQuery } from '../query/subscription.query';
import addDays from 'date-fns/add_days';

@Injectable()
export class SubscriptionProvider {
    products = [];
    receipts = [];
    transaction;
    subscription: any;
    config: any = {};

    trial;
    sub_length;
    price;
    priceBreakdown;
    sub_unit;
    unit_price;
    currency;

    productInfo = {};

    constructor(private platform: Platform, private iap: InAppPurchase) {
        this.platform.ready().then(async readySource => {
            // this.loadConfig();
            // this.receipts = await this.getReceipts();
        });
    }

    async loadConfig() {
        this.config = await new AppConfigQuery().getConfig();
    }

    get paymentsEnabled() {
        return this.config.enablePayments || true;
    }

    async loadProducts(product) {
        this.parseProductId(product);

        return this.iap
            .getProducts([product])
            .then(products => {
                this.products = products.map(p => {
                    let ppm = (p.priceAsDecimal * 100) / 12;
                    p.pricePerMonth = Math.floor(ppm) / 100;

                    return p;
                });

                this.productInfo = this.products[0];
            })
            .catch(err => {
                console.log(err);
            });
    }

    getReceipts() {
        return this.iap.restorePurchases();
    }

    buyProduct(productId) {
        return this.iap.subscribe(productId).then(async subscription => {
            subscription['expiration'] = this.getSubscriptionExpiration();
            subscription['price'] = this.products[0].price;

            this.subscription = await new SubscriptionQuery().create(subscription);
        });
    }

    async saveSubsciption(user) {
        await user.addSubscription(this.subscription).save();
    }

    parseProductId(productId) {
        let parts = productId.split('.');

        this.trial = parseInt(parts[2]);
        this.sub_length = parseInt(parts[3]);
        this.price = parseInt(parts[4]);
    }

    /**
     * This is a hack! We are just initally adding trial + subscription length as the inital expiration.
     * We should be checking receipt status on the server if we actually care about expirations
     */
    getSubscriptionExpiration() {
        let daysUntilExpiration = this.trial + this.sub_length > 0 ? this.trial + this.sub_length : 3;

        let expirationDate = addDays(new Date(), daysUntilExpiration);

        return expirationDate.getTime();
    }

    hasSubscription() {
        if (this.receipts.length) {
        }
    }
}
