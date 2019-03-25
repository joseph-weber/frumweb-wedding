"use strict";

Vue.component('images-carousel', {
  data: function () {
    return {
      items: [
        './assets/new_years.png',
        './assets/bulldog.jpg',
        './assets/rowdies.jpg',
        './assets/the_couple.jpg',
        './assets/toledo.jpg',
        './assets/mahaffey.jpg',
        './assets/boys.jpg',
        './assets/safety.jpg'
      ]
    }
  },
  template: `<div id="carousel-div">
              <h1 class="title">Images</h1>
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="around-image">
                    <img class="d-block" src="./assets/cien.jpg" alt="First slide">
                    </div>
                  </div>
                  <div v-for="(item, index) in items" class="carousel-item">
                    <div class="around-image">
                    <img class="d-block" :src="item" alt="Second slide">
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>`,
});