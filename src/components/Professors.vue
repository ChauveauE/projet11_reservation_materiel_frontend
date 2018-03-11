<template>
  <div>
        <h2> Création d'un nouvel utilisateur </h2>
    <ul>
      <label for="nom" id="nom"> Nom: </label>
      <input type="textarea" name="nom" id="nom" required /><br>
      <label for="prenom" id="prenom"> Prénom: </label>
      <input type="textarea" name="prenom" id="prenom" required /><br>
      <label for="email" id="email"> Email: </label>
      <input type="textarea" name="email" id="email" required /><br>
      <label for="ecole" id="ecole"> Ecole: </label>
      <input type="textarea" name="ecole" id="ecole" required /><br>
      <label for="mdp" id="mdp"> Mot de passe: </label>
      <input type="textarea" name="mdp" id="mdp" required /><br>
      <button class="creer"> Créer le compte </button>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Professors',
  computed: {
    professors() {
      return this.$store.getters.professors;
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
.creer{
  font-style: italic;
  border-radius: 10px;
  background-color:dimgrey;
  margin-left: 300px;
}
</style>
