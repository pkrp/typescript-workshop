interface Employee {
    name,                                   /** name should be readonly **/
    work()
}

class Developer implements Employee {
    private type;                           /** create getter and setter for type **/

    constructor(name, type) {
        this.type = type;
    }

    work() {
        return 'writing code'
    }

    projectName;                            /** don't make it public! **/
}

class FrontEndDeveloper {                   /** extend Developer class **/

    constructor(name, projectName) {        /** call constructor of super class with FrontEnd type **/
        this.projectName = projectName
    }

    work() {

    }

    debugJS() {
        return 'debugging javascript, looking for errors...'
    }
}

class Manager {
}

export {Employee, Manager, Developer, FrontEndDeveloper}
