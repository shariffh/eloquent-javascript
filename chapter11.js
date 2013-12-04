var perry = window.open("http://www.pbfcomics.com");

show(perry.Math);

perry.close();
console.log(document.location.href);


console.log(timeWriter);
var time = viewHTML(timeWriter);

time.close();

var encoded = encodeURIComponent("aztec empire");
console.log(encoded);
console.log(decodeURIComponent(encoded));
var form = window.open("info.html");


attach(form);
console.log(document.location.href);
console.log(document.title);
show(form);


var userForm = document.forms.userinfo;
console.log(userForm.method);
console.log(userForm.action);

var nameField = userForm.elements.name;
nameField.value = "EugÎáÎéÎýne";


function validInfo(form) {
  return form.elements.name.value != "" &&
      /^.+@.+\.\w{2,3}$/.test(form.elements.email.value);
      }


    console.log(validInfo(document.forms.userinfo));

userForm.elements.send.onclick = function() {
if (validInfo(userForm))
    userForm.submit();
      else
          console.log("Give us a name and a valid e-mail address!");

  };


  userForm.elements.name.focus();

detach();

form.close()

forEachIn(navigator, function(name, value) {
  console.log(name, " = ", value);
  });