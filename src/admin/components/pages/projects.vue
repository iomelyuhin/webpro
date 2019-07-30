<template lang="pug">
  section.projects
    .container
      h3.projects__title Блок «Работы»
      .projects__item
      addProject(
        :editModeOn="editModeOn"
        @cancel="editModeOn = false"
        @addNewProject="editmodeOn = false"
      )
      ul.projects__grid
        li.projects__grid-add
          button(
            @click="editModeOn = true"
            type="button"
          ).add-btn
            .add-circle +
            .add-title Добавить работу
        projectsList(
          v-for="project in projects"
          :key="project.id"
        ) 
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      renderedPhoto: "",
      editModeOn: false
    };
  },
  components: {
    addProject: () => import("../addProject"),
    projectsList: () => import("../projectsList")
  },
  computed: {
    ...mapState("projects", {
      projects: state => state.projects
    })
  },

  methods: {
    ...mapActions("projects", ["fetchProjects", "addProject"])
  },

  async created() {
    try {
      this.fetchProjects();
    } catch (error) {}
  }
};
</script>

