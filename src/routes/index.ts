import HomePage from '../pages/HomePage';
import PokemonPage from '../pages/PokemonPage';
import PageNotFound from '../pages/PageNotFound';

const routes = [
  {
    path: '',
    component: HomePage,
    withNavBar: true,
  },
  {
    path: '/*',
    component: PageNotFound,
    withNavBar: true,
  },
  {
    path: '/pokemon/:id',
    component: PokemonPage,
    withNavBar: true,
  },
];

export default routes;