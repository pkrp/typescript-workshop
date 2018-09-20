/*** boolean ***/
let isDone: boolean = false;

/*** number ***/
let someNumber: number = 5

someNumber = 0xc01d
someNumber = 0b0000
someNumber = 0o332


/*** string ***/
let someName: string = 'Name';                    //single or double quotes can be used

/** template string **/
let simpleTemplate: string = `Hello, ${someName}`         //backquote is used instead of quote, ${} passes expression

/*** array ***/
let simpleList: number[] = [1, 2, 3]
let simpleList_: Array<number> = [1, 2, 3]

/*** tuple ***/
let tuple: [number, string] = [1, 'apple']

tuple[0]++
tuple[1].split(', ')

let oneMoreElement = tuple[2]                   //outside of our tuple but still works, returns union of all types

/*** void ***/
let logSomething = (arg: string): void => {
    console.log('Logging something');
}

/*** any ***/
let someWeirdVariable: any = 'string'
someWeirdVariable = undefined
someWeirdVariable = 123

/*** never ***/
function neverEndingLoop(): never {
    while (true) {}
}

/*** enum ***/
enum Color {Red, Green, Blue}
let ourColor: Color = Color.Green;
