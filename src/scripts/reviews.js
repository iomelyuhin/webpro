import Vue from "vue";
import Flickity from 'vue-flickity';

const reviewsSlides = {
  template: "#reviews-slides",
  props: {
    review: Object
  }
}

new Vue({
  el: "#reviews-slider-wiget",
  template: "#slider-container",
  components: {
    reviewsSlides,
    Flickity
  },
  data () {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        adaptiveHeight: true,
        groupCells: 2

      }
    }
  },
  methods: {
    
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = data;
  }
});