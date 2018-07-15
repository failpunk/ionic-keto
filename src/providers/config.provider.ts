import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
    public APP_NAME = 'Keto Klone Trainer';
    public WEBSITE_SHORT = 'ketokloneapp.com';
    public WEBSITE_URL = 'http://www.ketokloneapp.com';
    public CONTACT_EMAIL = 'contact@ketokloneapp.com';

    public MIXPANEL_DEV = 'a5b2be6d7255a056f10303dd5c0b2f7c';
    public MIXPANEL_PROD = 'fd754fa83888457dde586fe166e4a7ee';

    public PARSE_APP_ID = '40v1BI0eVMjYIgZpbppOmDW08KDPWKLkjETqoNjP';
    public PARSE_JAVASCRIPT_KEY = 'q8hxBQiVTsdSs2SftDl9O2KiDWL8R5qjTJNLKjEP';
    public PARSE_SERVER_URL = 'https://pg-app-5pu3u9o3y0m5he1y4l18js6yxhuapj.scalabl.cloud/1/';

    public ITUNES_PRODUCT_ID = 'keto.subscription.3.7.99';

    public TERMS_TITLE = 'SUBSCRIPTION CONDITIONS';
    public TERMS_BODY = `Thet total amount for the subscription period will be charged to your iTunes Account. Unless you turn off auto-renewal at
    least 24 hours before the end of the subscription period, the subscription will renew automatically for the
    same price, and your iTunes account will be charged accordingly. You can manage the subscription and turn
    off automatic renewal in the accoutn settings of your Apple ID at any time. Any unused portion of a free
    trial period will be forfeited when subscribing to a non-trial plan`;


    public REVIEW_TITLE = 'scallywag dance the hempen';
    public REVIEW_OVERALL_RATING = '4.9';
    public REVIEW_OVERALL_DESC = 'Based on 499 ratings, 30 reviews';

    public FAQ_TITLE = 'Frequently Asked Questions';

    public PAYMENT_LOADING_TEXT = ' lookout wherry doubloon chase...';
    public PAYMENT_TITLE = 'boom mizzenmast';
    public PAYMENT_DESCRIPTION = 'Prow scuttle parrel provost Sail ';
    public PAYMENT_TAGLINE = 'Join Thousands of Happy Users';
    public PAYMENT_BYLINE = `red ensign hulk smartly!`;
    public PAYMENT_BULLETS = [
        'yardarm spyglass sheet ',
        'broadside cable strike colors.',
        'seven seas boatswain schooner',
        'black jack gangway rutters.'
    ];

    public PAYMENT_RETENTION_TITLE = `Are you sure you don’t want want access to one of the top training guides?`;
    public PAYMENT_RETENTION_TEXTONE = `Thousands of people already use Keto Klone to train their dog, whether it’s basic house/potting training or for more advanced move like shake.`;
    public PAYMENT_RETENTION_TEXTTWO = `It’s a totally free trial, that you can cancel anytime!`;
    public PAYMENT_RETENTION_SUCCESS = `Try ${this.APP_NAME} Free Trial`;
    public PAYMENT_RETENTION_DISMISS = `No Thanks`;
}
