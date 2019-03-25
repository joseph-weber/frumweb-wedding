"use strict";

Vue.component('modal', {
  data: function () {
    return {
      dropDown: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created(){
    bus.$on('hamburgerClick', (data)=>{
      this.$data.dropDown = !this.$data.dropDown;
    })
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
  destroyed() {
      window.removeEventListener('resize', this.handleResize)
  },
  updated(){
    if (window.innerWidth > 500) {
      this.$data.dropDown = false;
      bus.$emit('tooBig');
    }
  },
  mounted() {
  },
  methods: {
    pageChange: function (page) {
      bus.$emit('changePage', page);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    dropItDown: function () {
      bus.$emit('hamburgerClick');
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  template: `<div id="modal-container" v-show="dropDown" v-if="this.window.width < 500" class="modal-dialog modal-lg">
              <div class="modal-content">
                <div>
                  <h1 v-on:click="dropItDown()" class="modal-p">X</h1>
                </div>
                <p v-on:click="pageChange('home'); dropItDown()" class="modal-p">Home</p>
                <p v-on:click="pageChange('schedule'); dropItDown()" class="modal-p">Schedule</p>
                <p v-on:click="pageChange('photos'); dropItDown()" class="modal-p">Photos</p>
                <p v-on:click="pageChange('destination'); dropItDown()" class="modal-p">Destination</p>
                <p v-on:click="pageChange('registry'); dropItDown()" class="modal-p">Registry</p>
                <p v-on:click="pageChange('accomodations'); dropItDown()" class="modal-p">Accomodations</p>
              </div>
            </div>`,
});