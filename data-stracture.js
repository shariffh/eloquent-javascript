var text = "purple haze";
console.log(text["length"]);
console.log(text.length);


var cat = {colour: "grey", name: "Spot", size: 46};
cat.size = 47;
console.log(cat.size);
delete cat.size;
console.log(cat.size);
console.log(cat);

var chineseBox = {};
chineseBox.content = chineseBox;
console.log("content" in chineseBox);
console.log("content" in chineseBox.content);

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

/*codes toUpperCase text*/
var doh = "shariff";
print(typeof doh.toUpperCase);
print(doh.toUpperCase());

var mack = [];
mack.push("Mack");
mack.push("the");
mack.push("Knife");
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

/*
A function that takes two arguments, both strings. 
It returns true when the first argument starts with the characters in 
the second argument, and false otherwise
*/
function startsWith(string, pattern) {
return string.slice(0, pattern.length) == pattern;
}
console.log(startsWith("rotation", "rot"));
console.log("Pip".charAt(250));
console.log("Nop".slice(1, 10));



function catNames(paragraph) {
var colon = paragraph.indexOf(":");
return paragraph.slice(colon + 2).split(", ");
}
console.log(catNames("born 20/09/2004 (mother Yellow Bess): " + "Doctor Hobbles the 2nd, Noog"));



function addToSet(set, values) {
for (var i = 0; i < values.length; i++)
set[values[i]] = true;
}
function removeFromSet(set, values) {
for (var i = 0; i < values.length; i++)
delete set[values[i]];
}
var livingCats = {Spot: true};
for (var mail = 0; mail < mailArchive.length; mail++) {
var paragraphs = mailArchive[mail].split("\n");
for (var paragraph = 0;
paragraph < paragraphs.length;
paragraph++) {
if (startsWith(paragraphs[paragraph], "born"))
addToSet(livingCats, catNames(paragraphs[paragraph]));



var when = new Date(2013, 11, 2);
console.log(when);

/*Date object*/
var today = new Date();
console.log("Year: ", today.getFullYear(), ", month: ",
today.getMonth(), ", day: ", today.getDate());
console.log("Hour: ", today.getHours(), ", minutes: ",
today.getMinutes(), ", seconds: ", today.getSeconds());
console.log("Day of week: ", today.getDay());
else if (startsWith(paragraphs[paragraph], "died"))
removeFromSet(livingCats, catNames(paragraphs[paragraph]));
}
}