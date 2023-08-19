//STEP 1

function alphabetizeString(inputString) {
    return inputString.split('').sort().join('');
}

var exampleString = prompt('Step1: Enter a string only alphabet: Convert the Alphabetic Order');

if (exampleString !== null) {
    var sortedOutput = alphabetizeString(exampleString);
    console.log('Original Input:', exampleString);
    console.log('Sorted Output:', sortedOutput);
} else {
    console.log('No input provided.');
}


//STEP 2

function convertCapitalizeWords(inputString) {
    const arr = inputString.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const resultString = arr.join(" ");
    return resultString;
}

const userInput = prompt('Step2: Enter a text that you want to convert the first letter of each word to upper case:');
if (userInput !== null) {
    const capitalizedOutput = convertCapitalizeWords(userInput);
    console.log(capitalizedOutput);
} else {
    console.log('No input provided.');
}



//STEP 3


function countVowel(str) { 

    var vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (vowels.has(str[i])) {
            count++;
        }
    }

    return count;
}

const string = prompt('Step 3: Enter a string: Count the Number of Vowels: ');

if (string !== null) {
    const result = countVowel(string);

    console.log('Original Input:', string);
    console.log('Vowel Count:', result);
} else {
    console.log('No input provided.');
}




//STEP 4
function generateRandomStringId(length) {
    const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charList.length);
        result += charList[randomIndex];
    }

    return result;
}

const randomString = generateRandomStringId(10); //length I selected
console.log(randomString);

//STEP 5


function longestNameOfCountry(countryNames) {
    let longestName = "";

    for (let i = 0; i < countryNames.length; i++) {
        if (countryNames[i].length > longestName.length) {
            longestName = countryNames[i];
        }
    }

    return longestName;
}

const countryNames = ["Australia", "Germany", "United States of America"];

console.log('Original Country Names:', countryNames);
console.log('Longest Country Name:', longestNameOfCountry(countryNames));



