 // displayWeather function show the city weather searched in the input field

 function displayWeather(){
    var yourApiKey = "yourApiKey";
    var city = $( "#city" ).val();
    
    var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + yourApiKey;
    
    fetch(apiCall)
    .then(function(resp) { return resp.json() })
    
    .then( function(data){
        var description = data.weather[0].main;
        var tempMin = data.main.temp_min -273;
        var tempMax = data.main.temp_max -273;
        var humidity = data.main.humidity;

        tempMin = parseInt(tempMin,10);
        tempMax = parseInt(tempMax,10);

        document.getElementById("weather").innerHTML="City weather: " + description;
        document.getElementById("tempMin").innerHTML="Temperature min: " + tempMin + "°C";
        document.getElementById("tempMax").innerHTML="Temperature max: " + tempMax + "°C";
        document.getElementById("humidity").innerHTML="Humidity: " + humidity;
    })
}    


//show5cities function show just the 5 cities weathers (the weather icons)
function show5cities(){
    var yourApiKey = "yourApiKey";

    var cities = ['barcelona', 'new york', 'salerno', 'tokyo', 'sydney'];

    var citiesLength = cities.length;

    for (let index = 0; index < citiesLength; index++) {
        
       const element = cities[index];

       var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + element +"&appid=" + yourApiKey;

       fetch(apiCall)

       .then(function(resp) { return resp.json() })

       .then( function(data){

        var icon = data.weather[0].icon;
        console.log(icon)

        document.getElementById("icon" + index).src= "http://openweathermap.org/img/wn/"+ icon + ".png";
    })
   }
}

//showGeoWeather function show the geolocation weather

navigator.geolocation.getCurrentPosition(showGeoWeather);

  function showGeoWeather(position){

    var yourApiKey = "yourApiKey";

    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    latitude = parseInt(latitude,10);
    longitude = parseInt(longitude,10);
 

    var apiCallCoor = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=" + yourApiKey;
   
     fetch(apiCallCoor)

    .then(function(response) { return response.json() })

    .then( function(data){

     var cityName = data.name;
     
     var description = data.weather[0].main;

     var icon = data.weather[0].icon;

     document.getElementById("myWheather").innerHTML= cityName + " " + description;

     document.getElementById("myIconWeather").src= "http://openweathermap.org/img/wn/"+ icon + ".png";

    })
}
