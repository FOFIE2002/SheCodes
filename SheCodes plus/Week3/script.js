let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };
  
  // write your code here
    let cityName = prompt("Enter your city name")
    cityName = cityName.trim();
    cityName = cityName.toLowerCase();

    if (weather.hasOwnProperty(cityName)){
        let cityData = weather[cityName];
        let tempCelcius = Math.round(cityData.temp);
        let tempFahrenheit = Math.round ((cityData.temp * (9/5)) + 32 );
        let humidity = Math.round(cityData.humidity);

        alert(`It is currently ${tempCelcius}°C (${tempFahrenheit}°F) in ${cityName} with a humidity of ${humidity}%`)
    }
    else{
        alert("Sorry! we do not know that city. Try another city")
    }

