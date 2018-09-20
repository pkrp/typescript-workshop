/*** Namespaces ***/
/*
namespace SomeNamespace {
    export interface SomeInterface {}       // this one put in first file
    export class SomeClass {}               // this one put in first file
    class PrivateClass {}                   // this one put in first file
    export class TotallyDifferentClass {}   // this one put in second file
}

const someClass: SomeNamespace.SomeClass = new SomeNamespace.SomeClass()
const totallyDifferentClass: SomeNamespace.TotallyDifferentClass = new SomeNamespace.TotallyDifferentClass()
*/
/** try to run this program and take a look at generated files! **/