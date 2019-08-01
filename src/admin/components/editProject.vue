<template lang="pug">
.projects__item
  .projects__item-row
    h4.projects__item-title Добавление работы
  .pojects__item-edit
    .pojects__item-photo
      .projects__item-photo-text Перетащите или загрузите для загрузки изображения
      //- button(type="button").pojects__item-photo-upload Загрузить
      input(type="file" accept="image/jpeg" @change='addProjectFile')
    form.projects__item-content
      label.projects__item-content-label
        .projects__item-content-label-title Название
        input(type="text" v-model="currentProject.title").projects__item-content-input
      label.projects__item-content-label Ссылка
        .projects__item-content-label-title
        input(type="text" v-model="currentProject.link").projects__item-content-input
      label.projects__item-content-label Описание
        .projects__item-content-label-title
        textarea(name="projectContent", cols="30", rows="10" v-model="currentProject.description").projects__item-content-textarea
      label.projects__item-content-label
        .projects__item-content-label-title Добавление тэгов
        input(type="text" placeholder="Введите тэги через запятую" v-model="currentProject.techs" @change="splitTags").projects__item-content-input
      ul.projects__item-content-tags
        li(v-for="tag in tagsArray").projects__item-content-tags-item {{tag}}
      .projects__item-content-btn-wrap
        button(type="button" @click="$emit('cancelItem')").projects__item-content-btn-decline Отмена
        button(type="button" @click="editCurrentProject").projects__item-content-btn-save Загрузить
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  data() {
    return {
      tagsArray: []
    }
  },
  computed: {
    ...mapState("projects", {
      currentProject: state => state.currentProject
    }),
  },
  methods: {
    ...mapActions('projects', ['editProject']),
    async editCurrentProject() {
      try {
        this.editProject(this.currentProject)
        this.$emit('cancelItem');
      } catch (error) {
      }
    },
    addProjectFile(e) {
      console.log(event.target)
      this.currentProject.photo = e.target.files[0];
      console.log(this.currentProject.photo)
    },
    splitTags() {
      this.tagsArray = this.currentProject.techs.split(',')
    }
  },
  created() {
    this.splitTags();
  }
}
</script>