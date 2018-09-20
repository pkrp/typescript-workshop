/*** Generics ***/

/** basic developers queue implementation **/
class Queue {
    private data = [];
    push = (item) => this.data.push(item);
    pop = () => this.data.shift();
}


/** one solution with specified type **/

class EmployeeQueue {
    private data = [];
    push = (item: Employee) => this.data.push(item);
    pop = (): Employee => this.data.shift();
}


/** generic solution with generic queue **/

class GenericQueue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}


/** extending generic type to keep only names **/

class GenericEmployeeQueue<T extends Employee> {
    private data = [];
    push = (item: T) => this.data.push(item.name);
    pop = (): string => this.data.shift();
}



/** Data **/
interface Employee {
    name: string
}

class Developer implements Employee {
    constructor(readonly name) {}
}

class FrontEndDeveloper extends Developer {
    constructor(readonly name) {
        super(name)
    }
}

export {Employee, Developer, FrontEndDeveloper, Queue, EmployeeQueue, GenericQueue, GenericEmployeeQueue}