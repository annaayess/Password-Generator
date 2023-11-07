
// Assignment Code
var generateBtn = document.querySelector("#generate");


const numericCharactersList = [1234567890];
const uppercaseList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowercaseList = ["abcdefghijklmnopqrstuvwxyz"];
const specialCharactersList = "#$%&'()*+,-./:;<=>?@\^_`{|}~[!]";

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to contain? (Enter a number between 8 and 128) ");
  var acceptableCharacters = "";
  var result =  [];
  var genCharacters = [];
  if (passwordLength > 7) {

  } else {
    alert("Password length must be between 8 and 128 characters!");
  }
  var specialCharacters = confirm("Click OK to include special characters in password");

  if (specialCharacters == true) {
    acceptableCharacters = acceptableCharacters.concat(specialCharactersList);
    genCharacters.push(getRandom(specialCharactersList));
  }
  var numericCharacters = confirm("Click OK to include numeric characters");

  if (numericCharacters == true) {
    acceptableCharacters = acceptableCharacters.concat(numericCharactersList);
    genCharacters.push(getRandom(numericCharactersList));
  }
  var uppercase = confirm("Click OK to include uppercase characters");

  if (uppercase == true) {
    acceptableCharacters = acceptableCharacters.concat(uppercaseList);
    genCharacters.push(getRandom(uppercaseList));

  }
  var lowercase = confirm("Click OK to include lowercase characters");

  if (lowercase == true) {
    acceptableCharacters = acceptableCharacters.concat(lowercaseList);
    genCharacters.push(getRandom(lowercaseList));
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = getRandom(acceptableCharacters);
    result.push(randomCharacter)
  }
  for (var i = 0; i < genCharacters.passwordLength; i++) {
    result[i] = genCharacters[i];
  }
  return result.join('');
  }




  //return "Generated Password"

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// end of code
