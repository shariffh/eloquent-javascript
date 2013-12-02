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