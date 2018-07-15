import { AnalyticsProvider } from '../../providers/analytics.provider';
import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { DatabaseProvider } from '../../providers/database.provider';
import { NavController, NavParams } from 'ionic-angular';
import { MealPage } from '../meal/meal';

@Component({
    selector: 'page-category',
    template: `
    <ion-header>
        <ion-navbar class="background--blue">

            <ion-title>
                {{categoryName}}
            </ion-title>

        </ion-navbar>
    </ion-header>

    <ion-content>

        <ion-list class="image-list" *ngIf="meals.length">
            <ion-item *ngFor="let meal of meals" 
                (click)="goTo(meal.id)" 
                [ngStyle]="{'background-image': 'url(assets/imgs/meal/' + meal.img + ')'}"
                class="image-list__item bg">

                <h2>{{meal.name}} <span>( {{meal.difficulty}} )</span></h2>
                <p>{{meal.items_needed}}</p>

            </ion-item>
        </ion-list>

        <div class="coming-soon bg bg--coming-soon" *ngIf="meals.length < 1">
            <h1>meals Comming Soon</h1>
        </div>

    </ion-content>
    `
})
export class CategoryPage {
    category: any = {};
    meals: any = [];

    constructor(
        public analytics: AnalyticsProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public navCtrl: NavController,
        public params: NavParams
    ) {
        this.category = this.db.getCategory(this.categoryId);
        this.meals = this.db.getMealsForCategory(this.categoryId);
    }

    get categoryId() {
        return this.params.data['categoryId'];
    }

    get categoryName() {
        return this.category.name;
    }

    ionViewDidEnter() {
        this.analytics.track('mealPage', { category: this.categoryName });
    }

    goTo(mealId) {
        this.navCtrl.push(MealPage, { mealId });
    }
}
