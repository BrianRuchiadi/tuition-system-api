import _ from 'lodash';
import BaseController from './base.js';
import dbeducationauth from './../../models/mongo/dbeducationauth/index.js';

export default new (class RootController extends BaseController {
  constructor() {
    super();
  }

  async getRootPage(ctx) {
    return this.run(ctx)(async () => {
      const model = await dbeducationauth['user'];
      // const record = await model.create({
      //   'username': 'brian',
      //   'password': 'something'
      // })
      // console.log('get root page', record);
      ctx.ok('Here is root!');
    });
  }
});