<template lang="pug">
  section.about-adm
    .container
      .about-adm__row
        h3.about-adm__title Блок "Обо мне"
        button(type="button").btn-add.btn-add--group +
      .about-adm-grid
        form.about-adm-grid__item
          .about-adm-grid__item-upper-row
            input(type="text" placeholder="Название новой группы").about-adm-grid__item-group-name
            .about-adm-grid__item-btns-wrap
              button(type="button").about-adm-grid__item-ok
              button(type="button").about-adm-grid__item-deny
          ul.about-adm-grid__item-skills-list
          .about-adm-grid__item-lower-row
            input(type="text" placeholder="Новый навык").about-adm-grid__item-skill-name
            input(type="text" value="100%").about-adm-grid__item-skill-value
            button(type="button").btn-add.btn-add--skill +
        form.about-adm-grid__item
          .about-adm-grid__item-upper-row
            input(type="text" value="Workflow").about-adm-grid__item-group-name
            .about-adm-grid__item-btns-wrap
              button(type="button").about-adm-grid__item-ok
              button(type="button").about-adm-grid__item-deny
          ul.about-adm-grid__item-skills-list
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="Git").about-adm-grid__item-list-skill
              input(type="text" value="100%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="Terminal").about-adm-grid__item-list-skill
              input(type="text" value="50%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="Gulp").about-adm-grid__item-list-skill
              input(type="text" value="60%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="Webpack").about-adm-grid__item-list-skill
              input(type="text" value="30%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
          .about-adm-grid__item-lower-row
            input(type="text" placeholder="Новый навык").about-adm-grid__item-skill-name
            input(type="text" value="100%").about-adm-grid__item-skill-value
            button(type="button").btn-add.btn-add--skill +
        form.about-adm-grid__item
          .about-adm-grid__item-upper-row
            input(type="text" value="Frontend").about-adm-grid__item-group-name
            .about-adm-grid__item-btns-wrap
              button(type="button").about-adm-grid__item-ok
              button(type="button").about-adm-grid__item-edit
          ul.about-adm-grid__item-skills-list
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="HTML5").about-adm-grid__item-list-skill
              input(type="text" value="100%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="CSS3").about-adm-grid__item-list-skill
              input(type="text" value="50%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="JavaScript").about-adm-grid__item-list-skill
              input(type="text" value="60%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
            li.about-adm-grid__item-skills-list-row
              input(type="text" value="Vue.js").about-adm-grid__item-list-skill
              input(type="text" value="30%").about-adm-grid__item-list-value
              .about-adm-grid__item-btns-wrap
                button(type="button").about-adm-grid__item-edit
                button(type="button").about-adm-grid__item-del
          .about-adm-grid__item-lower-row
            input(type="text" placeholder="Новый навык").about-adm-grid__item-skill-name
            input(type="text" value="100%").about-adm-grid__item-skill-value
            button(type="button").btn-add.btn-add--skill +
</template>