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