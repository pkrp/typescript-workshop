import { SomeClassExample, ClassWithDecoratorExample, MethodDecoratorExample, AccessorDecoratorExample } from './index';
import { expect } from 'chai';
import 'mocha';

describe('Decorators function', () => {

    it('TEST 1 should call original class constructor', () => {
        const someClass =  new SomeClassExample('Scott')

        expect(someClass.name).to.equal('Scott');
    });

    it('TEST 2 should override constructor of class with decorator', () => {
        const someClass = new ClassWithDecoratorExample('Scott')

        expect(someClass.name).to.equal('Overriden name!');
    });

    it('TEST 3 should override method when decorated', () => {
        const someClass = new MethodDecoratorExample();

        expect(someClass.getState()).to.equal('initial state of function');
        expect(someClass.getDecoratedState()).to.equal('logging overridden!');
    });

    it('TEST 4 should override getter when decorated', () => {
        const accessor = new AccessorDecoratorExample(2, 2);

        expect(accessor.x).to.equal(2);
        expect(accessor.y).to.equal(4);
    });
});