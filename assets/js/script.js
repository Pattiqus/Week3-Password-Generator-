// Assignment Code

// # Define: Password characters.
var numberChar = "123456789";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~`!@#$%^&*()-_=+{}[]:',.<>?/";

/**
*    Function: writePassword
*    Description: Used to write a given value to the front end #password element
*
*    @param {string} password - The password to write
*    @return void
*/
var writePassword = function (password) {
  
  // # Retreive: password text element
  var passwordText = document.querySelector("#password");

  // # Set: write the passed in password to the element
  passwordText.value = password;
  
};

/**
 *    Function: passwordGenFunc
 *    Description: Used to proccess form input to generate a password upon user   interaction.
 * 
 *    @param {Event} formSubmitEv - Browser event for form submission
 *    @returns void
 */
var passwordGenFunc = function( formSubmitEv ) {
  
  //  # Prevent: default browswer behaviour for the form
  formSubmitEv.preventDefault();

  //  # Define: empty password variable to be filled
  var charSet = "",
      password = "";

  //  # Retreive: form elements for processing
  var lengthSelInput = document.querySelector("#passwordLength");
  var numSelInput = document.querySelector("#numSel");
  var lowerSelInput = document.querySelector("#lowerSel");
  var upperSelInput = document.querySelector("#upperSel");
  var specialSelInput = document.querySelector("#specialSel");
 
  //  # Retreive: user input values 
  var lengthSelVal = lengthSelInput.value;
  var numSelVal = numSelInput.checked;
  var lowerSelVal = lowerSelInput.checked;
  var upperSelVal = upperSelInput.checked;
  var specialSelVal = specialSelInput.checked;

  //  # Debugging: Output values to console 
  // console.log("password length value: " + lengthSelVal);
  // console.log("number select status: " + numSelVal);
  // console.log("lower select status: " + lowerSelVal);
  // console.log("upper select status: " + upperSelVal);
  // console.log("special select status: " + specialSelVal);

  //  # Validate: user input for password length is a valid number
  if (isNaN(lengthSelVal)) {
    lengthSelInput.focus();
    return;
  }

  //  # Validate: user input is within accepted password length
  if (lengthSelVal < 8 || lengthSelVal > 128) {
    lengthSelInput.focus();
    return;
  }
  
  //  # Determine: whether or not to add numbers
  if (numSelVal) {
    charSet += numberChar;
  }

  //  # Determine: whether or not to add lower case characters
  if (lowerSelVal) {
    charSet += lowerChar;
  }

  //  # Determine: whether or not to add upper case characters
  if (upperSelVal) {
    charSet += upperChar;
  }
  
  //  # Determine: whether or not to add special characters
  if (specialSelVal) {
    charSet += specialChar;
  }
  
  //  # Loop: based on password length and add random character from character set
  for (i=0; i < lengthSelVal; i++) {
    randomCharSetIndex =Math.floor(Math.random()*charSet.length);
    password += charSet[randomCharSetIndex];
  }

  //  # Call: writing password function
  writePassword(password);

};

  //  # Retrieve: form element 
var passwordGenForm = document.querySelector("#passwordGenForm");

  //  # Bind: passwordGenFunc to submit event of the form element
passwordGenForm.addEventListener("submit", passwordGenFunc);