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