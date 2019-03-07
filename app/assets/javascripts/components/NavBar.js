"use strict";

Vue.component('nav-bar', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div id="navigation-bar">
              <div><a href="/"><p>Home</p></a></div>
              <p>|</p>
              <div><a href="/"><p>Schedule</p></a></div>
              <p>|</p>
              <div><a href="/"><p>Photos</p></div>
              <p>|</p>
              <div><a href="/"><p>Destination</p></a></div>
              <p>|</p>
              <div><a href="/"><p>Registry</p></a></div>
            </div>`,
});