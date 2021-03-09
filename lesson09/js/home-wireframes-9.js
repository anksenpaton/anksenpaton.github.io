const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (dataObject) {
    /*console.table(dataObject);*/
    const towns = dataObject['towns']
    for (let i = 0; i < towns.length; i++) {
      /*console.log(towns[i].name)*/
      if (
        towns[i].name == 'Preston' ||
        towns[i].name == 'Soda Springs' ||
        towns[i].name == 'Fish Haven'
      ) {
        let card = document.createElement('section')

        let openart = '<article>';
        let closeart = '<\article>';

        let opendiv = '<div class=\"data\">'
        let closediv = '</div>'

        let h2 = '<h2>' + towns[i].name + '</h2>'

        let p1 = '<p>' + 'Motto: ' + towns[i].motto + '</p>' 
        let p2 = '<p>' + 'Year Founded: ' + towns[i].yearFounded + '</p>' 
        let p3 = '<p>' + 'Population: ' + towns[i].currentPopulation + '</p>' 
        let p4 = '<p>' + 'Annual Rain Fall: ' + towns[i].averateRainfall + '</p>' 
        let img = '<img src=images/' 
          + towns[i].photo 
          + ' alt=\"' 
          + towns[i].name 
          + '\" style=\"width: 200px;\">'

        card.innerHTML = openart 
           + opendiv 
           + h2 
           + p1 
           + p2 
           + p3 
           + p4 
           + closediv 
           + img;
           /*
           + closeart;
           */

        document.querySelector('div.cards').appendChild(card)
      }
    }
  })

/*function newFunction(card) {
   const newLocal = card.innerHTML = '<div class=\"data\">';
   card.innerHTML = '</div>';
}
*/