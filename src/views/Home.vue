<template>
  <div class="home shadow-xl bg-gray-200 w-8/12 mx-auto p-20">
    <h2 class="text-3xl text-blue-600 font-extrabold">Can I Haz Dad Jokes</h2>
    <h3 class="h-40 text-black">{{joke}}</h3>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 focus:outline-none"
      @click="addJoke"
    >Add Joke</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions({ addJoke: "setCurrentJoke" })
    // addJoke() {
    // this.$store.dispatch("setCurrentJoke");
    // this.setCurrentJoke();
    // }
  },
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" })
    // joke() {
    // return this.getCurrentJoke;
    // }
  }
  // mounted() {
  // this.joke = this.$store.getters.getCurrentJoke;
  // }
};
</script>

<style scoped>
.home {
  height: 400px;
  max-height: 500px;
}
h3 {
  font-size: 2.5rem;
}
</style>
