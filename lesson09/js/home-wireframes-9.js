
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (dataObject) {
      console.table(dataObject);
      const towndata = dataObject['towndata'];
      for (let i = 0; i < towndata.length; i++) {
         let card = document.createElement('section');

         let h2 = document.createElement('h2');
         h2.textContent = towndata[i].name + ' ' + towndata[i].lastname;
         card.appendChild(h2);

         let p1 = document.createElement('p1');
         p1.textContent = 'Date of Birth: ' + towndata[i].birthdate + ' ';
         card.appendChild(p1);


         let p2 = document.createElement('p2');
         p2.textContent = `Place of Birth:${towndata[i].birthplace} `;
         card.appendChild(p2);


         let img = document.createElement('img');
         img.setAttribute('src', towndata[i].imageurl);

         img.alt = `${towndata[i].name} ${towndata[i].lastname}`;
         
         img.style.width = '200px';
         card.appendChild(img);


         document.querySelector('div.cards').appendChild(card);
      }
   });