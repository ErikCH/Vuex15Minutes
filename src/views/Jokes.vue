<template>
  <div>
    <h1 class="text-3xl p-12 font-extrabold">This is all the jokes you've retrieved</h1>
    <h4 v-for="(joke,idx) in jokes" :key="idx">
      <span>{{idx+1}}</span>
      {{joke}}
    </h4>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      jokes: "getAllJokes"
    })
    // jokes() {
    // return this.$store.getters.getAllJokes;
    // }
  }
};
</script>
<style scoped>
h4 {
  color: blueviolet;
  font-weight: bolder;
  font-size: 2.5rem;
}
</style>
