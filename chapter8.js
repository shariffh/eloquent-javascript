var rabbit = {};
rabbit.speak = function(line) {
console.log("The rabbit says '", line, "'");
};
rabbit.speak("Well, now you're asking me.");
function speak(line) {
console.log("The ", this.adjective, " rabbit says '", line, "'");
}
var whiteRabbit = {adjective: "white", speak: speak};
var fatRabbit = {adjective: "fat", speak: speak};
whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");
speak.apply(fatRabbit, ["Yum."]);
speak.call(fatRabbit, "Burp.");

function Rabbit(adjective) {
this.adjective = adjective;
this.speak = function(line) {
console.log("The ", this.adjective, " rabbit says '", line, "'");
};
}
var killerRabbit = new Rabbit("killer");
killerRabbit.speak("GRAAAAAAAAAH!");
function makeRabbit(adjective) {
return {
adjective: adjective,
speak: function(line) {/*etc*/}
};
}
var blackRabbit = makeRabbit("black");
var simpleObject = {};
console.log(simpleObject.constructor);
console.log(simpleObject.toString);
console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor);
console.log(killerRabbit.toString == simpleObject.toString);
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(Rabbit.prototype.teeth);
console.log(killerRabbit.constructor);
console.log(blackRabbit.constructor);
Rabbit.prototype.dance = function() {
console.log("The ", this.adjective, " rabbit dances a jig.");
};
killerRabbit.dance();

function Rabbit(adjective) {
this.adjective = adjective;
}
Rabbit.prototype.speak = function(line) {
console.log("The ", this.adjective, " rabbit says '", line, "'");
};
var hazelRabbit = new Rabbit("hazel");
hazelRabbit.speak("Good Frith!");
var noCatsAtAll = {};
if ("constructor" in noCatsAtAll)
console.log("Yes, there definitely is a cat called 'constructor'.");
Object.prototype.properties = function() {
var result = [];
for (var property in this)
result.push(property);
return result;
};
var test = {x: 10, y: 3};
console.log(test.properties());
Object.prototype.properties = function() {
var result = [];
for (var property in this) {
if (this.hasOwnProperty(property))
result.push(property);
}
return result;
};
var test = {"Fat Igor": true, "Fireball": true};
console.log(test.properties());
function forEachIn(object, action) {
for (var property in object) {
if (object.hasOwnProperty(property))
action(property, object[property]);
}
}
var chimera = {head: "lion", body: "goat", tail: "snake"};
forEachIn(chimera, function(name, value) {
console.log("The ", name, " of a ", value, ".");
});
function forEachIn(object, action) {
for (var property in object) {
if (Object.prototype.hasOwnProperty.call(object, property))
action(property, object[property]);
}
}
var test = {name: "Mordecai", hasOwnProperty: "Uh-oh"};
forEachIn(test, function(name, value) {
console.log("Property ", name, " = ", value);
});
var object = {foo: "bar"};
console.log(Object.prototype.hasOwnProperty.call(object, "foo") && 
	        Object.prototype.propertyIsEnumerable.call(object, "foo"));
function Dictionary(startValues) {
this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
return this.values[name];
};
Dictionary.prototype.contains = function(name) {
return Object.prototype.hasOwnProperty.call(this.values, name) &&
Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
forEachIn(this.values, action);
};
var colours = new Dictionary({Grover: "blue",
                              Elmo: "orange",
                              Bert: "yellow"});
console.log(colours.contains("Grover"));
console.log(colours.contains("constructor"));
colours.each(function(name, colour) {
console.log(name, " is ", colour);
});

function Point(x, y) {
this.x = x;
this.y = y;
}
Point.prototype.add = function(other) {
return new Point(this.x + other.x, this.y + other.y);
};
Point.prototype.isEqualTo = function(other) {
return this.x == other.x && this.y == other.y;
};
console.log((new Point(3, 1)).add(new Point(2, 4)));
var grid = [["0,0", "1,0", "2,0"],
["0,1", "1,1", "2,1"]];
console.log(grid[1][2]);
var grid = ["0,0", "1,0", "2,0",
"0,1", "1,1", "2,1"];
console.log(grid[2 + 1 * 3]);

