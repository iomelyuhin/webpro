<template lang="pug">
  .maincontent
    appHeader
    appNav
    router-view
      
</template>

<script>
  import appHeader from './components/appHeader';
  import appNav from './components/appNav';
  import about from './components/pages/about';
  import projects from './components/pages/projects';
  import feedback from './components/pages/feedback';
  import login from './components/pages/login';

  export default {
    name: 'App',
    components: {
      appHeader,
      appNav,
      about,
      projects,
      feedback,
      login
    }
  }
</script>

<style lang="pcss" scope>
@import url('./styles/main.pcss');
</style>