<template lang='pug'>
  .about-adm-grid__item-lower-row
    input(
      v-model="skill.title"
      type="text" 
      placeholder="Новый навык"
      :class="{blocked : formIsBlocked}"
    ).about-adm-grid__item-skill-name
    input(
      v-model="skill.percent"
      type="text" 
      value="100%"
      :class="{blocked : formIsBlocked}"
    ).about-adm-grid__item-skill-value
    button(type="button"
    @click="addNewSkill").btn-add.btn-add--skill +
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        skill: {
          title: "",
          percent: "",
          category: this.category.id
        },

        formIsBlocked: false
      }
    },
    props: {
      category: Object
    },
    methods: {
      ...mapActions('skills', ['addSkill']),
      async addNewSkill() {
        this.formIsBlocked = true;
        try {
          await this.addSkill(this.skill)
          this.skill.title = ""
          this.skill.percent = ""
        } catch (error) {
          alert (error.message);
        } finally {
          this.formIsBlocked = false;

        }
      }
    },
  }
</script>
