// https://leetcode.com/problems/add-two-promises

/**
 * In this problem, we have to implement the function addTwoPromises which takes two promises as arguments and 
 * returns a promise that resolves to the sum of the values of the two promises.
 * 
 * There are three ways to solve this problem:
 * 1. Using the async/await syntax
 * 2. Using the Promise.all method
 * 3. Using promise chaining
 * 
 * We'll use both methods to solve this problem.
 * 
 * Lets move forward with the async/await syntax.
 */
var addTwoPromises_UsingAwait = async function(promise1, promise2) {
    const var1 = await promise1;
    const var2 = await promise2;

    return var1 + var2;
};

/** Using Promise all method **/
var addTwoPromises_usingPromiseAll = async function(promise1, promise2) {
    var [var1, var2] = await Promise.all([promise1, promise2]);
    return var1 + var2;
}

/** Using Promise chaining approach **/
var addTwoPromises_usingPromiseChaining = async function(promise1, promise2) {
    return await new Promise((resolve) => 
        promise1.then(val1 => promise2.then(val2 => resolve(val1 + val2)))
    );
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then(console.log);