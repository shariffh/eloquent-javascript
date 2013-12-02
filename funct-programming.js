function forEach(array, action) {
for (var i = 0; i < array.length; i++)
action(array[i]);
}
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
function sum(numbers) {
var total = 0;
forEach(numbers, function (number) {
total += number;
});
return total;
}
console.log(sum([1, 10, 100]));

function reduce(combine, base, array) {
forEach(array, function (element) {
base = combine(base, element);
});
return base;
}
function add(a, b) {
return a + b;
}
function sum(numbers) {
return reduce(add, 0, numbers);
}
function countZeroes(array) {
function counter(total, element) {
return total + (element === 0 ? 1 : 0);
}
return reduce(counter, 0, array);
}

/*EX 6.2
Write a function processParagraph that, when given a paragraph string as its argument, 
checks whether this paragraph is a header. If it is, it strips off the '%' characters and counts their number. 
Then, it returns an object with two properties, content, which contains the text inside the paragraph, and type,
 which contains the tag that this paragraph must be wrapped in, "p" for regular paragraphs, "h1" for headers
  with one '%', and "hX" for headers with X '%' characters.
*/
function processParagraph(paragraph) {
var header = 0;
while (paragraph.charAt(0) == "%") {
paragraph = paragraph.slice(1);
header++;
}
return {type: (header == 0 ? "p" : "h" + header),
content: paragraph};
}
console.log(processParagraph(paragraphs[0]));
var paragraphs = map(processParagraph, recluseFile().split("\n\n"));