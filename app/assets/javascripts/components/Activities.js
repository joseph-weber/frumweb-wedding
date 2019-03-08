"use strict";

Vue.component('activities', {
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
  template: `<div id="activities">
              <h1>Museums</h1>
              <div class="activity">
                <h2>The Dali Museum</h2>
                <img src="./assets/dali.jpg" />
                <br/>
                <p>Spectacular collection of Dali masterworks.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Duncan McClellan Gallery</h2>
                <img src="./assets/duncan.jpg" />
                <br/>
                <p>Local master glassblower's gallery. In warehouse arts district..</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Chihuly</h2>
                <img src="./assets/chihuly.jpg" />
                <br/>
                <p>Glass gallery of world class American glassblower, Dale Chihuly.</p>
                <a href="">Website</a>
              </div>
              <h1>Other attractions</h1>
              <div class="activity">
                <h2>Sunken Gardens</h2>
                <img src="./assets/sunken.jpg" />
                <br/>
                <p>Beautiful botanical gardens a short drive from downtown.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>St Pete Beach</h2>
                <img src="./assets/beach.jpg" />
                <br/>
                <p>#4 best beach in US according to TripAdvisor.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>North Straub Park</h2>
                <img src="./assets/straub.jpg" />
                <br/>
                <p>Walkable park right by the Tampa Bay. Walking and biking paths along the water.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Vinoy Resort and Golf Course</h2>
                <img src="./assets/vinoy.jpg" />
                <br/>
                <p>Historical hotel with bars, spa, pool, tennis and a wonderful golf course.</p>
                <a href="">Website</a>
              </div>
              <h1>Food and Beverage</h1>
              <div class="activity">
                <h2>Il Ritorno</h2>
                <img src="./assets/ritorno.jpg" />
                <br/>
                <p>Fine Italian dining with a creative flair. Our favorite restaurant.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Bodega</h2>
                <img src="./assets/bodega.jpg" />
                <br/>
                <p>Casual spot for Cuban sandwiches. St. Pete staple.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Hawkers Asian Street Fare</h2>
                <img src="./assets/hawkers.jpg" />
                <br/>
                <p>Lively spot for various Asian tapas-style bites.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Numex</h2>
                <img src="./assets/numex.jpg" />
                <br/>
                <p>Casual New Mexican style cantina.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Greenbench</h2>
                <img src="./assets/greenbench.jpg" />
                <br/>
                <p>Brewery with great outdoor space and excellent saisons.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Cycle</h2>
                <img src="./assets/cycle.jpg" />
                <br/>
                <p>Award-winning brewery with laidback attitude.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Trophy Fish</h2>
                <img src="./assets/trophy.jpg" />
                <br/>
                <p>Fresh fish and lively bar. Outdoor only.</p>
                <a href="">Website</a>
              </div>
              <h1>Shopping</h1>
              <div class="activity">
                <h2>Saturday Morning Market</h2>
                <img src="./assets/market.jpg" />
                <br/>
                <p>Farmer's market in the middle of downtown.</p>
                <a href="">Website</a>
              </div>
              <div class="activity">
                <h2>Sundial</h2>
                <img src="./assets/sundial.jpg" />
                <br/>
                <p>Downtown shopping plaza with restaurants, shops and a movie theater.</p>
                <a href="">Website</a>
              </div>
            </div>`,
});