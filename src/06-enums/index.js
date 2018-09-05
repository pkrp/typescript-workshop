// we would like to have some constant containing red, green and blue colors
const ConstColors = {
    Red: 1,
    Green: 2,
    Blue: 3
}

// sounds nice! but...

ConstColors.Red = 4

// our constant is not quite constant, how can we avoid such situation?
// 1. let's try enums! is expression above throwing an error now?

EnumColors = {}

// 2. can we add another colors Yellow, Brown and Grey without changing existing enum?

EnumColors = {}

// 3. it looks like our enum is a real constant now, so what is the difference between 'enum' and 'const enum'?
//    let's create const enum which is a copy of our enum colors

ConstEnumColors = {}
console.log(EnumColors.Red)
console.log(ConstEnumColors.Red)

// now compile the code and take a look at console logs in generated js files
// the latter results in simple replacement (constant injection) while the first one is computed during runtime



