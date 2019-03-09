"use strict";

Vue.component('schedule', {
  data: function () {
    return {
      items: [
        {
          date: 'Friday January 17',
          events: 
            [
              {
                time: '8 pm',
                event: 'Out of Town Guest Party',
                where: 'Intermezzo Coffee & Cocktail Bar',
                address: '655 2nd Ave S. St. Petersburg, FL'
              }
            ] 
        },
        {
          date: 'Saturday January 18',
          events: 
            [
              {
                time: '5:30pm',
                event: 'Galleries Open for Guests',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '6:30 pm',
                event: 'Wedding Reception',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '7:15 pm',
                event: 'Wedding Reception',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '8 pm',
                event: 'After Party',
                where: 'Che @ Ceviche Tapas',
                address: 'Address for Ceviche'
              }
            ]
        },
        {
          date: 'Sunday January 19',
          events: 
            [
              {
                time: '11 am',
                event: 'Brunch',
                where: 'Somewhere',
                address: 'Some Address'
              }
            ]
        }
      ]
    }
  },
  template: `<div id="schedule-div">
              <h1 class="title">Schedule</h1>
              <img id="venue-pic" src="/assets/wedding_invite.jpg" />
              <div class="card w-60 large-card" v-for="item in items">
                <h1 class="pac">{{item.date}}</h1>
                <div class="event" v-for="event in item.events">
                  <h2 class="pac">{{event.event}}</h2>
                  <p class="pac">Time: {{event.time}}</p>
                  <p class="pac">Where: {{event.where}}</p>
                  <p class="pac">Address: {{event.address}}</p>
                </div>
              </div>
            </div>`,
});