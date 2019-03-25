"use strict";

Vue.component('registry', {
  data: function () {
    return {
      items: [
        {
          logo: './assets/bloomingdales.svg',
          link: 'https://www.bloomingdales.com/registry/wedding/guest/?perfectProxy=true&registryId=2400758&cm_sp=BWEDD_Find_Registry-_-View_GVR-_-n',
          name: 'Bloomingdales'
        },
        {
          logo: './assets/container.jpg',
          link: 'https://www.bloomingdales.com/registry/wedding/guest/?perfectProxy=true&registryId=2400758&cm_sp=BWEDD_Find_Registry-_-View_GVR-_-n',
          name: 'Container Store'
        },
        {
          logo: './assets/crate.png',
          link: 'https://www.bloomingdales.com/registry/wedding/guest/?perfectProxy=true&registryId=2400758&cm_sp=BWEDD_Find_Registry-_-View_GVR-_-n',
          name: 'Crate and Barrel'
        },
        {
          logo: './assets/casa.png',
          link: 'https://www.bloomingdales.com/registry/wedding/guest/?perfectProxy=true&registryId=2400758&cm_sp=BWEDD_Find_Registry-_-View_GVR-_-n',
          name: 'Casa',
          info: 'Please consider contributing to our donation to Casa St. Pete. Together we can help end domestic abuse while empowering survivors.'
        }
      ]
    }
  },
  template: `<div id="registry-div">
              <h1 class="title">Registry</h1>
              <div v-for="item in items" class="large-card card w-60">
                <div class="registry">
                  <img class="registry-img" :src="item.logo" />
                  <p>{{item.info}}</p>
                  <a class="registry-link" :href="item.link">{{item.name}}</a>
                </div>
              </div>
            </div>`,
});