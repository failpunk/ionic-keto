import { AnalyticsProvider } from '../../providers/analytics.provider';
import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { DatabaseProvider } from '../../providers/database.provider';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-trick',
    template: `
    <ion-header>
        <ion-navbar class="background--blue">

            <ion-title>
                {{lesson.name}}
            </ion-title>

            <tips-link></tips-link>

        </ion-navbar>
    </ion-header>

    <ion-content>

    <ion-list class="image-list m-b-3">

        <ion-item class="image-list__item image-list__item--top bg" 
            [ngStyle]="{'background-image': 'url(assets/imgs/lesson/' + lesson.img + ')'}">
            <h2>
                Difficulty: {{lesson.difficulty}}
            </h2>  
            
            <h3>Items Needed... {{formatItems(lesson.items_needed)}}</h3>
        </ion-item>
    
    </ion-list>

    <div class="trick-header">
        {{lesson.desc}}
    </div>

    <div *ngFor="let step of lesson.steps; let i = index" class="trick">
        <span class="trick__step">step</span>
        
        <div class="trick__number">
            {{i + 1}}
        </div>
            
        <p class="trick__text">
            {{step.text}}
        </p>

        <img *ngIf="step.img" class="trick__img" [src]="'assets/imgs/trick/' + step.img" alt="">
    </div>

    </ion-content>
    `
})
export class TrickPage {
    lesson: any = {};

    constructor(
        public analytics: AnalyticsProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public navCtrl: NavController,
        public params: NavParams,
    ) {
        this.lesson = this.db.getLesson(this.lessonId);
    }

    get lessonId() {
        return this.params.data['lessonId'];
    }

    formatItems(items) {
        return items.join(', ');
    }

    ionViewDidEnter() {
        this.analytics.track('TrickPage', { TrickCategory: this.lessonId });
    }
}
