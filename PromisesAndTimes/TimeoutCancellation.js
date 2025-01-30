// https://leetcode.com/problems/timeout-cancellation/

let fn = (a, b) => a + b;
let args = [1, 2];
let t = 1000;
let cancelTimeout = 2000;

/*
    There are multiple ways to tackle this problem. Lets take a look at each one them one by one.

    Method 1: Using the setTimeout function
        We will use setTimeout function to create a timer that will call the function fn after t milliseconds.
        We will take the timer id returned by the setTimeout function and store it in a variable.
        Then we will return a function that will clear the timer using the clearTimeout function.

        If the timer is cleared before it is executed, the function fn will not be called.
        Else, the function fn will be called after t milliseconds.
        ClearTimeout function will be called after cancelTimeout milliseconds to cancel the timer.
        If the fn is already called, then the clearTimeout function will not have any effect. Although, clearTimeout function will not throw any error in this case.
*/

var cancellable = function(fn, args, t) {
    console.log("Cancel function using SetTimeout and clearTimeout methods");
    let timer = setTimeout(() => console.log(fn(...args)), t)

    return () => {
        console.log("Cancelled");
        clearTimeout(timer);
    }
};


let cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeout);

/**
 * Method 2: Using a boolean flag
    * We will create a boolean flag called cancelled and set it to false.
    * We will use setTimeout function to create a timer that will call the function fn after t milliseconds.
    * We will return a function that will set the cancelled flag to true.
    * We will check the value of the cancelled flag before calling the function fn.
    * If the cancelled flag is true, we will not call the function fn.
    * Else, we will call the function fn after t milliseconds.
    * We will set the cancelled flag to true after cancelTimeout milliseconds to cancel the timer.
    * If the fn is already called, then the cancelled flag will not have any effect.
    * Although, the cancelled flag will not throw any error in this case.
 */

let cancellable_UsingBooleanFlag = function(fn, args, t) {
    console.log("Cancel function using Boolean flag");
    let cancelled = false;

    setTimeout(() => {
        if (!cancelled) {
            console.log(fn(...args));
        }
    }, t);

    return () => {
        console.log("Cancelled");
        cancelled = true;
    }
}

let cancelFn_UsingBooleanFlag = cancellable_UsingBooleanFlag(fn, args, t);
setTimeout(cancelFn_UsingBooleanFlag, cancelTimeout);
