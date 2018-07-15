import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePageModule } from '../pages/home/home.module';
import { CategoryPageModule } from '../pages/category/category.module';
import { PaymentPageModule } from '../pages/payment/payment.module';
import { TipsPageModule } from '../pages/tips/tips.module';
import { TrickPageModule } from '../pages/trick/trick.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { Mixpanel } from '@ionic-native/mixpanel';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

import { AnalyticsProvider } from '../providers/analytics.provider';
import { AuthProvider } from '../providers/auth.provider';
import { ConfigProvider } from '../providers/config.provider';
import { ExperimentsProvider } from '../providers/experiments.provider';
import { SubscriptionProvider } from '../providers/subscription';
import { DatabaseProvider } from '../providers/database.provider';

import { PaymentRetentionModal } from '../pages/payment/payment-retention-modal';
import { TermsModal } from '../pages/payment/terms-modal';
import { PrivacyModal } from '../pages/payment/privacy-modal';

@NgModule({
    declarations: [MyApp, PaymentRetentionModal, TermsModal, PrivacyModal],
    imports: [
        BrowserModule,
        HomePageModule,
        CategoryPageModule,
        PaymentPageModule,
        TipsPageModule,
        TrickPageModule,

        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, PaymentRetentionModal, TermsModal, PrivacyModal],
    providers: [
        AnalyticsProvider,
        ExperimentsProvider,
        StatusBar,
        SplashScreen,
        Facebook,
        Mixpanel,
        InAppPurchase,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AuthProvider,
        ConfigProvider,
        SubscriptionProvider,
        DatabaseProvider,
    ]
})
export class AppModule {}
