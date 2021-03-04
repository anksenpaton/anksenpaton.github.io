
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (dataObject) {
      console.table(dataObject);
      const prophets = dataObject['prophets'];
      for (let i = 0; i < prophets.length; i++) {
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         let dob = document.createElement('dob');
         let birthplace = document.createElement('birthplace');
         let img = document.createElement('img');
         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         card.appendChild(h2);
         dob.textContent = prophets[i].dob + ' ' + prophets[i].dob;


         
         image.setAttribute('src', prophets[i].imageurl); alt=" ";
         document.querySelector('div.cards').appendChild(card);
      }
   });