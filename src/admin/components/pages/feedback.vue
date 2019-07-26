<template lang="pug">
  section.feedback
    .container
      .feedback__title Блок "Отзывы"
      .feedback__item-edit
        .feedback__item-edit-row Новый отзыв
        form.feedback__item-edit-content
          .feedback__item-edit-photo
            .feedback__item-edit-avatar
            button(type="button").feedback__item-edit-avatar-add Добавить фото
          label.feedback__item-edit-label
            .feedback__item-edit-label-title Имя автора
            input(type="text").feedback__item-edit-input
          label.feedback__item-edit-label
            .feedback__item-edit-label-title Титул автора
            input(type="text").feedback__item-edit-input
          label.feedback__item-edit-descr
            .feedback__item-edit-label-title Отзыв
            textarea(name="feedback").feedback__item-edit-textarea
        .feedback__item-edit-btn-wrap
          button(type="button").feedback__item-edit-btn-cancel Отмена
          button(type="button").feedback__item-edit-btn-save Загрузить
      ul.feedback__grid
        li.feedback__grid-add
          button(type="button").add-btn
            .add-circle +
            .add-title Добавить работу
        li.feedback__grid-item
          .feedback__grid-item-row
            .feedback__grid-item-avatar
              img(src="../../../images/content/author-01.jpg")
            .feedback__grid-item-title-wrap
              .feedback__grid-item-title Владимир Сабанцев
              .feedback__grid-item-subtitle Преподаватель
          .feedback__grid-item-descr Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
          .feedback__grid-item-controls
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
