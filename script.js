
// Assignment Code
var generateBtn = document.querySelector("#generate");


const numericCharacters = [1234567890];
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const specialCharacters = "#$%&'()*+,-./:;<=>?@\^_`{|}~[!]";

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to contain? (Enter a number between 8 and 128) ");
  console.log(passwordLength) }
 if (passwordLength >7) {
  console.log(passwordLength + " is the password length")
 } else {
    alert("Password length must be between 8 and 128 characters!");
  }
  var specialCharacters = confirm("Click OK to include special characters in password");
  console.log(specialCharacters)
  if (specialCharacters = true) {
    console.log("Yes to special characters")
  }  
  var numericCharacters = confirm("Click OK to include numeric characters");
    console.log(numericCharacters)
  if (numericCharacters = true) {
      console.log("Yes to numeric characters")
  }    
      var uppercase = confirm("Click OK to include uppercase characters");
    console.log(uppercase)
  if (uppercase = true) {
      console.log("Yes to uppercase characters")
  }    
      var lowercase = confirm("Click OK to include lowercase characters");
    console.log(lowercase)
  if (lowercase = true) {
      console.log("Yes to lowercase characters")
    
    
    }
  
 

 
   //return "Generated Password"
 //}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
