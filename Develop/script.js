// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Define Variable for password length with a prompt
var password = "";
//Define Arrays for all characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
//combine arrays into new array
var combinedArr = [];
var passwordLength = "";
//create a function that asks how many characters the user wants and returns number to a
// variable. Also validates length and character selection
function lengthFunc() {
  var passwordLength = prompt("How many characters would you like your password to be? Value must be between 8 and 128");
  console.log(passwordLength);
   if (passwordLength >= 8 || passwordLength <= 128) {
    return passwordLength;
   }
    console.log(passwordLength);
  }
lengthFunc();


//write function prompts if user wants uppercase letters and moves array to pw array if yes
function uppercaseFunc(){
  var isUpperCase = prompt("Would you like for uppercase letters to be included?");
  console.log(isUpperCase);
  if (isUpperCase.toLowerCase === "yes") {
    combinedArr = combinedArr.concat([uppercase]);
    }
    return combinedArr;
}

uppercaseFunc();
console.log(combinedArr);


//write function that  prompts for if user wants lowercase letters moves array to
// pw array if yes
function lowercaseFunc (){
  var isLowerCase = prompt("Would you like lowercase letters to be included?");
  console.log(isLowerCase);
  if (isLowerCase.toLowerCase === "yes") {
    combinedArr = combinedArr.concat([lowercase]);
  }
  return combinedArr;
}

lowercaseFunc();
console.log(combinedArr);


//write function that prompt for if user wants numbers in their password 
//moves array to pw array if yes


//write function that prompts for if user wants special characters in their password
//moves array to pw array if yes


//write an if statement that alerts user if they didn't choose any characters

//write a function that pulls from the arrays and randomly compiles a password from
//combined array