//Promises are used to handle asynchronous operations in JavaScript. 
//They are easy to manage when dealing with multiple asynchronous operations.
//They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

var promise = new Promise(function (resolve, reject) {
    const x = "apple";
    const y = "apple"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
then(function () {
    console.log('they are same');
}).
catch(function () {
    console.log('not same');
});

//then() is invoked when a promise is either resolved or rejected.
//catch() is invoked when a promise is either rejected or some error has occured in execution.