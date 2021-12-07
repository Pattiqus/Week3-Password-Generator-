// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","'","<",">",",","?",",","/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How long do you want your password");
  console.log(length);

  while (isNaN(length) == true) {
    var length = prompt("Please Input a Number between 8 & 128");
    console.log(length);

  }

  while (length < 8 || length > 128) {
    var length = prompt("Please Input a Number between 8 & 128");
    console.log(length);
  }

  var numberChar = confirm("Do you want numbers?")
  var lowerChar = confirm("Do you want lower case characters?")
  var upperChar = confirm("Do you want upper case characters?")
  var specialChar = confirm("Do you want special characters?")



  
  createPassword()

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