function Grid(width, height) {
this.width = width;
this.height = height;
this.cells = new Array(width * height);
}
Grid.prototype.valueAt = function(point) {
return this.cells[point.y * this.width + point.x];
};
Grid.prototype.setValueAt = function(point, value) {
this.cells[point.y * this.width + point.x] = value;
};
Grid.prototype.isInside = function(point) {
return point.x >= 0 && point.y >= 0 &&
point.x < this.width && point.y < this.height;
};
Grid.prototype.moveValue = function(from, to) {
this.setValueAt(to, this.valueAt(from));
this.setValueAt(from, undefined);
Grid.prototype.each = function(action) {
for (var y = 0; y < this.height; y++) {
for (var x = 0; x < this.width; x++) {
var point = new Point(x, y);
action(point, this.valueAt(point));
}
}
}

var testGrid = new Grid(3, 2);
testGrid.setValueAt(new Point(1, 0), "#");
testGrid.setValueAt(new Point(1, 1), "o");
testGrid.each(function(point, value) {
console.log(point.x, ",", point.y, ": ", value);
});

var directions = new Dictionary({"n": new Point( 0, -1),
                                 "ne": new Point( 1, -1),
                                 "e": new Point( 1, 0),
                                 "se": new Point( 1, 1),
                                 "s": new Point( 0, 1),
                                 "sw": new Point(-1, 1),
                                 "w": new Point(-1, 0),
                                 "nw": new Point(-1, -1)});
console.log(new Point(4, 4).add(directions.lookup("se")));
};

function StupidBug() {};
StupidBug.prototype.act = function(surroundings) {
return {type: "move", direction: "s"};
};

var wall = {};
function Terrarium(plan) {
var grid = new Grid(plan[0].length, plan.length);
for (var y = 0; y < plan.length; y++) {
var line = plan[y];
for (var x = 0; x < line.length; x++) {
grid.setValueAt(new Point(x, y),
elementFromCharacter(line.charAt(x)));
}
}
this.grid = grid;
}
function elementFromCharacter(character) {
if (character == " ")
return undefined;
else if (character == "#")
return wall;
else if (character == "o")
return new StupidBug();
}

wall.character = "#";
StupidBug.prototype.character = "o";
function characterFromElement(element) {
if (element == undefined)
return " ";
else
return element.character;
}
console.log(characterFromElement(wall));

Terrarium.prototype.toString = function() {
var characters = [];
var endOfLine = this.grid.width - 1;
this.grid.each(function(point, value) {
characters.push(characterFromElement(value));
if (point.x == endOfLine)
characters.push("\n");
});
return characters.join("");
};
var terrarium = new Terrarium(thePlan);
console.log(terrarium.toString());
/*ex 8.4*/
function method(object, name) {
return function() {
return object[name].apply(object, arguments);
};
}
var pushTest = method(testArray, "push");

Terrarium.prototype.listActingCreatures = function() {
var found = [];
this.grid.each(function(point, value) {
if (value != undefined && value.act)
found.push({object: value, point: point});
});
return found;
};

Terrarium.prototype.listSurroundings = function(center) {
var result = {};
var grid = this.grid;
directions.each(function(name, direction) {
var place = center.add(direction);
if (grid.isInside(place))
result[name] = characterFromElement(grid.valueAt(place));
else
result[name] = "#";
});
return result;
};

Terrarium.prototype.processCreature = function(creature) {
var surroundings = this.listSurroundings(creature.point);
var action = creature.object.act(surroundings);
if (action.type == "move" && directions.contains(action.direction)) {
var to = creature.point.add(directions.lookup(action.direction));
if (this.grid.isInside(to) && this.grid.valueAt(to) == undefined)
this.grid.moveValue(creature.point, to);
}
else {
throw new Error("Unsupported action: " + action.type);
}
};
Terrarium.prototype.step = function() {
forEach(this.listActingCreatures(),
bind(this.processCreature, this));
};
var terrarium = new Terrarium(thePlan);
console.log(terrarium);
terrarium.step();
console.log(terrarium);

Point.prototype.toString = function() {
return "(" + this.x + "," + this.y + ")";
};
console.log(new Point(5, 5));
var annoy = setInterval(function() {print("What?");}, 400);
clearInterval(annoy);
Terrarium.prototype.start = function() {
if (!this.running)
this.running = setInterval(bind(this.step, this), 500);
};
Terrarium.prototype.stop = function() {
if (this.running) {
clearInterval(this.running);
this.running = null;
}
};

var printHere = inPlacePrinter();
printHere("Now you see it.");
setTimeout(partial(printHere, "Now you don't."), 1000);

Terrarium.prototype.step = function() {
forEach(this.listActingCreatures(),
bind(this.processCreature, this));
if (this.onStep)
this.onStep();
};

var terrarium = new Terrarium(thePlan);
terrarium.onStep = partial(inPlacePrinter(), terrarium);
terrarium.start();
terrarium.stop();

function elementFromCharacter(character) {
if (character == " ")
return undefined;
else if (character == "#")
return wall;
else if (character == "o")
return new StupidBug();
}

