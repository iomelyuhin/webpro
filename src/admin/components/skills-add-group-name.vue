<template lang="pug">
  .skills-card-title
    .skills-card-title__input
      app-input(
        placeholder="Название новой группы"
        :errorText="errorText"
        @input="$emit('input', $event)"
        @keydown.native.enter="$emit('approve')"
        @keydown.native.space="testMeth"
        v-model="category.category"
        autofocus
        no-side-paddings
      )
    .skills-card-title__buttons
      .skills-card-title__btn
        iconed-btn(
          class="is-tick no-words"
          @click="$emit('approve')"

        )
      .skills-card-title__btn
        iconed-btn(
          class="is-cross no-words"
          @click="$emit('closeOrRemove')"
        )
</template>

<script>
export default {
  props: {
    value: String,
    errorText: String,
    category: Object
  },
  components: {
    iconedBtn: () => import("../components/iconed-btn.vue"),
    appInput: () => import("../components/input.vue")
  },
  methods: {
   testMeth () {
     
   } 
  }
};
</script>


<style lang="postcss" scoped>
.skills-card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skills-card-title__input {
  width: 60%;
}

.skills-card-title__buttons {
  display: flex;
}

.skills-card-title__btn {
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
