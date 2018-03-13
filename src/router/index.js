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
      path: '/reservations',
      name: 'Reservations',
      component: Reservations,
    },
    {
      path: '/materiels',
      name: 'Materiels',
      component: Materiels,
    },
    {
      path: '/professors',
      name: 'Professors',
      component: Professors,
    },
    {
      path: '/connexions',
      name: 'Connexions',
      component: Connexions,
    },
    {
      path: '/ecoles',
      name: 'Ecoles',
      component: Ecoles,
    },
  ],
});
