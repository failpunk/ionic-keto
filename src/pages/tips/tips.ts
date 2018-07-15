import { AnalyticsProvider } from '../../providers/analytics.provider';
import { Component, ViewChild } from '@angular/core';
import { ConfigProvider } from '../../providers/config.provider';
import { DatabaseProvider } from '../../providers/database.provider';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-tips',
    template: `
    <ion-header>
        <ion-navbar class="background--blue">
    
            <ion-title>
                Keto Overview
            </ion-title>
    
        </ion-navbar>
    </ion-header>
    
    <ion-content>

        <a class="tips__skip" (click)="skip()">
            skip
        </a>

        <div class="static-header">
            <svg class="static-header__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve"><g><g><path d="M56.3,82.7H32.2c-0.2,0-0.4-0.1-0.6-0.2L12.1,68.3c-0.4-0.3-0.5-0.7-0.4-1.1c0.1-0.4,0.5-0.7,1-0.7h32.3l8.3-25.6    c0.1-0.3,0.3-0.5,0.6-0.6c0.3-0.1,0.6,0,0.9,0.1l12.3,9c0.4,0.3,0.5,0.7,0.4,1.1L57.2,82C57.1,82.4,56.7,82.7,56.3,82.7z     M32.5,80.7h23.1l9.8-30.2l-10.6-7.7l-8.1,25c-0.1,0.4-0.5,0.7-1,0.7H15.7L32.5,80.7z"></path></g><g><path d="M56.3,82.7c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.3-0.5-0.7-0.4-1.1l10-30.8L43.6,34.7c-0.3-0.2-0.4-0.5-0.4-0.8    c0-0.3,0.2-0.6,0.4-0.8l12.2-8.9c0.4-0.3,0.8-0.3,1.2,0l26.8,19.5c0.4,0.3,0.5,0.7,0.4,1.1l-7.5,22.9c-0.1,0.2-0.2,0.4-0.4,0.5    L56.9,82.5C56.7,82.6,56.5,82.7,56.3,82.7z M45.9,33.9l21.2,15.4c0.4,0.3,0.5,0.7,0.4,1.1l-9.3,28.6L75,66.9l7.1-21.9L56.4,26.3    L45.9,33.9z"></path></g><g><path d="M83.3,45.6c-0.2,0-0.4-0.1-0.6-0.2L56.4,26.3L34.8,42c-0.3,0.2-0.6,0.2-0.9,0.1c-0.3-0.1-0.5-0.3-0.6-0.6l-4.7-14.4    c-0.1-0.4,0-0.9,0.4-1.1L55.7,6.6c0.4-0.3,0.8-0.3,1.2,0l19.5,14.2c0.2,0.1,0.3,0.3,0.4,0.5l7.5,22.9c0.1,0.4,0,0.9-0.4,1.1    C83.7,45.5,83.5,45.6,83.3,45.6z M56.4,24.1c0.2,0,0.4,0.1,0.6,0.2l24.3,17.7L75,22.2L56.3,8.7L30.8,27.2l4,12.4l21.1-15.3    C56,24.1,56.2,24.1,56.4,24.1z"></path></g><g><path d="M38.1,53.9H22.8c-0.4,0-0.8-0.3-1-0.7L11.7,21.9c-0.1-0.4,0-0.9,0.4-1.1L31.6,6.6c0.2-0.1,0.4-0.2,0.6-0.2h24.1    c0.4,0,0.8,0.3,1,0.7s0,0.9-0.4,1.1l-26.1,19L39,52.6c0.1,0.3,0,0.6-0.1,0.9S38.4,53.9,38.1,53.9z M23.5,51.9h13.1l-8-24.8    c-0.1-0.4,0-0.9,0.4-1.1L53.2,8.4H32.5L13.8,22L23.5,51.9z"></path></g><g><path d="M45.6,68.5h-33c-0.4,0-0.8-0.3-1-0.7L4.2,44.9c-0.1-0.2-0.1-0.4,0-0.6l7.5-22.9c0.1-0.4,0.5-0.7,1-0.7s0.8,0.3,1,0.7    l9.9,30.6h26.8c0.3,0,0.6,0.2,0.8,0.4c0.2,0.3,0.2,0.6,0.1,0.9l-4.7,14.6C46.5,68.2,46.1,68.5,45.6,68.5z M13.4,66.5h31.5L49,53.9    H22.8c-0.4,0-0.8-0.3-1-0.7l-9.2-28.4L6.2,44.6L13.4,66.5z"></path></g></g></svg>
    
            <h1 class="static-header__title">
                Keto Overview
            </h1>

            <div class="divider"></div>
        </div>
    
        <ion-slides class="tips">
    
            <ion-slide *ngFor="let tip of tips">
    
                <div class="section" *ngFor="let section of tip.sections">

                    <h2 *ngIf="section.title" class="tips__name">
                        {{section.title}}
                    </h2>
        
                    <p class="tips__text" [innerHTML]="section.desc"></p>
                
                </div>

            </ion-slide>
    
        </ion-slides>
    
        <a class="btnPrev" (click)="prev()">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 48 48" version="1.1" x="0px" y="0px">
                <g>
                    <path d="m 33.570489,2.0044509 a 2.0001999,2.0001999 0 0 0 -1.36523,0.6289062 L 12.898619,22.611874 a 2.0001999,2.0001999 0 0 0 0,2.78125 l 19.30664,19.978515 a 2.0001999,2.0001999 0 1 0 2.87695,-2.779297 L 17.117359,24.002499 35.082209,5.4126539 a 2.0001999,2.0001999 0 0 0 -1.51172,-3.408203 z"></path>
                </g>
            </svg>
        </a>
    
        <a class="btnNext" (click)="next()">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 48 48" version="1.1" x="0px" y="0px">
                <g>
                    <path d="m 33.570489,2.0044509 a 2.0001999,2.0001999 0 0 0 -1.36523,0.6289062 L 12.898619,22.611874 a 2.0001999,2.0001999 0 0 0 0,2.78125 l 19.30664,19.978515 a 2.0001999,2.0001999 0 1 0 2.87695,-2.779297 L 17.117359,24.002499 35.082209,5.4126539 a 2.0001999,2.0001999 0 0 0 -1.51172,-3.408203 z"></path>
                </g>
            </svg>
        </a>

    </ion-content>
    `
})
export class TipsPage {
    tips: any = [];

    @ViewChild(Slides) slides: Slides;

    constructor(
        public analytics: AnalyticsProvider,
        public config: ConfigProvider,
        public db: DatabaseProvider,
        public navCtrl: NavController,
        public params: NavParams
    ) {
        this.tips = this.db.getTips();
    }

    next() {
        this.slides.slideNext();
    }

    prev() {
        this.slides.slidePrev();
    }

    skip() {
        this.navCtrl.push(HomePage);
    }
}
