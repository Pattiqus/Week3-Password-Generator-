// Assignment Code
var generateBtn = document.querySelector("#generate");
// var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
// var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","'","<",">",",","?","/"];
var numberChar = "123456789"
    var lowerChar = "abcdefghijklmnopqrstuvwxyz"
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var specialChar = "!@#$%^&*()"

var finalPassword = "";
password="";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = parseInt(prompt("How long do you want your password?"));
  console.log(length);

  while (isNaN(length) == true) {
    var length = prompt("Please Input a Number between 8 & 128");
    console.log(length);

  }

  while (length < 8 || length > 128) {
    var length = prompt("Please Input a Number between 8 & 128");
    console.log(length);
  }

  var numberselect = confirm("Do you want numbers?")
  console.log(numberselect);
  if (numberselect) {
    finalPassword += numberChar;
  }

  else {
    window.alert("Numbers will not be included");

  }

  var lowerCharselect = confirm("Do you want lower case characters?")
  console.log(lowerCharselect);
  if (lowerCharselect) {
    window.alert("Lower case characters will be included");
    finalPassword += lowerChar;
  }

  else {
    window.alert("Lower case characters will not be included");
  }

  var upperCharselect = confirm("Do you want upper case characters?")
  console.log(upperCharselect);
  if (upperCharselect) {
    finalPassword += upperChar;
  }

  else {
    window.alert("Upper case characters will not be included");
  }

  var specialCharselect = confirm("Do you want special characters?")
  console.log(specialCharselect);
  if (specialCharselect) {
    finalPassword += specialChar;
  }

  else {
    window.alert("Specialcharacters will not be included");
  }

  console.log(password)
  if (specialCharselect === false && upperCharselect === false && lowerCharselect === false && numberselect === false) {
    window.alert("No character types selected, Password will not be created");
    return null;
  }

for (i=0; i < length; i++) {
  randomPassword =Math.floor(Math.random()*finalPassword.length);
  password += finalPassword[randomPassword];
}
console.log(password);
return password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

