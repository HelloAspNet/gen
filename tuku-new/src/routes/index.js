import koaRouter from 'koa-router';
const router = koaRouter();

router.get('/', function (ctx, next) {
  ctx.render('index', {
    title: 'Hello World Koa!'
  });
});
export default router;
