'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _koaOnerror = require('koa-onerror');

var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var app = new _koa2.default();
var router = (0, _koaRouter2.default)();

// middlewares
app.use((0, _koaConvert2.default)((0, _koaBodyparser2.default)()));
app.use((0, _koaConvert2.default)((0, _koaJson2.default)()));
app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));
app.use((0, _koaConvert2.default)((0, _koaStatic2.default)(__dirname + '/public')));

app.use((0, _koaConvert2.default)((0, _koaViews2.default)('views', {
  root: __dirname + '/views',
  default: 'jade'
})));

//app.use(co.wrap(function *(ctx, next){
//  ctx.render = co.wrap(ctx.render);
//  yield next();
//}));

app.use(function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.render = _co2.default.wrap(ctx.render);
            _context.next = 3;
            return next();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return ref.apply(this, arguments);
  };
}());

// logger

app.use(_co2.default.wrap(regeneratorRuntime.mark(function _callee2(ctx, next) {
  var start, ms;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          start = new Date();
          _context2.next = 3;
          return next();

        case 3:
          ms = new Date() - start;

          console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
})));

router.use('/', _index2.default.routes(), _index2.default.allowedMethods());
router.use('/users', _users2.default.routes(), _users2.default.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function (err, ctx) {
  log.error('server error', err, ctx);
});

console.log(1232122);

module.exports = app;