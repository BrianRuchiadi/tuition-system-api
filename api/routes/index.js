import Router from 'koa-router';
import authorize from '../middleware/authorize.js';
import rAuth from './auth.js';
import rRoot from './root.js';

const router = new Router();

apply(router, rRoot, '/', []);
apply(router, rAuth, '/auth', []);

function apply(router, subrouter, prefix, permissions) {
  router.use(
    prefix,
    authorize(permissions),
    subrouter.routes(),
    subrouter.allowedMethods()
  )
}

export default router;