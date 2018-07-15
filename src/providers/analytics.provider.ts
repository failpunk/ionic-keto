import { Injectable } from '@angular/core';
import { Mixpanel } from '@ionic-native/mixpanel';
import { ExperimentsProvider } from '../providers/experiments.provider';

declare const Taplytics: any;

@Injectable()
export class AnalyticsProvider {
    constructor(private mixpanel: Mixpanel, public experiments: ExperimentsProvider) {}

    track(event, values = null) {
        let experiments = this.experiments.runningExperiments;

        if (values) {
            this.mixpanel.track(event, { values, ...experiments });
        } else {
            this.mixpanel.track(event, experiments);
        }
        Taplytics.track(event);
    }
}
