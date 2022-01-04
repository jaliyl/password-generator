// Assignment Code
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialCharacters = [ '`','~','!','@','#','$','%','^','&','*','(',')','_',
'-','+','=','{','[','}'];

var numbers = ['1','2','3','4','5','6','7','8','9','0'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt("How many characters do you want your password to be?");
  console.log(passwordLength);
}

function passwordOptions(){
  prompt("Do you want uppercase characters?");
  window.alert("Do you want lowercase characters?");
  window.alert("Do you want special characters?");
  window.alert("Do you want numbers?");
}