// STEP 1
var userInputNumber = prompt("Step 1: Please enter a number: It converts to be a positive Value");
var absoluteNumber = Math.abs(Number(userInputNumber));
console.log("Step 1: Input number:", userInputNumber);
console.log("Step 1: Absolute value:", absoluteNumber);

// STEP 2
var userInputValue = prompt("Step 2: Please enter a floating point value (decimal): Round Up the Nearest");
var floatValue = parseFloat(userInputValue);
var roundedValue = Math.ceil(floatValue);
console.log("Step 2: Input value:", userInputValue);
console.log("Step 2: Rounded up value:", roundedValue);

// STEP 3
var userInputFloatNum = prompt("Step 3: Please enter a floating number: Round Down the Nearest");
var numericValue = parseFloat(userInputFloatNum);
console.log("Step 3: Input floating number:", userInputFloatNum);

if (isNaN(numericValue)) {
  console.log("Step 3: It's not a valid number.");
} else {
  console.log("Step 3: It's a valid number:", numericValue);
}

// STEP 4
var input = prompt("Step 4: Please enter 5 numbers separated by commas (e.g., 1, 2, 3, 4, 5):");
var numberStrings = input.split(",");
var numbers = [];

for (var i = 0; i < numberStrings.length; i++) {
  var num = parseFloat(numberStrings[i]);
  if (!isNaN(num)) {
    numbers.push(num);
  }
}

var max = numbers[0];
var min = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Step 4: Largest number:", max);
console.log("Step 4: Smallest number:", min);

// STEP 5
var userInputSquareRoot = prompt("Step 5: Please enter a number for square root:");
var squareRootNumber = parseFloat(userInputSquareRoot);
console.log("Step 5: Input number for square root:", userInputSquareRoot);

if (squareRootNumber >= 0) {
  var squareRoot = Math.sqrt(squareRootNumber);
  console.log("Step 5: Square root of", squareRootNumber, "is:", squareRoot);
} else {
  console.log("Step 5: Invalid input. Please enter a valid positive number.");
}
