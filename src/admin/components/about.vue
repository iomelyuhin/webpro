<template lang="pug">
  section.about
    .container
      .about__row
        h3.about__title Блок "Обо мне"
        button(type="button").btn-add.btn-add--group +
      .about-grid
        form.about-grid__item
          .about-grid__item-upper-row
            input(type="text" placeholder="Название новой группы").about-grid__item-group-name
            .about-grid__item-btns-wrap
              button(type="button").about-grid__item-ok
              button(type="button").about-grid__item-deny
          ul.about-grid__item-skills-list
          .about-grid__item-lower-row
            input(type="text" placeholder="Новый навык").about-grid__item-skill-name
            input(type="text" value="100%").about-grid__item-skill-value
            button(type="button").btn-add.btn-add--skill +
        form.about-grid__item
          .about-grid__item-upper-row
            input(type="text" value="Workflow").about-grid__item-group-name
            .about-grid__item-btns-wrap
              button(type="button").about-grid__item-ok
              button(type="button").about-grid__item-deny
          ul.about-grid__item-skills-list
            li.about-grid__item-skills-list-row
              input(type="text" value="Git").about-grid__item-list-skill
              input(type="text" value="100%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
            li.about-grid__item-skills-list-row
              input(type="text" value="Terminal").about-grid__item-list-skill
              input(type="text" value="50%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
            li.about-grid__item-skills-list-row
              input(type="text" value="Gulp").about-grid__item-list-skill
              input(type="text" value="60%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
            li.about-grid__item-skills-list-row
              input(type="text" value="Webpack").about-grid__item-list-skill
              input(type="text" value="30%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
          .about-grid__item-lower-row
            input(type="text" placeholder="Новый навык").about-grid__item-skill-name
            input(type="text" value="100%").about-grid__item-skill-value
            button(type="button").btn-add.btn-add--skill +
        form.about-grid__item
          .about-grid__item-upper-row
            input(type="text" value="Frontend").about-grid__item-group-name
            .about-grid__item-btns-wrap
              button(type="button").about-grid__item-ok
              button(type="button").about-grid__item-edit
          ul.about-grid__item-skills-list
            li.about-grid__item-skills-list-row
              input(type="text" value="HTML5").about-grid__item-list-skill
              input(type="text" value="100%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
            li.about-grid__item-skills-list-row
              input(type="text" value="CSS3").about-grid__item-list-skill
              input(type="text" value="50%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
            li.about-grid__item-skills-list-row
              input(type="text" value="JavaScript").about-grid__item-list-skill
              input(type="text" value="60%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
            li.about-grid__item-skills-list-row
              input(type="text" value="Vue.js").about-grid__item-list-skill
              input(type="text" value="30%").about-grid__item-list-value
              .about-grid__item-btns-wrap
                button(type="button").about-grid__item-edit
                button(type="button").about-grid__item-del
          .about-grid__item-lower-row
            input(type="text" placeholder="Новый навык").about-grid__item-skill-name
            input(type="text" value="100%").about-grid__item-skill-value
            button(type="button").btn-add.btn-add--skill +
</template>