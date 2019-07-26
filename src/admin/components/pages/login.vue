<template lang="pug">
  section.login
    form.login__card
      h3.login__title Авторизация
       .login__row 
        label.login__label
          .login__label-title Логин
          input.login__input
      .login__row.login__row-pass 
        label.login__label
          .login__label-title Пароль
          input.login__input
      button(type="submit").login__button Войти
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>

</style>
