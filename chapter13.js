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