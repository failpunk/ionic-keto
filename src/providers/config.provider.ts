import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
    public APP_NAME = 'Ultimate Keto & Ketogenesis Recipes';
    public WEBSITE_SHORT = 'ketokloneapp.com';
    public WEBSITE_URL = 'http://www.ketokloneapp.com';
    public CONTACT_EMAIL = 'contact@ketokloneapp.com';

    public MIXPANEL_DEV = '2330db6d4a804328bf96a973ff16399c';
    public MIXPANEL_PROD = 'fdfba61c1cbb41e89df4452c7e915761';

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

    public REVIEW_TITLE = 'Real People, Real Results';
    public REVIEW_OVERALL_RATING = '4.9';
    public REVIEW_OVERALL_DESC = 'Based on 499 ratings, 30 reviews';

    public FAQ_TITLE = 'Frequently Asked Questions';

    public PAYMENT_LOADING_TEXT = ' lookout wherry doubloon chase...';
    public PAYMENT_TITLE = 'boom mizzenmast';
    public PAYMENT_DESCRIPTION = 'Prow scuttle parrel provost Sail ';
    public PAYMENT_TAGLINE = 'Join Thousands of Happy Users';
    public PAYMENT_BYLINE = `Accelerate Your Fat Burning`;
    public PAYMENT_BULLETS = [
        '100+ Mouthwatering Keto Recipes',
        'Ketogenesis Tips and Tricks',
        'New Recipes Added Each Week',
        'Maintaining Keto and Conquering The Keto Flue'
    ];

    public PAYMENT_RETENTION_TITLE = `Are you sure you don’t want access to the TOP Keto receipes?`;
    public PAYMENT_RETENTION_TEXTONE = `Thousands of people already use Keto Recipes to burn fat, lose weight, and gain energy.`;
    public PAYMENT_RETENTION_TEXTTWO = `It’s a totally free trial, that you can cancel anytime!`;
    public PAYMENT_RETENTION_SUCCESS = `Try ${this.APP_NAME} Free Trial`;
    public PAYMENT_RETENTION_DISMISS = `No Thanks`;

    /**
     * Merge the server config keys in as properties
     */
    addServerConfig(parseConfig) {
        let attrs = parseConfig.attributes;

        Object.keys(attrs).map(k => {
            console.log('k', k, attrs[k]);
            this[k] = attrs[k];
        });
    }
}
