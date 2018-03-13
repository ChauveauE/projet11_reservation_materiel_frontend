<template>
  <div id="app">
    <img src="./assets/tableau.jpg">
    <router-view/>
  </div>
</template>

<script>
import reservations from '@/components/Reservations';
import materiels from '@/components/Materiels';
import ecoles from '@/components/Ecoles';
import professors from '@/components/Professors';
import connexions from '@/components/Connexions';

export default {
  name: 'App',
  created() {
    this.$store.dispatch('getReservations');
    this.$store.dispatch('putReservations');
    this.$store.dispatch('deleteReservation');
    this.$store.dispatch('getMateriels');
    this.$store.dispatch('putMateriels');
    this.$store.dispatch('getEcoles');
    this.$store.dispatch('postProfessors');
  },
  components: {
    reservations,
    materiels,
    ecoles,
    professors,
    connexions,
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
  background-attachment: fixed;
}
</style>
