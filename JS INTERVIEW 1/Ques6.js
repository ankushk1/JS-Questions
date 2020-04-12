//When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function.
//This prototype property is an object which has a constructor property by default. 
//The constructor property points back to the function on which prototype object is a property.
//We can access the function’s prototype property using functionName.prototype.

//The prototype object has a constructor property which points back to the Human constructor function.

function Human(firstName, lastName) {
	this.firstName = firstName,
		this.lastName = lastName,
		this.fullName = function () {
			return this.firstName + " " + this.lastName;
		}
}

var person1 = new Human("abc", "xyz");

console.log(person1) // output- abc xyz