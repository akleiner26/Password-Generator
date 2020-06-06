
var password = "";
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "'","`", "$", "%", "&", "(", ")", "*", "+", ",", "-", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
var combinedArr = [];
var passwordLength = "";

function lengthFunc() {
  passwordLength = prompt("How many characters would you like your password to be? Value must be between 8 and 128");
  if (passwordLength >= 8 || passwordLength <= 128) {
    return passwordLength;
  } else if (typeof passwordLength == "string"){
    alert("Please Type a number")
    lengthFunc();
  }
}



function uppercaseFunc() {
  var isUpperCase = confirm("Would you like for uppercase letters to be included?");
  if (isUpperCase) {
    combinedArr = combinedArr.concat(uppercase);
  }
  return combinedArr;
}

function lowercaseFunc() {
  var isLowerCase = confirm("Would you like lowercase letters to be included?");
  if (isLowerCase) {
    combinedArr = combinedArr.concat(lowercase);
  }
  return combinedArr;
}

function numbersFunc() {
  var isNumber = confirm("Would you like numbers to be included?");
  if (isNumber) {
    combinedArr = combinedArr.concat(numbers);
  }
  return combinedArr;
}

function specialFunc() {
  var isSpecial = confirm("Would you like special characters to be included?");
  if (isSpecial) {
    combinedArr = combinedArr.concat(specialCharacters);
  }
  return combinedArr;
}


function isValid() {
  while (combinedArr.length <= 0) {
    alert("Must choose a valid character type. Please choose again.");
    lengthFunc();
    uppercaseFunc();
    lowercaseFunc();
    numbersFunc();
    specialFunc();
  }
}



function generatePassword() {
  var password = "";
  for (i = 0; i < passwordLength; i++) {
    password = password.concat(combinedArr[Math.floor(Math.random() * combinedArr.length)]);
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  combinedArr = [];
  lengthFunc();
  uppercaseFunc();
  lowercaseFunc();
  numbersFunc();
  specialFunc()
  isValid ();
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
