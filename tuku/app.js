import koa from 'koa';
import koaRouter from 'koa-router';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

console.log('init..');

const app = koa();
const router = koaRouter();
const compiler = webpack(webpackConfig);

app
  .use(webpackDevMiddleware(compiler))
//  .use(webpackHotMiddleware(compiler));

router
  .get('/', function*(next) {
    console.log('in / 1');
    yield next;
  }, function*(next) {
    console.log('in / 2');
    this.body = 'abc';
  })
  .get('/test', function*(next) {
    console.log('in /test');
    yield next;
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('server is started');
