<template lang="pug">
  .about-adm-grid__item-skills-list-row(v-if="editModeOn === false")
    input(type="text" :value="skill.title").about-adm-grid__item-list-skill
    input(type="text" :value="skill.percent").about-adm-grid__item-list-value
    .about-adm-grid__item-btns-wrap.about-edit-btns
      button(type="button"
        @click="editModeOn = true"
      ).about-adm-grid__item-edit
      button(
        @click="removeExistedSkill"
        type="button"
      ).about-adm-grid__item-del

  .about-adm-grid__item-skills-list-row(v-else)
    input(type="text" v-model="editedSkill.title").about-adm-grid__item-list-skill.active
    input(type="text" v-model="editedSkill.percent").about-adm-grid__item-list-value.active
    .about-adm-grid__item-btns-wrap.about-edit-btns.active
      button(type="button"
        @click="editCurrentSkill"
      ).about-adm-grid__item-ok
      button(
        @click="editModeOn = false"
        type="button"
      ).about-adm-grid__item-deny
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editModeOn: false,
      editedSkill: {...this.skill}
    }
  },
  props: {
    skill: Object
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
        
      } catch (error) {
        console.log(error.message);
      }
    },
    async editCurrentSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editModeOn = false;
      } catch (error) {
        
        console.log(error.message);
      }
    }
  }
};
</script>