// generates button
var generateBtn = document.querySelector("#generate");

// writes password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//variables for password generation
var value;
var randomNumber;
var randomSpecial;
var randomUppercase;
var randomLowercase;

number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

special = [ "'", "(", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", ")", "*", "+", "^", "_", "`", "{", "|", "#", "$", "%", "&", "~" ];

letter = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

var choices;

var toUpper = function (pass) {
    return pass.toUpperCase();
};

letter2 = letter.map(toUpper);

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

// Command prompt choices
function generatePassword() {

    value = parseInt(prompt("How many characters would you like in your password?, Choose between 8 and 128"));
 
        if (!value) {
            alert("Value is needed");
    } else if (value < 8 || value > 128) {

    } else {
        randomNumber = confirm("Do you want numbers?");
        randomSpecial = confirm("Do you want special characters?");
        randomUppercase = confirm("Do you want Uppercase letters?");
        randomLowercase = confirm("Do you want Lowercase letters?");
    };

        if (!randomNumber && !randomSpecial && !randomUppercase && !randomLowercase) {
        choices = alert("You must choose an option");
    }
    else if (randomNumber && randomSpecial && randomUppercase && randomLowercase) {
        choices = number.concat(special, letter, letter2);
    }
    else if (randomNumber && randomSpecial && randomUppercase) {
        choices = number.concat(special, letter2);
    }
    else if (randomNumber && randomSpecial && randomLowercase) {
        choices = number.concat(special, letter);
    }
    else if (randomSpecial && randomLowercase && randomUppercase) {
        choices = special.concat(letter, letter2);
    }
    else if (randomNumber && randomLowercase && randomUppercase) {
        choices = number.concat(letter, letter2);
    }
    else if (randomSpecial && randomNumber) {
        choices = special.concat(number);
    } 
    else if (randomSpecial && randomLowercase) {
        choices = special.concat(letter);
    } 
    else if (randomSpecial && randomUppercase) {
        choices = special.concat(letter2);
    }
    else if (randomLowercase && randomNumber) {
        choices = letter.concat(number);
    } 
    else if (randomLowercase && randomUppercase) {
        choices = letter.concat(letter2);
    } 
    else if (randomNumber && randomUppercase) {
        choices = number.concat(letter2);
    }
    else if (randomNumber) {
        choices = number;
    }
    else if (randomSpecial) {
        choices = special;
    }
    else if (randomLowercase) {
        choices = letter;
    }
    else if (randomUppercase) {
        choices = letter2;
    }
    
    var password = [];
 
        for (var i = 0; i < value; i++) {
            var pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
    }

    var password = password.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;
}
