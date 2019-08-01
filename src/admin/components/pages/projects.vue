<template lang="pug">
section.projects
  .container
    h3.projects__title Блок «Работы»
    addProject(
      v-if="addProjectMode"
      :addProjectMode="addProjectMode"
      @cancelItem = "addProjectMode = false"
    )
    editProject(
      v-if="editProjectMode"
      @cancelItem = "editProjectMode = false"
    )
    ul.projects__grid
      li.projects__grid-add
        button(
          type="button" 
          @click="addProjectMode = true").add-btn
          .add-circle +
          .add-title Добавить работу
      projectsGridItem(
        v-for="project in projects"
        :project="project"
        :key="project.id"
        @editProject="editProjectMode = true"
      )
      
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      addProjectMode: false,
      editProjectMode: false
    };
  },
  components: {
    addProject: () => import("../addProject.vue"),
    editProject: () => import("../editProject.vue"),
    projectsGridItem: () => import("../projectsGridItem.vue")
  },
  computed: {
    ...mapState("projects", {
      projects: state => state.projects
    })
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"])
  },
  created() {
    this.fetchProjects();
  }
};
</script>

