prompt("How many characters do you want your password to contain? (Enter a number between 8 and 128) ");
confirm("Click OK to include special characters in password");
confirm("Click OK to include numeric characters");
confirm("Click OK to include lowercase characters");
confirm("Click OK to include uppercase characters");
// Assignment Code
var generateBtn = document.querySelector("#generate");

const numbers = [1234567890];
const uppercase = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
const lowercase = [abcdefghijklmnopqrstuvwxyz];
const specialCharacters = "#$%&'()*+,-./:;<=>?@\^_`{|}~[!]";

if ()


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
