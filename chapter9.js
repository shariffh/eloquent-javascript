load("FunctionalTools.js");
eval("alert(\"I am a string inside a string!\");");
var dependencies = {"ObjectTools.js": ["FunctionalTools.js"],
                    "Dictionary.js": ["ObjectTools.js"],
                    "TestModule.js": ["FunctionalTools.js", "Dictionary.js"]
                    };