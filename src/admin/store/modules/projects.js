import { wrapIntoFormData } from "@/helpers/forms";
import { generateStdError } from "@/helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    projects: []
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    ADD_PROJECT(state, project) {
      state.projects.push(project);
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      try {
        const response = await this.$axios.get('/works/161');
        commit("SET_PROJECTS", response.data);

        console.log(this.state);
      } catch (error) { }
    },
    async addProject({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post("/works", data);
        commit("ADD_PROJECT", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    }
  }
}










// import { wrapIntoFormData } from "@/helpers/forms";
// import { generateStdError } from "@/helpers/errorHandler";

// export default {
//   namespaced: true,
//   state: {
//     projects: []
//   },
//   mutations: {
//     SET_PROJECTS(state, projects) {
//       state.projects = projects;
//     },
//     ADD_PROJECT(state, project) {
//       state.projects.push(project);
//     }
//   },
//   actions: {
//     async fetchWorks({ commit }) {
//       try {
//         const { data: projects } = await this.$axios.get('/works/161');
//         console.log('proj', projects);

//         commit("SET_PROJECTS", projects)
//         return projects
//       } catch (error) {
//         error.response.data.error || error.response.data.message

//       }
//     },
//     async addProject({ commit }, payload) {
//       const data = wrapIntoFormData(payload);
//       try {
//         const response = await this.$axios.post("/works", data);
//         commit("ADD_PROJECT", response.data);
//         return response;
//       } catch (error) {
//         generateStdError(error);
//       }
//     }
//   }
// }
