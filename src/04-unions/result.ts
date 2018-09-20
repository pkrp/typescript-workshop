console.log('/*** ADVANCED TYPES ***/')

/*** Unions ***/
class Employee {
    constructor(readonly name) {}
    work() {}
}

class Employer {
    constructor(readonly name) {}
}

function getName(person: Employer | Employee) {
    return person.name
}

/*** Type guarding ***/

function getNamesString(names: string | string[]) {
    if (typeof names === 'string') {
        return names
    }
    else {
        return names.join(', ')
    }
}

/*** Type Aliases ***/
/** create new type using string literals **/

type EventType = 'mouseout' | 'mouseover'



export {Employer, Employee, getNamesString, getName, EventType}