let cityID_w = 5604473;  /* Preston ID id=5604473 */
let appid_w = 'cf6255e7d3643d472202cab287a3b281';

const apiURL_w = `https://api.openweathermap.org/data/2.5/weather?id=${cityID_w}&units=imperial&appid=${appid_w}`
// const apiURL_w = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cf6255e7d3643d472202cab287a3b281`
// const apiURL_w = 'js/weather.json'; 

fetch(apiURL_w)
 .then(response => response.json())
 .then(jsObject => {
   // console.log(jsObject)

   document.getElementById('current-temp').textContent = jsObject.main.temp
   document.getElementById('high-temp').textContent = jsObject.main.temp_max
   document.getElementById('wind-chill').textContent = windChill(jsObject.main.temp,jsObject.wind.speed)
   document.getElementById('wind-speed').textContent = jsObject.wind.speed
   document.getElementById('humidity').textContent = jsObject.main.humidity
   document.getElementById('weather').textContent = jsObject.weather[0].description

 })