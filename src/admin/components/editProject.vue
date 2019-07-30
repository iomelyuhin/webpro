<template lang='pug'>
  .projects__item
    .projects__item-row
      h4.projects__item-title Редактирование работы
    .pojects__item-edit
      label.pojects__item-photo
        .projects__item-photo-text Перетащите или загрузите для загрузки изображения
        input(
          type="file" 
          accept="image/jpeg" 
          @change="handlePhotoUpload"
        ).pojects__item-photo-upload
      form.projects__item-content
        label.projects__item-content-label
          .projects__item-content-label-title Название
          input(
            v-model="project.title"
            type="text"
          ).projects__item-content-input
        label.projects__item-content-label Ссылка
          .projects__item-content-label-title
          input(
            v-model="project.link"
            type="text"
          ).projects__item-content-input
        label.projects__item-content-label Описание
          .projects__item-content-label-title
          textarea(
            v-model="project.description"
            name="projectContent", 
            cols="30", 
            rows="10"
          ).projects__item-content-textarea
        label.projects__item-content-label
          .projects__item-content-label-title Добавление тэга
          input(
            v-model="project.techs"
            type="text"
          ).projects__item-content-input
        ul.projects__item-content-tags
          li.projects__item-content-tags-item HTML
            button(type="button").projects__item-content-tags-item-del
          li.projects__item-content-tags-item CSS
            button(type="button").projects__item-content-tags-item-del
          li.projects__item-content-tags-item JavaScript
            button(type="button").projects__item-content-tags-item-del
        .projects__item-content-btn-wrap
          button(
            type="button"
            ).projects__item-content-btn-decline Отмена
          button(
            @click="addNewProject"
            type="button"
          ).projects__item-content-btn-save Загрузить

</template>

<script>
import { mapActions, mapState } from "vuex";
import { renderer, getAbsoluteImgPath } from "@/helpers/pictures";
import { log } from "util";

export default {
  props: {
    editModeOn: Boolean
  },
  data() {
    return {
      renderedPhoto: "",
      project: {
        id: 0,
        title: "",
        techs: "",
        link: "",
        photo: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState("projects", {
      projects: state => state.projects
    })
  },
  methods: {
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      this.project.photo = file;
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
      } catch (error) {
        console.log(error.message);
      }
    },
    ...mapActions("projects", ["addProject"]),
    async addNewProject() {
      try {
        await this.addProject(this.project);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>
