function lastElement(array) {
if (array.length > 0)
return array[array.length - 1];
else
throw "Can not take the last element of an empty array.";
}
function lastElementPlusTen(array) {
return lastElement(array) + 10;
}
try {
console.log(lastElementPlusTen([]));
}
catch (error) {
console.log("Something went wrong: ", error);
}


function processThing(thing) {
if (currentThing != null)
throw "Oh no! We are already processing a thing!";
currentThing = thing;
try {
/* do complicated processing... */
print(Sasquatch);
}
catch (error) {
print("Caught: " + error.message);
}
finally {
currentThing = null;
}
}


var FoundSeven = {};
function hasSevenTruths(object) {
var counted = 0;
function count(object) {
for (var name in object) {
if (object[name] === true) {
counted++;
if (counted == 7)
throw FoundSeven;
}
else if (typeof object[name] == "object") {
count(object[name]);
}
}
}
try {
count(object);
return false;
}
catch (exception) {
if (exception != FoundSeven)
throw exception;
return true;
}
}