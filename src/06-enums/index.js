/*** Enums ***/

/** constant **/
const ConstColors = {
    RED: 0,
    GREEN: 1,
    BLUE: 2
}

/** enum **/
/** should contain RED, GREEN and BLUE colors with values 0, 1, 2 **/
EnumColors = {
}

/** Adding more elements to existing enum **/
/** should add YELLOW, BROWN and BLACK colors with values 3, 4, 5 **/

EnumColors = {
}

/** const enum **/
ConstEnumColors = {
}

/** take a look at the output! **/
console.log(EnumColors.GREEN)
console.log(ConstEnumColors.GREEN)

export { ConstColors, EnumColors }