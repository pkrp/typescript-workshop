interface Foo {
    bar: string;
}

/*** strictNullChecks ***/
const fooFunction = (foo?: Foo) => foo.bar;
// which is basically same as
const fooFunction_ = (foo: Foo | undefined) => foo.bar;

class PartiallyInitializedClass {
    someNumber: number;
    someString: string = 'some string'
    someBool: boolean;

    constructor() {
        this.someBool = false;
    }
}

/** non-null assertion operator **/
/** example 1 **/
function validateFoo(foo: Foo) {
    // Let's assume that this one throws an exception when foo is null or invalid object
}

function processFoo(foo?: Foo) {
    validateFoo(foo);
    let a = foo.bar;   //  error with strictNullChecks as it can be null
    let b = foo!.bar;  //  here we are asserting that e is okay
}

/** example 2 **/
function initX() {
    x = 10;
}

let x: number;
initX();
console.log(x + x);        //we've just inited x, let's mark that we are sure what we are doing!


/*** noImplicitAny ***/
const withImplicitAny = (foo) => foo.bar;
//foo has any implicit type
const withoutImplicitAny = (foo: { bar: string }) => foo.bar;

const withexplicitAny = (foo: any) => foo.bar;  // this one still works!

/*** strictFunctionTypes ***/

import {Employee, Developer} from '../03-classes/result'

/** Keep in mind that Developer is a supertype of FrontEndDeveloper and BackEndDeveloper**/
declare let developerFunction: (employee: Employee) => void
declare let frontEndFunction: (employee: Developer) => void
frontEndFunction = developerFunction
developerFunction = frontEndFunction

/*** strictPropertyInitialization ***/

class User {
    // Type error: Property 'username' has no initializer
    // and is not definitely assigned in the constructor
    name: string;
}

const user = new User()
const username = user.name.toLowerCase() // without flag it's a runtime error!

/*** noImplicitThis ***/

let userObject = {
    name: 'user name',
    phone: '1234',
    createBusinessCard: function () {
        return function () {
            return `${this.name}, ${this.phone}`
        }
    }
}
let cardCreator = userObject.createBusinessCard()
const card = cardCreator()
console.log(card)

//take a look at logs.. let's try to make it work properly!

/** alwaysStrict **/
/** noUnusedLocals **/
/** noUnusedParameters **/
/** noImplicitReturns **/
