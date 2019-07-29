<template lang="pug">
  ul.about-adm-grid__item-skills-list
    li(
      v-for="skill in skills"
      :key="skill.id"
    )
      skillAddBtns(
        :skill="skill"
        
      )
</template>

<style>
</style>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skills: Array,
    category: Object
  },
  components: {
    skillAddBtns: () => import("./skillAddBtns.vue")

  }
};
</script>