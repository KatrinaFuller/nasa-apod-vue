<template>
  <div class="apod-details col-6">
    <h3>NASA Picture of the Day</h3>
    <h5>{{apod.date}}</h5>

    <p>{{apod.explanation}}</p>
  </div>
</template>


<script>
export default {
  name: "apod-details",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>