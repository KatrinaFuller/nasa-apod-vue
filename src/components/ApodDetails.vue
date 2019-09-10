<template>
  <div class="apod-details col-12 text-center">
    <h3>NASA Picture of the Day</h3>
    <h5>{{apod.date}}</h5>
    <img :src="apod.url" alt />
    <p>{{apod.explanation}}</p>
  </div>
</template>


<script>
export default {
  name: "apod-details",
  data() {
    return {};
  },
  computed: {
    apod() {
      return this.$store.state.apod;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  /* height: 400px; */
  margin-bottom: 20px;
}
</style>