import HomePage from './HomePage';
import PokemonPage from './PokemonPage';
import PageNotFound from './PageNotFound';

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