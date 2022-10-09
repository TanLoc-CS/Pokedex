import React from 'react';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const PokemonInfo = React.lazy(() => import('../pages/PokemonPage'));

const routes = [
  {
    path: '/',
    component: HomePage,
    withNavBar: true,
  },
  {
    path: '/pokemon',
    component: PokemonInfo,
    withNavBar: true,
  },
];

export default routes;