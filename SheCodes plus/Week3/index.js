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