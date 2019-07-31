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
    },
    EDIT_PROJECT(state, editedProject) {
      state.projects = state.projects.map(project => {
        return project.id === editedProject.id ? editedProject : project;
      })
    },
    REMOVE_PROJECT(state, removingProjectId) {
      state.projects = state.projects.filter(project => project.id !== removingProjectId);
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      try {
        const response = await this.$axios.get('/works/161');
        commit("SET_PROJECTS", response.data);

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
    },
    async editProject({ commit }, project) {
      try {
        const response = await this.$axios.post(`/works/${project.id}`, project);
        commit("EDIT_PROJECT", project)
      } catch (error) {

      }
    },
    async removeProject({ commit }, projectId) {
      try {
        const response = await this.$axios.delete(`/works/${projectId}`);
        commit("REMOVE_PROJECT", projectId)
      } catch (error) {

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
