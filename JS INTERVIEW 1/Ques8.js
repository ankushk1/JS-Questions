//async ensures that the function returns a promise, and wraps non-promises in it. 
// await works only inside async functions
//An async function is a function which knows how to expect the possibility of the await keyword being used to invoke asynchronous code.
// await is used to to pause your code on that line until the promise fulfills, then return the resulting value.
// In the meantime, other code that may be waiting for a chance to execute gets to do so.


async function hello() {
    
     return "Hello"
     };


console.log(hello());