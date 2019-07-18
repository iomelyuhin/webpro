import Vue from 'vue';

const thumbs = {
  template: "#works-slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
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
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    reversedWorks() {
      return [...this.works].reverse()
    }
  }
}

const tags = {
  template: "#works-slider-tags",
  props: {
    tags: Array
  }
}

const info = {
  template: "#works-slider-info",
  components: { tags },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  },
}

new Vue({
  el: "#works-slider-component",
  template: "#works-slider-container",
  components: {
    display, info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  watch: {
    currentIndex(value) {
      const worksLenghtFromZero = this.works.length - 1;
      if (value < 0) this.currentIndex = 0;
      if (value > worksLenghtFromZero) this.currentIndex = worksLenghtFromZero;
      
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
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
      switch (direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }
    },
    chooseSlide(index) {
      this.currentIndex = index
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.addArrWithReqImgs(data);
  }
});