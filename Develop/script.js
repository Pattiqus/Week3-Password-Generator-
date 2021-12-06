// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","'","<",">",",","?",","/"];

var userInput = prompt("Please select your password criteria");


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

  var specialChar = confirm( "do you want special chars")



  
  createPassword()

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

