import Router from 'koa-router';
import controller from '../controllers/root.js';

const router = new Router();

router.get('/', controller.getRootPage.bind(controller));

export default router;