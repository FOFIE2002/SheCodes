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
