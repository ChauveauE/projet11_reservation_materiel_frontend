<template>
  <div>
    <h2> Récapitulatif de la réservation </h2>
    <ul>
      <li v-for="reservation in reservations" :key="reservation.id">
        {{ reservation.date }}
        {{ reservation.quantiteReserv }}
        <!-- {{ reservation.libelle }} libelle materiel-->
        <button class="supprimer"> X </button>
      </li>
      <button class="valider"> Valider la réservation </button>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Reservations',
  computed: {
    reservations() {
      return this.$store.getters.reservations;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.supprimer{
  color: red;
}
.valider{
  font-style: italic;
  border-radius: 10px;
  background-color:dimgrey;
  margin-left: 300px;
  font-size: 125%;
}
</style>

