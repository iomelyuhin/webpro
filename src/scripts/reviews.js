import Vue from "vue";
import Flickity from 'vue-flickity';

const reviewsSlides = {
  template: "#reviews-slides",
  props: {
    review: Object
  }
}
const initialIndex = 2;
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
      width: null,
      flickityOptions: {
        initialIndex: initialIndex,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        adaptiveHeight: true,
        groupCells: 2

      }
    }
  },
  methods: {
    updateWidth(){
      this.width = window.innerWidth;
    },
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
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
    if (this.width < 450) {
      this.initialIndex = 1;
    }
    
  }
});