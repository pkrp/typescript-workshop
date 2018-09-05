import {Employee, Developer, FrontEndDeveloper} from '../03-classes/result'

//this is our basic developers' queue implementation:
class Queue {
    private data = [];
    push = (item) => this.data.push(item);
    pop = () => this.data.shift();
}

// and some developer who will wait there
const developer: Employee = new Developer('John')
const frontEnd: Employee = new FrontEndDeveloper('Mary')

const queue = new Queue();
queue.push(developer);
queue.push(0);
queue.push('employee');

console.log(queue.pop().name) // runtime error! we have just assumed that object in our queue always has a name

// we could obviously create an employee specific queue like this one:

class EmployeesQueue {
    private data = [];
    push = (item: Employee) => this.data.push(item);
    pop = (): Employee => this.data.shift();
}

const employeesQueue = new EmployeesQueue();

employeesQueue.push(developer);     // it's okay as before
//employeesQueue.push(0);           // throws an error just like we wish
//employeesQueue.push('employee')   // throws an error just like we wish

// let's try to create a generic Queue, just adjust class below:
class GenericQueue {
    private data = [];
    push = item => this.data.push(item);
    pop = () => this.data.shift();
}

const genericQueue = new GenericQueue();
genericQueue.push(developer);
genericQueue.push(frontEnd);
genericQueue.push("1");    // should throw an error!

// we could keep in queue employees names only..
// but again, it won't compile - we need to ensure that name property exists on our generic type
// just adjust class below:
class GenericNamesQueue {
    private data = [];
    push = (item) => this.data.push(item.name);
    pop = () => this.data.shift();
}