import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { ViewController } from 'ionic-angular';
import { ExperimentsProvider } from '../../providers/experiments.provider';
import { AnalyticsProvider } from '../../providers/analytics.provider';

@Component({
    selector: 'payment-retention-modal',
    template: `
    <ion-header>
    
        <ion-navbar>
            
        </ion-navbar>
        
    </ion-header>

    <ion-content padding>

    <h3 class="title" (click)="yes()">
        {{config.PAYMENT_RETENTION_TITLE}}
    </h3>

    <p class="text" (click)="yes()">
        {{config.PAYMENT_RETENTION_TEXTONE}}
    </p>
        
    <p class="text m-b-4" (click)="yes()">
        {{config.PAYMENT_RETENTION_TEXTTWO}}
    </p>

    <div class="bottom">
        <div class="divider m-b-0"></div>
        <button (click)="yes()" ion-button clear large>{{config.PAYMENT_RETENTION_SUCCESS}}</button>

        <div class="divider"></div>
        <button (click)="no()" ion-button color="dark" clear>{{config.PAYMENT_RETENTION_DISMISS}}</button>
    </div>

    </ion-content>
  `
})
export class PaymentRetentionModal {
    constructor(
        public analytics: AnalyticsProvider,
        public config: ConfigProvider,
        public viewCtrl: ViewController,
        public experiments: ExperimentsProvider
    ) {}

    ionViewDidEnter() {
        this.analytics.track('PaymentRetentionModal');
    }

    dismiss(value) {
        this.viewCtrl.dismiss(value);
    }

    yes() {
        this.analytics.track('Payment Retention Success');
        this.dismiss(true);
    }

    no() {
        this.analytics.track('Payment Retention Dismiss');
        this.dismiss(false);
    }
}
