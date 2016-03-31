import 'babel-polyfill';
import Koa from 'koa';
import Router from 'koa-router' ;
import views from 'koa-views';
import co from 'co';
import convert from 'koa-convert';
import json from 'koa-json';
import jsonp from 'koa-jsonp';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import serve from 'koa-static';

const app = new Koa();

// middlewares
app.use(convert(bodyparser()));
app.use(convert(json()));
app.use(convert(jsonp()));
app.use(convert(logger()));
app.use(convert(serve(__dirname + '/public')));

app.use(convert(views('views', {
  root: __dirname + '/views',
  default: 'jade'
})));


app.use(async (ctx, next) => {
  ctx.render = co.wrap(ctx.render); 
  await next();
});

// logger

app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});



//import home from './mods/home/routes';
//import user from './mods/user/routes';
import home from './routes/index';
import user from './routes/user';

const router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx);
});

export default app;