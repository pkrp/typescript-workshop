/*** boolean ***/
let isDone = false;

/*** number ***/
let someNumber = 5

someNumber = 0xc01d
someNumber = 0b0000
someNumber = 0o332

/*** string ***/
let someName = 'Name'                           //single or double quotes can be used

/** template string **/
let simpleTemplate = 'Hello, ' + someName       //just simplify this one

/*** array ***/
let simpleList = [1, 2, 3]

/*** tuple ***/
let tuple = [1, 'apple']

tuple[0]++
tuple[1].split(', ')

let oneMoreElement = tuple[2]                   //outside of our tuple but still works, returns union of all types

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
    while (true) {}
}

/*** enum ***/
let Color = {Red: 0, Green: 1, Blue: 2}
let ourColor = Color.Green