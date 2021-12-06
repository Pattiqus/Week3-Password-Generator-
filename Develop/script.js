// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0123456789"];
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "~`!@#$%^&*()_-+={[}]|\:;"'<,>.?/";
var userInput = prompt("Please select your password criteria");
var length = 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How long do you want your password");
  console.log(length);

  isNaN()

  if (length < 8 || length > 128) {

  }

  var specialChar = confirm( "do you want special chars"


  
  createPassword())

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

