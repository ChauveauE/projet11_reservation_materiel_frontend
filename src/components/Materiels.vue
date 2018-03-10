<template>
  <div>
    <ul>
      <li v-for="materiel in materiels" :key="materiel.id">
        {{ materiel.libelle }}
        <button> X </button>
      </li>
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
</style>

