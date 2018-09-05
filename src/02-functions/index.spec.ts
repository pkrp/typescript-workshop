import {getLabel, getLocation} from './index';
import { expect } from 'chai';
import 'mocha';

describe('Functions function', () => {

    it('TEST 1 should return label when given firstname and lastname', () => {
        console.log("TEST 1")
        const label = getLabel('Scott', 'Brown');
        expect(label).to.equal('Scott Brown');
    });

    it('TEST 2 should return label when given firstname and no lastname', () => {
        console.log("TEST 1")
        const label = getLabel('Scott');
        expect(label).to.equal('Scott');
    });

    it('TEST 3 should return location when given city and country', () => {
        console.log("TEST 1")
        const location = getLocation('Germany', 'Berlin');
        expect(location).to.equal('Germany, Berlin');
    });

    it('TEST 4 should return location when given city and country is undefined', () => {
        console.log("TEST 4")
        const location = getLocation(undefined, 'Warsaw');
        expect(location).to.equal('Poland, Warsaw');
    });
});