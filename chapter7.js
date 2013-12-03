var roads = {
	"Point Kiukiu": [{to: "Hanaiapa", distance: 19},
                     {to: "Mt Feani", distance: 15},
                     {to: "Taaoa", distance: 15}],
    "Taaoa": [{to: "Atuona", distance: 3},
              {to: "Mt Temetiui", distace: 5}
              {to: "Point Kiukiu", distace: 15}
          /* et cetera */]};
var roads = {};
    function makeRoad(from, to, length) {
    function addRoad(from, to) {
     if (!(from in roads))
      roads[from] = [];
      roads[from].push({to: to, distance: length});
   }
     addRoad(from, to);
     addRoad(to, from);
   }

   /*Ex. 7.1
   Write a function makeRoads that takes any uneven number of arguments. 
   The first argument is always the starting point of the roads, and every pair of 
   arguments after that gives an ending point and a distance.
   */
   function makeRoads(start) {
      for (var i = 1; i < arguments.length; i += 2)
        makeRoad(start, arguments[i], arguments[i + 1]);
   }

   var roads = {};
makeRoads("Point Kiukiu", "Hanaiapa", 19,"Mt Feani", 15, "Taaoa", 15);
makeRoads("Airport", "Hanaiapa", 6, "Mt Feani", 5,"Atuona", 4, "Mt Ootua", 11);
makeRoads("Mt Temetiu", "Mt Feani", 8, "Taaoa", 4);
makeRoads("Atuona", "Taaoa", 3, "Hanakee pearl lodge", 1);
makeRoads("Cemetery", "Hanakee pearl lodge", 6, "Mt Ootua", 5);
makeRoads("Hanapaoa", "Mt Ootua", 3);
makeRoads("Puamua", "Mt Ootua", 13, "Point Teohotepapapa", 14);
show(roads["Airport"]);

function roadsFrom(place) {
    var found = roads[place];
     if (found == undefined)
      throw new Error("No place named '" + place + "' found.");
      else
        return found;
   }
    show(roadsFrom("Puamua"));

function gamblerPath(from, to) {
function randomInteger(below) {
return Math.floor(Math.random() * below);
}
function randomDirection(from) {
var options = roadsFrom(from);
return options[randomInteger(options.length)].to;
}
var path = [];
while (true) {
path.push(from);
if (from == to)
break;
from = randomDirection(from);
}
return path;
}
console.log(gamblerPath("Hanaiapa", "Mt Feani"));

function member(array, value) {
var found = false;
forEach(array, function(element) {
if (element === value)
found = true;
});
return found;
}
console.log(member([6, 7, "Bordeaux"], 7));