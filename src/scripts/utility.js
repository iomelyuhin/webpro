import Vue from "vue";

const utility = {
  template: "#utility",
  props: {
    perc: Number,
    name: String
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = 421 + (dashArray / 100) * this.perc;
      console.log(percent);
      
      circle.style.strokeDasharray = percent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
}

const row = {
  template: "#utility-row",
  props: {
    util: Object
  },
  components: {
    utility
  }
}

new Vue({
  el: "#utility-wiget",
  template: "#utility-list",
  components: {
    row
  },
  data () {
    return {
      utilities: []
    }
  },
  created() {
    const data = require("../data/skills.json");
    this.utilities = data;
  }
});