/*** Unions ***/

function printNames(names) {
    if (typeof names === 'string') {
        console.log(names)
    }
    else {
        console.log(names.join(', '))
    }
}

printNames('Scott')             // nice!
printNames(['Scott', 'John'])   // this one works as well
printNames(true)                // oops, we assumed that any type can be passed into function, let's create an union

import {Employee} from '../03-classes/result'

interface Employer {
    name
}

function printName(person) {
    console.log(person.name)
    person.work()                   // should throw an error! let's use an Employee and Employer union as a parameter
}

/*** Type Aliases ***/

function on(event, callback: () => null) {}

on('mouseover', () => console.log('Mouseover triggered!'))
on('mouseout', () => console.log('Mouseout triggered!'))
on('click', () => console.log('I shouldn\'t be called'))
on(true, () => console.log('I shouldn\'t be called'))

/*** again, we would like to avoid any type - let's define a new type which will describe two possible event types:
 * mouseout and mouseover, then update function definition
 * ***/

