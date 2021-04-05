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
       let card = document.createElement('article')
       card.classList.add('townclass')
      

       let opendiv = '<div class=\"towndata\">'
       let closediv = '</div>'

       let h2 = '<h2>' + towns[i].name + '</h2>'

       let p1 = '<p class=\"towntext\">' + 'Motto: ' + towns[i].motto + '</p>'
       let p2 = '<p class=\"towntext\">' + 'Year Founded: ' + towns[i].yearFounded + '</p>'
       let p3 = '<p class=\"towntext\">' + 'Population: ' + towns[i].currentPopulation + '</p>'
       let p4 = '<p class=\"towntext\">' + 'Annual Rain Fall: ' + towns[i].averageRainfall + '</p>'
       let img = '<img class=\"townimg\" src=images/'
         + towns[i].photo
         + ' alt=\"'
         + towns[i].name
         + '\" style=\" ;\">'

       card.innerHTML = opendiv
          + h2
          + p1
          + p2
          + p3
          + p4
          + closediv
          + img
       document.querySelector('div.cardstown').appendChild(card)
     }
   }
 })

/*function newFunction(card) {
  const newLocal = card.innerHTML = '<div class=\"data\">';
  card.innerHTML = '</div>';
}
*/