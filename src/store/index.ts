
import Vuex from 'vuex';


export default new Vuex.Store({
  state: {
    activePage: 'MainPage'
  },
  mutations: {
    setActivePage(state, pageName) {
      state.activePage = pageName;
      localStorage.setItem('activePage', pageName);
    }
  },
  actions: {
    updateActivePage({ commit }, pageName) {
      commit('setActivePage', pageName);
    }
  }
});