<template lang="pug">
li.projects__grid-item
  img(:src="getAbsoluteImgPath").projects__grid-item-photo
  .projects__grid-item-content
    .projects__grid-item-title {{project.title}}
    .projects__grid-item-descr {{project.description}}
    a.projects__grid-item-link {{project.link}}
    ul.projects__item-content-tags
      li(v-for="tag in tagsArray").projects__item-content-tags-item {{tag}}
    .projects__grid-item-controls
      .controls-wrap
        button(type="button" @click="editCurrentProject").controls-edit Править
      .projects__grid-item-controls-wrap
        button(type="button" @click="deleteCurrentProject").controls-del Удалить

</template>

<script>
import requests  from "../requests"
import {mapActions, mapState, mapMutations} from "vuex"
export default {
  data() {
    return {
      tagsString: this.project.techs,
      tagsArray: [],
    }
  },
  props: {
    project: Object
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.project.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    },
  },
  watch: {
    tagsString : function(val) {
      console.log('lol')
    }
  },
  methods: {
    ...mapActions('projects', ['deleteProject']),
    ...mapMutations("projects", ["SET_CURRENT_PROJECT"]),
    deleteCurrentProject() {
      this.deleteProject(this.project.id);
    },
    editCurrentProject() {
      this.SET_CURRENT_PROJECT(this.project.id);
      this.splitTags();
      this.$emit("editProject");
    },
    splitTags() {
      this.tagsArray = this.project.techs.split(',')
    }
  },
  created() {
    this.splitTags();
  }
}
</script>

