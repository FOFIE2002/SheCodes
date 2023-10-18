//challenge 1
let currentDate = new Date();
console.log(currentDate);

//challenge 2
console.log(currentDate.getMilliseconds());

//challenge 3
console.log(currentDate.getDay());

//challenge 4
console.log(currentDate.getFullYear());

//challenge 5
console.log(currentDate.getMonth());

//challenge 6
let WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = WeekDays[currentDate.getDay()];
let month = monthsOfYear[currentDate.getMonth()];
let date = currentDate.getDate();
let year = currentDate.getFullYear();

let DateOfToday = `Today is ${day}, ${month} ${date}, ${year}`;
console.log(DateOfToday);

//challenge 7
function formatDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
  
    return `Today is ${day}, ${month} ${dayOfMonth}, ${year}`;
  }
  
  const NewDate = new Date();
  const formattedDate = formatDate(NewDate);
  console.log(formattedDate);
  