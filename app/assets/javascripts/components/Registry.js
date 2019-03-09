"use strict";

Vue.component('registry', {
  data: function () {
    return {
      items: [
        {
          logo: './assets/bloomingdales.svg',
          link: '#',
          name: 'Bloomingdales'
        },
        {
          logo: './assets/container.jpg',
          link: '#',
          name: 'Container Store'
        },
        {
          logo: './assets/crate.png',
          link: '#',
          name: 'Crate and Barrel'
        }
      ]
    }
  },
  template: `<div id="registry-div">
              <h1 class="title">Registry</h1>
              <div v-for="item in items" class="large-card card w-60">
                <div class="registry">
                  <img class="registry-img" :src="item.logo" />
                  <a class="registry-link" :href="item.link">{{item.name}}</a>
                </div>
              </div>
            </div>`,
});