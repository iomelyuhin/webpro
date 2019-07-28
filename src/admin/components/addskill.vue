<template lang='pug'>
  .about-adm-grid__item-lower-row
    input(
      v-model="skill.title"
      type="text" 
      placeholder="Новый навык"
    ).about-adm-grid__item-skill-name
    input(
      v-model="skill.percent"
      type="text" 
      value="100%"
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
          category: 955
        }
      }
    },
    methods: {
      ...mapActions('skills', ['addSkill']),
      ...mapActions('skills', ['fetchSkills']),
      async addNewSkill() {
        try {
          await this.addSkill(this.skill)

        } catch (error) {
          alert (error.message);
        }
      },
      // async fetchSkills() {
      //   try {
      //    // await this.addSkill(this.skill)

      //   } catch (error) {
      //     alert (error.message);
      //   }
      // } 
    },
    async created() {
    try {
      this.fetchSkills();
    } catch (error) {
      
    }
  }
  }
</script>
