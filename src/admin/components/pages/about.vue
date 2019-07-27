<template lang="pug">
  section.about-adm
    .container
      .about-adm__row
        h3.about-adm__title Блок "Обо мне"
        button(type="button"
        ).btn-add.btn-add--group +
      .about-adm-grid
        form.about-adm-grid__item
        
          skillsGroup
          
          skillsItem
          
          addSkill
        
        
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
      return {
        categories: {},
      }
    },
  components: {
    skillsItem: () => import("../skills-item.vue"),
    skillsGroup: () => import("../skills-group.vue"),
    addSkill: () => import("../addskill.vue")
  },
  // computed: {
  //   ...mapState("categories", state => state.categories)
  // },
  methods: {
    ...mapActions ('categories', ['addCategory']),
    ...mapActions("skills", ["fetchSkills"]),
      async addNewCategory() {
        try {
          this.addCategory(this.categories)
          console.log(this.categories);
          
        } catch (error) {
          alert (error.message);
          
        }
      },

  },
  async created() {
    try {
      this.fetchSkills();
    } catch (error) {
      
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
