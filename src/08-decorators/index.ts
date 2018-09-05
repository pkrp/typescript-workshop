/*** Evaluation order ***/
console.log('/*** Evaluation order ***/\n\n')


function firstDecorator() {
    console.log("firstDecorator evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("firstDecorator called");
    }
}

function secondDecorator() {
    console.log("secondDecorator evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("secondDecorator called");
    }
}

class DecoratorExample {
    @firstDecorator()       //we can write annotations in multiple lines...
    @secondDecorator()
    method() {}

    @firstDecorator() @secondDecorator() anotherMethod() {}   //...or simply one after another
}

const decoratorExample = new DecoratorExample()
decoratorExample.method()       //run our script and take a look what is the order of evaluation for decorators on 'method'



console.log('\n\n')
/*** Class Decorators ***/
console.log('/*** Class Decorators ***/\n\n')


function nameDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
    }
}

class ClassDecoratorExample {
    name: string;
    constructor(m: string) {
        this.name = m;
    }

    printName(): void {
        console.log(this.name)
    }
}
//firstly use decorator in proper place

const classDecoratorExample: ClassDecoratorExample = new ClassDecoratorExample('John')
classDecoratorExample.printName()            // override constructor so that this function outputs 'Susan'



/*** Method Decorators ***/

function logDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    };
}

class MethodDecoratorExample {
    constructor() {}

    someFunction() {
        console.log('initial state of someFunction')
    }
}
//firstly use decorator in proper place

const methodDecoratorExample: MethodDecoratorExample = new MethodDecoratorExample()
methodDecoratorExample.someFunction() // try to override this function so that it logs something else (use descriptor property)


/*** Accessor Decorators ***/

/*
decorator placeholder
 */

class AccessorDecoratorExample {
    private _x: number;
    constructor(x) { this._x = x }

    get x() {
        console.log('getting x')
        return this._x;
    }
}
//firstly create out decorator and use it in proper place

const accessorDecoratorExample: AccessorDecoratorExample = new AccessorDecoratorExample(2)
const xValue: number = accessorDecoratorExample.x          // try to modify getter so that it logs something else and returns doubled value
// psst... use descriptor property
console.log(xValue)