<template>
  <div>
    <h2> Récapitulatif de la réservation </h2>
    <ul>
    <div class="col-xs-4 col-xs-offset-4">
      <li v-for="reservation in reservations" :key="reservation.id">
        <fieldset class="marge">
        date de la réservation: {{ reservation.date }}<br>
        <!-- matériel réservé: {{ reservation.libelle }} -->
        / matériel réservé: <br>
        / quantité réservée: {{ reservation.quantiteReserv }}<br>
        <button class="supprimer" v-on:click="deleteReserv()">Supprimer</button>
        </fieldset>
      </li>
     </div>
      <button class="valider" style="margin-top: 15px;" v-on:click="createReserv()">
        Valider la réservation
      </button>
    </ul>
  </div>
</template>

<script>
import axios from '../api';

export default {
  name: 'Reservations',
  data() {
    return {
      date: '',
      // libelle: '',
      quantiteReserv: '',
    };
  },
  computed: {
    reservations() {
      return this.$store.getters.reservations;
    },
  },
  method: {
    deleteReserv() {
      axios.delete('/reservations', { date: '', quantiteReserv: '' })
        // .then((data) => console.log(data));
        .then((response) => {
          this.reservations = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createReserv() {
      axios.put('/reservations', { date: '', quantiteReserv: '' })
        // .then((data) => console.log(data));
        .then((response) => {
          this.reservations = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
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
  display: inline;
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
.marge{
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border: 2px solid dimgrey;
}
</style>

