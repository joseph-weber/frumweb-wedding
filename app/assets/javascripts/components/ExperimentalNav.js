"use strict";

Vue.component('experimental-nav', {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    pageChange: function (page) {
      bus.$emit('changePage', page);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    // scrollToTop: () => {
    //   const c = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (c > 0) {
    //     window.requestAnimationFrame(this.$methods.scrollToTop);
    //     window.scrollTo(0, c - c / 400);
    //   }
    // },
    registry: function () {
      location.replace('http://bloomingdales.com');
    }
  },
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light nav-fill w-100" id="nav-bar-experiment">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
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

                <ul class="menu">
                  <li><a href="#work">Our Work</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>

              </div>
            </nav>`,
});

