"use strict";

Vue.component('carousel', {
  data: function () {
    return {
      index: 0,
      pic: './assets/new_years.png',
      images: [
        {
          src: './assets/new_years.png'
        },
        {
          src: './assets/bulldog.jpg'
        },
        {
          src: './assets/rowdies.jpg'
        },
        {
          src: './assets/the_couple.jpg'
        },
        {
          src: './assets/toledo.jpg'
        },
        {
          src: './assets/mahaffey.jpg'
        },
        {
          src: './assets/boys.jpg'
        },
        {
          src: './assets/safety.jpg'
        },
        {
          src: './assets/photoshoot1.jpg'
        },
        {
          src: './assets/photoshoot2.jpg'
        },
        {
          src: './assets/photoshoot3.jpg'
        },
        {
          src: './assets/photoshoot4.jpg'
        },
        {
          src: './assets/photoshoot5.jpg'
        },
        {
          src: './assets/photoshoot6.jpg'
        },
        {
          src: './assets/photoshoot6.jpg'
        },
        {
          src: './assets/photoshoot7.jpg'
        },
        {
          src: './assets/photoshoot8.jpg'
        },
        {
          src: './assets/photoshoot9.jpg'
        },
        {
          src: './assets/photoshoot10.jpg'
        },
        {
          src: './assets/photoshoot11.jpg'
        },
        {
          src: './assets/photoshoot12.jpg'
        },
        {
          src: './assets/photoshoot13.jpg'
        },
        {
          src: './assets/photoshoot14.jpg'
        },
        {
          src: './assets/photoshoot15.jpg'
        },
        {
          src: './assets/photoshoot16.jpg'
        },
        {
          src: './assets/photoshoot17.jpg'
        },
        {
          src: './assets/photoshoot18.jpg'
        },
        {
          src: './assets/photoshoot19.jpg'
        },
        {
          src: './assets/photoshoot20.jpg'
        },
        {
          src: './assets/photoshoot21.jpg'
        },
        {
          src: './assets/photoshoot22.jpg'
        }
      ]
    }
  },
  created() {
  },
  methods: {
    click(direction) {
      let last_index = this.$data.images.length - 1;
      if(direction == 'right'){
        $('#da-img').addClass('mySlides w3-animate-left');
        if(this.$data.index == last_index){
          this.$data.index = 0
        } else {
          this.$data.index = this.$data.index + 1
        }
      } else {
        $('#da-img').addClass('mySlides w3-animate-right');
        if(this.$data.index == 0){
          this.$data.index = last_index
        } else {
          this.$data.index = this.$data.index - 1
        }
      }
      let i = this.$data.index
      let images = this.$data.images
      this.$data.pic = images[i].src
      setTimeout(
        function(){
          $('#da-img').removeClass("mySlides w3-animate-right");
          $('#da-img').removeClass("mySlides w3-animate-left");
        }, 500);
    },
    whatPic() {
      $('#da-img').removeClass('mySlides w3-animate-top');
    }
  },
  template: `<div class="carousel-container">
              <div class="custom-carousel">
                <div id="image-container">
                  <img id="da-img" class="custom-img" :src="pic"/>
                </div>
              </div>
              <div class="carousel-buttons">
                <p class="side-arrow" v-on:click="click('left')"><</p>
                <p class="side-arrow" v-on:click="click('right')">></p>
              </div>
            </div>`,
});