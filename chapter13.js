$("button").addEventListener("click", function(){console.log("Click!");},
false);

function registerEventHandler(node, event, handler) {
if (typeof node.addEventListener == "function")
node.addEventListener(event, handler, false);
else
node.attachEvent("on" + event, handler);
}
registerEventHandler($("button"), "click",
function(){console.log("Click (2)");});

if (typeof document.addEventListener == "function")
var registerEventHandler = function(node, event, handler) {
node.addEventListener(event, handler, false);
};
else
var registerEventHandler = function(node, event, handler) {
node.attachEvent("on" + event, handler);
};

function unregisterEventHandler(node, event, handler) {
if (typeof node.removeEventListener == "function")
node.removeEventListener(event, handler, false);
else
node.detachEvent("on" + event, handler);
}

function showEvent(event) {
show(event || window.event);
}
registerEventHandler($("textfield"), "keypress", showEvent);

unregisterEventHandler($("textfield"), "keypress", showEvent);

function reportClick(event) {
event = event || window.event;
var target = event.target || event.srcElement;
var pageX = event.pageX, pageY = event.pageY;
if (pageX == undefined) {
pageX = event.clientX + document.body.scrollLeft;
pageY = event.clientY + document.body.scrollTop;
}
print("Mouse clicked at ", pageX, ", ", pageY,
". Inside element:");
show(target);
}
registerEventHandler(document, "click", reportClick);

unregisterEventHandler(document, "click", reportClick);

function printKeyCode(event) {
event = event || window.event;
print("Key ", event.keyCode, " was pressed.");
}
registerEventHandler($("textfield"), "keydown", printKeyCode);
unregisterEventHandler($("textfield"), "keydown", printKeyCode);