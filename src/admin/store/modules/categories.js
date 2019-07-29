export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    },
    REMOVE_CATEGORY(state, removedCategoryId) {
      state.categories = state.categories.filter(category => category.id !== removedCategoryId);
    },
    EDIT_CATEGORY(state, editedCategory) {
      state.categories = state.categories.map(category => {
        return category.id === editedCategory.id ? editedCategory : category;
      })
    }
  },
  actions: {
    async addCategory({ commit }, newCategory) {
      try {
        const { data: category } = await this.$axios.post('/categories', newCategory)
        commit("ADD_CATEGORY", category)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
          )
      }
    },
    async editCategory({ commit }, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, category);
        commit("EDIT_CATEGORY", response.data.category)
      } catch (error) {
        console.log(error.message);

      }
    },
    async removeCategory({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId)
      } catch (error) {
        console.log(error.message);

      }
    },
    async fetchCategories({ commit }) {
      try {
        const { data: categories } = await this.$axios.get("/categories/161");
        commit("SET_CATEGORIES", categories)
        //console.log(response.data);

      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }


}