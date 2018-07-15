import { Input, Component } from '@angular/core';


@Component({
    selector: 'rating-stars',
    template: `
    <svg viewBox="0 0 60 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Payment-Screen" transform="translate(-121.000000, -374.000000)" fill="#F8E71C" stroke="#F8E71C">
                <g id="Group" transform="translate(0.000000, 271.000000)">
                    <g id="Stars" transform="translate(121.000000, 103.000000)">
                        <polygon *ngIf="starCount >= 1" id="Star" points="5.34246575 8.01369863 2.20224317 9.66461134 2.80197232 6.16792211 0.261478886 3.69155304 3.77235446 3.18139296 5.34246575 0 6.91257704 3.18139296 10.4234526 3.69155304 7.88295919 6.16792211 8.48268833 9.66461134"></polygon>
                        <polygon *ngIf="starCount >= 2" id="Star" points="17.6712329 8.01369863 14.5310103 9.66461134 15.1307394 6.16792211 12.590246 3.69155304 16.1011216 3.18139296 17.6712329 0 19.2413442 3.18139296 22.7522197 3.69155304 20.2117263 6.16792211 20.8114555 9.66461134"></polygon>
                        <polygon *ngIf="starCount >= 3" id="Star" points="30 8.01369863 26.8597774 9.66461134 27.4595066 6.16792211 24.9190131 3.69155304 28.4298887 3.18139296 30 0 31.5701113 3.18139296 35.0809869 3.69155304 32.5404934 6.16792211 33.1402226 9.66461134"></polygon>
                        <polygon *ngIf="starCount >= 4" id="Star" points="42.3287671 8.01369863 39.1885445 9.66461134 39.7882737 6.16792211 37.2477803 3.69155304 40.7586558 3.18139296 42.3287671 0 43.8988784 3.18139296 47.409754 3.69155304 44.8692606 6.16792211 45.4689897 9.66461134"></polygon>
                        <polygon *ngIf="starCount >= 5" id="Star" points="54.6575342 8.01369863 51.5173117 9.66461134 52.1170408 6.16792211 49.5765474 3.69155304 53.087423 3.18139296 54.6575342 0 56.2276455 3.18139296 59.7385211 3.69155304 57.1980277 6.16792211 57.7977568 9.66461134"></polygon>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  `
})
export class RatingStarsComponent {

    @Input() starCount = 5;

}
