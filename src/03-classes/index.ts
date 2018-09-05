{interface Employee {
    work(): void
}

class Developer implements Employee {
    private _type;

    constructor(name, type) {
        this._type = type;
    }

    work() {
        console.log('writing code')
    }

    privateKey: string

    projectName: string;
}

class FrontEndDeveloper extends Developer {

    constructor(name: string, projectName) {
        super(name, 'FrontEnd')
    }

    debugJS() {
        console.log(`debugging javascript, looking for errors... ${this.privateKey}`)
        // oops, we shouldn't see private key! let's fix it ASAP and remove this weird expression in string!`)
    }
}

//let's create our employee, how to properly set projectName on Super Class without passing it with constructor?
const frontEnd: Employee = new FrontEndDeveloper('John', 'Project')

console.log(frontEnd.name) // it would be nice to have an access to employee name
frontEnd.name = 'name' // oops! but we shouldn't be able to update it! fix it and remove this line!

frontEnd.work() // 'writing code'? let's specify how FrontEnd works, overwrite 'work' function (use projectName variable)
                // and add proper function call so that it outputs:
                // 'writing javascript in Project'
                // 'debugging javascript, looking for errors...'

const developer: Developer = new Developer('John') // we would like to assign type property later
developer.type = 'BackEnd'      // how can we access it without making it public?
developer.type = 2              // this is weird, shouldn't occur!

// let's create Manager class as well (should it implement interface or extend a class?)
// and implement another work function there

export {Employee, Developer}}