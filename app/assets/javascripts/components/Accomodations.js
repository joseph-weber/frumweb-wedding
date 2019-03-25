"use strict";

Vue.component('accomodations', {
  data: function () {
    return {
      items: [
        {
          image: './assets/hyatt.jpg',
          link: '#',
          name: 'Hyatt Place St. Pete',
          description: 'Right across from the James Museum and in the heart of downtown. Walking distance from dozens of restaurants and bars. Not far from the Dali, Museum of Fine Arts and Chihuly Collection. Brand new construction.',
          block: '10 rooms',
          link: 'https://www.hyatt.com/en-US/hotel/florida/hyatt-place-st-petersburg-downtown/piezd'
        },
        {
          image: './assets/vinoy_accom.jpg',
          link: '#',
          name: 'The Vinoy Resort & Golf Club',
          description: 'Luxurious resort in the Northern part of downtown. Filled with plenty of activities and amenities, this is a great place if you want to take a mini-vacation while in St. Pete.',
          block: '10 rooms',
          link: 'https://www.marriott.com/hotels/travel/tpasr-the-vinoy-renaissance-st-petersburg-resort-and-golf-club/'
        },
        {
          image: './assets/hilton.jpg',
          link: '#',
          name: 'Hilton St. Pete',
          description: 'A minute walk from the water, this hotel gives you access to downtown St. Pete like no other. This hotel includes a pool, some wonderful views and a number of food/drink options.',
          block: '6 rooms',
          link: 'https://www3.hilton.com/en/hotels/florida/hilton-st-petersburg-bayfront-SPTSHHF/index.html'
        }
      ]
    }
  },
  template: `<div id="accomodations-div">
              <h1 class="title">Accomodations</h1>
              <div v-for="item in items" class="large-card card w-60">
                <div class="accomodation">
                  <h1 class="accomodation-item" style="text-align: center">{{item.name}}</h1>
                  <img class="accomodation-img" :src="item.image" />
                  <p class="accomodation-item">{{item.description}}</p>
                  <a class="registry-link accomodation-item" :href="item.link"></a>
                </div>
              </div>
            </div>`,
});