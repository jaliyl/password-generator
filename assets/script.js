// Assignment Code
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialCharacters = [ '`','~','!','@','#','$','%','^','&','*','(',')','_',
'-','+','=','{','[','}'];

var numbers = ['1','2','3','4','5','6','7','8','9','0'];

var generateBtn = document.querySelector("#generate");

// function generatePassword(){
// var passW = passwordOptions();
// createPassword(passW);
  
// }

function passwordOptions(){
  var passwordLength = prompt("How many characters do you want your password to be?");

  var length = parseInt(passwordLength);
  
  if (length >= 8 && length <= 128){
    
  } else {
    alert("Value entered must be between 8 and 128 characters!");
    passwordOptions();
  }

  var wantsUpperCase = confirm("Do you want uppercase characters?");
  var wantsLowerCase = confirm("Do you want lowercase characters?");
  var wantsSpecial = confirm("Do you want special characters?");
  var wantsNumbers = confirm("Do you want numbers?");

  var passwordObject = {
    wantsLowerCase: wantsLowerCase,
    wantsUpperCase: wantsUpperCase,
    wantsSpecial: wantsSpecial,
    wantsNumbers: wantsNumbers,
    length: length
  };

  if (wantsLowerCase === false && wantsUpperCase === false && wantsSpecial === false && wantsNumbers === false){
    alert("You need to select at least one option!");
    return null;
  };

  console.log(wantsUpperCase);
  console.log(wantsLowerCase);
  console.log(wantsSpecial);
  console.log(wantsNumbers);

  return passwordObject;
}

function generatePassword(){
  
  var requestedPassword = passwordOptions();
  // userpassword will be the produced array of password characters
  var userPassword = [];
  // array of user chosen character types
  var allCharacters = [];
  // array of random character of each of the chosen character types
  var guaranteeCharacter = [];
  
  if(requestedPassword.wantsUpperCase){
    allCharacters = allCharacters.concat(upperCase);
    guaranteeCharacter.push(randomizing(upperCase));
  }

  if(requestedPassword.wantsLowerCase){
    allCharacters = allCharacters.concat(lowerCase);
    guaranteeCharacter.push(randomizing(lowerCase));
  }

  if(requestedPassword.wantsSpecial){
    allCharacters = allCharacters.concat(specialCharacters);
    guaranteeCharacter.push(randomizing(specialCharacters));
  }

  if(requestedPassword.wantsNumbers){
    allCharacters = allCharacters.concat(numbers);
    guaranteeCharacter.push(randomizing(numbers));
  }

  console.log("allCharacters", allCharacters);
  console.log("guaranteeCharacters", guaranteeCharacter);

  for(var i = 0; i < requestedPassword.length; i++){
    var character = randomizing(allCharacters);
    userPassword.push(character);
  }

  for(var i = 0; i < guaranteeCharacter.length; i++){
    userPassword[i] = guaranteeCharacter[i];
  }

  // for (var i = 0; i < requestedPassword.length; i++){  //length doesn't work
      
  //   if(requestedPassword.wantsUpperCase) {
  //     Math.floor(Math.random[lowerCase]);
  //     console.log(lowerCase);
  //   } else if (requestedPassword.wantsLowerCase){
  //     Math.floor(Math.random[upperCase]);
  //     console.log(upperCase);
  //   } else if (requestedPassword.specialCharacters){
  //     Math.floor(Math.random[specialCharacters]);
  //     console.log(specialCharacters);
  //   } else if (requestedPassword.wantsNumbers){
  //     Math.floor(Math.random[numbers]);
  //     console.log(numbers);
  //   }
  // }

    return userPassword.join("");

}


// Practicing with randomizing
// var fruit = ["apple", "orange", "banana", "kiwi", "grapes"]

// function practice(){
//   var randoFruit = randomizing(fruit);
//   console.log("Random fruit: ", randoFruit)
// }

// practice();



function randomizing(array){        // *********** study this *************
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;                                      
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

