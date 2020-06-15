import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    allJokes: []
  },
  mutations: {
    //syncrous
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  },
  actions: {
    //asyncronous
    async setCurrentJoke(state) {
      const joke = await fetch(url, { headers });
      const j = await joke.json();
      state.commit("setCurrentJoke", j.joke);
    }
  },
  modules: {},
  getters: {
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes
  }
});
