import { Parse } from 'parse';


/**
 * This is here to get around B.S. typescript errors
 */
export class RootModel extends Parse.Object {

    get?: Function;
    set?: Function;
    save?: Function;

    constructor(modelName) {
        super(modelName);
    }

    get updatedAt() {
        return this.get('updatedAt');
    }

    get createdAt() {
        return this.get('createdAt');
    }
}
