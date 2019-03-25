"use strict";

Vue.component('couple', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div class="couple-div">
              <img class="couple-item" id="the-couple" src="/assets/the_couple.jpg"/>
              <h1 class="couple-item">Our Story</h1>
              <p class="couple-item" id="lorem">
                The two of us met through mutual friends in 2016 (thanks Joe M, Lizzie and Geoff). On Joe's first weekend in St. Pete, the two of us went on the first of what would become many dates. After a fast friendship developed, we quickly realized that a romance had kindled. During a governor imposed house-arrest and curfew during Hurricane Irma, we decided to make it official.. once Mogli and Sam said they were okay with that, of course. Over the past couple of years, it became obvious that we had each found a bestfriend and partner for life. On a holiday trip this past December, Joseph proposed on the top of Jupiter Lighthouse. After some serious waterworks, Jackie said yes and we've been counting down the days in anticipation of celebrating this lifechanging commitment with all of you.
              </p>
            </div>`,
});