/*** boolean ***/
let isDone = false;

isDone = 4                          //shouldn't pass!


/*** number ***/
let someNumber = 5

someNumber = 'string!'              //shouldn't pass!
someNumber = 0xc01d                 //okay, hex literal
someNumber = 0b0000                 //okay, binary literal
someNumber = 0o332                  //okay, octal literal


/*** string ***/
let someName = 'Name';              //single or double quotes can be used

someName = 123                      //shouldn't pass!

/** template string **/
let simpleTemplate = 'Hello, ' + someName         //backquote is used instead of quote, ${} passes expression
let templateWithExpression = 'Hello, ' + (1 + 2)


/*** array ***/
let simpleList = [1, 2, 3]
let genericArrayTypeList = [1, 2, 3]

simpleList[1] = '3'                 //shouldn't pass!
genericArrayTypeList[1] = false     //shouldn't pass!


/*** tuple ***/
let tuple = [1, 'apple']

tuple[0]++                            //okay, operation on number
tuple[1].split(', ')                  //okay, operation on string

tuple = ['orange', 2]                 //shouldn't pass!
tuple[0].split(', ')                  //shouldn't pass!
tuple[0]++                            //shouldn't pass!
tuple[2]                              //works, returns union of number and string
tuple[2].toString()                   //works, toString operation is available on both string and number
tuple[2]++                            //does not work, string does not have this operation

/*** void ***/
function logSomething() {
    console.log('Logging something');
}

/*** any ***/
let someWeirdVariable = 'string'
someWeirdVariable = undefined
someWeirdVariable = 123

/*** never ***/
function neverEndingLoop() {
    while (true) {
    }
}

function error(message) {
    throw new Error(message);
}

/*** enum ***/

let Color = {Red: 0, Green: 1, Blue: 2}
let properColor = Color.Green;               //okay
let wrongColor = Color.White                 //shouldn't pass!