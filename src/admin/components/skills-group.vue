<template lang="pug">
  .about-adm-grid__item-upper-row(v-if="editModeOn === false")
    input(type="text" :value="category.category").about-adm-grid__item-group-name
    .about-adm-grid__item-btns-wrap.about-edit-btns
      button(
        type="button"
        @click="editModeOn = true"
      ).about-adm-grid__item-edit
      button(
        @click="removeExistedCategory"
        type="button"
      ).about-adm-grid__item-del
      

  .about-adm-grid__item-upper-row(v-else)
    input(
      v-model="editedCategory.title"
      placeholder="Наименование группы"
      type="text" 
      ).about-adm-grid__item-group-name.active
    .about-adm-grid__item-btns-wrap.about-edit-btns
      button(
        @click="editCurrentCategory"
        type="button"
      ).about-adm-grid__item-ok
      button(
        type="button"
        @click="editModeOn = false"
      ).about-adm-grid__item-deny
</template>

<script>
  import { mapActions, mapState } from "vuex";
  export default {
    data() {
      return {
        editModeOn: false,
        editedCategory: {...this.category}
      }
    },
    props: {
      category: Object,
      skills: Array
    },
    methods: {
      ...mapActions("categories", ["removeCategory", "editCategory"]),
      async removeExistedCategory() {
        try {
          await this.removeCategory(this.category.id);
        } catch (error) {
          console.log(error.message);
          
        }
      },
      async editCurrentCategory() {
        try {
          await this.editCategory(this.editedCategory);
          this.editModeOn = false;
        } catch (error) {
          console.log(error.message);
          
        }
      }
    },
    
    
  }
</script>