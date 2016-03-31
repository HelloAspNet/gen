import 'babel-polyfill';
import Koa from 'koa';
import koaRouter from 'koa-router' ;
import views from 'koa-views';
import co from 'co';
import convert from 'koa-convert';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import st from 'koa-static';

const app = new Koa();
const router = koaRouter();

// middlewares
app.use(convert(bodyparser()));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(st(__dirname + '/public')));

app.use(convert(views('views', {
  root: __dirname + '/views',
  default: 'jade'
})));

//app.use(co.wrap(function *(ctx, next){
//  ctx.render = co.wrap(ctx.render);
//  yield next();
//}));

app.use(async (ctx, next) => {
  ctx.render = co.wrap(ctx.render);
  await next();
});

// logger

app.use(co.wrap(function *(ctx, next){
  const start = new Date;
  yield next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));

import index from './routes/index';
import users from './routes/users';
router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

console.log(121);

module.exports = app;