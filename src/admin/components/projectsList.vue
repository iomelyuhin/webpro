<template lang="pug">
  div
    li.projects__grid-item
      img(src="../../images/content/work-01.jpg").projects__grid-item-photo
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