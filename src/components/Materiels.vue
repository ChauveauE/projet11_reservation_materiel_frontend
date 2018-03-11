<template>
  <div>
    <h2> Sélectionner le matériel à réserver </h2>
    <ul>
      <!-- <li> calendar date </li> -->
      <li v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      </li>
      <button> Rechercher </button>
    </ul>
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
button{
  font-style: italic;
  border-radius: 10px;
}
</style>

