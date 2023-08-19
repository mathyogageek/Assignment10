
const getLastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  

  var userYear = parseInt(prompt("Please enter a year that you want to count the number of days:"));
  var userMonth = parseInt(prompt("Please enter a month (1-12) that you want to count the number of days::"));
  
  // Check if the input is valid
  if (userMonth >= 1 && userMonth <= 12) {
    const lastDay = getLastDay(userYear, userMonth);
    console.log("Number of days in the specified month:", lastDay);
  } else {
    console.log("Invalid input. Please enter a valid month (1-12).");
  }

  //Step2:
  var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mlist[dt.getMonth()];
  };
  
  
  var inputDateStr = prompt("Step2: Enter a date (MM/DD/YYYY): Display the Month Name: ");
  var inputDate = new Date(inputDateStr);
  
  // Check if valid
  if (!isNaN(inputDate)) {
    console.log("Month:", month_name(inputDate));
  } else {
    console.log("Invalid date input.");
  }
  



//Step3:

function isWeekend(dateString) {
  var daysOfWeekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //create a Date object from a given date string
  var dt = new Date(dateString);

  return dt.getDay() === 0 || dt.getDay() === 6;
}

var userInput = prompt('Step4: Enter a date (e.g., July 15, 2023):');

if (userInput) {
  if (isWeekend(userInput)) {
      console.log(userInput + ' is a weekend.');
  } else {
      console.log(userInput + ' is not a weekend.');
  }
} else {
  console.log('No input provided.');
}



//Step4
//Today
var today = new Date();

// Subtract one day from Today 
today.setDate(today.getDate() - 1);

// Define day of a week
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day of the week for yesterday
var yesterdayDayOfWeek = today.getDay();

// Adjust the day of the week : Avoid get negative values (ex: If today is Sunday [0] then yesterday is [-1])
if (yesterdayDayOfWeek < 0) {
  yesterdayDayOfWeek = 6;
}

// Get the name of yesterday's day
var yesterdayDayName = dayNames[yesterdayDayOfWeek];

console.log(" Step4: Yesterday's day of the week:", yesterdayDayName);



//Step5
 
var today = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// the day of the week for today's date
var currentDayOfWeek = today.getDay();

// Get the first letter of the day
var firstLetterOfDay = dayNames[currentDayOfWeek][0];
console.log("Step5: First letter of the day:", firstLetterOfDay);


