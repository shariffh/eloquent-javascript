

console.log(document.body);
console.log(document.body.parentNode);

console.log(document.body.childNodes.length);
console.log(document.documentElement.firstChild);
console.log(document.documentElement.lastChild);

console.log(document.body.previousSibling);
console.log(document.body.nextSibling);

function isTextNode(node) {
return node.nodeType == 3;
}
console.log(isTextNode(document.body));
console.log(isTextNode(document.body.firstChild.firstChild));

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstChild.firstChild.nodeValue);

function isImage(node) {
return !isTextNode(node) && node.nodeName == "IMG";
}
console.log(isImage(document.body.lastChild));

/*Ex. 12.1
Write a function asHTML which, when given a DOM node, produces a string 
representing the HTML text for that node and its children. You may ignore 
attributes, just console.log nodes as <nodename>. The escapeHTML function from 
chapter 10 is available to properly escape the content of text nodes.
*/
function asHTML(node) {
if (isTextNode(node))
     return escapeHTML(node.nodeValue);
else if (node.childNodes.length == 0)
     return "<" + node.nodeName + "/>";
else
     return "<" + node.nodeName + ">" + map(asHTML, node.childNodes).join("") +
            "</" + node.nodeName + ">";
       }
    console.log(asHTML(document.body));
    console.log(document.body.innerHTML);

    document.body.firstChild.firstChild.nodeValue = "Chapter 1: The deep significance of the bottle";

  var picture = document.getElementById("picture");
      console.log(picture.src);
       picture.src = "img/ostrich.png";

       function $(id) {
return document.getElementById(id);
}
console.log($("picture"));

console.log(document.body.getElementsByTagName("BLINK")[0]);

var secondHeader = document.createElement("H1");
secondHeader.appendChild(secondTitle);
document.body.appendChild(secondHeader);
var secondTitle = document.createTextNode("Chapter 2: Deep magic");