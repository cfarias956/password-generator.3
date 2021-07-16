// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%&*?";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//function to determine length of password
function determineLength(){
  passwordLength = prompt("Choose how many characters long you would like your password to be (between 8-128 characters): ");

  if(passwordLength<8){
    alert("Passwrod length must be at least 8 charcters");
    determineLength();
  }
  else if(passwordLength>128){
    alert("Password length must be no more than 128 charcaters");
    determineLength();
  }
  else if(isNaN(passwordLength)){
    alert("Passwrod length must be a number between 8-128 characters");
    determineLength();
  }
  else{
    alert("The next three sections will ask you what types of characters you would like to include in your password. \nIf 'No' is selected for all, your passwrod will only be lowercase letters.")
  }
  return passwordLength;
}

//function to determine if user wants to use uppercase in password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(yes or no)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

  if(uppercaseCheck === null || uppercaseCheck === ""){
    alert("Please answer Yes or No");
    determineUppercase();
  }
  else if(uppercaseCheck === "yes" || uppercaseCheck === "y"){
    uppercaseCheck = true;
    return uppercaseCheck;
  }
  else if(uppercaseCheck === "no" || uppercaseCheck === "n"){
    uppercaseCheck = false;
    return uppercaseCheck;
  }
  else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

//function to determine if user want to include number is password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(yes or no)");
  numberCheck = numberCheck.toLowerCase();

  if(numberCheck === null || numberCheck === ""){
    alert("Please answer Yes or No");
    determineNumbers();
  }
  else if(numberCheck === "yes" || numberCheck === "y"){
    numberCheck = true;
    return numberCheck;
  }
  else if(numberCheck === "no" || numberCheck === "n"){
    numberCheck = false;
    return numberCheck;
  }
  else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

//function to determine if user wants to include special characters to password
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(yes or no)");
  specialCheck = specialCheck.toLowerCase();

  if(specialCheck === null || specialCheck === ""){
    alert("Please answer Yes or No");
    determineSpecial();
  }
  else if(specialCheck === "yes" || specialCheck === "y"){
    specialCheck = true;
    return specialCheck;
  }
  else if(specialCheck === "no" || specialCheck === "n"){
    specialCheck = false;
    return specialCheck;
  }
  else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}

//function used to take all input from previous functions to generate password
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";
  if(uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;
  }
  else if(uppercaseCheck && numberCheck){
    characters += numberChar + specialChar;
  }
  else if(numberCheck && specialCheck){
    characters += numberChar + specialChar;
  }
  else if(uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;
  }
  else if(uppercaseCheck){
    characters += uppercaseChar;
  }
  else if(numberCheck){
    characters += numberChar;
  }
  else if(specialCheck){
    characters += specialChar;
  }
  else{
    characters === lowercaseChar;
  }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
