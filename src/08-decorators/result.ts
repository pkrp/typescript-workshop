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
    @firstDecorator()
    @secondDecorator()
    method() {}

    @firstDecorator() @secondDecorator() anotherMethod() {}
}

const decoratorExample = new DecoratorExample()
decoratorExample.method()



console.log('\n\n')
/*** Class Decorators ***/
console.log('/*** Class Decorators ***/\n\n')


function nameDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        name = "Susan";
    }
}

@nameDecorator
class ClassDecoratorExample {
    name: string;
    constructor(m: string) {
        this.name = m;
    }

    printName(): void {
        console.log(this.name)
    }
}

const classDecoratorExample: ClassDecoratorExample = new ClassDecoratorExample('John')
classDecoratorExample.printName()            // override constructor so that this function outputs 'Susan'



/*** Method Decorators ***/

function logDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            console.log('logging overridden!');
        }
    };
}

class MethodDecoratorExample {
    constructor() {}

    @logDecorator()
    someFunction() {
        console.log('initial state of someFunction')
    }
}



const methodDecoratorExample: MethodDecoratorExample = new MethodDecoratorExample()
methodDecoratorExample.someFunction() // try to override this function so that it logs something else (use descriptor property)


/*** Accessor Decorators ***/

function getterDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.get = function () {
            console.log('logging overridden!');
            return this._x + 1
        }
    };
}

class AccessorDecoratorExample {
    private _x: number;
    constructor(x) { this._x = x }

    @getterDecorator()
    get x() {
        console.log('getting x')
        return this._x;
    }
}

const accessorDecoratorExample: AccessorDecoratorExample = new AccessorDecoratorExample(2)
const xValue: number = accessorDecoratorExample.x          // try to modify getter so that it logs something else and returns doubled value
                                                            // use descriptor property
console.log(xValue)