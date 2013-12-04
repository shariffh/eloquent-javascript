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