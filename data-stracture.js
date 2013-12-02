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
show(startsWith("rotation", "rot"));