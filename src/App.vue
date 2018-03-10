<template>
  <div id="app">
    <img src="./assets/tableau.jpg">
    <Reservations/>
    <router-view/>
  </div>
</template>

<script>
import reservations from '@/components/Reservations';

export default {
  name: 'App',
  created() {
    this.$store.dispatch('reservations');
  },
  components: {
    reservations,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
  background-color:#DCDCDC;
}
</style>
