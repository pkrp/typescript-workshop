    interface Employee {
        readonly name: string,              /** name should be readonly **/

        work(): string
    }

    class Developer implements Employee {
        private _type: string;/** create getter and setter for type **/

        constructor(readonly name, type?: string) {
            this._type = type;
        }

        work() {
            return 'writing code'
        }

        protected projectName: string;      /** don't make it public! **/

        get type() {
            return this._type
        }

        set type(type) {
            this._type = type
        }
    }

    class Manager implements Employee {
        constructor(readonly name) {
        }

        work() {
            return 'drinking coffee'
        }
    }

    class FrontEndDeveloper extends Developer {

        constructor(name: string, projectName) {    /** call constructor of super class with proper type **/
            super(name, 'FrontEnd')
            this.projectName = projectName
        }

        work() {
            return `writing javascript in ${this.projectName}... ${this.debugJS()}`
        }

        private debugJS() {
            return 'debugging javascript, looking for errors...'
        }
    }


    export {Employee, Manager, Developer, FrontEndDeveloper}
