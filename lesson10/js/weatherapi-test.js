const apiURL =
'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cf6255e7d3643d472202cab287a3b281'

 /* Preston ID id=5604473 */

fetch(apiURL)
 .then(response => response.json())
 .then(jsObject => {
  /* console.log(jsObject)*/

   document.getElementById('current-temp').textContent = jsObject.main.temp
   document.getElementById('high-temp').textContent = jsObject.main.temp_max
   document.getElementById('wind-chill').textContent = jsObject.main.feels_like
   document.getElementById('wind-speed').textContent = jsObject.wind.speed
   document.getElementById('humidity').textContent = jsObject.main.humidity
   document.getElementById('weather').textContent = jsObject.weather[0].description

   document.getElementById('current-temp2').textContent = jsObject.main.temp
   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
   const desc = jsObject.weather[0].description;  // note how we reference the weather array
   document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
   document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
   document.getElementById('icon').setAttribute('alt', desc);

 })