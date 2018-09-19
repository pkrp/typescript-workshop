import {Employee, Manager, FrontEndDeveloper, Developer} from './index';
import { expect } from 'chai';
import 'mocha';

describe('Classes function', () => {

    it('TEST 1 should create Developer object based on Employee interface', () => {
        const developer: Employee = new Developer('Scott', 'front')

        expect(developer.name).to.equal('Scott');
        expect(developer.work()).to.equal('writing code')
    });

    it('TEST 2 should get and set Developer type', () => {
        const someDeveloper: Developer = new Developer('John', 'front')

        expect(someDeveloper.type).to.equal('front');
        someDeveloper.type = 'back'
        expect(someDeveloper.type).to.equal('back');
    });

    it('TEST 3 should create Developer without type', () => {
        const someDeveloper: Developer = new Developer('John')

        expect(someDeveloper.name).to.equal('John');
        expect(someDeveloper.type).to.equal(undefined);
        someDeveloper.type = 'front'
        expect(someDeveloper.type).to.equal('front');
    });

    it('TEST 4 should create object based on Developer super class', () => {
        const frontEnd: Developer = new FrontEndDeveloper('John', 'My Project')

        expect(frontEnd.name).to.equal('John');
        expect(frontEnd.type).to.equal('FrontEnd');
    });

    it('TEST 5 should override Developer work class when is FrontEnd', () => {
        const frontEnd: Developer = new FrontEndDeveloper('John', 'My Project')

        expect(frontEnd.work()).to.equal('writing javascript in My Project... debugging javascript, looking for errors...');
    });

    it('TEST 6 should create Manager object based on Employee interface', () => {
        const manager: Employee = new Manager('John')

        expect(manager.name).to.equal('John');
        expect(manager.work()).to.equal('drinking coffee')
    });
});