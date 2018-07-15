import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../../pages/tips/tips';

@Component({
    selector: 'tips-link',
    template: `
    <ion-buttons end>
        <button (click)="goToTips()">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128" x="0px" y="0px"><defs><style>.cls-1{fill:none;stroke:#FFF;stroke-linecap:square;stroke-miterlimit:10;stroke-width:8px;}</style></defs><title>Artboard 53</title><line class="cls-1" x1="70" y1="124" x2="58" y2="124"></line><line class="cls-1" x1="77" y1="112" x2="51" y2="112"></line><path class="cls-1" d="M77,100c0-19,9-24,9-24,12.5-12.5,13.12-32.13.63-44.63a32,32,0,0,0-45.25,0C28.88,43.87,29.5,63.5,42,76c0,0,9,5,9,24Z"></path><line class="cls-1" x1="63" y1="4" x2="63" y2="10"></line><line class="cls-1" x1="14" y1="53" x2="20" y2="53"></line><line class="cls-1" x1="108" y1="53" x2="112" y2="53"></line><line class="cls-1" x1="28.35" y1="87.65" x2="32.59" y2="83.41"></line><line class="cls-1" x1="94.82" y1="21.18" x2="97.65" y2="18.35"></line><line class="cls-1" x1="28.35" y1="18.35" x2="32.59" y2="22.59"></line><line class="cls-1" x1="94.82" y1="84.82" x2="97.65" y2="87.65"></line></svg>
        </button>
    </ion-buttons> 
  `
})
export class TipsLinkComponent {
    constructor(public navCtrl: NavController) {}

    goToTips() {
        this.navCtrl.push(TipsPage);
    }
}
