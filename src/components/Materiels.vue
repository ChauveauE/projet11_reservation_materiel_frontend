<template>
  <div>
    <h2> Sélectionner le matériel à réserver </h2>
    <ul>
      <!-- <li> calendar date </li> -->
      <li v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      </li>
      <input type="text" id="materiels">
      <button class="rechercher"> Rechercher </button><br><br>
      <li v-for="materiel in materiels" :key="materiel.id">
        {{ materiel.libelle }}
      </li>
    </ul>
    <button class="valider" v-on:click="createReserv()"> Valider la saisie </button>
  </div>
</template>

<script>

export default {
  name: 'Materiels',
  computed: {
    materiels() {
      return this.$store.getters.materiels;
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
.rechercher{
  font-style: italic;
  border-radius: 10px;
  background-color:dimgrey;
}
.valider{
  font-style: italic;
  border-radius: 10px;
  background-color:dimgrey;
  margin-left: 300px;
  font-size: 100%;
}
input{
  display: center;
  width: 150px;
  margin-left: 200px;
}
</style>

