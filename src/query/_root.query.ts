import { Parse } from 'parse';


export class RootQuery {

    ModelClass;
    query;

    constructor(ModelClass) {
        this.ModelClass = ModelClass;
        this.query = new Parse.Query(this.model);
    }

    get model() {
        return new this.ModelClass();
    }

    getAll(): Promise<any> {
        return this.query
            .find();
    }

    getOne(id): Promise<any> {
        return this.query
            .equalTo("objectId", id)
            .first();
    }

    create(data): Promise<any> {
        return this.model.save(data);
    }

}
