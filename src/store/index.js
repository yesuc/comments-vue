import Vuex from "vuex";

// store modules
import backend from "./backend";
import threadComments from "./threadComments";
import userAccounts from "./userAccounts";

const index = {
  state: {
    initialized: false
  },
  modules: {
    backend,
    threadComments,
    userAccounts
  },
  getters: {
    APP_INITIALIZED(state) {
      return state.initialized;
    }
  },
  mutations: {
    APP_INITIALIZED_SET(state, value) {
      state.initialized = value;
    }
  },
  actions: {
    async INITIALIZE({ commit, dispatch }) {
      dispatch("USER_ACCOUNTS_FETCH_USERS");
      dispatch("THREAD_COMMENTS_FETCH_COMMENTS");
      // Not needed but j.i.c we needed to know whether all init steps were completed
      commit("APP_INITIALIZED_SET", true);
    }
  }
};

function createStore() {
  return new Vuex.Store(index);
}

export default createStore;
