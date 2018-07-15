import { Parse } from 'parse';
import { RootModel } from './_root.model';

export class SubscriptionModel extends RootModel {
    constructor() {
        super('Subscription');
    }

    get subscription() {
        return this.get('subscription');
    }
}

Parse.Object.registerSubclass('Subscription', SubscriptionModel);
