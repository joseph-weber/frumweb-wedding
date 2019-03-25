"use strict";

Vue.component('activities', {
  data: function () {
    return {
      category: [],
      items: [
        {
          type: 'Museums',
          locations: 
            [
              {
                title: 'Dali',
                image: './assets/dali.jpg',
                description: 'Spectacular collection of Dali masterworks.',
                link: 'https://thedali.org/'
              },
              {
                title: 'Duncan McClellan Gallery',
                image: './assets/duncan.jpg',
                description: 'Local master glassblower\'s gallery. In warehouse arts district.',
                link: 'https://dmglass.com/'
              },
              {
                title: 'Chihuly',
                image: './assets/chihuly.jpg',
                description: 'Glass gallery of world class American glassblower, Dale Chihuly.',
                link: 'http://www.moreanartscenter.org/chihuly/'
              }
            ] 
        },
        {
          type: 'Restaurants',
          locations: 
            [
              {
                title: 'Il Ritorno',
                image: './assets/ritorno.jpg',
                description: 'Fine Italian dining with a creative flair. Our favorite restaurant.',
                link: 'https://www.ilritornodowntown.com/'
              },
              {
                title: 'Bodega',
                image: './assets/bodega.jpg',
                description: 'Casual spot for Cuban sandwiches. St. Pete staple.',
                link: 'http://eatatbodega.com/'
              },
              {
                title: 'Hawkers Asian Street Fare',
                image: './assets/hawkers.jpg',
                description: 'Lively spot for various Asian tapas-style bites.',
                link: 'https://eathawkers.com/st-petersburg-fl/'
              },
              {
                title: 'Numex',
                image: './assets/numex.jpg',
                description: 'Casual New Mexican style cantina.',
                link: 'http://numexchile.com/'
              },
              {
                title: 'Trophy Fish',
                image: './assets/trophy.jpg',
                description: 'Fresh fish and lively bar. Outdoor only.',
                link: 'http://trophyfishstpete.com/'
              }
            ]
        },
        {
          type: 'Other Attractions',
          locations: 
            [
              {
                title: 'Sunken Gardens',
                image: './assets/sunken.jpg',
                description: 'Beautiful botanical gardens a short drive from downtown.',
                link: 'http://www.stpete.org/attractions/sunken_gardens/index.php'
              },
              {
                title: 'St Pete Beach',
                image: './assets/beach.jpg',
                description: '#4 best beach in US according to TripAdvisor.',
                link: 'https://www.visitstpeteclearwater.com/communities/st-pete-beach'
              },
              {
                title: 'North Straub Park',
                image: './assets/straub.jpg',
                description: 'Walkable park right on the Tampa Bay. Walking and biking paths along the water.',
                link: 'http://www.stpeteparksrec.org/north-straub-park.html'
              },
              {
                title: 'Vinoy Resort and Golf Course',
                image: './assets/vinoy.jpg',
                description: 'Historical hotel with bars, spa, pool, tennis and a wonderful golf course.',
                link: 'https://www.marriott.com/hotels/travel/tpasr-the-vinoy-renaissance-st-petersburg-resort-and-golf-club/'
              }
            ]
        },
        {
          type: 'Bars & Breweries',
          locations: 
            [
              {
                title: 'Greenbench',
                image: './assets/greenbench.jpg',
                description: 'Brewery with great outdoor space and excellent saisons.',
                link: 'http://greenbenchbrewing.com/'
              },
              {
                title: 'Cycle',
                image: './assets/cycle.jpg',
                description: 'Award-winning brewery with laidback ambience.',
                link: 'https://cyclebrewing.com/'
              },
              {
                title: 'Try Wine',
                image: './assets/trywine.jpg',
                description: 'Wine tasting room with dozens of wins to choose from. On tap!',
                link: '#'
              }
            ]
        },
        {
          type: 'Shopping',
          locations: 
            [
              {
                title: 'Saturday Morning Market',
                image: './assets/market.jpg',
                description: 'Farmer\'s market in the middle of downtown',
                link: 'https://saturdaymorningmarket.com/'
              },
              {
                title: 'Sundial',
                image: './assets/sundial.jpg',
                description: 'Downtown shopping plaza with restaurants, shops and a movie theater.',
                link: 'https://www.sundialstpete.com/'
              }
            ]
        },
      ]
    }
  },
  created: function() {
    bus.$on('changePage', (data)=>{
      this.$data.category = [];
    })
  },
  updated: function () {
      bus.$on('typeChange', (data)=>{
          this.$data.category = data;
        })
      },
  methods: {
    click: function(type) {
      let temp = this.$data.category
      if (temp.indexOf(type) != -1){
        this.$data.category= this.$data.category.filter(function(element) {
          return element !== type;
        })
      } else {
        this.$data.category.push(type);
      }
    },
    checkThings: function(type) {
      let temp = this.$data.category;
      return temp.indexOf(type) != -1
    }
  },
  template: `<div id="activities">
              <div class="activity-category" v-for="(item, index) in items">
                <div class="card w-80 category-card">
                  <div class="activity-blank"></div>
                  <h1
                  class="activity-title"
                  :value="item.type"
                  >
                    {{item.type}}
                  </h1>
                  <img v-on:click="click(item.type)" class="arrow" src="./assets/down-arrow.png" />
                </div>
                <div
                  v-show="checkThings(item.type)"
                  class="card w-80 activity"
                  v-for="location in item.locations"
                  >
                  <h2>{{location.title}}</h2>
                  <img :src="location.image" />
                  <br/>
                  <p>{{location.description}}</p>
                  <a :href="location.link">Website</a>
                </div>
              </div>
            </div>`,
});