
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (dataObject) {
      /*console.table(dataObject);*/
      const prophets = dataObject['prophets'];
      for (let i = 0; i < prophets.length; i++) {
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         card.appendChild(h2);
        
         let dateOfBirth = document.createElement('dateOfBirth');
         dateOfBirth.textContent = prophets[i].dateOfBirth + ' ';
         card.appendChild(dateOfBirth);
        
        
         let birthPlace = document.createElement('birthPlace');
         birthPlace.textContent = prophets[i].birthPlace + ' ';
         card.appendChild(birthPlace);
        
        /*
         let img = image.setAttribute('src', prophets[i].imageurl); alt="Joseph Smith-0";
         img.textContent = prophets[i].img + ' ';
         card.appendChild(img);
        */



        
         document.querySelector('div.cards').appendChild(card);
      }
   });