import Router from './router';
import { navigationRoutes } from './routes';
import store from '../store/';

Router.beforeEach((to, from, next) => {
  if (!store.state.view.isNavigationSaved) {
    store.commit('view/STORE_NAVIGATION', navigationRoutes);
  }

  next();
});

export default Router;
