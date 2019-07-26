<template lang='pug'>
  .about-adm-grid__item-lower-row
    input(type="text" placeholder="Новый навык").about-adm-grid__item-skill-name
    input(type="text" value="100%").about-adm-grid__item-skill-value
    button(type="button"
    @click="addNewSkill").btn-add.btn-add--skill +
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions('skills', ['addSkill']),
      addNewSkill() {
        this.addSkill()
      } 
    }
  }
</script>
