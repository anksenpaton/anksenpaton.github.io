
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
         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         card.appendChild(h2);
        
         let p1 = document.createElement('p1');
         p1.textContent = 'Date of Birth:' + prophets[i].birthdate + ' ';
         card.appendChild(p1);
                
         let p2 = document.createElement('p2');
         p2.textContent = `Place of Birth:${prophets[i].birthplace} `;
         card.appendChild(p2);
        
         let img = document.createElement('img');
          
         img.setAttribute('src', prophets[i].imageurl);
         alt="Joseph Smith-0, Brigham Young-1";
         img.style.width= '200px';
         card.appendChild(img);
        
        
         document.querySelector('div.cards').appendChild(card);
      }
   });