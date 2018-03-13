<template>
  <div>
    <h2> Connexion </h2>
    <ul>
      <label for="email" id="email"> Email: </label>
      <input type="textarea" name="email" id="email" v-bind="email" required /><br><br>
      <label for="mdp" id="mdp"> Mot de passe: </label>
      <input type="textarea" name="mdp" id="mdp" v-bind="mdp" required /><br><br>
      <button class="connecter">Se connecter </button>
    </ul>
  </div>
</template>

<script>
// import axios from '../api';

export default {
  name: 'Connexions',
  data() {
    return {
      email: '',
      mdp: '',
    };
  },
  computed: {
    connexions() {
      return this.$store.getters.connexions;
    },
  },
  method: {
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
label{
  display: inline-block;
  width: 175px;
}
input{
  display: inline;
}
</style>
