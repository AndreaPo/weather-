/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

    
    // displayWeather function show the city weather searched in the input field
    function displayWeather(){
        var yourApiKey = {}.apiKey;
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
        var yourApiKey = {}.apiKey;
  
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
        var yourApiKey = {}.apiKey;
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

/***/ })
/******/ ]);