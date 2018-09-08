function add(x, y) {
    return x + y
}

console.log(add('12', 1))

// take a look at the output - let's try to rewrite it to TypeScript avoiding such mistakes

function getLabel(firstname, lastname) {
    return lastname ? firstname + ' ' + lastname : firstname
}

/*** Typed parameters ***/
getLabel('Scott', 'Brown') // TEST 1

// how can we avoid these situations?
getLabel(1, 'Smith')
getLabel('Scott', 'Brown', 'Extra argument')

/*** Optional parameters ***/
// OK, now how can we allow this situation?
getLabel('Scott') // TEST 2

// remember that optional parameters must follow required parameters!

/*** Default parameters ***/
// here we have the similar case but we would like to have 'Poland' as a default parameter in case of leaving it empty
function getLocation(country, city) {
    return country + ', ' + city
}

let location = getLocation('Germany', 'Berlin') // TEST 3
console.log(location) // expected output: 'Germany, Berlin'

location = getLocation(undefined, 'Warsaw') // TEST 4
console.log(location) // expected output: 'Poland, Warsaw'

// and what can we do in order to call getLocation this way?
location = getLocation('Warsaw')
console.log(location) // expected output: 'Poland, Warsaw'

/*** Rest parameters ***/
function sum(x, y) {        //something is missed here!
    return x + y + rest.reduce((x, y) => x + y)
}
let computedSum = sum(1, 1, 2, 2)
console.log(computedSum)

// as above, let's avoid these mistakes
computedSum = sum(1, 1, '12', 2)
console.log(computedSum)

export {getLabel, getLocation}