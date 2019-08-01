<template lang="pug">
.projects__item
  .projects__item-row
    h4.projects__item-title Добавление работы
  .pojects__item-edit
    .projects__add-img(v-if="!chooseImage")
      label.pojects__item-photo
        .projects__item-photo-text Перетащите или загрузите для загрузки изображения
        a.pojects__item-photo-upload Загрузить
        input(type="file" accept="image/jpeg" @change='addProjectFile').pojects__item-photo-fake-input

    .projects__add-img(v-else)
      label.pojects__item-photo(
        :style="{'backgroundImage' : getAbsoluteImgPath}"
      )
        .projects__item-photo-text Перетащите или загрузите для загрузки изображения
      a.pojects__item-photo-upload Загрузить
      input(type="file" accept="image/jpeg" @change='addProjectFile').pojects__item-photo-fake-input

    form.projects__item-content
      label.projects__item-content-label
        .projects__item-content-label-title Название
        input(
          type="text" 
          v-model="addProjectData.title"
        ).projects__item-content-input
      label.projects__item-content-label Ссылка
        .projects__item-content-label-title
        input(
          type="text" 
          v-model="addProjectData.link"
        ).projects__item-content-input
      label.projects__item-content-label Описание
        .projects__item-content-label-title
        textarea(
          name="projectContent", 
          cols="30", 
          rows="10" 
          v-model="addProjectData.description").projects__item-content-textarea
      label.projects__item-content-label
        .projects__item-content-label-title Добавление тэгов
        input(
          type="text" 
          placeholder="Введите тэги через запятую" 
          v-model="addProjectData.techs").projects__item-content-input
      //- ul.projects__item-content-tags
      //-   li.projects__item-content-tags-item HTML
      //-     button(type="button").projects__item-content-tags-item-del
      //-   li.projects__item-content-tags-item CSS
      //-     button(type="button").projects__item-content-tags-item-del
      //-   li.projects__item-content-tags-item JavaScript
      //-     button(type="button").projects__item-content-tags-item-del
      .projects__item-content-btn-wrap
        button(type="button" @click="$emit('cancelItem')").projects__item-content-btn-decline Отмена
        button(type="button" @click="addNewProject").projects__item-content-btn-save Загрузить
</template>

<script>
import requests  from "../requests"
import {mapActions, mapState} from "vuex"
export default {
  data() {
    return {
      chooseImage: false,
      addProjectData: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: "",
      },
    }
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.addProjectData.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    },
  },
  methods: {
    addProjectFile(e) {
      this.addProjectData.photo = e.target.files[0];
      this.chooseImage = true;
      console.log(this.currentImagePath)
    },
    ...mapActions('projects', ['addProject']),
    async addNewProject() {
      const projectFormData = new FormData();
      projectFormData.append('title', this.addProjectData.title);
      projectFormData.append('techs', this.addProjectData.techs);
      projectFormData.append('photo', this.addProjectData.photo);
      projectFormData.append('link', this.addProjectData.link);
      projectFormData.append('description', this.addProjectData.description);
      console.log(projectFormData)
      try {
        this.addProject(projectFormData);
        this.$emit('cancelItem');
      } catch (error) {
      }
    }
  }
}
</script>
