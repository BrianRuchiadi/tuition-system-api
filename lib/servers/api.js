import http from 'http';
import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import respond from 'koa-respond';

import routerApi from '../../api/routes/index.js';

async function main() {
  console.log('starting API Server..');

  const api = new Koa();
  const server = http.createServer(api.callback());
  
  const router = new Router();
  router.use(routerApi.routes());
  // api.use(logRequestHandler);
  api.use(respond({autoMessage: false}));
  api.use(cors({exposeHeaders: 'Authorization'}));
  api.use(bodyParser({enableTypes: ['json']}));
  api.use(router.routes()).use(router.allowedMethods());
  
  // Default handler when nothing stopped the chain.
  // api.use(routeNotFoundHandler);
  
  return { server, api };
}

export default main;