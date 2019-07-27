<template lang="pug">
  section.login
    form.login__card(
      @submit.prevent="login"
    )
      h3.login__title Авторизация
       .login__row 
        label.login__label
          .login__label-title Логин
          input.login__input(
            v-model="user.name"
          )
      .login__row.login__row-pass 
        label.login__label
          .login__label-title Пароль
          input.login__input(
            v-model="user.password"
            type="password"
          )
      button(type="submit").login__button Войти
</template>

<script>
import $axios from "../../requests";
export default {
  data() {
    return {
      user: {
        name: "i.omelyuhin",
        password: "iadmin"
      }
    }
  },
  methods: {
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post('/login', this.user);
        
        localStorage.setItem('token', token);
  
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  
        this.$router.replace("/");
        
      } catch (error) {
          alert (error.message);
      }
    }
  }
}
</script>

