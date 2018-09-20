interface Foo {
    bar: string;
}

/*** strictNullChecks ***/
const fooFunction = (foo?: Foo) => foo!.bar;
// which is basically same as
const fooFunction_ = (foo: Foo | undefined) => foo!.bar;

let foo = undefined         // this one is okay
//foo = null                  // and this one does not work

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
function validateFoo(foo?: Foo) {
    // Throw an exception when foo is null or invalid object
}

function processFoo(foo?: Foo) {
    validateFoo(foo);
    let a = foo!.bar;  //  error with strictNullChecks as it can be null
    let b = foo!.bar;  // here we are asserting that e is okay
}

/** example 2 **/
function initX() {
    x = 10;
}

let x: number;
initX();
console.log(x! + x!);


/*** noImplicitAny ***/
const withImplicitAny = (foo) => foo.bar;
//foo has any implicit type
const withoutImplicitAny = (foo: { bar: string }) => foo.bar;

const withexplicitAny = (foo: any) => foo.bar;  // this one still works!
/** no-any **/ // TSLint option, fails for any any!

/*** strictFunctionTypes ***/

import {Employee, Developer} from '../03-classes/result'

/** Keep in mind that Developer is a supertype of FrontEndDeveloper**/
let developerFunction: (employee: Employee) => void
let frontEndFunction: (employee: Developer) => void
//frontEndFunction = developerFunction
//developerFunction = frontEndFunction

/*** strictPropertyInitialization ***/

class User {
    // Type error: Property 'username' has no initializer
    // and is not definitely assigned in the constructor
    name: string;
}

const user = new User()
//const username = user.name.toLowerCase() // without flag it's a runtime error!

/*** noImplicitThis ***/

let userObject = {
    name: 'user name',
    phone: '1234',
    createBusinessCard: function () {
        return () => {
            return `${this.name}, ${this.phone}`
        }
    }
}
let cardCreator = userObject.createBusinessCard()
const card = cardCreator()
console.log(card)

/** alwaysStrict **/
/** noUnusedLocals **/
/** noUnusedParameters **/
/** noImplicitReturns **/
/** one step further: no-any **/ // TSLint option, fails for any any!