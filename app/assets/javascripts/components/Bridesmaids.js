"use strict";

Vue.component('bridesmaiden', {
  data: function () {
    return {
      items: [
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Matron of Honour',
          name: 'Kim Frumkin'
        },
        {
          image: "./assets/blair.jpg",
          role: 'Bridesmaid',
          name: 'Blaire Abbey',
          id: 'blaire'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Erica Benstock'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Lizzie McLain'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Mary Weber'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Samantha Weber'
        }
      ]
    }
  },
  template: `<div class="wedding-party">
              <div v-for="item in items" class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{item.role}}</h5>
                  <div class="avatar" :id="item.id">
                  </div>
                  <p class="card-text">{{item.name}}</p>
                </div>
              </div>
            </div>`
});