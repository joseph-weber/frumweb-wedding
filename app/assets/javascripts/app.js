"use strict";

$(function () { if ($('#app').length) {

  new Vue({
    el: '#app',
    data: {
      hello: 'hello world'
    },
    created: function() {
      this.getMessage();
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
                <my-header></my-header>
                <nav-bar></nav-bar>
              </div>`
  })
}});
