
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (dataObject) {
      /*console.table(dataObject);*/
      const towns = dataObject['towns'];
      for (let i = 0; i < towns.length; i++) {
         /*console.log(towns[i].name)*/
         if ((towns[i].name == 'Preston') ||
            (towns[i].name == 'Soda Springs') ||
            (towns[i].name == 'Fish Haven')) {


            let card = document.createElement('section');

            let h2 = document.createElement('h2');
            h2.textContent = `${towns[i].name} `;
            card.appendChild(h2);

            let p1 = document.createElement('p1');
            p1.textContent = `motto: ${towns[i].motto} `;
            card.appendChild(p1);

            let p2 = document.createElement('p2');
            p2.textContent = `Year Founded: ${towns[i].yearFounded} `;
            card.appendChild(p2);


            let p3 = document.createElement('p3');
            p3.textContent = `Population:${towns[i].currentPopulation} `;
            card.appendChild(p3);

            let p4 = document.createElement('p4');
            p4.textContent = `Annual Rain Fall:${towns[i].averageRainfall} `;
            card.appendChild(p4);

            let img = document.createElement('img');
            img.setAttribute('src', `images/${towns[i].photo}`);

            img.alt = `${towns[i].name} ${towns[i].name}`;

            img.style.width = '200px';
            card.appendChild(img);


            document.querySelector('div.cards').appendChild(card);
         }
      }
   });