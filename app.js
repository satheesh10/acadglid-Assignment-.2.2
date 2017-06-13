
/**
 *
 * @returns {Function}
 */
function counter() {

    var count = 0;
    return function () {
        //increment count value
        return ++count;
    }
}

var iterate = counter();
console.log(iterate());
console.log(iterate());
console.log(iterate());
console.log(iterate());
console.log(iterate());

/**
 *
 * @param calFunction
 * @returns {*}
 */
function outer(calFunction) { //pass function as parameter
    return calFunction();
}
/**
 *
 * @returns {string}
 */
function inner() {
    return "Hello World From Inner";
}

console.log(outer(inner));