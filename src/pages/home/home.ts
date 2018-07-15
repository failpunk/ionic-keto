import { AnalyticsProvider } from '../../providers/analytics.provider';
import { AuthProvider } from '../../providers/auth.provider';
import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { DatabaseProvider } from '../../providers/database.provider';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { PaymentPage } from '../payment/payment';

@Component({
    selector: 'page-home',
    template: `
    <ion-header>
        <ion-toolbar class="background--blue">

            <ion-title>
                Meal Categories
            </ion-title>

        </ion-toolbar>
    </ion-header>

    <ion-content>

        <ion-list class="image-list">

            <ion-item *ngFor="let category of categories" 
                class="image-list__item bg"
                (click)="goTo(category.id)" 
                [ngStyle]="{'background-image': 'url(assets/imgs/list/' + category.img + ')'}"
                [ngClass]="category.img_class">
                <h2>{{category.name}}</h2>
                <p>{{category.desc}}</p>
            </ion-item>

        </ion-list>

        <!--
        <button (click)="logout()" style="padding: 2rem; margin-bottom: 2rem;">
            LOG OUT
        </button>
        -->

    </ion-content>
    `
})
export class HomePage {
    categories: any = [];

    constructor(
        public analytics: AnalyticsProvider,
        public auth: AuthProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public navCtrl: NavController
    ) {
        this.categories = this.db.getCategories();
    }

    ionViewDidEnter() {
        this.analytics.track('HomePage');
    }

    goTo(categoryId) {
        this.navCtrl.push(CategoryPage, { categoryId });
    }

    async logout() {
        await this.auth.logout();
        this.navCtrl.push(PaymentPage);
    }
}
