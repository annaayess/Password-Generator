// Assignment Code
var generateBtn = document.querySelector("#generate");

const numbers = [1234567890];
const uppercase = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
const lowercase = [abcdefghijklmnopqrstuvwxyz];
const specialCharacters = "#$%&'()*+,-./:;<=>?@\^_`{|}~[!]";


function generatePassword() {



  return "Generated Password"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
