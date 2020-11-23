//This happens with the "generate" button
var generateBtn = document.querySelector("#generate");

//creating and generating the password in one function
function writePassword(){

//alerts(validations) will be made if the criteria are positively selected by the user, but will not if they are not selected by the user. 
    var upperCase = confirm("Do you want your password to contain uppercase characters? (Please click 'OK' for 'Yes' and 'Cancel' for 'No')");
    if (upperCase === true){
        var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alert ("You will have uppercase characters is your password!")
    }

     else {
        var upperCaseChars = "";
    }

    var lowerCase = confirm("Do you want your password to contain lowercase characters? (Please click 'OK' for 'Yes' and 'Cancel' for 'No')");
    if (lowerCase === true){
        var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        alert ("You will have lowercase characters is your password!")
    }

    else {
        var lowerCaseChars = "";
    }


    var numeric = confirm("Do you want your password to contain numeric characters? (Please click 'OK' for 'Yes' and 'Cancel' for 'No')");
    if (numeric === true){
        var numericChars = "1234567890";
        alert ("You will have numeric characters is your password!")
    }

    else {
        var numericChars = "";
    }


    var special = confirm("Do you want your password to contain any special characters (*,&,!,%)? (Please click 'OK' for 'Yes' and 'Cancel' for 'No')");
    if (special === true){
        var specialChars = "!@#$%^&*?><";
        alert ("You will have special characters is your password!")
    }

    else {
        var specialChars = "";
    }
 
    //The limits outlined in the homework were less than 8 and greater than 128. 8 is min and 128 is max.
    //I was tempted to shorten this, as no one I know has a strong password with characters over 30.
    var length = prompt("How long (in number of characters between 8-128) do you want your password to be?");

          if (length < 8){
            alert("The password you selected is too short. You need 8 characters or more!");
            return;
          }
          if (length > 128){
            alert("The password you selected is WAY too long. You need 128 characters or less!");
            return;
          }

    var chars = upperCaseChars + lowerCaseChars + numericChars + specialChars;
    
    //password is nothing prior to being generated
    let newPassword = "";

    //For loop setting the length equal to a random length
    for (var i=0; i<= length -1; i++) {
        //nothing + the random equation = that nothing in it of itself
        newPassword = newPassword + chars.charAt(Math.floor(Math.random() * Math.floor(chars.length - 1)))};

        //innerHTML is to transfer something from the creator's script, as "$" and "response" are for API's.
        password.innerHTML = newPassword;

    }

//Click the "generate" button to see the magic done by the previous function 
generateBtn.addEventListener("click", writePassword);


