


let cityID = 5604473;
let appid = 'cf6255e7d3643d472202cab287a3b281';

const apiURL =
'http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${appid}';


 /* Preston ID id=5604473 */

fetch(apiURL)
 .then(response => response.json())
 .then(jsObject => {
   console.log(jsObject)
   let day = 0;
   conts dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/*
let d = new Date(jsobject.list[4].dt_txt);*/
thefive.forEach( days => {
  let d = new Date(days.dt_txt);
console.log(d);
document.getElementById('dayofweek${day+1}').textContent = dayofWeek[d.getDay()];
document.getElementById('forecast${day+1}').textContent = jsObject.list[4].main.temp;
day++
});
 });




/*
   document.getElementById('current-temp').textContent = jsObject.main.temp
   document.getElementById('high-temp').textContent = jsObject.main.temp_max
   document.getElementById('wind-chill').textContent = jsObject.main.feels_like
   document.getElementById('wind-speed').textContent = jsObject.wind.speed
   document.getElementById('humidity').textContent = jsObject.main.humidity
   document.getElementById('weather').textContent = jsObject.weather[0].description





   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
   const desc = jsObject.weather[0].description;  // note how we reference the weather array
   document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
   document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
   document.getElementById('icon').setAttribute('alt', desc);

 })
 */