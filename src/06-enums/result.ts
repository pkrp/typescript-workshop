/*** Enums ***/

/** constant **/
const ConstColors = {
    RED: 0,
    GREEN: 1,
    BLUE: 2
}

/** enum **/
/** should contain RED, GREEN and BLUE colors with values 0, 1, 2 **/
enum EnumColors {
    RED = 0,
    GREEN,
    BLUE
}

enum EnumColors_ {
    RED,
    GREEN,
    BLUE
}
/** Adding more elements to existing enum **/
/** should add YELLOW, BROWN and BLACK colors with values 3, 4, 5 **/

enum EnumColors {
    YELLOW = 3, // by default enumerated from 3
    BROWN,
    BLACK
}

enum EnumColors_ {
    YELLOW = 3, // by default enumerated from 3
    BROWN = 4,
    BLACK = 5
}

/** const enum **/
const enum ConstEnumColors {
    RED,
    GREEN,
    BLUE
}

/** take a look at the output! **/
console.log(EnumColors.GREEN)
console.log(ConstEnumColors.GREEN)

export { ConstColors, EnumColors }