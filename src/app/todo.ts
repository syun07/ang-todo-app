export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;
    // each Todo instance will have these three properties

    construuctor(values: Object = {}) {
        Object.assign(this, values);
        // allows us to specify property values duuring instantiation so we can easily create new Todo instances
    }
}

