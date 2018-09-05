/*** Declaration files ***/
/**
 * we are going to download and consume declaration file for lodash library
 **/

import * as _ from "lodash";
let simpleArray = [1, 2, 3];

const reversedArray = _.reverse(simpleArray);
console.log(reversedArray)

let simpleBoolean = false
const reversedBoolean = _.reverse(simpleBoolean); //shouldn't pass!
console.log(reversedBoolean)

/**
 * let's try it as it is
 *
 * ...right, this is obviously a runtime error
 * how about lodash typings? try to install lodash types and try to compile our file
 *
 * much better! now we have proper compile time error, what is more - we can easily check what input arguments are expected
 */
