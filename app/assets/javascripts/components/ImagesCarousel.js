"use strict";

Vue.component('images-carousel', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div id="carousel">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://buzzsharer.com/wp-content/uploads/2016/03/Pomeranian-x-Bichon-Frise.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51ys%2BqODSgL.jpg" alt="Third slide">
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