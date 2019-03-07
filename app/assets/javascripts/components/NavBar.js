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
              <div><p v-on:click="pageChange('home')" id="nav-p">Home</p></div>
              <p>|</p>
              <div><p v-on:click="pageChange('schedule')" id="nav-p">Schedule</p></div>
              <p>|</p>
              <div><p v-on:click="pageChange('photos')" id="nav-p">Photos</p></div>
              <p>|</p>
              <div><p v-on:click="pageChange('destination')" id="nav-p">Destination</p></div>
              <p>|</p>
              <div><p v-on:click="registry()" id="nav-p">Registry</p></div>
            </div>`,
});