<template lang="pug">
  section.about-adm
    .container
      .about-adm__row
        h3.about-adm__title Блок "Обо мне"
        button(type="button").btn-add.btn-add--group +
      .about-adm-grid
        form.about-adm-grid__item
        
          skillsGroup
          
          skillsItem
          
          addSkill
        
        
</template>

<script>
export default {
  components: {
    skillsItem: () => import("../skills-item.vue"),
    skillsGroup: () => import("../skills-group.vue"),
    addSkill: () => import("../addskill.vue")
  }
}
</script>

<style lang="postcss" scoped>

</style>
