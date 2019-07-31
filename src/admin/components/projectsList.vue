<template lang="pug">
  div
    li.projects__grid-item
      img(:src="`https://webdev-api.loftschool.com/${project.photo}`").projects__grid-item-photo
      .projects__grid-item-content
        .projects__grid-item-title {{project.title}}
        .projects__grid-item-descr {{project.description}}
        a.projects__grid-item-link {{project.link}}
        .projects__grid-item-controls
          .controls-wrap
            button(type="button").controls-edit Править
          .projects__grid-item-controls-wrap
            button(
              @click="removeCurrentProject"
              type="button"
            ).controls-del Удалить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    project: Object
  },
  methods: {
    ...mapActions("projects", ["removeProject"]),
    async removeCurrentProject() {
      try {
        await this.removeProject(this.project.id);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>