/** basic function without types **/

function addWithoutTypes(x, y) {
    return x + y
}


/** function with types **/

function add(x: number, y: number): number {
    return x + y
}


/** optional parameters **/

function getLabel(firstname: string, lastname?: string) {
    return lastname ? `${firstname} ${lastname}` : firstname
}


/** default parameter **/

function getLocation (country: string = 'Poland', city: string) {
    return country + ', ' + city
}


/** default parameters which can be missed **/

function getLocationWithoutCountry (city: string, country = 'Poland') {
    return country + ', ' + city
}


/*** Rest parameters ***/

function sum(x: number, y: number, ...rest: number[]) {
    return x + y + rest.reduce((x, y) => x + y)
}



export {addWithoutTypes, add, getLabel, getLocation, getLocationWithoutCountry, sum}
