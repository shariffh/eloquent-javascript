function add(a, b) {
return a + b;
}
console.log(add(2, 2));

function power(base, exponent) {
var result = 1;
for (var count = 0; count < exponent; count++)
result *= base;
return result;
}
show(power(2, 10));

/*
A function which returns the absolute value of the number it is given as its argument. 
The absolute value of a negative number is the positive version of that same number, and the absolute
 value of a positive number (or zero) is that number itself.
 */
function absolute(number) {
if (number < 0)
return -number;
else
return number;
}
console.log(absolute(-36));

var variable = "top-level";
function printVariable() {
print("inside printVariable, the variable holds '" +
variable + "'.");
}
function test() {
var variable = "local";
print("inside test, the variable holds '" + variable + "'.");
printVariable();
}
test();

function makeAddFunction(amount) {
function add(number) {
return number + amount;
}
return add;
}
var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);
show(addTwo(1) + addFive(1));

function chicken() {
return egg();
}
function egg() {
return chicken();
}
print(chicken() + " came first.");

/*a function findSequence*/
function findSequence(goal) {
function find(start, history) {
if (start == goal)
return history;
else if (start > goal)
return null;
else
return find(start + 5, "(" + history + " + 5)") ||
find(start * 3, "(" + history + " * 3)");
}
return find(1, "1");
}
console.log(findSequence(24));

function greaterThan(x) {
return function(y) {
return y > x;
};
}
var greaterThanTen = greaterThan(10);
console.log(greaterThanTen(9));

function range(upto) {
var result = [];
for (var i = 0; i <= upto; i++)
result[i] = i;
return result;
}
console.log(range(4));
