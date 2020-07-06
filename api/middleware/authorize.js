export default function authorize(requirep) {
  return async function(ctx, next) {
    // if (!requirep.length) {
    //   return await next();
    // }

    // const userp = ctx.state.jwtDecoded.permissions.map(v => v.name);
    // let authorized = !!requirep.filter(p1 => userp.filter(p2 => p1.startsWith(p2)).length)
    //   .length;

    // if (!authorized) {
    //   console.log('⤬ not authorized', requirep);
    //   console.log('⤬ user permissions', userp);
    //   ctx.throw(401);
    // }

    // // For logger middleware
    // ctx.state.reqPermissions = requirep;

    await next();
  };
}
