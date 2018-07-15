import { AnalyticsProvider } from '../../providers/analytics.provider';
import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { DatabaseProvider } from '../../providers/database.provider';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-meal',
    template: `
    <ion-header>
        <ion-navbar class="background--blue">

            <ion-title>
                Meal Recipe
            </ion-title>

        </ion-navbar>
    </ion-header>

    <ion-content>

        <ion-list class="image-list m-0">
    
            <ion-item class="image-list__item image-list__item--top bg" 
                [ngStyle]="{'background-image': 'url(assets/imgs/meal/' + meal.img + ')'}">
            </ion-item>
    
        </ion-list>

        <div class="wrapit">

        <ion-card class="">
    
            <ion-card-header>
                {{meal.name}}
            </ion-card-header>
    
            <div class="stars">
                <rating-stars [starCount]="meal.stars"></rating-stars>    
            </div>
    
            <div class="stats">
                <div class="stats__item">
                    <h4>Prep Time</h4>
                    <span>
                        {{meal.prep_time_min}}
                        <small>min</small>
                    </span>
                </div>
                
                <div class="stats__item">
                    <h4>Total Time</h4>
                    <span>
                        {{meal.total_time_min}}
                        <small>min</small>
                    </span>
                </div>
                
                <div class="stats__item">
                    <h4>Servings</h4>
                    <span>{{meal.servings}}</span>
                </div>
            </div>
        
            <ion-card-content>
                {{meal.desc}}
            </ion-card-content>
    
            <h3>Ingredients</h3>
    
            <ul class="ingredients">
                <li class="ingredients__item" *ngFor="let ingredient of meal.ingredients">
                    <span>{{ingredient}}</span>
                </li>
            </ul>
        
        </ion-card>
        
        <h2>Cooking Instructions</h2>

        <div *ngFor="let step of meal.directions; let i = index" class="trick">
            <span class="trick__step">step</span>
            
            <div class="trick__number">
                {{i + 1}}
            </div>
                
            <p class="trick__text">
                {{step}}
            </p>

            <div class="divider"></div>
        </div>

        </div>
    
    </ion-content>
    `
})
export class MealPage {
    meal: any = {};

    constructor(
        public analytics: AnalyticsProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public navCtrl: NavController,
        public params: NavParams
    ) {
        this.meal = this.db.getMeal(this.mealId);
    }

    get mealId() {
        return this.params.data['mealId'];
    }

    formatItems(items) {
        return items.join(', ');
    }

    ionViewDidEnter() {
        this.analytics.track('MealPage', { MealCategory: this.mealId });
    }
}
