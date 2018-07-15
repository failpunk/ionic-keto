import { RootQuery } from './_root.query';
import { SubscriptionModel } from '../models/subscription.model';

export class SubscriptionQuery extends RootQuery {
    constructor() {
        super(SubscriptionModel);
    }

    create(subscription) {
        return this.model.set(subscription).save();
    }
}
