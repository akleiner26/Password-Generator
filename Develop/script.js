var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
var password = "";
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
var combinedArr = [];
var passwordLength = "";

function lengthFunc() {
  var passwordLength = prompt("How many characters would you like your password to be? Value must be between 8 and 128");
  console.log(passwordLength);
  if (passwordLength >= 8 || passwordLength <= 128) {
    return passwordLength;
  }
  console.log(passwordLength);
}
lengthFunc();


function uppercaseFunc() {
  var isUpperCase = prompt("Would you like for uppercase letters to be included?");
  console.log(isUpperCase);
  if (isUpperCase.toLowerCase() === "yes") {
    combinedArr = combinedArr.concat(uppercase);
  }
  return combinedArr;
}

uppercaseFunc();
console.log(combinedArr);

function lowercaseFunc() {
  var isLowerCase = prompt("Would you like lowercase letters to be included?");
  console.log(isLowerCase);
  if (isLowerCase.toLowerCase() === "yes") {
    combinedArr = combinedArr.concat(lowercase);
  }
  return combinedArr;
}

lowercaseFunc();
console.log(combinedArr);

function numbersFunc() {
  var isNumber = prompt("Would you like numbers to be included?");
  console.log(isNumber);
  if (isNumber.toLowerCase() === "yes") {
    combinedArr = combinedArr.concat(numbers);
  }
  return combinedArr;
}

numbersFunc();
console.log(combinedArr);

function specialFunc() {
  var isSpecial = prompt("Would you like special characters to be included?");
  console.log(isSpecial);
  if (isSpecial.toLowerCase() === "yes") {
    combinedArr = combinedArr.concat(specialCharacters);
  }
  return combinedArr;
}
specialFunc()

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

isValid ();

function generatePassword() {
  for (i = 0; i < passwordLength; i++) {
    password = password.concat(combinedArr[Math.floor(Math.random() * combinedArr.length)]);
    console.log(password);
    return password;
  }
  alert("Your Random Password is " + password);
}
console.log(password)

generatePassword ();
console.log(combinedArr)
