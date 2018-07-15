import { Parse } from 'parse';
import { RootModel } from './_root.model';


export class AppConfigModel extends RootModel {

    constructor() {
        super('AppConfig');
    }

    get enablePayments() {
        return this.get('enablePayments');
    }

    get paymentCtaText() {
        return this.get('paymentCtaText') || '';
    }

    get termsAtBottom() {
        return this.get('termsAtBottom');
    }

}

Parse.Object.registerSubclass('AppConfig', AppConfigModel);
