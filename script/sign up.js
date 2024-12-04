var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var sendToHomePage = document.querySelector("#sendToHomePage");
var wrongPassword = document.querySelector("#wrongPassword");

//Get from Local Storge
if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}
//Check Values
function checkEmail() {
  //Checking Email => true
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == emailInput.value) {
      if (users[i].password == passwordInput.value) {
        window.open("./Home.htm", "_self")
        wrongPassword.classList.add("d-none");
        localStorage.setItem("name", JSON.stringify(users[i].name))
        break;
      }
    } else {
      wrongPassword.classList.remove("d-none");
    }
  }
}

//On Click Login Btn Function
sendToHomePage.addEventListener("click", function () {
  checkEmail();
});
