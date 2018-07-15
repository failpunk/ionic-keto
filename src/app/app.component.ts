import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Mixpanel } from '@ionic-native/mixpanel';
import { AuthProvider } from '../providers/auth.provider';
import { SubscriptionProvider } from '../providers/subscription';

import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { TipsPage } from '../pages/tips/tips';

import { ConfigProvider } from '../providers/config.provider';
import { ExperimentsProvider } from '../providers/experiments.provider';

import { Parse } from 'parse';

// Shut the fuck up typescript and give me the damn file!
declare const require: any;
declare const Taplytics: any;
const version = require('../../package.json').version;

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    isDev = false;

    constructor(
        public config: ConfigProvider,
        public experiments: ExperimentsProvider,
        private platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public auth: AuthProvider,
        public subscription: SubscriptionProvider,
        private mixpanel: Mixpanel,
    ) {
        this.isDev = this.checkDev();

        this.platform.ready().then(readySource => {
            this.initAnalytics();

            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

        this.initParse();
        this.setRootPage();
    }

    checkDev() {
        return (<any>window)['IonicDevServer'] != undefined;
    }

    initParse() {
        Parse.initialize(this.config.PARSE_APP_ID, this.config.PARSE_JAVASCRIPT_KEY);

        Parse.serverURL = this.config.PARSE_SERVER_URL;
    }

    initAnalytics() {
        if (!this.platform.is('cordova')) {
            return;
        }

        let mixpanel_token = this.isDev ? this.config.MIXPANEL_DEV : this.config.MIXPANEL_PROD;

        this.mixpanel
            .init(mixpanel_token)
            .then(() => {
                console.log('Mixpanel init success');
            })
            .catch(error => {
                console.log('Mixpanel init fail', error);
            });
    }

    /**
     * The first page will be different if signed-in
     */
    async setRootPage() {
        let user = await this.auth.currentUser();

        this.rootPage = HomePage;

        if (user) {
            if (user.hasActiveSubscription() === true) {
                this.rootPage = HomePage;
            }
        }
    }
}
