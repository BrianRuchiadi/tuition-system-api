export default class BaseController {
  constructor() {
    // should not just by helping common imports
  }

  run = ctx => async source => {
    try {
      return await source();
    } catch (error) {
      let response = {
        error: 'unexpected',
        info: null
      };
    }
  }
}