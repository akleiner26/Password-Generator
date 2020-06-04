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
var combinedArr = []
//create a function that asks how many characters the user wants and returns number to a
// variable. Also validates length and character selection

//write function prompts if user wants uppercase letters and moves array to pw array if yes


//write function that  prompts for if user wants lowercase letters moves array to
// pw array if yes


//write function that prompt for if user wants numbers in their password 
//moves array to pw array if yes


//write function that prompts for if user wants special characters in their password
//moves array to pw array if yes


//write an if statement that alerts user if they didn't choose any characters

//write a function that pulls from the arrays and randomly compiles a password from
//combined array