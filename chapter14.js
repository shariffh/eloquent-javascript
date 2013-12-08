function makeHttpObject() {
try {return new XMLHttpRequest();}
catch (error) {}
try {return new ActiveXObject("Msxml2.XMLHTTP");}
catch (error) {}
try {return new ActiveXObject("Microsoft.XMLHTTP");}
catch (error) {}
throw new Error("Could not create HTTP request object.");
}
console.log(typeof(makeHttpObject()));


var request = makeHttpObject();
request.open("GET", "files/fruit.txt", false);
request.send(null);
console.log(request.responseText);

console.log(request.getAllResponseHeaders());
console.log(request.getResponseHeader("Last-Modified"));

console.log(request.status);
console.log(request.statusText);

request.open("GET", "files/fruit.xml", true);
request.send(null);
console.log(request.responseText);

console.log(request.responseText);

request.open("GET", "files/fruit.xml", true);
request.send(null);
request.onreadystatechange = function() {
if (request.readyState == 4)
console.log(request.responseText.length);
};

var catalog = request.responseXML.documentElement;
console.log(catalog.childNodes.length);

request.open("GET", "files/fruit.json", true);
request.send(null);
request.onreadystatechange = function() {
if (request.readyState == 4)
console.log(request.responseText);
};

function evalJSON(json) {
return eval("(" + json + ")");
}
var fruit = evalJSON(request.responseText);
console.log(fruit);