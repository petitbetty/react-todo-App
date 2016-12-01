//This is a demo of how spread works in ES6

//This ia a simple add function
function add(a, b) {
	return a + b ;
}

console.log(add(3,9));

var myArray = [8, 9];

//How do we add the numbers in myArray using the function add()?
//We could do , but then the arguments are too nested

console.log(add(myArray[0], myArray[1]));

//We could use the spread operator to get is done.

console.log(add(...myArray));

//We can do more with the spread operator

var groupA = ['John', 'Tom', 'Jake'];
var groupB = ['Sophie', 'Jen'];
var final = [5];

console.log(final);



//Let say we want the array final to contain the arrays groupA and groupB
//if you use: final =[5, groupA]; you will have an array inside another. bt what we want is combine the content.
//Using the spread operator we have:

final = [5, ...groupA];
console.log(final) ;

final = [...groupB, 5, ...groupA];
console.log(final) ;

var person = ["Joe", 30];
var personTwo = ["Tina", 15];

function greeting(name, age) {
 	return "Hello " + name +", you are "+ age; 

}

console.log(greeting(...person));
console.log(greeting(...personTwo));

var names = ['Mike', 'Jude', 'Stef'];
var final = ['Betty', ...names];

final.forEach(function(name) {
	console.log('Hi ' + name);
});


