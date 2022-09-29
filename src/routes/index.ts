import React from 'react';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const PokemonInfo = React.lazy(() => import('../pages/PokemonInfo'));

const routes = [
  {
    path: '/',
    component: HomePage,
    withNavBar: true,
  },
  {
    path: '/PokemonInfo',
    component: PokemonInfo,
    withNavBar: true,
  },
];

export default routes;