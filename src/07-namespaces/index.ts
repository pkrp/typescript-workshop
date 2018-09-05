namespace SomeNamespace {
    export interface SomeInterface {}
    export class SomeClass {}
    class PrivateClass {}
    export class TotallyDifferentClass {}
}

const class_: SomeNamespace.SomeClass = new SomeNamespace.SomeClass()
//const privateClass: SomeNamespace.PrivateClass = new SomeNamespace.PrivateClass()   //oops, we cannot access it!

//let's split SomeNamespace into two separate files: first one with TotallyDifferentClass file and the second one with the rest
//now reference it so that we can create both classes here:

const someClass: SomeNamespace.SomeClass = new SomeNamespace.SomeClass()
const totallyDifferentClass: SomeNamespace.TotallyDifferentClass = new SomeNamespace.TotallyDifferentClass()
//try to run this program
//take a look at generated files!