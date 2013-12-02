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


function catRecord(name, birthdate, mother) {
return {name: name, birth: birthdate, mother: mother};
}
function addCats(set, names, birthdate, mother) {
for (var i = 0; i < names.length; i++)
set[names[i]] = catRecord(names[i], birthdate, mother);
}
function deadCats(set, names, deathdate) {
for (var i = 0; i < names.length; i++)
set[names[i]].death = deathdate;
}
function extractMother(paragraph) {
var start = paragraph.indexOf("(mother ") + "(mother ".length;
var end = paragraph.indexOf(")");
return paragraph.slice(start, end);
}
console.log(extractMother("born 15/11/2003 (mother Spot): White Fang"));


function findCats() {
var mailArchive = retrieveMails();
var cats = {"Spot": catRecord("Spot", new Date(1997, 2, 5),
"unknown")};
function handleParagraph(paragraph) {
if (startsWith(paragraph, "born"))
addCats(cats, catNames(paragraph), extractDate(paragraph),
extractMother(paragraph));
else if (startsWith(paragraph, "died"))
deadCats(cats, catNames(paragraph), extractDate(paragraph));
}
for (var mail = 0; mail < mailArchive.length; mail++) {
var paragraphs = mailArchive[mail].split("\n");
for (var i = 0; i < paragraphs.length; i++)
handleParagraph(paragraphs[i]);
}
return cats;
}
var catData = findCats();

function formatDate(date) {
return date.getDate() + "/" + (date.getMonth() + 1) +
"/" + date.getFullYear();
}
function catInfo(data, name) {
if (!(name in data))
return "No cat by the name of " + name + " is known.";
var cat = data[name];
var message = name + ", born " + formatDate(cat.birth) +
" from mother " + cat.mother;
if ("death" in cat)
message += ", died " + formatDate(cat.death);
return message + ".";
}
console.log(catInfo(catData, "Fat Igor"));

/*
The formatDate function used by catInfo does not add a zero before the month 
and the day part when these are only one digit long. Write a new version that does this.
*/

function formatDate(date) {
function pad(number) {
if (number < 10)
return "0" + number;
else
return number;
}
return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) +
"/" + date.getFullYear();
}
console.log(formatDate(new Date(2000, 0, 1)));