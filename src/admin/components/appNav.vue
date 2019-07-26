<template lang="pug">
  nav.nav-adm
    .container
      ul.nav-adm__list
        li.nav-adm-list__item
          router-link(
            to="/"
          ).nav-adm-list__item-link Обо мне
        li.nav-adm-list__item
          router-link(
            to="/projects"
          ).nav-adm-list__item-link Работы
        li.nav-adm-list__item
          router-link(
            to="/feedback"
          ).nav-adm-list__item-link Отзывы
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>

</style>
