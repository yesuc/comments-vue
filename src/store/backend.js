import axios from "axios";

export default {
  state: {
    commentsFileName: "/assets/comments.json",
    usersFileName: "/assets/users.json"
  },
  getters: {
    BACKEND_COMMENTS_FILE_NAME(state) {
      return state.commentsFileName;
    },
    BACKEND_USERS_FILE_NAME(state) {
      return state.usersFileName;
    }
  },
  mutations: {},
  actions: {
    BACKEND_FETCH_COMMENTS({ getters }) {
      return axios.get(getters.BACKEND_COMMENTS_FILE_NAME);
    },
    BACKEND_FETCH_USERS({ getters }) {
      return axios.get(getters.BACKEND_USERS_FILE_NAME);
    }
  }
};