var creatureTypes = new Dictionary();
creatureTypes.register = function(constructor) {
this.store(constructor.prototype.character, constructor);
};
function elementFromCharacter(character) {
if (character == " ")
return undefined;
else if (character == "#")
return wall;
else if (creatureTypes.contains(character))
return new (creatureTypes.lookup(character))();
else
throw new Error("Unknown character: " + character);
}
function BouncingBug() {
this.direction = "ne";
}
BouncingBug.prototype.act = function(surroundings) {
if (surroundings[this.direction] != " ")
this.direction = (this.direction == "ne" ? "sw" : "ne");
return {type: "move", direction: this.direction};
};
BouncingBug.prototype.character = "%";
creatureTypes.register(BouncingBug);

Dictionary.prototype.names = function() {
var names = [];
this.each(function(name, value) {names.push(name);});
return names;
};

function randomElement(array) {
if (array.length == 0)
throw new Error("The array is empty.");
return array[Math.floor(Math.random() * array.length)];
}
console.log(randomElement(["heads", "tails"]));

function DrunkBug() {};
DrunkBug.prototype.act = function(surroundings) {
return {type: "move",
direction: randomElement(directions.names())};
};
DrunkBug.prototype.character = "~";
creatureTypes.register(DrunkBug);

function clone(object) {
function OneShotConstructor(){}
OneShotConstructor.prototype = object;
return new OneShotConstructor();
}
function LifeLikeTerrarium(plan) {
Terrarium.call(this, plan);
}
LifeLikeTerrarium.prototype = clone(Terrarium.prototype);
LifeLikeTerrarium.prototype.constructor = LifeLikeTerrarium;

LifeLikeTerrarium.prototype.processCreature = function(creature) {
if (creature.object.energy <= 0) return;
var surroundings = this.listSurroundings(creature.point);
var action = creature.object.act(surroundings);
var target = undefined;
var valueAtTarget = undefined;
if (action.direction && directions.contains(action.direction)) {
var direction = directions.lookup(action.direction);
var maybe = creature.point.add(direction);
if (this.grid.isInside(maybe)) {
target = maybe;
valueAtTarget = this.grid.valueAt(target);
}
}
if (action.type == "move") {
if (target && !valueAtTarget) {
this.grid.moveValue(creature.point, target);
creature.point = target;
creature.object.energy -= 1;
}
}
else if (action.type == "eat") {
if (valueAtTarget && valueAtTarget.energy) {
this.grid.setValueAt(target, undefined);
creature.object.energy += valueAtTarget.energy;
valueAtTarget.energy = 0;
}
}
else if (action.type == "photosynthese") {
creature.object.energy += 1;
}
else if (action.type == "reproduce") {
if (target && !valueAtTarget) {
var species = characterFromElement(creature.object);
var baby = elementFromCharacter(species);
creature.object.energy -= baby.energy * 2;
if (creature.object.energy > 0)
this.grid.setValueAt(target, baby);
}
}
else if (action.type == "wait") {
creature.object.energy -= 0.2;
}
else {
throw new Error("Unsupported action: " + action.type);
}
if (creature.object.energy <= 0)
this.grid.setValueAt(creature.point, undefined);
};

function Lichen() {
this.energy = 5;
}
Lichen.prototype.act = function(surroundings) {
var emptySpace = findDirections(surroundings, " ");
if (this.energy >= 13 && emptySpace.length > 0)
return {type: "reproduce", direction: randomElement(emptySpace)};
else if (this.energy < 20)
return {type: "photosynthese"};
else
return {type: "wait"};
};
Lichen.prototype.character = "*";
creatureTypes.register(Lichen);
function findDirections(surroundings, wanted) {
var found = [];
directions.each(function(name) {
if (surroundings[name] == wanted)
found.push(name);
});
return found;
}


function LichenEater() {
this.energy = 10;
}
LichenEater.prototype.act = function(surroundings) {
var emptySpace = findDirections(surroundings, " ");
var lichen = findDirections(surroundings, "*");
if (this.energy >= 30 && emptySpace.length > 0)
return {type: "reproduce", direction: randomElement(emptySpace)};
else if (lichen.length > 0)
return {type: "eat", direction: randomElement(lichen)};
else if (emptySpace.length > 0)
return {type: "move", direction: randomElement(emptySpace)};
else
return {type: "wait"};
};
LichenEater.prototype.character = "c";
creatureTypes.register(LichenEater);

