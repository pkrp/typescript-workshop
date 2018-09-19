import { addWithoutTypes, add, getLabel, getLocation, getLocationWithoutCountry, sum} from './index';
import { expect } from 'chai';
import 'mocha';

describe('Functions function', () => {

    it('TEST 1 should throw error when calling addWithoutTypes with wrong types', () => {
        const result = addWithoutTypes({}, false)

        expect(() => { result.toFixed() }).to.throw(TypeError)
    });

    it('TEST 2 should return wrong result when passing mixed types to addWithoutTypes', () => {
        const result = addWithoutTypes('12', 1)

        expect(result).to.equal('121')
    });

    it('TEST 3 work properly with types specified', () => {
        const result = add(12, 1)

        expect(result).to.equal(13)
        expect(result.toFixed()).to.equal('13')
    });

    it('TEST 4 should return label when given firstname and lastname', () => {
        const label = getLabel('Scott', 'Brown');

        expect(label).to.equal('Scott Brown');
    });

    it('TEST 5 should return label when given firstname and no lastname', () => {
        const label = getLabel('Scott');

        expect(label).to.equal('Scott');
    });

    it('TEST 6 should return location when given city and country', () => {
        const location = getLocation('Germany', 'Berlin');

        expect(location).to.equal('Germany, Berlin');
    });

    it('TEST 7 should return location when given city and country is undefined', () => {
        const location = getLocation(undefined, 'Warsaw');

        expect(location).to.equal('Poland, Warsaw');
    });

    it('TEST 8 should return location with default country when country is missed', () => {
        const location = getLocationWithoutCountry('Warsaw');

        expect(location).to.equal('Poland, Warsaw');
    });

    it('TEST 9 should properly count sum of parameters', () => {
        let result = sum(1, 1, 2, 2)

        expect(result).to.equal(6)
    });
});