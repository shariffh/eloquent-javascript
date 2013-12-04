var slash = /\//;
show("AC/DC".search(slash));
var asteriskOrBrace = /[\{\*]/;
var story = "We noticed the *giant sloth*, hanging from a giant branch.";
show(story.search(asteriskOrBrace));
var digitSurroundedBySpace = /\s\d\s/;
show("1a 2 3d".search(digitSurroundedBySpace));
var notABC = /[^ABC]/;
show("ABCBACCBBADABC".search(notABC));
var datePattern = /\d\d\/\d\d\/\d\d\d\d/;
show("born 15/11/2003 (mother Spot): White Fang".search(datePattern));
show(/a+/.test("blah"));
show(/^a+$/.test("blah"));
show(/cat/.test("concatenate"));
show(/\bcat\b/.test("concatenate"));
var parenthesizedText = /\(.*\)/;
show("Its (the sloth's) claws were gigantic!".search(parenthesizedText));
var datePattern = /\d{1,2}\/\d\d?\/\d{4}/;
show("born 15/11/2003 (mother Spot): White Fang".search(datePattern));
var mailAddress = /\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/;
show(mailAddress.test("kenny@test.net"));
show(mailAddress.test("I mailt kenny@tets.nets, but it didn wrok!"));
show(mailAddress.test("the_giant_sloth@gmail.com"));
var cartoonCrying = /boo(hoo+)+/i;
show("Then, he exclaimed 'Boohoooohoohooo'".search(cartoonCrying));
var holyCow = /(sacred|holy) (cow|bovine|bull|taurus)/i;
show(holyCow.test("Sacred bovine!"));
show("No".match(/Yes/));
show("... yes".match(/yes/));
show("Giant Ape".match(/giant (\w+)/i));
var parenthesized = prompt("Tell me something", "").match(/\((.*)\)/);
if (parenthesized != null)
print("You parenthesized '", parenthesized[1], "'");
function extractDate(string) {
var found = string.match(/(\d\d?)\/(\d\d?)\/(\d{4})/);
if (found == null)
throw new Error("No date found in '" + string + "'.");
return new Date(Number(found[3]), Number(found[2]) - 1,
Number(found[1]));
}
show(extractDate("born 5/2/2007 (mother Noog): Long-ear Johnson"));
print("Borobudur".replace(/[ou]/g, "a"));


var names = "Picasso, Pablo\nGauguin, Paul\nVan Gogh, Vincent";
print(names.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));



function eatOne(match, amount, unit) {
               amount = Number(amount) - 1;
               if (amount == 1) {
                        unit = unit.slice(0, unit.length - 1);
                         }
               else if (amount == 0) {
                        unit = unit + "s";
                        amount = "no";
                          }
                        return amount + " " + unit;
                       }
               var stock = "1 lemon, 2 cabbages, and 101 eggs";
               stock = stock.replace(/(\d+) (\w+)/g, eatOne);
                    print(stock);


    function escapeHTML(text) {
           var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];
             forEach(replacements, function(replace) {
                  text = text.replace(replace[0], replace[1]);
                             });
                   return text;
                   }


    function escapeHTML(text) {
          var replacements = {"<": "&lt;", ">": "&gt;", "&": "&amp;", "\"": "&quot;"};
             return text.replace(/[<>&"]/g, function(character) {
             return replacements[character];
                     });
                         }
                        print(escapeHTML("The 'pre-formatted' tag is written \"<pre>\"."));

          var badWords = ["ape", "monkey", "simian", "gorilla", "evolution"];
          var pattern = new RegExp(badWords.join("|"), "i");
    function isAcceptable(text) {
             return !pattern.test(text);
                }
             show(isAcceptable("Mmmm, grapes."));
             show(isAcceptable("No more of that monkeybusiness, now."));

          var digits = new RegExp("\\d+");
              show(digits.test("101"));