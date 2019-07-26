<template lang="pug">
  section.projects
    .container
      h3.projects__title Блок «Работы»
      .projects__item
        .projects__item-row
          h4.projects__item-title Редактирование работы
        .pojects__item-edit
          .pojects__item-photo
            .projects__item-photo-text Перетащите или загрузите для загрузки изображения
            button(type="button").pojects__item-photo-upload Загрузить
          form.projects__item-content
            label.projects__item-content-label
              .projects__item-content-label-title Название
              input(type="text").projects__item-content-input
            label.projects__item-content-label Ссылка
              .projects__item-content-label-title
              input(type="text").projects__item-content-input
            label.projects__item-content-label Описание
              .projects__item-content-label-title
              textarea(name="projectContent", cols="30", rows="10").projects__item-content-textarea
            label.projects__item-content-label
              .projects__item-content-label-title Добавление тэга
              input(type="text").projects__item-content-input
            ul.projects__item-content-tags
              li.projects__item-content-tags-item HTML
                button(type="button").projects__item-content-tags-item-del
              li.projects__item-content-tags-item CSS
                button(type="button").projects__item-content-tags-item-del
              li.projects__item-content-tags-item JavaScript
                button(type="button").projects__item-content-tags-item-del
            .projects__item-content-btn-wrap
              button(type="button").projects__item-content-btn-decline Отмена
              button(type="button").projects__item-content-btn-save Загрузить
      ul.projects__grid
        li.projects__grid-add
          button(type="button").add-btn
            .add-circle +
            .add-title Добавить работу
        li.projects__grid-item
          img(src="../../../images/content/work-01.jpg").projects__grid-item-photo
          .projects__grid-item-content
            .projects__grid-item-title Сайт школы образования
            .projects__grid-item-descr Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a.projects__grid-item-link http://loftschool.ru
            .projects__grid-item-controls
              .controls-wrap
                button(type="button").controls-edit Править
              .projects__grid-item-controls-wrap
                button(type="button").controls-del Удалить
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>

</style>
