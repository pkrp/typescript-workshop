/** basic function without types **/

function addWithoutTypes(x, y) {
    return x + y
}


/** function with types **/

function add(x, y) {
    return x + y
}


/** optional parameters **/

function getLabel(firstname, lastname) {
    return lastname ? `${firstname} ${lastname}` : firstname
}


/** default parameters **/

function getLocation (country, city) {
    return country + ', ' + city
}


/** default parameters which can be missed **/

function getLocationWithoutCountry () {
    return country + ', ' + city
}


/*** Rest parameters ***/

function sum(x, y, rest) {
    return x + y + rest.reduce((x, y) => x + y)
}



export {addWithoutTypes, add, getLabel, getLocation, getLocationWithoutCountry, sum}
