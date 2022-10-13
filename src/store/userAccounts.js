export default {
  state: {
    userAccounts: []
  },
  getters: {
    USER_ACCOUNTS(state) {
      return state.userAccounts;
    }
  },
  mutations: {
    USER_ACCOUNTS_SET(state, value) {
      state.userAccounts = value;
    }
  },
  actions: {
    async USER_ACCOUNTS_FETCH_USERS({ commit, dispatch }) {
      await dispatch("BACKEND_FETCH_USERS").then((response) => {
        commit("USER_ACCOUNTS_SET", response.data);
      });
    }
  }
};
