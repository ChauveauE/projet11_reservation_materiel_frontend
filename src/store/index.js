import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservations: [],
    materiels: [],
    ecoles: [],
    professors: [],
  },
  getters: {
    count(state) {
      return state.reservations.length;
    },
    reservations(state) {
      return state.reservations;
    },
    materiels(state) {
      return state.materiels;
    },
    ecoles(state) {
      return state.ecoles;
    },
    professors(state) {
      return state.professors;
    },
  },
  mutations: {
    POPULATE_RESERVATIONS(state, reservations) {
      state.reservations = reservations;
    },
    POPULATE_MATERIELS(state, materiels) {
      state.materiels = materiels;
    },
    POPULATE_ECOLES(state, ecoles) {
      state.ecoles = ecoles;
    },
    POPULATE_PROFESSORS(state, professors) {
      state.professors = professors;
    },
  },
  actions: {
    getReservations(context) {
      api.get('/reservations')
        .then((response) => {
          context.commit('POPULATE_RESERVATIONS', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    putReservations(context) {
      api.put('/reservations')
        .then((response) => {
          context.commit('POPULATE_RESERVATIONS', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    deleteReservations(context) {
      api.delete('/reservations')
        .then((response) => {
          context.commit('POPULATE_RESERVATIONS', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getMateriels(context) {
      api.get('/materiels')
        .then((response) => {
          context.commit('POPULATE_MATERIELS', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    putMateriels(context) {
      api.put('/materiels')
        .then((response) => {
          context.commit('POPULATE_MATERIELS', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getEcoles(context) {
      api.get('/ecoles')
        .then((response) => {
          context.commit('POPULATE_ECOLES', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    postProfessors(context) {
      api.post('/professors')
        .then((response) => {
          context.commit('POPULATE_PROFESSORS', response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
});