var lichenPlan =
["############################",
"#                      ######",
"# *** **                   ##",
"# *##** ** c              *##",
"# *** c ##**               *#",
"# c ##***                  *#",
"# ##**                     *#",
"# c #*                     *#",
"#*                   #** c *#",
"#***               ##** c **#",
"#*****            ###*** *###",
"############################"];
var terrarium = new LifeLikeTerrarium(lichenPlan);
terrarium.onStep = partial(inPlacePrinter(), terrarium);
terrarium.start();
terrarium.stop();

LichenEater.prototype.act = function(surroundings) {
var emptySpace = findDirections(surroundings, " ");
var lichen = findDirections(surroundings, "*");
if (this.energy >= 30 && emptySpace.length > 0)
return {type: "reproduce", direction: randomElement(emptySpace)};
else if (lichen.length > 1)
return {type: "eat", direction: randomElement(lichen)};
else if (emptySpace.length > 0)
return {type: "move", direction: randomElement(emptySpace)};
else
return {type: "wait"};
};


function CleverLichenEater() {
this.energy = 10;
this.direction = "ne";
}
CleverLichenEater.prototype.act = function(surroundings) {
var emptySpace = findDirections(surroundings, " ");
var lichen = findDirections(surroundings, "*");
if (this.energy >= 30 && emptySpace.length > 0) {
return {type: "reproduce",
direction: randomElement(emptySpace)};
}
else if (lichen.length > 1) {
return {type: "eat",
direction: randomElement(lichen)};
}
else if (emptySpace.length > 0) {
if (surroundings[this.direction] != " ")
this.direction = randomElement(emptySpace);
return {type: "move",
direction: this.direction};
}
else {
return {type: "wait"};
}
};
CleverLichenEater.prototype.character = "c";
creatureTypes.register(CleverLichenEater);

Object.prototype.inherit = function(baseConstructor) {
this.prototype = clone(baseConstructor.prototype);
this.prototype.constructor = this;
};
Object.prototype.method = function(name, func) {
this.prototype[name] = func;
};
function StrangeArray(){}
StrangeArray.inherit(Array);
StrangeArray.method("push", function(value) {
Array.prototype.push.call(this, value);
Array.prototype.push.call(this, value);
});
var strange = new StrangeArray();
strange.push(4);
console.log(strange);
Object.prototype.create = function() {
var object = clone(this);
if (typeof object.construct == "function")
object.construct.apply(object, arguments);
return object;
};
Object.prototype.extend = function(properties) {
var result = clone(this);
forEachIn(properties, function(name, value) {
result[name] = value;
});
return result;
};

var Item = {
construct: function(name) {
this.name = name;
},
inspect: function() {
print("it is ", this.name, ".");
},
kick: function() {
print("klunk!");
},
take: function() {
console.log("you can not lift ", this.name, ".");
}
};
var lantern = Item.create("the brass lantern");
lantern.kick();

var DetailedItem = Item.extend({
construct: function(name, details) {
Item.construct.call(this, name);
this.details = details;
},
inspect: function() {
print("you see ", this.name, ", ", this.details, ".");
}
});
var giantSloth = DetailedItem.create(
"the giant sloth",
"it is quietly hanging from a tree, munching leaves");
giantSloth.inspect();

var SmallItem = Item.extend({
kick: function() {
print(this.name, " flies across the room.");
},
take: function() {
// (imagine some code that moves the item to your pocket here)
print("you take ", this.name, ".");
}
});
var pencil = SmallItem.create("the red pencil");
pencil.take();

Object.prototype.hasPrototype = function(prototype) {
function DummyConstructor() {}
DummyConstructor.prototype = prototype;
return this instanceof DummyConstructor;
};
console.log(pencil.hasPrototype(Item));
console.log(pencil.hasPrototype(DetailedItem));

function mixInto(object, mixIn) {
forEachIn(mixIn, function(name, value) {
object[name] = value;
});
};
var SmallDetailedItem = clone(DetailedItem);
mixInto(SmallDetailedItem, SmallItem);
var deadMouse = SmallDetailedItem.create(
"Fred the mouse",
"he is dead");
deadMouse.inspect();
deadMouse.kick();


var Monster = Item.extend({
construct: function(name, dangerous) {
Item.construct.call(this, name);
this.dangerous = dangerous;
},
kick: function() {
if (this.dangerous)
print(this.name, " bites your head off.");
else
print(this.name, " runs away, weeping.");
}
});
var DetailedMonster = DetailedItem.extend({
construct: function(name, description, dangerous) {
DetailedItem.construct.call(this, name, description);
Monster.construct.call(this, name, dangerous);
},
kick: Monster.kick
});
var giantSloth = DetailedMonster.create(
"the giant sloth",
"it is quietly hanging from a tree, munching leaves",
true);
giantSloth.kick();

