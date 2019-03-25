"use strict";

Vue.component('groomsmen', {
  data: function () {
    return {
      items: [
        {
          image: './assets/david.jpg',
          role: 'Best Man',
          name: 'David Weber',
          id: 'david'
        },
        {
          image: "https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1",
          role: 'Groomsman',
          name: 'Rob Weber'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'John van Fechtmann'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'Phil Rimmler'
        },
        {
          image: './assets/zach.png',
          role: 'Groomsman',
          name: 'Zach Frumkin',
          id: 'zach'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'Zubair Ravat'
        }
      ]
    }
  },
  template: `<div class="wedding-party">
              <div v-for="item in items" class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">{{item.name}}</h5>
                  <div class="avatar" :id="item.id">
                  </div>
                  <p class="card-text">{{item.role}}</p>
                </div>
              </div>
            </div>`
});