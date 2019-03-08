"use strict";

var bus = new Vue();


// put in created
// bus.$on('changeFC', (data)=>{
//  this.$data.FC = data;
//})

// put in functions for onclicks
// bus.$emit('changeFC, something from result, something from result)


//


$(function () { if ($('#app').length) {

  new Vue({
    el: '#app',
    data: {
      hello: 'hello world',
      page: 'home'
    },
    created: function() {
      this.getMessage();
      bus.$on('changePage', (data)=>{
          this.$data.page = data;
        })
    },
    methods: {
      getMessage: function() {
        $.ajax({
          url: `/frumweb/hello`,
          timeout: 1000,
          success: (result) => {
            this.$data.hello = result
            console.log(result)
            console.log(result)
            console.log('result')
            console.log('result')
            console.log(result)
          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    },
    template: `<div>
                <div class="sticky">
                  <my-header></my-header>
                  <nav-bar></nav-bar>
                </div>
                <div class="content">
                <img v-show="page == 'home'" id="the-couple" src="/assets/the_couple.jpg"/>
                <p v-show="page == 'home'" id="lorem">Tempor est ad veniam officia adipisicing cupidatat. Officia occaecat aute excepteur pariatur eiusmod sint culpa ullamco commodo exercitation est ad id anim. Consectetur aute ea esse et non. Esse id eu quis exercitation dolor do eiusmod. Non ipsum sunt pariatur cillum eiusmod Lorem. Voluptate elit do nisi sit deserunt Lorem elit qui cupidatat.</p>
                <destination v-show="page == 'destination'"></destination>
                <div id="wedding-party">
                  <groomsmen v-show="page == 'home'"></groomsmen>
                  <bridesmaids v-show="page == 'home'"></bridesmaids>
                </div>
                <schedule v-show="page == 'schedule'" />
                <images-carousel v-show="page == 'photos'"></images-carousel>
                <registry v-show="page == 'registry'"></registry>
                <accomodations v-show="page == 'accomodations'"></accomodations>
                <my-footer></my-footer>
                </div>
              </div>`
  })
}});


var headerHeight = 350;

$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#navigation-bar').removeClass('navbar-top');
    $('#navigation-bar').addClass('navbar-fixed-top');
} else {
    $('#navigation-bar').removeClass('navbar-fixed-top');
    $('#navigation-bar').addClass('navbar-top');
}
});  