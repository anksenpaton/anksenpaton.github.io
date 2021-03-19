let town = 'Soda Springs'
const apiURL_e = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apiURL_e)
  .then(function (response) {
    return response.json()
  })

  .then(function (dataObject) {
    // console.log(dataObject)    
    for (let i = 0; i < dataObject.towns.length; i++) {
      if (dataObject.towns[i].name.includes(town)) {
        let card = document.createElement('section')
        card.setAttribute('class', 'eventssection')
        document.querySelector('div.cardsevent').appendChild(card)

        let p1 = document.createElement('p')
        p1.setAttribute('class', 'eventsfont')
        p1.textContent = dataObject.towns[i].events[0]
        card.appendChild(p1)

        let p2 = document.createElement('p')
        p2.setAttribute('class', 'eventsfont')
        p2.textContent = dataObject.towns[i].events[1]
        card.appendChild(p2)

        let p3 = document.createElement('p')
        p3.setAttribute('class', 'eventsfont')
        p3.textContent = dataObject.towns[i].events[2]
        card.appendChild(p3)
        
     
      }
    }
  
  })