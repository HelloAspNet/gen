import Router from 'koa-router';
const router = new Router();

const users = [
  {a:1},
  {b:2}
];

router
  .param('id', async (val, ctx, next) => {

    ctx.user = users[val];
    if (!ctx.user) return ctx.status = 404;
    await next();
  })
  .get('/', (ctx, next) => {
    ctx.body = `GET ${ctx.url} default api`;
  })
  .get('/:id', (ctx, next) => {

    ctx.body = ctx.user;
  });

export default router;