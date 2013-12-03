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

/*
Build a function splitParagraph which, given a paragraph string, returns an array of paragraph fragments. 
Think of a good way to represent the fragments.
*/
function splitParagraph(text) {
function indexOrEnd(character) {
var index = text.indexOf(character);
return index == -1 ? text.length : index;
}
function takeNormal() {
var end = reduce(Math.min, text.length,
map(indexOrEnd, ["*", "{"]));
var part = text.slice(0, end);
text = text.slice(end);
return part;
}
function takeUpTo(character) {
var end = text.indexOf(character, 1);
if (end == -1)
throw new Error("Missing closing '" + character + "'");
var part = text.slice(1, end);
text = text.slice(end + 1);
return part;
}
var fragments = [];
while (text != "") {
if (text.charAt(0) == "*")
fragments.push({type: "emphasised",
content: takeUpTo("*")});
else if (text.charAt(0) == "{")
fragments.push({type: "footnote",
content: takeUpTo("}")});
else
fragments.push({type: "normal",
content: takeNormal()});
}
return fragments;
}

function extractFootnotes(paragraphs) {
var footnotes = [];
var currentNote = 0;
function replaceFootnote(fragment) {
if (fragment.type == "footnote") {
currentNote++;
footnotes.push(fragment);
fragment.number = currentNote;
return {type: "reference", number: currentNote};
}
else {
return fragment;
}
}
forEach(paragraphs, function(paragraph) {
paragraph.content = map(replaceFootnote,
paragraph.content);
});
return footnotes;
}

function renderHTML(element) {
var pieces = [];
function renderAttributes(attributes) {
var result = [];
if (attributes) {
for (var name in attributes)
result.push(" " + name + "=\"" +
escapeHTML(attributes[name]) + "\"");
}
return result.join("");
}
function render(element) {
// Text node
if (typeof element == "string") {
pieces.push(escapeHTML(element));
}
// Empty tag
else if (!element.content || element.content.length == 0) {
pieces.push("<" + element.name +
renderAttributes(element.attributes) + "/>");
}
// Tag with content
else {
pieces.push("<" + element.name +
renderAttributes(element.attributes) + ">");
forEach(element.content, render);
pieces.push("</" + element.name + ">");
}
}
render(element);
return pieces.join("");
}