<template>
  <div>
    <h2> Sélectionner une école </h2>
    <ul>
      <label for="ecole" id="ecole"> Ecole: </label>
      <select id="ecole">
        <option></option>
        <option>iut la roche sur yon</option>
        <option>sainte marie</option>
        <option>jeanne d'arc</option>
        <option>marcel pagnol</option>
        <option>notre dame du roc</option>
      </select>
      <button class="valider">Valider</button>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Ecoles',
  computed: {
    ecoles() {
      return this.$store.getters.ecoles;
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
.valider{
  font-style: italic;
  border-radius: 10px;
  background-color:dimgrey;
}
</style>
