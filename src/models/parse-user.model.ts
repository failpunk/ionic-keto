import get from 'lodash/get';
import isObject from 'lodash/isObject';

export class ParseUserModel {
    parseObj;

    constructor(ParseUserObj) {
        this.parseObj = ParseUserObj;
    }

    get id() {
        return this.parseObj.id;
    }

    get updatedAt() {
        return this.parseObj.get('updatedAt');
    }

    get createdAt() {
        return this.parseObj.get('createdAt');
    }

    get username() {
        return this.parseObj.get('username');
    }

    get password() {
        return this.parseObj.get('password');
    }

    get email() {
        return this.parseObj.get('email');
    }

    get metrics() {
        return this.parseObj.get('metrics');
    }

    set metrics(metrics) {
        this.parseObj.set('metrics', metrics);
    }

    get subscription() {
        return this.parseObj.get('subscription');
    }

    getMetric(path) {
        let metrics = this.parseObj.get('metrics');
        return get(metrics, path);
    }

    save() {
        return this.parseObj.save();
    }

    setMetric(metric, value) {
        let metrics = this.parseObj.get('metrics');

        metrics[metric] = value;

        this.parseObj.set('metrics', metrics);

        return this;
    }

    getFormattedArrayOfMetrics() {
        return Object.keys(this.metrics).map(key => {
            let value = this.getMetric(key);

            if (isObject(value)) {
                value = `${value.value} ${value.system}`;
            }

            if (key === 'goal') {
                value = this.formatGoalName(value);
            }

            return {
                name: key,
                value: value
            };
        });
    }

    formatGoalName(goal) {
        switch (goal) {
            case 'fit':
                return 'Get Fitter';
            case 'fat':
                return 'Weight Loss';
            default:
                return 'Get Stronger';
        }
    }

    addSubscription(subscription) {
        this.parseObj.set('subscription', {
            subscription_id: subscription.subscription.id,
            expiration: subscription.subscription.get('expiration')
        });

        return this;
    }

    hasActiveSubscription() {
        if (!this.subscription) {
            return false;
        }

        // todo:(justin) We should check the status tahle

        return new Date(this.subscription.expiration) > new Date();
    }
}
