<template lang="pug">
  .maincontent
    appHeader
    appNav
    about 
    projects  
    feedback
    login
      
</template>

<script>
  import appHeader from './components/appHeader';
  import appNav from './components/appNav';
  import about from './components/about';
  import projects from './components/projects';
  import feedback from './components/feedback';
  import login from './components/login';

  export default {
    name: 'App',
    components: {
      appHeader,
      appNav,
      about,
      projects,
      feedback,
      login
    },
    data() {
      return {
        msg: 'Hello!'
      }
    }
  }
</script>

<style lang="pcss" scope>
@import "normalize.css";
@import url('../styles/mixins');
@import url('../styles/layout/base');
@import url('../styles/main');
.container {
  max-width: 1200px;
}
.container--header-adm {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-adm {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  color: #fff;
}
.header-adm__content-wrap {
  display: flex;
  align-items: center;
}
.header-adm__avatar-wrap {
  width: 45px;
  height: 45px;
}
.header-adm__avatar {
  object-fit: cover;
  border-radius: 50%;
}
.header-adm__title {
  margin-left: 20px;
  font-size: 18px;
  font-weight: 400;
}
.header-adm__subtitile {
  margin-left: 20px;
  color: #808097;
  font-size: 14px;
  font-weight: 400;
}
.header-adm__logout {
  color: #808097;
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
}
.nav-adm {
  height: 80px;
  color: #383bcf;
}
.nav-adm__list {
  height: 80px;
  display: flex;
}
.nav-adm-list__item {
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  border: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #383bcf;
      cursor: pointer;
    }
}
.nav-adm-list__item-link {
  color: inherit;
  text-decoration: inherit;
}
.about-adm {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #f8f9fe;
}
.about-adm__row {
  width: 100%;
  display: flex;
  align-items: center;
}
.about-adm__title {
  font-size: 21px;
  font-weight: 700;
}
.btn-add {
  color: #fff;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-add--group {
  position: relative;
  width: 21px;
  height: 21px;
  margin-left: 40px;
    &::after {
      content: "Добавить группу";
      position: absolute;
      right: -140px;
      color: #383bcf;
    }
}
.about-adm__add-skill-group-text {
  margin-left: 15px;
  color: #3f35cb;
  font-size: 16px;
  font-weight: 700;
}
.about-adm-grid {
  margin-top: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @include phones {
    grid-template-columns: 1fr;
  }
}
.about-adm-grid__item {
  width: 100%;
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #fff;
}
.about-adm-grid__item-upper-row {
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #C0C0C0;
}
.about-adm-grid__item-group-name {
  height: 40px;
  width: 60%;
  outline: none;
    &:focus {
      border-bottom: 1px solid #000;
    }
}
.about-adm-grid__item-ok {
  width: 20px;
  height: 20px;
  background: svg-load(
          "tick.svg",
          fill=rgba(#00d70a, 1),
          width=15px,
          height=12px
        ) center no-repeat;
}
.about-adm-grid__item-deny {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: svg-load(
          "remove.svg",
          fill=rgba(#bf2929, 1),
          width=14px,
          height=12px
        ) center no-repeat;
}
.about-adm-grid__item-skills-list {
  min-height: 200px;
  padding-top: 20px;
}
.about-adm-grid__item-skills-list-row {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.about-adm-grid__item-list-skill {
  width: 60%;
  
  @include tablets {
    width: 50%;
  }
}
.about-adm-grid__item-list-value {
  width: 20%;
}
.about-adm-grid__item-edit {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: svg-load(
          "pencil.svg",
          fill=rgba(#414c63, 1),
          width=14px,
          height=12px
        ) center no-repeat;
}
.about-adm-grid__item-del {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background: svg-load(
          "trash.svg",
          fill=rgba(#414c63, 1),
          width=14px,
          height=12px
        ) center no-repeat;
}
.about-adm-grid__item-lower-row {
  display: flex;
  justify-content: flex-end;
}
.about-adm-grid__item-skill-name {
  height: 40px;
  width: 40%;
  padding-left: 10px;
  outline: none;
  border-bottom: 1px solid #000;
}
.about-adm-grid__item-skill-value {
  height: 40px;
  width: 20%;
  padding-left: 10px;
  margin-left: 10px;
  outline: none;
  border-bottom: 1px solid #000;
}
.btn-add--skill {
  width: 40px;
  height: 40px;
  font-size: 32px;
  margin-left: 20px;
}
.projects {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #f8f9fe;
}
.projects__title {
  font-size: 21px;
  font-weight: 700;
}
.projects__item {
  margin-top: 60px;
  padding: 25px;
  background-color: #fff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
}
.projects__item-row {
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 2px solid silver;
}
.pojects__item-edit {
  margin-top: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  
  @include tablets {
    grid-template-columns: 1fr;
  }
}
.pojects__item-photo {
  width: 100%;
  height: 280px;
  padding: 20% 20%;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.projects__item-photo-text {
  max-width: 260px;
  text-align: center;
}
.pojects__item-photo-upload {
  padding: 20px 20px;
  margin-top: 20px;
  line-height: 0;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}
.projects__item-content {
  display: flex;
  flex-direction: column;
  color: #414c63;
}
.projects__item-content-label {
  margin-top: 20px;
}
.projects__item-content-input {
  height: 40px;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #414c63;
}
.projects__item-content-textarea {
  width: 100%;
  height: 150px;
  margin-top: 10px;
  resize: none;
}
.projects__item-content-tags {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}
.projects__item-content-tags-item {
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 15px;
  background-color: #f4f4f4;
    &:first-child {
      margin-left: 0;
    }
}
.projects__item-content-tags-item-del {
  margin-left: 5px;
  width: 11px;
  height: 11px;
  background: svg-load(
          "remove.svg",
          fill=rgba(#000, 1),
          width=9px,
          height=12px
        ) center no-repeat;
}
.projects__item-content-btn-wrap {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.projects__item-content-btn-decline {
  background-color: transparent;
  color: #383bcf;
}
.projects__item-content-btn-save {
  width: 181px;
  height: 60px;
  margin-left: 40px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}
.projects__grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
  }
}
.projects__grid-add {
  width: 100%;
  min-height: 300px;
  @include phones {
    height: 100%;
  }
}
.add-btn {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.add-circle {
  width: 150px;
  height: 150px;
  color: #fff;
  font-size: 45px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center
}
.add-title {
  margin-top: 20px;
  color: #fff;
}
.projects__grid-item {
  min-height: 550px;
  background-color: #fff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
}
.projects__grid-item-photo {
  width: 100%;
  object-fit: cover;
  max-height: 220px;
}
.projects__grid-item-content {
  padding: 20px;
}
.projects__grid-item-title {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
}
.projects__grid-item-descr {
  margin-top: 20px;
  margin-bottom: 20px;
}
.projects__grid-item-link {
  color: #383bcf;
  font-size: 16px;
  font-weight: 400;
}
.projects__grid-item-controls {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.controls-wrap {
  display: flex;
  align-items: center;
}
.controls-edit {
  position: relative;
  background-color: transparent;
  &::after {
    content: "";
    position: absolute;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    background: svg-load(
            "pencil.svg",
            fill=rgba(#383bcf, 1),
            width=17px,
            height=17px
          ) center no-repeat;
  }
}
.controls-del {
  position: relative;
  background: transparent;
  margin-right: 18px;
  &::after {
    content: "";
    position: absolute;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    background: svg-load(
            "remove.svg",
            fill=rgba(#c92e2e, 1),
            width=17px,
            height=17px
          ) center no-repeat;
  }
}
.feedback {
  padding-top: 60px;
  padding-bottom: 30px;
  background-color: #f8f9fe;
}
.feedback__title {
  font-size: 21px;
  font-weight: 700;
}
.feedback__item-edit {
  padding: 20px 20px 40px 20px;
  margin-top: 60px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
.feedback__item-edit-row {
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid silver;
}
.feedback__item-edit-content {
  margin-top: 45px;
  margin-left: 15px;
  width: 80%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 3fr 4fr;
  @include tablets {
    width: 90%;
  }
  @include phones {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
}
.feedback__item-edit-photo {
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    @include phones {
      grid-row: intial;
  }
}
.feedback__item-edit-avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  background: svg-load(
              "user.svg",
              fill=rgba(#fff, 1),
              width=85px,
              height=113px
            ) center no-repeat #dee4ed;
}
.feedback__item-edit-avatar-add {
  margin-top: 30px;
  color: #383bcf;
  background-color: transparent;
}
.feedback__item-edit-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include phones {
    margin-top: 20px;
  }
}
.feedback__item-edit-input {
  height: 50px;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #000;
}
.feedback__item-edit-descr {
  grid-column: 2/4;
  @include phones {
    margin-top: 20px;
    grid-column: intial;
  }
}
.feedback__item-edit-textarea {
  width: 100%;
  height: 120px;
  margin-top: 15px;
  border: 1px solid #000;
  resize: none;
}
.feedback__item-edit-btn-wrap {
  width: 80%;
  margin-left: 15px;
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
  @include tablets {
    width: 90%;
  }
  @include phones {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}
.feedback__item-edit-btn-cancel {
  background-color: transparent;
  color: #383bcf;
}
.feedback__item-edit-btn-save {
  background-color: transparent;
  width: 181px;
  height: 60px;
  margin-left: 60px;
  border-radius: 30px;
  color: #ffffff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
}
.feedback__grid {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.feedback__grid-add {
  min-height: 300px;
  @include phones {
    height: 100%;
  }
}
.feedback__grid-item {
  padding: 20px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
.feedback__grid-item-row {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 30px;
  border-bottom: 1px solid silver;
}
.feedback__grid-item-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.feedback__grid-item-title-wrap {
  margin-left: 30px;
}
.feedback__grid-item-title {
  font-size: 18px;
  font-weight: 700;
}
.feedback__grid-item-descr {
  margin-top: 30px;
}
.feedback__grid-item-controls {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.login {
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fe;
}
.login__card {
  padding: 75px;
  background-color: #fff;
}
.login__title {
  font-size: 36px;
  font-weight: 400;
}
.login__row {
  width: 100%;
  padding-left: 40px;
  margin-top: 30px;
  border-bottom: 1px solid #000;
  font-size: 16px;
  background: svg-load(
              "user.svg",
              fill=rgba(#414c63, 1),
              width=24px,
              height=38px
            ) left no-repeat;
}
.login__row-pass {
  
}
.login__label {
 
}
.login__input {
  height: 50px;
  width: 100%;
}
.login__button {
  width: 347px;
  height: 80px;
  margin-top: 40px;
  border-radius: 40px 5px;
  background-color: #ffffff;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
  @include phones {
    width: 300px;
    height: 65px;
  }
}
</style>