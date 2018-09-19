/*** Declaration files ***/
import * as _ from 'lodash';
let simpleArray: number[] = [1, 2, 3];

/** this example looks pretty nice */
const reversedArray = _.reverse(simpleArray);
console.log(reversedArray)


/** but this one is obviously wrong! **/
let someBoolean = false
const reversedBoolean = _.reverse(someBoolean);
console.log(reversedBoolean)

/**
 * we are going to download and consume declaration file for lodash library so that wrong code above WON'T compile
 **/