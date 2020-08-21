import Router from 'koa-router';
import controller from '../controllers/auth.js';

const router = new Router();

router.post('/login', controller.login.bind(controller));
router.get('/login', controller.getLoginPage.bind(controller));

export default router;