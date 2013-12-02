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