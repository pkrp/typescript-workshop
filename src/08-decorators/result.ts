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
    method() {
    }

    @firstDecorator() @secondDecorator() anotherMethod() {
    }
}

const decoratorExample = new DecoratorExample()
decoratorExample.method()


console.log('\n\n')
/*** Class Decorators ***/
console.log('/*** Class Decorators ***/\n\n')


function nameDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        name = "Overriden name!";
    }
}

class SomeClassExample {
    private _name: string;

    constructor(m: string) {
        this._name = m;
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }
}

@nameDecorator
class ClassWithDecoratorExample {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }
}


/*** Method Decorators ***/

function logDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value = () => {
            return 'logging overridden!';
        }
    };
}

class MethodDecoratorExample {
    constructor() {
    }

    getState() {
        return 'initial state of function'
    }

    @logDecorator()
    getDecoratedState() {
        return 'initial state of function'
    }
}


/*** Accessor Decorators ***/

function getterDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.get = function () {
            return this._x * 2
        }
    };
}

class AccessorDecoratorExample {
    private _x: number;
    private _y: number;

    constructor(x, y) {
        this._x = x;
        this._y = y
    }

    get x() {
        return this._x;
    }

    @getterDecorator()
    get y() {
        return this._y;
    }
}

export {SomeClassExample, ClassWithDecoratorExample, MethodDecoratorExample, AccessorDecoratorExample}