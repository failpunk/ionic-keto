import { Injectable } from '@angular/core';

declare const Taplytics: any;

@Injectable()
export class ExperimentsProvider {
    runningExperiments = {};

    constructor() {
        // Taplytics.init('5de3b9a9625c40daa4dd3d5203bb5029', {
        //     test_experiments: {
        //         'Hide Payment Text Checkout': 'Test'
        //     }
        // });

        Taplytics.propertiesLoaded(loaded => {
            console.log('Taplytics Loaded...');
        });

        Taplytics.runningExperiments(expAndVars => {
            console.log('expAndVars --->\n', JSON.stringify(expAndVars, null, 4));

            this.runningExperiments = expAndVars;
        });
    }

    variable(name, defaultValue) {
        return new Promise(resolve => {
            // prettier-ignore
            let temp = Taplytics.variable(name, defaultValue, (value) => {
                console.log(`Taplytics variable ${name} Value: ${value} with default value ${defaultValue}`);
                resolve(value);
            });
        });
    }
}
