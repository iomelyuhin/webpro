import Vue from 'vue';

const thumbs = {
  template: "#works-slider-thumbs",
  props: {
    works: Array
  }
}

const btns = {
  template: "#works-slider-btns",
  methods: {
    slide(direction) {
      this.$emit("slide", direction)
    }
  }
}

const display = {
  template: "#works-slider-display",
  components: {
    btns, thumbs
  },
  props: {
    works: Array,
    currentWork: Object
  }
}

const tags = {
  template: "#works-slider-tags"
}

const info = {
  template: "#works-slider-info",
  components: {tags},
  props: {
    currentWork: Object
  }
}

new Vue ({
  el: "#works-slider-component",
  template: "#works-slider-container",
  components: {
    display, info
  },
  data () {
    return {
      works: [],
      currentWork: {},
      currentIndex: 0
    }
  },
  methods: {
    addArrWithReqImgs(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;

        return item
      })
    },
    handleSlide(direction) {
      console.log(direction);
      
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.addArrWithReqImgs(data);
    this.currentWork = this.works[this.currentIndex];
  }
});