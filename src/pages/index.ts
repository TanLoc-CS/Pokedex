import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import PokemonPage from './PokemonPage';

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