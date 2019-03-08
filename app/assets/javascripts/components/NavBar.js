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
  template: `<div id="navigation-bar" class="navbar navbar-default navbar-top topnav" role="navigation">
              <div><p v-on:click="pageChange('home')" class="nav-p">Home</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('schedule')" class="nav-p">Schedule</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('photos')" class="nav-p">Photos</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('destination')" class="nav-p">Destination</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('registry')"  class="nav-p">Registry</p></div>
              <p class="nav-p">|</p>
              <div><p v-on:click="pageChange('accomodations')"  class="nav-p">Accomodations</p></div>
            </div>`,
});