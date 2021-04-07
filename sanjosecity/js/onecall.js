let appid = 'cf6255e7d3643d472202cab287a3b281';
// const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.3382&lon=-121.8863&units=imperial&exclude=minutely,hourly&appid=cf6255e7d3643d472202cab287a3b281`;
// const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${appid}`
// const apiURL = 'js/onecall.json'
const apiURL = 'js/onecall_with_alert.json'

fetch(apiURL)
  .then(function (response) {
    return response.json()
  })

  .then(function (dataObject) {
    /* console.log(dataObject) */
    if (dataObject.daily.length > 1) {

      document.getElementById('current-temp').textContent = Math.round(dataObject.current.temp)
      document.getElementById('high-temp').textContent = Math.round(dataObject.current.temp)
      document.getElementById('wind-chill').textContent = Math.round(dataObject.current.feels_like)
      document.getElementById('wind-speed').textContent = Math.round(dataObject.current.wind_speed)
      document.getElementById('humidity').textContent = Math.round(dataObject.current.humidity)
      document.getElementById('weather').textContent = dataObject.current.weather[0].description

      const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

      for (let i = 0; i < 3; i++) {

        let card = document.createElement('section')
        card.setAttribute('class', 'forecastsection')
        var date = new Date(dataObject.daily[i].dt * 1000)
        var day = date.getDay()
        document.querySelector('div.cardsforecast').appendChild(card)

        let p1 = document.createElement('p')
        p1.setAttribute('class', 'forecastfont')
        p1.textContent = dayOfWeek[date.getDay()]
        card.appendChild(p1)

        const imagesrc = 'https://openweathermap.org/img/w/' + dataObject.daily[i].weather[0].icon + '.png'
        //p2.textContent = `<img src="${imagesrc}" alt="${dataObject.list[i].weather[0].description}" id="icon">`;

        let img = document.createElement('img')
        img.setAttribute('class', 'forecastimg')
        img.setAttribute('src', imagesrc)
        img.alt = dayOfWeek[date.getDay()] + ' ' + dataObject.daily[i].weather[0].main;
        img.setAttribute('id', 'icon')
        card.appendChild(img)

        let p3 = document.createElement('p')
        p3.setAttribute('class', 'forecastfont')
        p3.textContent = 'High ' + Math.round(dataObject.daily[i].temp.max) + '°F'
        card.appendChild(p3)

      }
    }

    /* check for alerts */
    if (dataObject.hasOwnProperty('alerts')) {

      /* console.log('alert exists') */

      for (let j = 0; j < dataObject.alerts.length; j++) {
        // console.log(dataObject.alerts[j].description)
        document.getElementById("alerts").innerHTML = " "
          + "<p class='alerts'>"
          + "<div class=alerttext>"
          + dataObject.alerts[j].description
          + "<button onclick='toggleAlerts()'>Dismiss </button>"
          + "</div>"; 
        /* alert(dataObject.alerts[j].description) */
      }

    } else {
      // console.log('alert does not exist')
      document.getElementById("alerts").innerHTML = " "
        + "<p class='alerts'>"
        + "<div class=alerttext>"
        + "There are no alerts today. &nbsp;"
        + "<button onclick='toggleAlerts()'>Dismiss </button>"
        + "</div>";
      // alert("There are no alerts today.")
    }
  })


function toggleAlerts() {
  document.getElementById("alerts").classList.toggle("hideAlerts");
}