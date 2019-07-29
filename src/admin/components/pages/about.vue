<template lang="pug">
  section.about-adm
    .container
      .about-adm__row
        h3.about-adm__title Блок "Обо мне"
        button(type="button"
          @click="addNewCategory"
        ).btn-add.btn-add--group +
      .about-adm-grid
        form.about-adm-grid__item(
          v-for="category in categories"
        )
        
          skillsGroup(
            :category="category"
          )
          
          skillsItem(
            :category="category"
            :skills="filterSkillsByCategoryId(category.id)"
          )
          
          addSkill(
            :category="category"
          )
        
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      category: {
        title: "Новая группа"
      }
    };
  },
  components: {
    skillsItem: () => import("../skills-item.vue"),
    skillsGroup: () => import("../skills-group.vue"),
    addSkill: () => import("../addskill.vue")
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    }),
    ...mapState("skills", {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions("categories", ["fetchCategories", "addCategory"]),
    ...mapActions("skills", ["fetchSkills"]),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
    async addNewCategory() {
      try {
        await this.addCategory(this.category);
      } catch (error) {
        alert(error.message);
      }
    }
  },
  async created() {
    try {
      this.fetchCategories();
    } catch (error) {
      error.response.data.error || error.response.data.message;
    }
    try {
      this.fetchSkills();
    } catch (error) {
      error.response.data.error || error.response.data.message;
    }

  }
};
</script>

