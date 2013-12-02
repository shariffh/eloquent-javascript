var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
((4 >= 6) || ("grass" != "green")) &&
!(((12 * 2) == 144) && true)
var D = new Date(); var hours = D.getHours(); 
var minutes = D.getMinutes(); var seconds = D.getSeconds(); 
var time = hours + ":" + minutes + ":" + seconds; 
document.write("The time is now " + time);
var result = 1;
var counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);
var line = "";
var counter = 0;
while (counter < 10) {
line = line + "#";
console.log(line);
counter = counter + 1;
}
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
result = result * 2;
console.log(result);
var line = "";
for (var counter = 0; counter < 10; counter = counter + 1) {
line = line + "#";
console.log(line);
}

/*show all numbers below 20 which are divisible both by 3 and by 4*/
for (var counter = 0; counter < 20; counter++) {
if (counter % 3 == 0 && counter % 4 == 0)
console.log(counter);
}
/*print all numbers below 20, but put parentheses 
around the ones that are not divisible by 4*/
for (var counter = 0; counter < 20; counter++) {
if (counter % 4 == 0)
console.log(counter);
if (counter % 4 != 0)
console.log("(" + counter + ")");
}

/*A program that ask using prompt, what the value of 2 + 2 is.
 If the answer is "4", use alert to say something praising. If it is "3" 
 or "5", say "Almost!". In other cases, say something mean.*/
var answer = prompt("You! What is the value of 2 + 2?", "");
if (answer == "4")
alert("It is OK.");
else if (answer == "3" || answer == "5")
alert("It is near!");
else
alert("Wrong.");

var answer;
while (true) {
answer = prompt("You! What is the value of 2 + 2?", "");
if (answer == "4") {
alert("You must be a genius or something.");
break;
}
else if (answer == "3" || answer == "5") {
alert("Almost!");
}
else {
alert("You're an embarrassment.");
}
}