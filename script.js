//Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["!", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=",">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var numerical = [0,1,2,3,4,5,6,7,8,9];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var charString = ["uppercase", "lowercase", "numerical", "special"];


var password = "";
var userInput = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = 0
  while ((passwordLength < 8 || passwordLength > 128) || Number.isInteger(passwordLength) === false) {
    passwordLength = parseInt(prompt("Please endter the number of characters you want for your password. It must be between 8 and 128 characters"));
  }

  var upperC = !true

  var lowerC = !true

  var numberC = !true

  var symbolC = !true

  while (true) {
    upperC = confirm("Do you want uppercase characterrs?");

    lowerC = confirm("Do you want lower case characters?");

    numberC = confirm("Do you want numerical characters?");

    symbolC = confirm("Do you want specuial characters?");
    break;
  }

  upperC && (userInput += charString.uppercase)

  lowerC && (userInput += charString.lowercase)

  numberC && (userInput += charString.numerical)

  symbolC && (userInput += charString.special)

  var passwordGen = '';

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * userInput.length);
    passwordGen += userInput[index]
  }
  return passwordGen

  
}