import VueRouter from 'vue-router';

import store from '@/store/index';
import routes from '@/router/routes';

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const loaded = { user: false };
  const setLoaded = (mode) => {
    loaded[mode] = true;
    if (loaded.user) next();
  };

  if (to.meta && to.meta.auth) {
    store.dispatch('route', to);
    const params = Object.assign({}, { name: to.meta.api, params: to.params }, to.meta);
    store
      .dispatch('AuthUser', params)
      .then(() => {
        setLoaded('page');
      })
      .catch((err) => {
        // throw new Error(err);
        console.warn(err);
        // next();
        next({
          path: '/',
        });
      });
  } else setLoaded('user');
});

router.afterEach(() => {
  setTimeout(() => {
    window.scrollTo({
      behavior: 'auto', // 'smooth',
      left: 0,
      top: 0,
    });
  }, 500);
});

export default router;
