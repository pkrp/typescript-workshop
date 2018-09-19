import { ConstColors, EnumColors } from './index';
import { expect } from 'chai';
import 'mocha';

describe('Enums function', () => {

    it('TEST 1 should allow to modify const properties', () => {
        const green = ConstColors.GREEN
        expect(green).to.equal(1);
        ConstColors.GREEN = 4
        const anotherGreen = ConstColors.GREEN
        expect(anotherGreen).to.equal(4)
        expect(green).not.to.equal(anotherGreen)
    });

    it('TEST 2 should properly work on enum', () => {
        const red: EnumColors = EnumColors.RED
        const green: EnumColors = EnumColors.GREEN
        const blue: EnumColors = EnumColors.BLUE
        expect(red).to.equal(0);
        expect(green).to.equal(1);
        expect(blue).to.equal(2);
    });

    it('TEST 3 should see all properties of two-parts enum', () => {
        const red: EnumColors = EnumColors.RED
        const green: EnumColors = EnumColors.GREEN
        const blue: EnumColors = EnumColors.BLUE
        const yellow: EnumColors = EnumColors.YELLOW
        const brown: EnumColors = EnumColors.BROWN
        const black: EnumColors = EnumColors.BLACK
        expect(red).to.equal(0);
        expect(green).to.equal(1);
        expect(blue).to.equal(2);
        expect(yellow).to.equal(3);
        expect(brown).to.equal(4);
        expect(black).to.equal(5);
    });
});