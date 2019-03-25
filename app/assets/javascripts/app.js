"use strict";

var bus = new Vue();

$(function () { if ($('#app').length) {

  new Vue({
    el: '#app',
    data: {
      hello: 'hello world',
      page: 'home',
      dropDown: false,
      big: true,
      modal: false
    },
    created: function() {
      this.getMessage();
      bus.$on('changePage', (data)=>{
          this.$data.page = data;
        })
      bus.$on('hamburgerClick', (data)=>{
        this.$data.dropDown = !this.$data.dropDown;
      })
      bus.$on('tooBig', (result)=>{
        this.$data.modal = false;
        this.$data.dropDown = false;
        this.$data.page = this.$data.page;
      })
    },
    updated: function() {
      bus.$on('tooBig', (result)=>{
        this.$data.modal = false;
        this.$data.dropDown = false;
        this.$data.page = this.$data.page;
      })
    },
    methods: {
      getMessage: function() {
        $.ajax({
          url: `/frumweb/hello`,
          timeout: 1000,
          success: (result) => {
            this.$data.hello = result
          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    },
    template: `<div>
                  <modal v-show="modal" />
                <div v-show="!modal" >
                <div v-show="!dropDown">
                  <div class="sticky">
                    <my-header></my-header>
                    <nav-bar></nav-bar>
                  </div>
                  <div class="content">
                    <couple v-show="page == 'home'"></couple>
                    <destination v-show="page == 'destination'"></destination>
                    <div id="wedding-party" style="display: flex; flex-direction: column; text-align: center">
                      <h1 v-show="page == 'home'">Primary Enablers</h1>
                      <br/>
                      <div id="wedding-party">
                      <groomsmen v-show="page == 'home'"></groomsmen>
                      <bridesmaiden v-show="page == 'home'"></bridesmaiden>
                      </div>
                    </div>
                    <schedule v-show="page == 'schedule'" />
                    <carousel v-show="page == 'photos'"></carousel>
                    <registry v-show="page == 'registry'"></registry>
                    <accomodations v-show="page == 'accomodations'"></accomodations>
                    <my-footer></my-footer>
                  </div>
                </div>
                </div>
              </div>`
  })
}});


var headerHeight = 320;

$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#navigation-bar').removeClass('navbar-top');
    $('#navigation-bar').addClass('navbar-fixed-top');
    $('#hamburger-div').removeClass('navbar-top');
    $('#hamburger-div').addClass('navbar-fixed-top');
    $('#modal-container').removeClass('modal-dialog modal-lg');
    $('#modal-container').addClass('disappear');
} else {
    $('#navigation-bar').removeClass('navbar-fixed-top');
    $('#navigation-bar').addClass('navbar-top');
    $('#hamburger-div').removeClass('navbar-fixed-top');
    $('#hamburger-div').addClass('navbar-top');
    $('#modal-container').removeClass('disappear');
    $('#modal-container').addClass('modal-dialog modal-lg');
}
});  



function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() > 500) {
        $('#navigation-bar').addClass('exper-nav');
        $('#navigation-bar').removeClass('disappear');
        $('#hamburger-div').addClass('disappear');
        $('#hamburger-div').removeClass('hamburger-nav');
    }
    else {
        $('#navigation-bar').removeClass('exper-nav');
        $('#navigation-bar').addClass('disappear');
        $('#hamburger-div').removeClass('disappear');
        $('#hamburger-div').addClass('hamburger-nav');
    }
}

$(document).ready(function() {
    checkWidth(true);
    $(window).resize(function() {
        checkWidth(false);
    });
});