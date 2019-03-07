"use strict";

Vue.component('nav-bar', {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    pageChange: function (page) {
      bus.$emit('changePage', page)
    },
    registry: function () {
      console.log('registry');
      location.replace('http://bloomingdales.com');
    }
  },
  template: `<div id="navigation-bar">
              <div><p v-on:click="pageChange('home')" class="nav-p">Home</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('schedule')" class="nav-p">Schedule</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('photos')" class="nav-p">Photos</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('destination')" class="nav-p">Destination</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="registry()" class="nav-p">Registry</p></div>
            </div>`,
});