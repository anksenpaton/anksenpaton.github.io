
const requestURL = 'js/businessdirectory.json';
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (dataObject) {
      /* console.table(dataObject); */
      const directory = dataObject['directory'];
      for (let i = 0; i < directory.length; i++) {
         let card = document.createElement('section');
         card.setAttribute('class', 'businesscard')
         
         let h2 = document.createElement('h3');
         h2.textContent = directory[i].name;
         card.appendChild(h2);

         let p1 = document.createElement('p1');
         p1.textContent = 'Address: ' + directory[i].address;
         card.appendChild(p1);

         let img1 = document.createElement('img');
         img1.setAttribute('src', directory[i].logo);
      
         img1.style.width = '100px';
         card.appendChild(img1);

         let url = document.createElement('a');
         url.setAttribute('href', 'https://' + directory[i].url );
         url.setAttribute('target', '_blank');
         url.setAttribute('style', 'text-decoration: none');
         url.innerText = directory[i].url;
         card.appendChild(url);

         document.querySelector('div.businesscards').appendChild(card);
      }
   });