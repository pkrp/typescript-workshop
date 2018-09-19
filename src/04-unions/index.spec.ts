import { Employee, Employer, getName, getNamesString, EventType } from './index';
import { expect } from 'chai';
import 'mocha';

describe('Enums function', () => {

    it('TEST 1 should get name when given Employee', () => {
        const employee: Employee = new Employee('Scott')
        const employeeName = getName(employee);

        expect(employeeName).to.equal('Scott');
    });

    it('TEST 2 should get name when given Employer', () => {
        const employer: Employer = new Employer('John')
        const employerName = getName(employer);

        expect(employerName).to.equal('John');
    });

    it('TEST 3 should return names string when given single name', () => {
        const names = getNamesString('Scott');

        expect(names).to.equal('Scott');
    });

    it('TEST 4 should return names string when given multiple names', () => {
        const names = getNamesString(['Scott', 'John', 'Jerry']);

        expect(names).to.equal('Scott, John, Jerry');
    });

    it('TEST 5 should work on string literals union', () => {
        const firstEvent: EventType = 'mouseout'
        const secondEvent: EventType = 'mouseover'

        expect(firstEvent.length).to.equal(8)
        expect(secondEvent.length).to.equal(9)
        expect(firstEvent.toUpperCase()).to.equal('MOUSEOUT')
        expect(secondEvent.toUpperCase()).to.equal('MOUSEOVER')
    });
});