<template>
  <div>
    <h2> Connexion </h2>
    <ul>
      <label for="email" id="email"> Email: </label>
      <input type="textarea" name="email" id="email" required /><br>
      <label for="mdp" id="mdp"> Mot de passe: </label>
      <input type="textarea" name="mdp" id="mdp" required /><br>
      <button class="connecter">Se connecter </button>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Connexions',
  computed: {
    connexions() {
      return this.$store.getters.connexions;
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
.connecter{
  font-style: italic;
  border-radius: 10px;
  background-color:dimgrey;
  margin-left: 300px;
}
</style>
