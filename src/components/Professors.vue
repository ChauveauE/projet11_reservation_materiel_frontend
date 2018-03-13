<template>
  <div>
        <h2> Création d'un nouvel utilisateur </h2>
    <ul>
      <label for="nom" id="nom"> Nom: </label>
      <input type="textarea" name="nom" id="nom" v-bind="nom" required /><br><br>
      <label for="prenom" id="prenom"> Prénom: </label>
      <input type="textarea" name="prenom" id="prenom" v-bind="prenom" required /><br><br>
      <label for="email" id="email"> Email: </label>
      <input type="textarea" name="email" id="email" v-bind="email" required /><br><br>
      <label for="ecole" id="ecole"> Ecole: </label>
      <!--<input type="textarea" name="ecole" id="ecole" v-bind="ecole" required /><br><br>
      <select id="ecole"><option></option><option>iut la roche sur yon</option></select><br><br> -->
      <label for="mdp" id="mdp"> Mot de passe: </label>
      <input type="textarea" name="mdp" id="mdp" v-bind="mdp" required /><br><br>
      <button class="creer" v-on:click="createProf()"> Créer le compte </button>
    </ul>
  </div>
</template>

<script>
import axios from '../api';

export default {
  name: 'Professors',
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      ecole: '',
      mdp: '',
    };
  },
  computed: {
    professors() {
      return this.$store.getters.professors;
    },
  },
  method: {
    createProf() {
      axios.post('/professors', { nom: 'nom', prenom: 'prenom', email: 'email', ecole: 'ecole', mdp: 'mdp' })
        // .then((data) => console.log(data));
        .then((response) => {
          this.professors = response.data;
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
label{
  display: inline-block;
  width: 175px;
}
input{
  display: inline;
}
</style>
