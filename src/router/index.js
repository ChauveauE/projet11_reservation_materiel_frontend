import Vue from 'vue';
import Router from 'vue-router';
import Reservations from '@/components/Reservations';
import Materiels from '@/components/Materiels';
import Professors from '@/components/Professors';
import Connexions from '@/components/Connexions';
import Ecoles from '@/components/Ecoles';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reservations',
      component: Reservations,
    },
    {
      path: '/',
      name: 'Materiels',
      component: Materiels,
    },
    {
      path: '/',
      name: 'Professors',
      component: Professors,
    },
    {
      path: '/',
      name: 'Connexions',
      component: Connexions,
    },
    {
      path: '/',
      name: 'Ecoles',
      component: Ecoles,
    },
  ],
});
