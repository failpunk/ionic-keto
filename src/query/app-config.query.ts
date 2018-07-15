import { RootQuery } from './_root.query';
import { AppConfigModel } from '../models/app-config.model';


export class AppConfigQuery extends RootQuery {

    constructor() {
        super(AppConfigModel);
    }

    async getConfig() {
        let records = await this.getAll();
        return records[0] || {};
    }

}
