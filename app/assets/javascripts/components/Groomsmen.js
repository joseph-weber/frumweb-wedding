"use strict";

Vue.component('groomsmen', {
  data: function () {
    return {
      items: [
        {
          image: './assets/david.jpg',
          role: 'Best Man',
          name: 'David Weber'
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
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'Zach Frumkin'
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
                  <h5 class="card-title">{{item.role}}</h5>
                  <img class="avatar" :src="item.image" />
                  <p class="card-text">{{item.name}}</p>
                </div>
              </div>
            </div>`
});