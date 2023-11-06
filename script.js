
// Assignment Code
var generateBtn = document.querySelector("#generate");


const numericCharactersList = [1234567890];
const uppercaseList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowercaseList = ["abcdefghijklmnopqrstuvwxyz"];
const specialCharactersList = "#$%&'()*+,-./:;<=>?@\^_`{|}~[!]";

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to contain? (Enter a number between 8 and 128) ");

  var acceptableCharacters = "";
  if (passwordLength > 7) {

  } else {
    alert("Password length must be between 8 and 128 characters!");
  }
  var specialCharacters = confirm("Click OK to include special characters in password");

  if (specialCharacters == true) {
    acceptableCharacters = acceptableCharacters.concat(specialCharactersList);

  }
  var numericCharacters = confirm("Click OK to include numeric characters");

  if (numericCharacters == true) {
    acceptableCharacters = acceptableCharacters.concat(numericCharactersList);

  }
  var uppercase = confirm("Click OK to include uppercase characters");

  if (uppercase == true) {
    acceptableCharacters = acceptableCharacters.concat(uppercaseList);

  }
  var lowercase = confirm("Click OK to include lowercase characters");

  if (lowercase == true) {
    acceptableCharacters = acceptableCharacters.concat(lowercaseList);

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber
  }

  }




  //return "Generated Password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
