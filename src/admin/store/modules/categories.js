export default {
  namespaced: true,
  state: {
    categories: []
  },
  actions: {
    async addCategory(store, newCategory) {
      try {
        const response = await this.$axios.post('categories', newCategory)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )
      }
    }
  }
  // async fetchCategories() {
  //   try {
  //     const response = await this.$axios.get("/categories/1");
  //     commit("SET_CATEGORIES", response.data.reverse());
  //     return response;
  //   } catch (error) {
  //     throw new Error(
  //       error.response.data.error || error.response.data.message
  //     );
  //   }
  // }
}