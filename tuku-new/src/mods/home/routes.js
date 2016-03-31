import Router from 'koa-router';
const router = new Router();

router.get('/', function (ctx, next) {
  ctx.render('index', {
    title: 'Hello World Koa1!'
  });
});
export default router;
