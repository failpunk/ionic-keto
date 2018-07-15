import { AnalyticsProvider } from '../../providers/analytics.provider';
import { Component } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { DatabaseProvider } from '../../providers/database.provider';
import { NavController, NavParams } from 'ionic-angular';
import { TrickPage } from '../trick/trick';

@Component({
    selector: 'page-lesson',
    template: `
    <ion-header>
        <ion-navbar class="background--blue">

            <ion-title>
                {{categoryName}}
            </ion-title>

            <tips-link></tips-link>

        </ion-navbar>
    </ion-header>

    <ion-content>

        <ion-list class="image-list" *ngIf="lessons.length">
            <ion-item *ngFor="let lesson of lessons" 
                (click)="goTo(lesson.id)" 
                [ngStyle]="{'background-image': 'url(assets/imgs/lesson/' + lesson.img + ')'}"
                class="image-list__item bg">

                <h2>{{lesson.name}} <span>( {{lesson.difficulty}} )</span></h2>
                <p>{{lesson.items_needed}}</p>

            </ion-item>
        </ion-list>

        <div class="coming-soon bg bg--coming-soon" *ngIf="lessons.length < 1">
            <h1>Lessons Comming Soon</h1>
        </div>

    </ion-content>
    `
})
export class LessonPage {
    category: any = {};
    lessons: any = [];

    constructor(
        public analytics: AnalyticsProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public navCtrl: NavController,
        public params: NavParams
    ) {
        this.category = this.db.getCategory(this.categoryId);
        this.lessons = this.db.getLessonsForCategory(this.categoryId);

        console.log('this.lessons', this.lessons);
    }

    get categoryId() {
        return this.params.data['categoryId'];
    }

    get categoryName() {
        return this.category.name;
    }

    ionViewDidEnter() {
        this.analytics.track('LessonPage', { category: this.categoryName });
    }

    goTo(lessonId) {
        this.navCtrl.push(TrickPage, { lessonId });
    }
}
