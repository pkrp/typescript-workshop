console.log('/*** ADVANCED TYPES ***/')

/*** Unions ***/

/** union of classes **/

class Employee {
    constructor(readonly name) {}
    work() {}
}

class Employer {
    constructor(readonly name) {}
}

function getName(person) {
    return person.name
}

/*** Type guarding ***/


function getNamesString(names) {
    return names.join(', ')
}

/*** Type Aliases ***/
/** create new type using string literals **/

type EventType = {}



export {Employer, Employee, getNamesString, getName, EventType}