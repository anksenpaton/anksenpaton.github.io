let cityID_f = 5585010; /* Bear Lake Sands ID id=5585010 */
let appid_f = 'cf6255e7d3643d472202cab287a3b281';

const apiURL_f = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID_f}&units=imperial&appid=${appid_f}`;
// const apiURL_f = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=cf6255e7d3643d472202cab287a3b281';
// const apiURL_f = 'js/forecast_fishhaven.json'

fetch(apiURL_f)
  .then(function (response) {
    return response.json()
  })
 
  .then(function (dataObject) {
    // console.log(dataObject)
    // console.log(dataObject.cnt)
    for (let i = 0; i < dataObject.cnt; i++) {
      if (dataObject.list[i].dt_txt.includes('18:00:00')) {
        let card = document.createElement('section')
        card.setAttribute('class', 'forecastsection')
        var date = new Date(dataObject.list[i].dt_txt)
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        document.querySelector('div.cardsforecast').appendChild(card)

        let p1 = document.createElement('p')
        p1.setAttribute('class', 'forecastfont')
        p1.textContent = dayOfWeek[date.getDay()]
        card.appendChild(p1)

        const imagesrc = 'https://openweathermap.org/img/w/' + dataObject.list[i].weather[0].icon + '.png'
        //p2.textContent = `<img src="${imagesrc}" alt="${dataObject.list[i].weather[0].description}" id="icon">`;

        let img = document.createElement('img')
        img.setAttribute('class', 'forecastimg')
        img.setAttribute('src', imagesrc)
        img.alt = dayOfWeek[date.getDay()] + ' ' + dataObject.list[i].weather[0].description;
        img.setAttribute('id', 'icon')
        card.appendChild(img)

        let p3 = document.createElement('p')
        p3.setAttribute('class', 'forecastfont')
        p3.textContent = ' ' + Math.round(dataObject.list[i].main.temp) + '°F'
        card.appendChild(p3)

      }
    }
  })