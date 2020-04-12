//const is a defining way in which the identifier won’t be reassigned.
//They have acess within scope.

//let is a way of defining that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.
// It also states that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

//var is now the weakest defining available when you define a variable in JavaScript.
//The variable can be reassigned, and the variable can be used for an entire function.


if (true) {
  var a = 'a';
  let b = 'b';
  const c = 'c';

  console.log(a); // a
  console.log(a); // b
  console.log(c); // c
}

console.log(a); // a , can be accessed 
console.log(b); // not defined  , can't be accessed
console.log(c); // not defined  , can't be accessed