"use strict";

Vue.component('my-header', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div id="whole-header">
              <div class="icon-div">
                <img class="icon" src="https://thejamesmuseum.org/wp-content/uploads/2018/09/JM_19.jpg" />
              </div>
              <div class="middle">
                <p id="couple-name">Jaclyn and Joseph</p>
                <p>January 18 : St. Petersburg, FL</p>
              </div>
              <div></div>
            </div>`,
});