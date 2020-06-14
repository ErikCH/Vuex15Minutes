import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    currentJoke: "",
    allJokes: []
  },
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    },
    setAllJokes(state, payload) {
      state.allJokes.push(payload);
    }
  },
  actions: {
    async setCurrentJoke(state) {
      const joke = await fetch(url, {
        headers
      });
      const ans = await joke.json();
      state.commit("setCurrentJoke", ans.joke);
    }
  },
  modules: {},
  getters: {
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes
  }
});
