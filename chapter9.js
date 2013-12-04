load("FunctionalTools.js");
eval("alert(\"I am a string inside a string!\");");
var dependencies = {"ObjectTools.js": ["FunctionalTools.js"],
                    "Dictionary.js": ["ObjectTools.js"],
                    "TestModule.js": ["FunctionalTools.js", "Dictionary.js"]
                    };
                    var loadedFiles = {};
function require(file) {
if (dependencies[file]) {
    var files = dependencies[file];
    for (var i = 0; i < files.length; i++)
        require(files[i]);
        }
if (!loadedFiles[file]) {
     loadedFiles[file] = true;
     load(file);
}
}
require("TestModule.js");
test();
show(window);
show(window.print == print);
show(window.window.window.window.window);

function buildMonthNameModule() {
var names = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
     function getMonthName(number) {
           return names[number];
               }
function getMonthNumber(name) {
     for (var number = 0; number < names.length; number++) {
        if (names[number] == name)
          return number;
            }
             }
window.getMonthName = getMonthName;
window.getMonthNumber = getMonthNumber;
}
buildMonthNameModule();
show(getMonthName(11));
function provide(values) {
forEachIn(values, function(name, value) {
window[name] = value;
});
}

var HTML = {
tag: function(name, content, properties) {
return {name: name, properties: properties, content: content};
},
link: function(target, text) {
return HTML.tag("a", [text], {href: target});
}
/* ... many more HTML-producing functions ... */
};


provide(HTML);
show(link("http://download.oracle.com/docs/cd/E19957-01/816-6408-10/object.htm",
"This is how objects work."));

function range(start, end, stepSize, length) {
if (stepSize == undefined)
stepSize = 1;
if (end == undefined)
end = start + stepSize * (length - 1);
var result = [];
for (; start <= end; start += stepSize)
result.push(start);
return result;
}
show(range(0, undefined, 4, 5));


function defaultTo(object, values) {
     forEachIn(values, function(name, value) {
       if (!object.hasOwnProperty(name))
          object[name] = value;
           });
             }
function range(args) {
          defaultTo(args, {start: 0, stepSize: 1});
             if (args.end == undefined)
args.end = args.start + args.stepSize * (args.length - 1);
var result = [];
for (; args.start <= args.end; args.start += args.stepSize)
result.push(args.start);
return result;
}
show(range({stepSize: 4, length: 5}));