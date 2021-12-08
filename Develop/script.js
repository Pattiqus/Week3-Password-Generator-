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


// Write password to the #password input
var writePassword = function (password) {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
  console.log(password);
};

function generatePassword() {
  // var length = parseInt(prompt("How long do you want your password?"));
  // console.log(length);

  // while (isNaN(length) == true) {
  //   var length = prompt("Please Input a Number between 8 & 128");
  //   console.log(length);

  // }

  // while (length < 8 || length > 128) {
  //   var length = prompt("Please Input a Number between 8 & 128");
  //   console.log(length);
  // }

  // var numberselect = confirm("Do you want numbers?")
  // // console.log(numberselect);
  // if (numberselect) {
  //   // window.alert("Numbers will be included");
  //   finalPassword += numberChar;
  // }

  // else {
  //   window.alert("Numbers will not be included");

  // }

  // var lowerCharselect = confirm("Do you want lower case characters?")
  // console.log(lowerCharselect);
  // if (lowerCharselect) {
  //   window.alert("Lower case characters will be included");
  //   finalPassword += lowerChar;
  // }

  // else {
  //   window.alert("Lower case characters will not be included");
  // }

  // var upperCharselect = confirm("Do you want upper case characters?")
  // console.log(upperCharselect);
  // if (upperCharselect) {
  //   window.alert("Upper case characters will be included");
  //   finalPassword += upperChar;
  // }

  // else {
  //   window.alert("Upper case characters will not be included");
  // }

  // var specialCharselect = confirm("Do you want special characters?")
  // console.log(specialCharselect);
  // if (specialCharselect) {
  //   window.alert("Special characters will be included");
  //   finalPassword += specialChar;
  // }

  // else {
  //   window.alert("Special characters will not be included");
  // }

  // console.log(password)
  // if (specialCharselect === false && upperCharselect === false && lowerCharselect === false && numberselect === false) {
  //   window.alert("No character types selected, Password will not be created");
  //   return null;
  // }

  // for (i=0; i < length; i++) {
  //   randomPassword =Math.floor(Math.random()*finalPassword.length);
  //   password += finalPassword[randomPassword];
  // }
  // console.log(password);
  // return password;
  

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// ================================================================================================================
var passwordGenFunc = function( formSubmitEv ) {
  
  formSubmitEv.preventDefault();

  var hasErrors = false;

  var finalPassword = "",
  password="";

  var lengthSelEl = document.querySelector("#passwordLength");
  var lengthSelVal = lengthSelEl.value;

  var numSelEl = document.querySelector("#numSel");
  var numSelVal = numSelEl.checked;

  var lowerSelEl = document.querySelector("#lowerSel");
  var lowerSelVal = lowerSelEl.checked;

  var upperSelEl = document.querySelector("#upperSel");
  var upperSelVal = upperSelEl.checked;

  var specialSelEl = document.querySelector("#specialSel");
  var specialSelVal = specialSelEl.checked;

  console.log("password length value: " + lengthSelVal);
  console.log("number select status: " + numSelVal);
  console.log("lower select status: " + lowerSelVal);
  console.log("upper select status: " + upperSelVal);
  console.log("special select status: " + specialSelVal);

  if (isNaN(lengthSelVal)) {
    lengthSelEl.focus();
    hasErrors = true;
    return;
  }

  if (lengthSelVal < 8 || lengthSelVal > 128) {
    lengthSelEl.focus();
    hasErrors = true;
    return;
  }
  console.log("arrived")

  if (numSelVal) {
    finalPassword += numberChar;
  }
  console.log("arrived1")

  if (lowerSelVal) {
    finalPassword += lowerChar;
  }
  console.log("arrived2")
  if (upperSelVal) {
    finalPassword += upperChar;
  }
  console.log("arrived3")

  if (specialSelVal) {
    finalPassword += specialChar;
  }
  console.log("arrived4")
  for (i=0; i < lengthSelVal; i++) {
    randomPassword =Math.floor(Math.random()*finalPassword.length);
    password += finalPassword[randomPassword];
  }

  writePassword(password);

};

var passwordGenForm = document.querySelector("#passwordGenForm");
passwordGenForm.addEventListener("submit", passwordGenFunc);