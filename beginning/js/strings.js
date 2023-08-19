// strings.js
//Step1
var userInputName = prompt("Please enter your name:");
const myStringWithoutSpaces = userInputName.replaceAll(' ', '').length // Replace all spaces with ''
alert("The length of characters in your name is: " + myStringWithoutSpaces);



// Step2
var userInputName2 = prompt("Please enter the second your name:");
var name2WithoutSpaces = userInputName2.replace(/\s/g, ''); // Remove all spaces from the string

if (name2WithoutSpaces) {
    var numericValue = prompt("Enter a numeric value:");
    var targetIndex = parseInt(numericValue);

    if (!isNaN(targetIndex) && targetIndex >= 1 && targetIndex <= name2WithoutSpaces.length) {
        var currentIndex = 0;
        for (var i = 0; i < userInputName2.length; i++) {
            if ((userInputName2[i] >= 'a' && userInputName2[i] <= 'z') || (userInputName2[i] >= 'A' && userInputName2[i] <= 'Z')) {
                currentIndex++;
            }
            
            if (currentIndex === targetIndex) {
                alert("The character at index " + targetIndex + " is: " + userInputName2[i]);
                break;
            }
        }
        if (currentIndex !== targetIndex) {
            alert("No character found at index " + targetIndex);
        }
    } else {
        alert("Invalid index value.");
    }
} else {
    alert("You didn't enter a valid string.");
}

  // Step3 
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");

var fullName = firstName + " " + lastName; 

alert("Your name is: " + fullName);

// Step4
var text = "The quick brown fox jumps over the lazy dog";
var searchString = "fox";
var index = text.indexOf(searchString);

if (index !== -1) {
    alert("The index of the word 'fox' is: " + index);
} else {
    alert("The word 'fox' was not found.");
}



//Step5

var textFive = "The quick brown fox jumps over the lazy fox";
var findWord = "fox";

var lastIndex = textFive.lastIndexOf(findWord);

if (lastIndex !== -1) {
  alert("The last text of '" + findWord + "' is at index: " + lastIndex);
} else {
  alert("The word '" + findWord + "' was not found in the text.");
}

// Step6

var origninalText = "The quick brown fox jumped over the lazy dog";

var userName = prompt("Enter full name:");

var newText = origninalText.replace("the lazy dog", userName);

alert("New text: " + newText);


// Step7
var originalTextSeven = "The quick brown fox jumped over the lazy dog";

var userSearchWord = prompt("What word do you want to find? :");

var originalTextSeven_lower = originalTextSeven.toLowerCase();
var userSearchWord_lower = userSearchWord.toLowerCase();


var userSearchWord_lower_pos = originalTextSeven_lower.indexOf(userSearchWord_lower);


if (userSearchWord_lower_pos > -1) {
  alert("The " + userSearchWord + " exists");
} else {
  alert("The " + userSearchWord + " does not exists");
}

// Step8

var old_string = "The quick brown fox jumps over the lazy dog";

// Extract "the lazy dog" using slice(), substr(), or substring()
var new_string = old_string.slice(31);

// Convert new_string to uppercase
var uppercase_new_string = new_string.toUpperCase();

// Display the uppercase result using the alert method
alert(uppercase_new_string);


// Step 8
var old_string = "The quick brown fox jumps over the lazy dog";
var searchWord = "the lazy dog";

// Find the starting position of the word "the lazy dog"
var startIndex = old_string.indexOf(searchWord);

if (startIndex !== -1) {
  
  var new_string_substring = old_string.substring(startIndex);

  var new_string_slice = old_string.slice(startIndex);

  var new_string_substr =old_string.substr(startIndex);

  
  var uppercase_new_string_substring = new_string_substring.toUpperCase();
  var uppercase_new_string_slice = new_string_slice.toUpperCase();
  var uppercase_new_string_substr = new_string_substr.toUpperCase();

  
  alert(uppercase_new_string_substring);
  alert(uppercase_new_string_slice);
  alert(uppercase_new_string_substr);
} else {
  alert("The word doesn't exist in the text.");
}

// Step 9
var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var trimmedOfText = text.trim();
var lowercaseTextTrimmedOffText = trimmedOfText.toLowerCase();
alert(lowercaseTextTrimmedOffText);

// Step 10

var text = "the quick brown fox jumps over the lazy dog";
var firstCharacterCapitalizedText = text.charAt(0).toUpperCase();

var restOfText = text.slice(1);

var capitalizedText = firstCharacterCapitalizedText + restOfText;


alert(capitalizedText);

