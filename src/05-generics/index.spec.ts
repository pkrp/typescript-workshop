import { Employee, Developer, FrontEndDeveloper, Queue, EmployeeQueue, GenericQueue, GenericEmployeeQueue } from './index';
import { expect } from 'chai';
import 'mocha';

describe('Generics function', () => {

    it('TEST 1 should allow to push any object to basic queue', () => {
        const developer: Employee = new Developer('John')
        const frontEnd: Employee = new FrontEndDeveloper('Mary')

        const queue = new Queue();
        queue.push(developer);
        queue.push(frontEnd);
        queue.push(0);
        queue.push('employee');

        expect(queue.pop()).to.equal(developer)
        expect(queue.pop()).to.equal(frontEnd)
        expect(queue.pop()).to.equal(0)
        expect(queue.pop()).to.equal('employee')
    });

    it('TEST 2 should throw a runtime error when accessing non existing property', () => {
        const developer: Employee = new Developer('John')

        const queue = new Queue();
        queue.push(developer);
        queue.push(0);

        expect(queue.pop().name).to.equal(developer.name)
        expect(() => { queue.pop().name.length }).to.throw(TypeError)
    });

    it('TEST 3 should work properly with employee queue', () => {
        const developer: Employee = new Developer('John')
        const frontEnd: Employee = new FrontEndDeveloper('Mary')

        const queue = new EmployeeQueue();
        queue.push(developer);
        queue.push(frontEnd);

        expect(queue.pop().name).to.equal(developer.name)
        expect(queue.pop().name.length).to.equal(frontEnd.name.length)
    });

    it('TEST 4 should work properly with generic queue', () => {
        const developer: Employee = new Developer('John')
        const frontEnd: Employee = new FrontEndDeveloper('Mary')

        const genericQueue = new GenericQueue<Employee>();
        genericQueue.push(developer);
        genericQueue.push(frontEnd);

        expect(genericQueue.pop().name).to.equal(developer.name)
        expect(genericQueue.pop().name.length).to.equal(frontEnd.name.length)
    });

    it('TEST 5 should work properly with generic names queue with extended type', () => {
        const developer: Employee = new Developer('John')
        const frontEnd: Employee = new FrontEndDeveloper('Mary')

        const genericQueue = new GenericEmployeeQueue<Employee>();
        genericQueue.push(developer);
        genericQueue.push(frontEnd);

        expect(genericQueue.pop()).to.equal(developer.name)
        expect(genericQueue.pop()).to.equal(frontEnd.name)
    });
});