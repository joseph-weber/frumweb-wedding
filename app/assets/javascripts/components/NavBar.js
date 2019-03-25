"use strict";

Vue.component('nav-bar', {
  data: function () {
    return {
      dropDown: false
    }
  },
  created: function() {
    if ($(window).width() > 700) {
      this.$data.dropDown = false;
    }
  },
  methods: {
    pageChange: function (page) {
      bus.$emit('changePage', page);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    dropItDown: function () {
      bus.$emit('hamburgerClick');
      this.$data.dropDown = !this.$data.dropDown;
    },
  },
  template: `<nav>
              <div id="navigation-bar">
                <div class="nav-div"><p v-on:click="pageChange('home')" class="nav-p">Home</p></div>
                <p class="nav-p">|</p>
                <div class="nav-div"><p v-on:click="pageChange('schedule')" class="nav-p">Schedule</p></div>
                <p class="nav-p">|</p>
                <div class="nav-div"><p v-on:click="pageChange('photos')" class="nav-p">Photos</p></div>
                <p class="nav-p">|</p>
                <div class="nav-div"><p v-on:click="pageChange('destination')" class="nav-p">Destination</p></div>
                <p class="nav-p">|</p>
                <div class="nav-div"><p v-on:click="pageChange('registry')"  class="nav-p">Registry</p></div>
                <p class="nav-p">|</p>
                <div class="nav-div"><p v-on:click="pageChange('accomodations')"  class="nav-p">Accomodations</p></div>
              </div>
              <div id="hamburger-div" class="disappear">
                <img v-on:click="dropItDown()" src="./assets/hamburger_menu.png" style="width: 2rem; height: 90%; margin: 0 3px;"/>
              </div>
            </nav>`,
});

