let country = "Guinea Bissau";
country = country.replace(" ", "-");
console.log(country);

let city = " Sydney   ";
city = city.trim();
console.log(city);

let place = "School";
place = place.toUpperCase();
console.log(place);

let attraction = "Opera House";
attraction = attraction.toLowerCase();
console.log(attraction);

let phrase = `I went to visit ${attraction} in ${city}, right next to my school. now, I'm getting ready for my trip to ${country} `;
console.log(phrase);

//Js Maths

let price = 4.5;
let roundedPrice = Math.round(price);
console.log(roundedPrice);

let figure = 4.5;
let roundPrice = Math.ceil(figure);
console.log(roundPrice);

let digit = 4.5;
let roundDigit = Math.floor(digit);
console.log(roundDigit);

let numArray = [4, 1, 3, 10];
let minNum = Math.min(...numArray);
console.log(minNum);

let numberArray = [4, 1, 3, 10];
let maxNumber = Math.max(...numberArray);
console.log(maxNumber);


// JS Arrays and Loops

// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  console.log(weekDays);
  
  // Challenge 2
  // Log ‘Monday’ and ‘Sunday’
  console.log(weekDays[0])
  console.log(weekDays[6])
  
  // Challenge 3
  // Change ‘Sunday’ by ‘Funday’
  // Log the array
  weekDays[6] = "Funday"
  console.log(weekDays[6])
  
  // Challenge 4
  // Remove Monday and Tuesday
  // Log the array
  weekDays.splice(0, 2) 
  console.log(weekDays)
  
  // Challenge 5
  // Log every day of the week this way:`Temperature on Monday is 18 degrees’
  let temperatures = [18, 20, 22, 19, 17, 21, 23];
  
  for (let i = 0; i < weekDays.length; i++) {
    console.log(`Temperature on ${weekDays[i]} is ${temperatures[i]} degrees.`);
  }
  