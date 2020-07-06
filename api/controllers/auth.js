import _ from 'lodash';
import BaseController from './base';

export default new (class AuthController extends BaseController {
  constructor() {
    super();
  }

  async login(ctx) {
    return this.run(ctx)(async () => {
      console.log('here something', ctx.request.body);
    });
  }

  async getLoginPage(ctx) {
    return this.run(ctx)(async () => {
     console.log('get login page');
     ctx.ok(4);
    });
  }
});