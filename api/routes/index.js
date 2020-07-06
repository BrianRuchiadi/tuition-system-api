import Router from 'koa-router';
import authorize from '../middleware/authorize';
import rAuth from './auth';

const router = new Router();

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