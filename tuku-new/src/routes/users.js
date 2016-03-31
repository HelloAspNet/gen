import koaRouter from 'koa-router';
const router = koaRouter();

router.get('/', function (ctx, next) {
  ctx.body = {a:12};
});

export default router;