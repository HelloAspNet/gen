/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _koa = __webpack_require__(3);

	var _koa2 = _interopRequireDefault(_koa);

	var _koaRouter = __webpack_require__(109);

	var _koaRouter2 = _interopRequireDefault(_koaRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import webpack from 'webpack';
	//import webpackConfig from './webpack.config.js';
	//import webpackMiddleware from 'webpack-koa-middleware';
	//import webpackDevMiddleware from 'koa-webpack-dev-middleware';
	//import webpackHotMiddleware from 'koa-webpack-hot-middleware';

	console.log('init..');

	var app = (0, _koa2.default)();
	var router = (0, _koaRouter2.default)();
	//const compiler = webpack(webpackConfig);
	//
	//app
	//  .use(webpackMiddleware(webpackConfig));

	//app
	//  .use(webpackDevMiddleware(compiler))
	//.use(webpackHotMiddleware(compiler));

	router.get('/', regeneratorRuntime.mark(function _callee(next) {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          console.log('in / 1');
	          _context.next = 3;
	          return next;

	        case 3:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _callee, this);
	}), regeneratorRuntime.mark(function _callee2(next) {
	  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          console.log('in / 2');
	          _context2.next = 3;
	          return next;

	        case 3:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _callee2, this);
	})).get('/test', regeneratorRuntime.mark(function _callee3(next) {
	  return regeneratorRuntime.wrap(function _callee3$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          console.log('in /test');
	          _context3.next = 3;
	          return next;

	        case 3:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _callee3, this);
	}));

	app.use(router.routes()).use(router.allowedMethods());

	app.listen(3000);
	console.log('server is started');

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, Buffer) {
	'use strict';

	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(9)('koa:application');
	var Emitter = __webpack_require__(12).EventEmitter;
	var compose_es7 = __webpack_require__(13);
	var onFinished = __webpack_require__(17);
	var response = __webpack_require__(20);
	var compose = __webpack_require__(57);
	var isJSON = __webpack_require__(44);
	var context = __webpack_require__(58);
	var request = __webpack_require__(66);
	var statuses = __webpack_require__(48);
	var Cookies = __webpack_require__(79);
	var accepts = __webpack_require__(102);
	var assert = __webpack_require__(52);
	var Stream = __webpack_require__(24);
	var http = __webpack_require__(97);
	var only = __webpack_require__(108);
	var co = __webpack_require__(16);

	/**
	 * Application prototype.
	 */

	var app = Application.prototype;

	/**
	 * Expose `Application`.
	 */

	module.exports = Application;

	/**
	 * Initialize a new `Application`.
	 *
	 * @api public
	 */

	function Application() {
	  if (!(this instanceof Application)) return new Application;
	  this.env = process.env.NODE_ENV || 'development';
	  this.subdomainOffset = 2;
	  this.middleware = [];
	  this.proxy = false;
	  this.context = Object.create(context);
	  this.request = Object.create(request);
	  this.response = Object.create(response);
	}

	/**
	 * Inherit from `Emitter.prototype`.
	 */

	Object.setPrototypeOf(Application.prototype, Emitter.prototype);

	/**
	 * Shorthand for:
	 *
	 *    http.createServer(app.callback()).listen(...)
	 *
	 * @param {Mixed} ...
	 * @return {Server}
	 * @api public
	 */

	app.listen = function(){
	  debug('listen');
	  var server = http.createServer(this.callback());
	  return server.listen.apply(server, arguments);
	};

	/**
	 * Return JSON representation.
	 * We only bother showing settings.
	 *
	 * @return {Object}
	 * @api public
	 */

	app.inspect =
	app.toJSON = function(){
	  return only(this, [
	    'subdomainOffset',
	    'proxy',
	    'env'
	  ]);
	};

	/**
	 * Use the given middleware `fn`.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Application} self
	 * @api public
	 */

	app.use = function(fn){
	  if (!this.experimental) {
	    // es7 async functions are not allowed,
	    // so we have to make sure that `fn` is a generator function
	    assert(fn && 'GeneratorFunction' == fn.constructor.name, 'app.use() requires a generator function');
	  }
	  debug('use %s', fn._name || fn.name || '-');
	  this.middleware.push(fn);
	  return this;
	};

	/**
	 * Return a request handler callback
	 * for node's native http server.
	 *
	 * @return {Function}
	 * @api public
	 */

	app.callback = function(){
	  if (this.experimental) {
	    console.error('Experimental ES7 Async Function support is deprecated. Please look into Koa v2 as the middleware signature has changed.')
	  }
	  var fn = this.experimental
	    ? compose_es7(this.middleware)
	    : co.wrap(compose(this.middleware));
	  var self = this;

	  if (!this.listeners('error').length) this.on('error', this.onerror);

	  return function(req, res){
	    res.statusCode = 404;
	    var ctx = self.createContext(req, res);
	    onFinished(res, ctx.onerror);
	    fn.call(ctx).then(function () {
	      respond.call(ctx);
	    }).catch(ctx.onerror);
	  }
	};

	/**
	 * Initialize a new context.
	 *
	 * @api private
	 */

	app.createContext = function(req, res){
	  var context = Object.create(this.context);
	  var request = context.request = Object.create(this.request);
	  var response = context.response = Object.create(this.response);
	  context.app = request.app = response.app = this;
	  context.req = request.req = response.req = req;
	  context.res = request.res = response.res = res;
	  request.ctx = response.ctx = context;
	  request.response = response;
	  response.request = request;
	  context.onerror = context.onerror.bind(context);
	  context.originalUrl = request.originalUrl = req.url;
	  context.cookies = new Cookies(req, res, {
	    keys: this.keys,
	    secure: request.secure
	  });
	  context.accept = request.accept = accepts(req);
	  context.state = {};
	  return context;
	};

	/**
	 * Default error handler.
	 *
	 * @param {Error} err
	 * @api private
	 */

	app.onerror = function(err){
	  assert(err instanceof Error, 'non-error thrown: ' + err);

	  if (404 == err.status || err.expose) return;
	  if (this.silent) return;
	  // DEPRECATE env-specific logging in v2
	  if ('test' == this.env) return;

	  var msg = err.stack || err.toString();
	  console.error();
	  console.error(msg.replace(/^/gm, '  '));
	  console.error();
	};

	/**
	 * Response helper.
	 */

	function respond() {
	  // allow bypassing koa
	  if (false === this.respond) return;

	  var res = this.res;
	  if (res.headersSent || !this.writable) return;

	  var body = this.body;
	  var code = this.status;

	  // ignore body
	  if (statuses.empty[code]) {
	    // strip headers
	    this.body = null;
	    return res.end();
	  }

	  if ('HEAD' == this.method) {
	    if (isJSON(body)) this.length = Buffer.byteLength(JSON.stringify(body));
	    return res.end();
	  }

	  // status body
	  if (null == body) {
	    this.type = 'text';
	    body = this.message || String(code);
	    this.length = Buffer.byteLength(body);
	    return res.end(body);
	  }

	  // responses
	  if (Buffer.isBuffer(body)) return res.end(body);
	  if ('string' == typeof body) return res.end(body);
	  if (body instanceof Stream) return body.pipe(res);

	  // body: json
	  body = JSON.stringify(body);
	  this.length = Buffer.byteLength(body);
	  res.end(body);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(5).Buffer))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(6)
	var ieee754 = __webpack_require__(7)
	var isArray = __webpack_require__(8)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 7 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(10);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(11);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	var Promise = __webpack_require__(14);
	var co = __webpack_require__(16);

	module.exports = compose;

	compose.Wrap = Wrap;

	function compose(middleware) {
	  return function (next) {
	    next = next || new Wrap(noop);
	    var i = middleware.length;
	    while (i--) next = new Wrap(middleware[i], this, next);
	    return next
	  }
	}

	/**
	 * Wrap a function, then lazily call it,
	 * always returning both a promise and a generator.
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @param {Wrap} next
	 */

	function Wrap(fn, ctx, next) {
	  if (typeof fn !== 'function') throw TypeError('Not a function!');
	  this._fn = fn;
	  this._ctx = ctx;
	  this._next = next;
	  this._called = false;
	  this._value = undefined;
	  this._promise = undefined;
	  this._generator = undefined;
	}

	/**
	 * Lazily call the function.
	 * Note that if it's not an async or generator function,
	 *
	 * @returns {Mixed}
	 */

	Wrap.prototype._getValue = function () {
	  if (!this._called) {
	    this._called = true;
	    try {
	      this._value = this._fn.call(this._ctx, this._next);
	    } catch (e) {
	      this._value = Promise.reject(e);
	    }
	  }
	  return this._value
	};

	/**
	 * Lazily create a promise from the return value.
	 *
	 * @returns {Promise}
	 */

	Wrap.prototype._getPromise = function () {
	  if (this._promise === undefined) {
	    var value = this._getValue();
	    this._promise = isGenerator(value)
	      ? co.call(this._ctx, value)
	      : Promise.resolve(value);
	  }
	  return this._promise
	}

	/**
	 * Lazily create a generator from the return value.
	 *
	 * @returns {Iterator}
	 */

	Wrap.prototype._getGenerator = function () {
	  if (this._generator === undefined) {
	    var value = this._getValue();
	    this._generator = isGenerator(value)
	      ? value
	      : promiseToGenerator.call(this._ctx, value);
	  }
	  return this._generator
	}

	/**
	 * In later version of v8,
	 * `yield*` works on the `[@@iterator]` method.
	 *
	 * @returns {Iterator}
	 */

	if (typeof Symbol !== 'undefined') {
	  Wrap.prototype[Symbol.iterator] = function () {
	    return this._getGenerator();
	  }
	}

	/**
	 * This creates a generator from a promise or a value.
	 *
	 * TODO: try to avoid using a generator function for this.
	 *
	 * @returns {Iterator}
	 */

	var loggedDeprecationMessage = false;
	function* promiseToGenerator(promise) {
	  if (!loggedDeprecationMessage) {
	    console.error('A promise was converted into a generator, which is an anti-pattern. Please avoid using `yield* next`!')
	    loggedDeprecationMessage = true;
	  }
	  return yield Promise.resolve(promise);
	}

	/**
	 * Proxy generator and promise methods.
	 */

	Wrap.prototype.then = function (resolve, reject) {
	  return this._getPromise().then(resolve, reject);
	}

	Wrap.prototype.catch = function (reject) {
	  return this._getPromise().catch(reject);
	}

	Wrap.prototype.next = function (val) {
	  return this._getGenerator().next(val);
	}

	Wrap.prototype.throw = function (err) {
	  return this._getGenerator().throw(err);
	}

	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 */

	function isGenerator(obj) {
	  return obj
	    && typeof obj.next === 'function'
	    && typeof obj.throw === 'function';
	}

	function noop() {}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15)().Promise


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict"
	var registered = {
	  Promise: window.Promise,
	  implementation: 'window.Promise'
	}

	/**
	 * any-promise in browser is always global
	 * polyfill as necessary
	 */
	module.exports = register
	function register(){
	  return registered
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	
	/**
	 * slice() reference.
	 */

	var slice = Array.prototype.slice;

	/**
	 * Expose `co`.
	 */

	module.exports = co['default'] = co.co = co;

	/**
	 * Wrap the given generator `fn` into a
	 * function that returns a promise.
	 * This is a separate function so that
	 * every `co()` call doesn't create a new,
	 * unnecessary closure.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Function}
	 * @api public
	 */

	co.wrap = function (fn) {
	  createPromise.__generatorFunction__ = fn;
	  return createPromise;
	  function createPromise() {
	    return co.call(this, fn.apply(this, arguments));
	  }
	};

	/**
	 * Execute the generator function or a generator
	 * and return a promise.
	 *
	 * @param {Function} fn
	 * @return {Promise}
	 * @api public
	 */

	function co(gen) {
	  var ctx = this;
	  var args = slice.call(arguments, 1)

	  // we wrap everything in a promise to avoid promise chaining,
	  // which leads to memory leak errors.
	  // see https://github.com/tj/co/issues/180
	  return new Promise(function(resolve, reject) {
	    if (typeof gen === 'function') gen = gen.apply(ctx, args);
	    if (!gen || typeof gen.next !== 'function') return resolve(gen);

	    onFulfilled();

	    /**
	     * @param {Mixed} res
	     * @return {Promise}
	     * @api private
	     */

	    function onFulfilled(res) {
	      var ret;
	      try {
	        ret = gen.next(res);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * @param {Error} err
	     * @return {Promise}
	     * @api private
	     */

	    function onRejected(err) {
	      var ret;
	      try {
	        ret = gen.throw(err);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }

	    /**
	     * Get the next value in the generator,
	     * return a promise.
	     *
	     * @param {Object} ret
	     * @return {Promise}
	     * @api private
	     */

	    function next(ret) {
	      if (ret.done) return resolve(ret.value);
	      var value = toPromise.call(ctx, ret.value);
	      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
	      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following object was passed: "' + String(ret.value) + '"'));
	    }
	  });
	}

	/**
	 * Convert a `yield`ed value into a promise.
	 *
	 * @param {Mixed} obj
	 * @return {Promise}
	 * @api private
	 */

	function toPromise(obj) {
	  if (!obj) return obj;
	  if (isPromise(obj)) return obj;
	  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
	  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
	  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
	  if (isObject(obj)) return objectToPromise.call(this, obj);
	  return obj;
	}

	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */

	function thunkToPromise(fn) {
	  var ctx = this;
	  return new Promise(function (resolve, reject) {
	    fn.call(ctx, function (err, res) {
	      if (err) return reject(err);
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	      resolve(res);
	    });
	  });
	}

	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */

	function arrayToPromise(obj) {
	  return Promise.all(obj.map(toPromise, this));
	}

	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */

	function objectToPromise(obj){
	  var results = new obj.constructor();
	  var keys = Object.keys(obj);
	  var promises = [];
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var promise = toPromise.call(this, obj[key]);
	    if (promise && isPromise(promise)) defer(promise, key);
	    else results[key] = obj[key];
	  }
	  return Promise.all(promises).then(function () {
	    return results;
	  });

	  function defer(promise, key) {
	    // predefine the key in the result
	    results[key] = undefined;
	    promises.push(promise.then(function (res) {
	      results[key] = res;
	    }));
	  }
	}

	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isPromise(obj) {
	  return 'function' == typeof obj.then;
	}

	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isGenerator(obj) {
	  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}

	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	function isGeneratorFunction(obj) {
	  var constructor = obj.constructor;
	  if (!constructor) return false;
	  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
	  return isGenerator(constructor.prototype);
	}

	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(val) {
	  return Object == val.constructor;
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, process) {/*!
	 * on-finished
	 * Copyright(c) 2013 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = onFinished
	module.exports.isFinished = isFinished

	/**
	 * Module dependencies.
	 * @private
	 */

	var first = __webpack_require__(19)

	/**
	 * Variables.
	 * @private
	 */

	/* istanbul ignore next */
	var defer = typeof setImmediate === 'function'
	  ? setImmediate
	  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

	/**
	 * Invoke callback when the response has finished, useful for
	 * cleaning up resources afterwards.
	 *
	 * @param {object} msg
	 * @param {function} listener
	 * @return {object}
	 * @public
	 */

	function onFinished(msg, listener) {
	  if (isFinished(msg) !== false) {
	    defer(listener, null, msg)
	    return msg
	  }

	  // attach the listener to the message
	  attachListener(msg, listener)

	  return msg
	}

	/**
	 * Determine if message is already finished.
	 *
	 * @param {object} msg
	 * @return {boolean}
	 * @public
	 */

	function isFinished(msg) {
	  var socket = msg.socket

	  if (typeof msg.finished === 'boolean') {
	    // OutgoingMessage
	    return Boolean(msg.finished || (socket && !socket.writable))
	  }

	  if (typeof msg.complete === 'boolean') {
	    // IncomingMessage
	    return Boolean(msg.upgrade || !socket || !socket.readable || (msg.complete && !msg.readable))
	  }

	  // don't know
	  return undefined
	}

	/**
	 * Attach a finished listener to the message.
	 *
	 * @param {object} msg
	 * @param {function} callback
	 * @private
	 */

	function attachFinishedListener(msg, callback) {
	  var eeMsg
	  var eeSocket
	  var finished = false

	  function onFinish(error) {
	    eeMsg.cancel()
	    eeSocket.cancel()

	    finished = true
	    callback(error)
	  }

	  // finished on first message event
	  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish)

	  function onSocket(socket) {
	    // remove listener
	    msg.removeListener('socket', onSocket)

	    if (finished) return
	    if (eeMsg !== eeSocket) return

	    // finished on first socket event
	    eeSocket = first([[socket, 'error', 'close']], onFinish)
	  }

	  if (msg.socket) {
	    // socket already assigned
	    onSocket(msg.socket)
	    return
	  }

	  // wait for socket to be assigned
	  msg.on('socket', onSocket)

	  if (msg.socket === undefined) {
	    // node.js 0.8 patch
	    patchAssignSocket(msg, onSocket)
	  }
	}

	/**
	 * Attach the listener to the message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @private
	 */

	function attachListener(msg, listener) {
	  var attached = msg.__onFinished

	  // create a private single listener with queue
	  if (!attached || !attached.queue) {
	    attached = msg.__onFinished = createListener(msg)
	    attachFinishedListener(msg, attached)
	  }

	  attached.queue.push(listener)
	}

	/**
	 * Create listener on message.
	 *
	 * @param {object} msg
	 * @return {function}
	 * @private
	 */

	function createListener(msg) {
	  function listener(err) {
	    if (msg.__onFinished === listener) msg.__onFinished = null
	    if (!listener.queue) return

	    var queue = listener.queue
	    listener.queue = null

	    for (var i = 0; i < queue.length; i++) {
	      queue[i](err, msg)
	    }
	  }

	  listener.queue = []

	  return listener
	}

	/**
	 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
	 *
	 * @param {ServerResponse} res
	 * @param {function} callback
	 * @private
	 */

	function patchAssignSocket(res, callback) {
	  var assignSocket = res.assignSocket

	  if (typeof assignSocket !== 'function') return

	  // res.on('socket', callback) is broken in 0.8
	  res.assignSocket = function _assignSocket(socket) {
	    assignSocket.call(this, socket)
	    callback(socket)
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18).setImmediate, __webpack_require__(4)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(4).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18).setImmediate, __webpack_require__(18).clearImmediate))

/***/ },
/* 19 */
/***/ function(module, exports) {

	/*!
	 * ee-first
	 * Copyright(c) 2014 Jonathan Ong
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = first

	/**
	 * Get the first event in a set of event emitters and event pairs.
	 *
	 * @param {array} stuff
	 * @param {function} done
	 * @public
	 */

	function first(stuff, done) {
	  if (!Array.isArray(stuff))
	    throw new TypeError('arg must be an array of [ee, events...] arrays')

	  var cleanups = []

	  for (var i = 0; i < stuff.length; i++) {
	    var arr = stuff[i]

	    if (!Array.isArray(arr) || arr.length < 2)
	      throw new TypeError('each array member must be [ee, events...]')

	    var ee = arr[0]

	    for (var j = 1; j < arr.length; j++) {
	      var event = arr[j]
	      var fn = listener(event, callback)

	      // listen to the event
	      ee.on(event, fn)
	      // push this listener to the list of cleanups
	      cleanups.push({
	        ee: ee,
	        event: event,
	        fn: fn,
	      })
	    }
	  }

	  function callback() {
	    cleanup()
	    done.apply(null, arguments)
	  }

	  function cleanup() {
	    var x
	    for (var i = 0; i < cleanups.length; i++) {
	      x = cleanups[i]
	      x.ee.removeListener(x.event, x.fn)
	    }
	  }

	  function thunk(fn) {
	    done = fn
	  }

	  thunk.cancel = cleanup

	  return thunk
	}

	/**
	 * Create the event listener.
	 * @private
	 */

	function listener(event, done) {
	  return function onevent(arg1) {
	    var args = new Array(arguments.length)
	    var ee = this
	    var err = event === 'error'
	      ? arg1
	      : null

	    // copy args to prevent arguments escaping scope
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i]
	    }

	    done(err, ee, event, args)
	  }
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	'use strict';

	/**
	 * Module dependencies.
	 */

	var contentDisposition = __webpack_require__(21);
	var ensureErrorHandler = __webpack_require__(23);
	var getType = __webpack_require__(41).contentType;
	var onFinish = __webpack_require__(17);
	var isJSON = __webpack_require__(44);
	var escape = __webpack_require__(45);
	var typeis = __webpack_require__(46).is;
	var statuses = __webpack_require__(48);
	var destroy = __webpack_require__(50);
	var assert = __webpack_require__(52);
	var path = __webpack_require__(22);
	var vary = __webpack_require__(56);
	var extname = path.extname;

	/**
	 * Prototype.
	 */

	module.exports = {

	  /**
	   * Return the request socket.
	   *
	   * @return {Connection}
	   * @api public
	   */

	  get socket() {
	    return this.ctx.req.socket;
	  },

	  /**
	   * Return response header.
	   *
	   * @return {Object}
	   * @api public
	   */

	  get header() {
	    return this.res._headers || {};
	  },

	  /**
	   * Return response header, alias as response.header
	   *
	   * @return {Object}
	   * @api public
	   */

	  get headers() {
	    return this.header;
	  },

	  /**
	   * Get response status code.
	   *
	   * @return {Number}
	   * @api public
	   */

	  get status() {
	    return this.res.statusCode;
	  },

	  /**
	   * Set response status code.
	   *
	   * @param {Number} code
	   * @api public
	   */

	  set status(code) {
	    assert('number' == typeof code, 'status code must be a number');
	    assert(statuses[code], 'invalid status code: ' + code);
	    this._explicitStatus = true;
	    this.res.statusCode = code;
	    this.res.statusMessage = statuses[code];
	    if (this.body && statuses.empty[code]) this.body = null;
	  },

	  /**
	   * Get response status message
	   *
	   * @return {String}
	   * @api public
	   */

	  get message() {
	    return this.res.statusMessage || statuses[this.status];
	  },

	  /**
	   * Set response status message
	   *
	   * @param {String} msg
	   * @api public
	   */

	  set message(msg) {
	    this.res.statusMessage = msg;
	  },

	  /**
	   * Get response body.
	   *
	   * @return {Mixed}
	   * @api public
	   */

	  get body() {
	    return this._body;
	  },

	  /**
	   * Set response body.
	   *
	   * @param {String|Buffer|Object|Stream} val
	   * @api public
	   */

	  set body(val) {
	    var original = this._body;
	    this._body = val;

	    // no content
	    if (null == val) {
	      if (!statuses.empty[this.status]) this.status = 204;
	      this.remove('Content-Type');
	      this.remove('Content-Length');
	      this.remove('Transfer-Encoding');
	      return;
	    }

	    // set the status
	    if (!this._explicitStatus) this.status = 200;

	    // set the content-type only if not yet set
	    var setType = !this.header['content-type'];

	    // string
	    if ('string' == typeof val) {
	      if (setType) this.type = /^\s*</.test(val) ? 'html' : 'text';
	      this.length = Buffer.byteLength(val);
	      return;
	    }

	    // buffer
	    if (Buffer.isBuffer(val)) {
	      if (setType) this.type = 'bin';
	      this.length = val.length;
	      return;
	    }

	    // stream
	    if ('function' == typeof val.pipe) {
	      onFinish(this.res, destroy.bind(null, val));
	      ensureErrorHandler(val, this.ctx.onerror);

	      // overwriting
	      if (null != original && original != val) this.remove('Content-Length');

	      if (setType) this.type = 'bin';
	      return;
	    }

	    // json
	    this.remove('Content-Length');
	    this.type = 'json';
	  },

	  /**
	   * Set Content-Length field to `n`.
	   *
	   * @param {Number} n
	   * @api public
	   */

	  set length(n) {
	    this.set('Content-Length', n);
	  },

	  /**
	   * Return parsed response Content-Length when present.
	   *
	   * @return {Number}
	   * @api public
	   */

	  get length() {
	    var len = this.header['content-length'];
	    var body = this.body;

	    if (null == len) {
	      if (!body) return;
	      if ('string' == typeof body) return Buffer.byteLength(body);
	      if (Buffer.isBuffer(body)) return body.length;
	      if (isJSON(body)) return Buffer.byteLength(JSON.stringify(body));
	      return;
	    }

	    return ~~len;
	  },

	  /**
	   * Check if a header has been written to the socket.
	   *
	   * @return {Boolean}
	   * @api public
	   */

	  get headerSent() {
	    return this.res.headersSent;
	  },

	  /**
	   * Vary on `field`.
	   *
	   * @param {String} field
	   * @api public
	   */

	  vary: function(field){
	    vary(this.res, field);
	  },

	  /**
	   * Perform a 302 redirect to `url`.
	   *
	   * The string "back" is special-cased
	   * to provide Referrer support, when Referrer
	   * is not present `alt` or "/" is used.
	   *
	   * Examples:
	   *
	   *    this.redirect('back');
	   *    this.redirect('back', '/index.html');
	   *    this.redirect('/login');
	   *    this.redirect('http://google.com');
	   *
	   * @param {String} url
	   * @param {String} [alt]
	   * @api public
	   */

	  redirect: function(url, alt){
	    // location
	    if ('back' == url) url = this.ctx.get('Referrer') || alt || '/';
	    this.set('Location', url);

	    // status
	    if (!statuses.redirect[this.status]) this.status = 302;

	    // html
	    if (this.ctx.accepts('html')) {
	      url = escape(url);
	      this.type = 'text/html; charset=utf-8';
	      this.body = 'Redirecting to <a href="' + url + '">' + url + '</a>.';
	      return;
	    }

	    // text
	    this.type = 'text/plain; charset=utf-8';
	    this.body = 'Redirecting to ' + url + '.';
	  },

	  /**
	   * Set Content-Disposition header to "attachment" with optional `filename`.
	   *
	   * @param {String} filename
	   * @api public
	   */

	  attachment: function(filename){
	    if (filename) this.type = extname(filename);
	    this.set('Content-Disposition', contentDisposition(filename));
	  },

	  /**
	   * Set Content-Type response header with `type` through `mime.lookup()`
	   * when it does not contain a charset.
	   *
	   * Examples:
	   *
	   *     this.type = '.html';
	   *     this.type = 'html';
	   *     this.type = 'json';
	   *     this.type = 'application/json';
	   *     this.type = 'png';
	   *
	   * @param {String} type
	   * @api public
	   */

	  set type(type) {
	    type = getType(type) || false;
	    if (type) {
	      this.set('Content-Type', type);
	    } else {
	      this.remove('Content-Type');
	    }
	  },

	  /**
	   * Set the Last-Modified date using a string or a Date.
	   *
	   *     this.response.lastModified = new Date();
	   *     this.response.lastModified = '2013-09-13';
	   *
	   * @param {String|Date} type
	   * @api public
	   */

	  set lastModified(val) {
	    if ('string' == typeof val) val = new Date(val);
	    this.set('Last-Modified', val.toUTCString());
	  },

	  /**
	   * Get the Last-Modified date in Date form, if it exists.
	   *
	   * @return {Date}
	   * @api public
	   */

	  get lastModified() {
	    var date = this.get('last-modified');
	    if (date) return new Date(date);
	  },

	  /**
	   * Set the ETag of a response.
	   * This will normalize the quotes if necessary.
	   *
	   *     this.response.etag = 'md5hashsum';
	   *     this.response.etag = '"md5hashsum"';
	   *     this.response.etag = 'W/"123456789"';
	   *
	   * @param {String} etag
	   * @api public
	   */

	  set etag(val) {
	    if (!/^(W\/)?"/.test(val)) val = '"' + val + '"';
	    this.set('ETag', val);
	  },

	  /**
	   * Get the ETag of a response.
	   *
	   * @return {String}
	   * @api public
	   */

	  get etag() {
	    return this.get('ETag');
	  },

	  /**
	   * Return the response mime type void of
	   * parameters such as "charset".
	   *
	   * @return {String}
	   * @api public
	   */

	  get type() {
	    var type = this.get('Content-Type');
	    if (!type) return '';
	    return type.split(';')[0];
	  },

	  /**
	   * Check whether the response is one of the listed types.
	   * Pretty much the same as `this.request.is()`.
	   *
	   * @param {String|Array} types...
	   * @return {String|false}
	   * @api public
	   */

	  is: function(types){
	    var type = this.type;
	    if (!types) return type || false;
	    if (!Array.isArray(types)) types = [].slice.call(arguments);
	    return typeis(type, types);
	  },

	  /**
	   * Return response header.
	   *
	   * Examples:
	   *
	   *     this.get('Content-Type');
	   *     // => "text/plain"
	   *
	   *     this.get('content-type');
	   *     // => "text/plain"
	   *
	   * @param {String} field
	   * @return {String}
	   * @api public
	   */

	  get: function(field){
	    return this.header[field.toLowerCase()] || '';
	  },

	  /**
	   * Set header `field` to `val`, or pass
	   * an object of header fields.
	   *
	   * Examples:
	   *
	   *    this.set('Foo', ['bar', 'baz']);
	   *    this.set('Accept', 'application/json');
	   *    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
	   *
	   * @param {String|Object|Array} field
	   * @param {String} val
	   * @api public
	   */

	  set: function(field, val){
	    if (2 == arguments.length) {
	      if (Array.isArray(val)) val = val.map(String);
	      else val = String(val);
	      this.res.setHeader(field, val);
	    } else {
	      for (var key in field) {
	        this.set(key, field[key]);
	      }
	    }
	  },

	  /**
	   * Append additional header `field` with value `val`.
	   *
	   * Examples:
	   *
	   *    this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	   *    this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	   *    this.append('Warning', '199 Miscellaneous warning');
	   *
	   * @param {String} field
	   * @param {String|Array} val
	   * @api public
	   */

	  append: function(field, val){
	    var prev = this.get(field);

	    if (prev) {
	      val = Array.isArray(prev)
	        ? prev.concat(val)
	        : [prev].concat(val);
	    }

	    return this.set(field, val);
	  },

	  /**
	   * Remove header `field`.
	   *
	   * @param {String} name
	   * @api public
	   */

	  remove: function(field){
	    this.res.removeHeader(field);
	  },

	  /**
	   * Checks if the request is writable.
	   * Tests for the existence of the socket
	   * as node sometimes does not set it.
	   *
	   * @return {Boolean}
	   * @api private
	   */

	  get writable() {
	    var socket = this.res.socket;
	    if (!socket) return false;
	    return socket.writable;
	  },

	  /**
	   * Inspect implementation.
	   *
	   * @return {Object}
	   * @api public
	   */

	  inspect: function(){
	    if (!this.res) return;
	    var o = this.toJSON();
	    o.body = this.body;
	    return o;
	  },

	  /**
	   * Return JSON representation.
	   *
	   * @return {Object}
	   * @api public
	   */

	  toJSON: function(){
	    return {
	      status: this.status,
	      message: this.message,
	      header: this.header
	    };
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * content-disposition
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module exports.
	 */

	module.exports = contentDisposition
	module.exports.parse = parse

	/**
	 * Module dependencies.
	 */

	var basename = __webpack_require__(22).basename

	/**
	 * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
	 */

	var encodeUriAttrCharRegExp = /[\x00-\x20"'\(\)*,\/:;<=>?@\[\\\]\{\}\x7f]/g

	/**
	 * RegExp to match percent encoding escape.
	 */

	var hexEscapeRegExp = /%[0-9A-Fa-f]{2}/
	var hexEscapeReplaceRegExp = /%([0-9A-Fa-f]{2})/g

	/**
	 * RegExp to match non-latin1 characters.
	 */

	var nonLatin1RegExp = /[^\x20-\x7e\xa0-\xff]/g

	/**
	 * RegExp to match quoted-pair in RFC 2616
	 *
	 * quoted-pair = "\" CHAR
	 * CHAR        = <any US-ASCII character (octets 0 - 127)>
	 */

	var qescRegExp = /\\([\u0000-\u007f])/g;

	/**
	 * RegExp to match chars that must be quoted-pair in RFC 2616
	 */

	var quoteRegExp = /([\\"])/g

	/**
	 * RegExp for various RFC 2616 grammar
	 *
	 * parameter     = token "=" ( token | quoted-string )
	 * token         = 1*<any CHAR except CTLs or separators>
	 * separators    = "(" | ")" | "<" | ">" | "@"
	 *               | "," | ";" | ":" | "\" | <">
	 *               | "/" | "[" | "]" | "?" | "="
	 *               | "{" | "}" | SP | HT
	 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
	 * qdtext        = <any TEXT except <">>
	 * quoted-pair   = "\" CHAR
	 * CHAR          = <any US-ASCII character (octets 0 - 127)>
	 * TEXT          = <any OCTET except CTLs, but including LWS>
	 * LWS           = [CRLF] 1*( SP | HT )
	 * CRLF          = CR LF
	 * CR            = <US-ASCII CR, carriage return (13)>
	 * LF            = <US-ASCII LF, linefeed (10)>
	 * SP            = <US-ASCII SP, space (32)>
	 * HT            = <US-ASCII HT, horizontal-tab (9)>
	 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
	 * OCTET         = <any 8-bit sequence of data>
	 */

	var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g
	var textRegExp = /^[\x20-\x7e\x80-\xff]+$/
	var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/

	/**
	 * RegExp for various RFC 5987 grammar
	 *
	 * ext-value     = charset  "'" [ language ] "'" value-chars
	 * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
	 * mime-charset  = 1*mime-charsetc
	 * mime-charsetc = ALPHA / DIGIT
	 *               / "!" / "#" / "$" / "%" / "&"
	 *               / "+" / "-" / "^" / "_" / "`"
	 *               / "{" / "}" / "~"
	 * language      = ( 2*3ALPHA [ extlang ] )
	 *               / 4ALPHA
	 *               / 5*8ALPHA
	 * extlang       = *3( "-" 3ALPHA )
	 * value-chars   = *( pct-encoded / attr-char )
	 * pct-encoded   = "%" HEXDIG HEXDIG
	 * attr-char     = ALPHA / DIGIT
	 *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
	 *               / "^" / "_" / "`" / "|" / "~"
	 */

	var extValueRegExp = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+\-\.^_`|~])+)$/

	/**
	 * RegExp for various RFC 6266 grammar
	 *
	 * disposition-type = "inline" | "attachment" | disp-ext-type
	 * disp-ext-type    = token
	 * disposition-parm = filename-parm | disp-ext-parm
	 * filename-parm    = "filename" "=" value
	 *                  | "filename*" "=" ext-value
	 * disp-ext-parm    = token "=" value
	 *                  | ext-token "=" ext-value
	 * ext-token        = <the characters in token, followed by "*">
	 */

	var dispositionTypeRegExp = /^([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *(?:$|;)/

	/**
	 * Create an attachment Content-Disposition header.
	 *
	 * @param {string} [filename]
	 * @param {object} [options]
	 * @param {string} [options.type=attachment]
	 * @param {string|boolean} [options.fallback=true]
	 * @return {string}
	 * @api public
	 */

	function contentDisposition(filename, options) {
	  var opts = options || {}

	  // get type
	  var type = opts.type || 'attachment'

	  // get parameters
	  var params = createparams(filename, opts.fallback)

	  // format into string
	  return format(new ContentDisposition(type, params))
	}

	/**
	 * Create parameters object from filename and fallback.
	 *
	 * @param {string} [filename]
	 * @param {string|boolean} [fallback=true]
	 * @return {object}
	 * @api private
	 */

	function createparams(filename, fallback) {
	  if (filename === undefined) {
	    return
	  }

	  var params = {}

	  if (typeof filename !== 'string') {
	    throw new TypeError('filename must be a string')
	  }

	  // fallback defaults to true
	  if (fallback === undefined) {
	    fallback = true
	  }

	  if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
	    throw new TypeError('fallback must be a string or boolean')
	  }

	  if (typeof fallback === 'string' && nonLatin1RegExp.test(fallback)) {
	    throw new TypeError('fallback must be ISO-8859-1 string')
	  }

	  // restrict to file base name
	  var name = basename(filename)

	  // determine if name is suitable for quoted string
	  var isQuotedString = textRegExp.test(name)

	  // generate fallback name
	  var fallbackName = typeof fallback !== 'string'
	    ? fallback && getlatin1(name)
	    : basename(fallback)
	  var hasFallback = typeof fallbackName === 'string' && fallbackName !== name

	  // set extended filename parameter
	  if (hasFallback || !isQuotedString || hexEscapeRegExp.test(name)) {
	    params['filename*'] = name
	  }

	  // set filename parameter
	  if (isQuotedString || hasFallback) {
	    params.filename = hasFallback
	      ? fallbackName
	      : name
	  }

	  return params
	}

	/**
	 * Format object to Content-Disposition header.
	 *
	 * @param {object} obj
	 * @param {string} obj.type
	 * @param {object} [obj.parameters]
	 * @return {string}
	 * @api private
	 */

	function format(obj) {
	  var parameters = obj.parameters
	  var type = obj.type

	  if (!type || typeof type !== 'string' || !tokenRegExp.test(type)) {
	    throw new TypeError('invalid type')
	  }

	  // start with normalized type
	  var string = String(type).toLowerCase()

	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param
	    var params = Object.keys(parameters).sort()

	    for (var i = 0; i < params.length; i++) {
	      param = params[i]

	      var val = param.substr(-1) === '*'
	        ? ustring(parameters[param])
	        : qstring(parameters[param])

	      string += '; ' + param + '=' + val
	    }
	  }

	  return string
	}

	/**
	 * Decode a RFC 6987 field value (gracefully).
	 *
	 * @param {string} str
	 * @return {string}
	 * @api private
	 */

	function decodefield(str) {
	  var match = extValueRegExp.exec(str)

	  if (!match) {
	    throw new TypeError('invalid extended field value')
	  }

	  var charset = match[1].toLowerCase()
	  var encoded = match[2]
	  var value

	  // to binary string
	  var binary = encoded.replace(hexEscapeReplaceRegExp, pdecode)

	  switch (charset) {
	    case 'iso-8859-1':
	      value = getlatin1(binary)
	      break
	    case 'utf-8':
	      value = new Buffer(binary, 'binary').toString('utf8')
	      break
	    default:
	      throw new TypeError('unsupported charset in extended field')
	  }

	  return value
	}

	/**
	 * Get ISO-8859-1 version of string.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */

	function getlatin1(val) {
	  // simple Unicode -> ISO-8859-1 transformation
	  return String(val).replace(nonLatin1RegExp, '?')
	}

	/**
	 * Parse Content-Disposition header string.
	 *
	 * @param {string} string
	 * @return {object}
	 * @api private
	 */

	function parse(string) {
	  if (!string || typeof string !== 'string') {
	    throw new TypeError('argument string is required')
	  }

	  var match = dispositionTypeRegExp.exec(string)

	  if (!match) {
	    throw new TypeError('invalid type format')
	  }

	  // normalize type
	  var index = match[0].length
	  var type = match[1].toLowerCase()

	  var key
	  var names = []
	  var params = {}
	  var value

	  // calculate index to start at
	  index = paramRegExp.lastIndex = match[0].substr(-1) === ';'
	    ? index - 1
	    : index

	  // match parameters
	  while (match = paramRegExp.exec(string)) {
	    if (match.index !== index) {
	      throw new TypeError('invalid parameter format')
	    }

	    index += match[0].length
	    key = match[1].toLowerCase()
	    value = match[2]

	    if (names.indexOf(key) !== -1) {
	      throw new TypeError('invalid duplicate parameter')
	    }

	    names.push(key)

	    if (key.indexOf('*') + 1 === key.length) {
	      // decode extended value
	      key = key.slice(0, -1)
	      value = decodefield(value)

	      // overwrite existing value
	      params[key] = value
	      continue
	    }

	    if (typeof params[key] === 'string') {
	      continue
	    }

	    if (value[0] === '"') {
	      // remove quotes and escapes
	      value = value
	        .substr(1, value.length - 2)
	        .replace(qescRegExp, '$1')
	    }

	    params[key] = value
	  }

	  if (index !== -1 && index !== string.length) {
	    throw new TypeError('invalid parameter format')
	  }

	  return new ContentDisposition(type, params)
	}

	/**
	 * Percent decode a single character.
	 *
	 * @param {string} str
	 * @param {string} hex
	 * @return {string}
	 * @api private
	 */

	function pdecode(str, hex) {
	  return String.fromCharCode(parseInt(hex, 16))
	}

	/**
	 * Percent encode a single character.
	 *
	 * @param {string} char
	 * @return {string}
	 * @api private
	 */

	function pencode(char) {
	  var hex = String(char)
	    .charCodeAt(0)
	    .toString(16)
	    .toUpperCase()
	  return hex.length === 1
	    ? '%0' + hex
	    : '%' + hex
	}

	/**
	 * Quote a string for HTTP.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */

	function qstring(val) {
	  var str = String(val)

	  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
	}

	/**
	 * Encode a Unicode string for HTTP (RFC 5987).
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */

	function ustring(val) {
	  var str = String(val)

	  // percent encode as UTF-8
	  var encoded = encodeURIComponent(str)
	    .replace(encodeUriAttrCharRegExp, pencode)

	  return 'UTF-8\'\'' + encoded
	}

	/**
	 * Class for parsed Content-Disposition header for v8 optimization
	 */

	function ContentDisposition(type, parameters) {
	  this.type = type
	  this.parameters = parameters
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(24);

	module.exports = function (stream, error) {
	  if (stream instanceof Stream
	    && !~stream.listeners('error').indexOf(error)) {
	    stream.on('error', error);
	  }
	  return stream;
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(12).EventEmitter;
	var inherits = __webpack_require__(25);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(26);
	Stream.Writable = __webpack_require__(37);
	Stream.Duplex = __webpack_require__(38);
	Stream.Transform = __webpack_require__(39);
	Stream.PassThrough = __webpack_require__(40);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(27);
	exports.Stream = __webpack_require__(24);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(33);
	exports.Duplex = __webpack_require__(32);
	exports.Transform = __webpack_require__(35);
	exports.PassThrough = __webpack_require__(36);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(28);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(5).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(12).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(24);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(30);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(31);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(32);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(34).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(32);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(34).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 30 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(30);
	/*</replacement>*/

	var Readable = __webpack_require__(27);
	var Writable = __webpack_require__(33);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(5).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(30);
	/*</replacement>*/

	var Stream = __webpack_require__(24);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(32);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(32);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(5).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(32);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(30);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(35);

	/*<replacement>*/
	var util = __webpack_require__(29);
	util.inherits = __webpack_require__(30);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33)


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32)


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35)


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36)


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mime-types
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module dependencies.
	 * @private
	 */

	var db = __webpack_require__(42)
	var extname = __webpack_require__(22).extname

	/**
	 * Module variables.
	 * @private
	 */

	var extractTypeRegExp = /^\s*([^;\s]*)(?:;|\s|$)/
	var textTypeRegExp = /^text\//i

	/**
	 * Module exports.
	 * @public
	 */

	exports.charset = charset
	exports.charsets = { lookup: charset }
	exports.contentType = contentType
	exports.extension = extension
	exports.extensions = Object.create(null)
	exports.lookup = lookup
	exports.types = Object.create(null)

	// Populate the extensions/types maps
	populateMaps(exports.extensions, exports.types)

	/**
	 * Get the default charset for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function charset(type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = extractTypeRegExp.exec(type)
	  var mime = match && db[match[1].toLowerCase()]

	  if (mime && mime.charset) {
	    return mime.charset
	  }

	  // default text/* to utf-8
	  if (match && textTypeRegExp.test(match[1])) {
	    return 'UTF-8'
	  }

	  return false
	}

	/**
	 * Create a full Content-Type header given a MIME type or extension.
	 *
	 * @param {string} str
	 * @return {boolean|string}
	 */

	function contentType(str) {
	  // TODO: should this even be in this module?
	  if (!str || typeof str !== 'string') {
	    return false
	  }

	  var mime = str.indexOf('/') === -1
	    ? exports.lookup(str)
	    : str

	  if (!mime) {
	    return false
	  }

	  // TODO: use content-type or other module
	  if (mime.indexOf('charset') === -1) {
	    var charset = exports.charset(mime)
	    if (charset) mime += '; charset=' + charset.toLowerCase()
	  }

	  return mime
	}

	/**
	 * Get the default extension for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function extension(type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = extractTypeRegExp.exec(type)

	  // get extensions
	  var exts = match && exports.extensions[match[1].toLowerCase()]

	  if (!exts || !exts.length) {
	    return false
	  }

	  return exts[0]
	}

	/**
	 * Lookup the MIME type for a file path/extension.
	 *
	 * @param {string} path
	 * @return {boolean|string}
	 */

	function lookup(path) {
	  if (!path || typeof path !== 'string') {
	    return false
	  }

	  // get the extension ("ext" or ".ext" or full path)
	  var extension = extname('x.' + path)
	    .toLowerCase()
	    .substr(1)

	  if (!extension) {
	    return false
	  }

	  return exports.types[extension] || false
	}

	/**
	 * Populate the extensions and types maps.
	 * @private
	 */

	function populateMaps(extensions, types) {
	  // source preference (least -> most)
	  var preference = ['nginx', 'apache', undefined, 'iana']

	  Object.keys(db).forEach(function forEachMimeType(type) {
	    var mime = db[type]
	    var exts = mime.extensions

	    if (!exts || !exts.length) {
	      return
	    }

	    // mime -> extensions
	    extensions[type] = exts

	    // extension -> mime
	    for (var i = 0; i < exts.length; i++) {
	      var extension = exts[i]

	      if (types[extension]) {
	        var from = preference.indexOf(db[types[extension]].source)
	        var to = preference.indexOf(mime.source)

	        if (types[extension] !== 'application/octet-stream'
	          && from > to || (from === to && types[extension].substr(0, 12) === 'application/')) {
	          // skip the remapping
	          continue
	        }
	      }

	      // set the extension -> mime
	      types[extension] = type
	    }
	  })
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * mime-db
	 * Copyright(c) 2014 Jonathan Ong
	 * MIT Licensed
	 */

	/**
	 * Module exports.
	 */

	module.exports = __webpack_require__(43)


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
		"application/1d-interleaved-parityfec": {
			"source": "iana"
		},
		"application/3gpdash-qoe-report+xml": {
			"source": "iana"
		},
		"application/3gpp-ims+xml": {
			"source": "iana"
		},
		"application/a2l": {
			"source": "iana"
		},
		"application/activemessage": {
			"source": "iana"
		},
		"application/alto-costmap+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-costmapfilter+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-directory+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-endpointcost+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-endpointcostparams+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-endpointprop+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-endpointpropparams+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-error+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-networkmap+json": {
			"source": "iana",
			"compressible": true
		},
		"application/alto-networkmapfilter+json": {
			"source": "iana",
			"compressible": true
		},
		"application/aml": {
			"source": "iana"
		},
		"application/andrew-inset": {
			"source": "iana",
			"extensions": [
				"ez"
			]
		},
		"application/applefile": {
			"source": "iana"
		},
		"application/applixware": {
			"source": "apache",
			"extensions": [
				"aw"
			]
		},
		"application/atf": {
			"source": "iana"
		},
		"application/atfx": {
			"source": "iana"
		},
		"application/atom+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"atom"
			]
		},
		"application/atomcat+xml": {
			"source": "iana",
			"extensions": [
				"atomcat"
			]
		},
		"application/atomdeleted+xml": {
			"source": "iana"
		},
		"application/atomicmail": {
			"source": "iana"
		},
		"application/atomsvc+xml": {
			"source": "iana",
			"extensions": [
				"atomsvc"
			]
		},
		"application/atxml": {
			"source": "iana"
		},
		"application/auth-policy+xml": {
			"source": "iana"
		},
		"application/bacnet-xdd+zip": {
			"source": "iana"
		},
		"application/batch-smtp": {
			"source": "iana"
		},
		"application/bdoc": {
			"compressible": false,
			"extensions": [
				"bdoc"
			]
		},
		"application/beep+xml": {
			"source": "iana"
		},
		"application/calendar+json": {
			"source": "iana",
			"compressible": true
		},
		"application/calendar+xml": {
			"source": "iana"
		},
		"application/call-completion": {
			"source": "iana"
		},
		"application/cals-1840": {
			"source": "iana"
		},
		"application/cbor": {
			"source": "iana"
		},
		"application/ccmp+xml": {
			"source": "iana"
		},
		"application/ccxml+xml": {
			"source": "iana",
			"extensions": [
				"ccxml"
			]
		},
		"application/cdfx+xml": {
			"source": "iana"
		},
		"application/cdmi-capability": {
			"source": "iana",
			"extensions": [
				"cdmia"
			]
		},
		"application/cdmi-container": {
			"source": "iana",
			"extensions": [
				"cdmic"
			]
		},
		"application/cdmi-domain": {
			"source": "iana",
			"extensions": [
				"cdmid"
			]
		},
		"application/cdmi-object": {
			"source": "iana",
			"extensions": [
				"cdmio"
			]
		},
		"application/cdmi-queue": {
			"source": "iana",
			"extensions": [
				"cdmiq"
			]
		},
		"application/cdni": {
			"source": "iana"
		},
		"application/cea": {
			"source": "iana"
		},
		"application/cea-2018+xml": {
			"source": "iana"
		},
		"application/cellml+xml": {
			"source": "iana"
		},
		"application/cfw": {
			"source": "iana"
		},
		"application/cms": {
			"source": "iana"
		},
		"application/cnrp+xml": {
			"source": "iana"
		},
		"application/coap-group+json": {
			"source": "iana",
			"compressible": true
		},
		"application/commonground": {
			"source": "iana"
		},
		"application/conference-info+xml": {
			"source": "iana"
		},
		"application/cpl+xml": {
			"source": "iana"
		},
		"application/csrattrs": {
			"source": "iana"
		},
		"application/csta+xml": {
			"source": "iana"
		},
		"application/cstadata+xml": {
			"source": "iana"
		},
		"application/csvm+json": {
			"source": "iana",
			"compressible": true
		},
		"application/cu-seeme": {
			"source": "apache",
			"extensions": [
				"cu"
			]
		},
		"application/cybercash": {
			"source": "iana"
		},
		"application/dart": {
			"compressible": true
		},
		"application/dash+xml": {
			"source": "iana",
			"extensions": [
				"mpd"
			]
		},
		"application/dashdelta": {
			"source": "iana"
		},
		"application/davmount+xml": {
			"source": "iana",
			"extensions": [
				"davmount"
			]
		},
		"application/dca-rft": {
			"source": "iana"
		},
		"application/dcd": {
			"source": "iana"
		},
		"application/dec-dx": {
			"source": "iana"
		},
		"application/dialog-info+xml": {
			"source": "iana"
		},
		"application/dicom": {
			"source": "iana"
		},
		"application/dii": {
			"source": "iana"
		},
		"application/dit": {
			"source": "iana"
		},
		"application/dns": {
			"source": "iana"
		},
		"application/docbook+xml": {
			"source": "apache",
			"extensions": [
				"dbk"
			]
		},
		"application/dskpp+xml": {
			"source": "iana"
		},
		"application/dssc+der": {
			"source": "iana",
			"extensions": [
				"dssc"
			]
		},
		"application/dssc+xml": {
			"source": "iana",
			"extensions": [
				"xdssc"
			]
		},
		"application/dvcs": {
			"source": "iana"
		},
		"application/ecmascript": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"ecma"
			]
		},
		"application/edi-consent": {
			"source": "iana"
		},
		"application/edi-x12": {
			"source": "iana",
			"compressible": false
		},
		"application/edifact": {
			"source": "iana",
			"compressible": false
		},
		"application/emergencycalldata.comment+xml": {
			"source": "iana"
		},
		"application/emergencycalldata.deviceinfo+xml": {
			"source": "iana"
		},
		"application/emergencycalldata.providerinfo+xml": {
			"source": "iana"
		},
		"application/emergencycalldata.serviceinfo+xml": {
			"source": "iana"
		},
		"application/emergencycalldata.subscriberinfo+xml": {
			"source": "iana"
		},
		"application/emma+xml": {
			"source": "iana",
			"extensions": [
				"emma"
			]
		},
		"application/emotionml+xml": {
			"source": "iana"
		},
		"application/encaprtp": {
			"source": "iana"
		},
		"application/epp+xml": {
			"source": "iana"
		},
		"application/epub+zip": {
			"source": "iana",
			"extensions": [
				"epub"
			]
		},
		"application/eshop": {
			"source": "iana"
		},
		"application/exi": {
			"source": "iana",
			"extensions": [
				"exi"
			]
		},
		"application/fastinfoset": {
			"source": "iana"
		},
		"application/fastsoap": {
			"source": "iana"
		},
		"application/fdt+xml": {
			"source": "iana"
		},
		"application/fits": {
			"source": "iana"
		},
		"application/font-sfnt": {
			"source": "iana"
		},
		"application/font-tdpfr": {
			"source": "iana",
			"extensions": [
				"pfr"
			]
		},
		"application/font-woff": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"woff"
			]
		},
		"application/font-woff2": {
			"compressible": false,
			"extensions": [
				"woff2"
			]
		},
		"application/framework-attributes+xml": {
			"source": "iana"
		},
		"application/gml+xml": {
			"source": "apache",
			"extensions": [
				"gml"
			]
		},
		"application/gpx+xml": {
			"source": "apache",
			"extensions": [
				"gpx"
			]
		},
		"application/gxf": {
			"source": "apache",
			"extensions": [
				"gxf"
			]
		},
		"application/gzip": {
			"source": "iana",
			"compressible": false
		},
		"application/h224": {
			"source": "iana"
		},
		"application/held+xml": {
			"source": "iana"
		},
		"application/http": {
			"source": "iana"
		},
		"application/hyperstudio": {
			"source": "iana",
			"extensions": [
				"stk"
			]
		},
		"application/ibe-key-request+xml": {
			"source": "iana"
		},
		"application/ibe-pkg-reply+xml": {
			"source": "iana"
		},
		"application/ibe-pp-data": {
			"source": "iana"
		},
		"application/iges": {
			"source": "iana"
		},
		"application/im-iscomposing+xml": {
			"source": "iana"
		},
		"application/index": {
			"source": "iana"
		},
		"application/index.cmd": {
			"source": "iana"
		},
		"application/index.obj": {
			"source": "iana"
		},
		"application/index.response": {
			"source": "iana"
		},
		"application/index.vnd": {
			"source": "iana"
		},
		"application/inkml+xml": {
			"source": "iana",
			"extensions": [
				"ink",
				"inkml"
			]
		},
		"application/iotp": {
			"source": "iana"
		},
		"application/ipfix": {
			"source": "iana",
			"extensions": [
				"ipfix"
			]
		},
		"application/ipp": {
			"source": "iana"
		},
		"application/isup": {
			"source": "iana"
		},
		"application/its+xml": {
			"source": "iana"
		},
		"application/java-archive": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"jar",
				"war",
				"ear"
			]
		},
		"application/java-serialized-object": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"ser"
			]
		},
		"application/java-vm": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"class"
			]
		},
		"application/javascript": {
			"source": "iana",
			"charset": "UTF-8",
			"compressible": true,
			"extensions": [
				"js"
			]
		},
		"application/jose": {
			"source": "iana"
		},
		"application/jose+json": {
			"source": "iana",
			"compressible": true
		},
		"application/jrd+json": {
			"source": "iana",
			"compressible": true
		},
		"application/json": {
			"source": "iana",
			"charset": "UTF-8",
			"compressible": true,
			"extensions": [
				"json",
				"map"
			]
		},
		"application/json-patch+json": {
			"source": "iana",
			"compressible": true
		},
		"application/json-seq": {
			"source": "iana"
		},
		"application/json5": {
			"extensions": [
				"json5"
			]
		},
		"application/jsonml+json": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"jsonml"
			]
		},
		"application/jwk+json": {
			"source": "iana",
			"compressible": true
		},
		"application/jwk-set+json": {
			"source": "iana",
			"compressible": true
		},
		"application/jwt": {
			"source": "iana"
		},
		"application/kpml-request+xml": {
			"source": "iana"
		},
		"application/kpml-response+xml": {
			"source": "iana"
		},
		"application/ld+json": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"jsonld"
			]
		},
		"application/link-format": {
			"source": "iana"
		},
		"application/load-control+xml": {
			"source": "iana"
		},
		"application/lost+xml": {
			"source": "iana",
			"extensions": [
				"lostxml"
			]
		},
		"application/lostsync+xml": {
			"source": "iana"
		},
		"application/lxf": {
			"source": "iana"
		},
		"application/mac-binhex40": {
			"source": "iana",
			"extensions": [
				"hqx"
			]
		},
		"application/mac-compactpro": {
			"source": "apache",
			"extensions": [
				"cpt"
			]
		},
		"application/macwriteii": {
			"source": "iana"
		},
		"application/mads+xml": {
			"source": "iana",
			"extensions": [
				"mads"
			]
		},
		"application/manifest+json": {
			"charset": "UTF-8",
			"compressible": true,
			"extensions": [
				"webmanifest"
			]
		},
		"application/marc": {
			"source": "iana",
			"extensions": [
				"mrc"
			]
		},
		"application/marcxml+xml": {
			"source": "iana",
			"extensions": [
				"mrcx"
			]
		},
		"application/mathematica": {
			"source": "iana",
			"extensions": [
				"ma",
				"nb",
				"mb"
			]
		},
		"application/mathml+xml": {
			"source": "iana",
			"extensions": [
				"mathml"
			]
		},
		"application/mathml-content+xml": {
			"source": "iana"
		},
		"application/mathml-presentation+xml": {
			"source": "iana"
		},
		"application/mbms-associated-procedure-description+xml": {
			"source": "iana"
		},
		"application/mbms-deregister+xml": {
			"source": "iana"
		},
		"application/mbms-envelope+xml": {
			"source": "iana"
		},
		"application/mbms-msk+xml": {
			"source": "iana"
		},
		"application/mbms-msk-response+xml": {
			"source": "iana"
		},
		"application/mbms-protection-description+xml": {
			"source": "iana"
		},
		"application/mbms-reception-report+xml": {
			"source": "iana"
		},
		"application/mbms-register+xml": {
			"source": "iana"
		},
		"application/mbms-register-response+xml": {
			"source": "iana"
		},
		"application/mbms-schedule+xml": {
			"source": "iana"
		},
		"application/mbms-user-service-description+xml": {
			"source": "iana"
		},
		"application/mbox": {
			"source": "iana",
			"extensions": [
				"mbox"
			]
		},
		"application/media-policy-dataset+xml": {
			"source": "iana"
		},
		"application/media_control+xml": {
			"source": "iana"
		},
		"application/mediaservercontrol+xml": {
			"source": "iana",
			"extensions": [
				"mscml"
			]
		},
		"application/merge-patch+json": {
			"source": "iana",
			"compressible": true
		},
		"application/metalink+xml": {
			"source": "apache",
			"extensions": [
				"metalink"
			]
		},
		"application/metalink4+xml": {
			"source": "iana",
			"extensions": [
				"meta4"
			]
		},
		"application/mets+xml": {
			"source": "iana",
			"extensions": [
				"mets"
			]
		},
		"application/mf4": {
			"source": "iana"
		},
		"application/mikey": {
			"source": "iana"
		},
		"application/mods+xml": {
			"source": "iana",
			"extensions": [
				"mods"
			]
		},
		"application/moss-keys": {
			"source": "iana"
		},
		"application/moss-signature": {
			"source": "iana"
		},
		"application/mosskey-data": {
			"source": "iana"
		},
		"application/mosskey-request": {
			"source": "iana"
		},
		"application/mp21": {
			"source": "iana",
			"extensions": [
				"m21",
				"mp21"
			]
		},
		"application/mp4": {
			"source": "iana",
			"extensions": [
				"mp4s",
				"m4p"
			]
		},
		"application/mpeg4-generic": {
			"source": "iana"
		},
		"application/mpeg4-iod": {
			"source": "iana"
		},
		"application/mpeg4-iod-xmt": {
			"source": "iana"
		},
		"application/mrb-consumer+xml": {
			"source": "iana"
		},
		"application/mrb-publish+xml": {
			"source": "iana"
		},
		"application/msc-ivr+xml": {
			"source": "iana"
		},
		"application/msc-mixer+xml": {
			"source": "iana"
		},
		"application/msword": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"doc",
				"dot"
			]
		},
		"application/mxf": {
			"source": "iana",
			"extensions": [
				"mxf"
			]
		},
		"application/nasdata": {
			"source": "iana"
		},
		"application/news-checkgroups": {
			"source": "iana"
		},
		"application/news-groupinfo": {
			"source": "iana"
		},
		"application/news-transmission": {
			"source": "iana"
		},
		"application/nlsml+xml": {
			"source": "iana"
		},
		"application/nss": {
			"source": "iana"
		},
		"application/ocsp-request": {
			"source": "iana"
		},
		"application/ocsp-response": {
			"source": "iana"
		},
		"application/octet-stream": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"bin",
				"dms",
				"lrf",
				"mar",
				"so",
				"dist",
				"distz",
				"pkg",
				"bpk",
				"dump",
				"elc",
				"deploy",
				"exe",
				"dll",
				"deb",
				"dmg",
				"iso",
				"img",
				"msi",
				"msp",
				"msm",
				"buffer"
			]
		},
		"application/oda": {
			"source": "iana",
			"extensions": [
				"oda"
			]
		},
		"application/odx": {
			"source": "iana"
		},
		"application/oebps-package+xml": {
			"source": "iana",
			"extensions": [
				"opf"
			]
		},
		"application/ogg": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"ogx"
			]
		},
		"application/omdoc+xml": {
			"source": "apache",
			"extensions": [
				"omdoc"
			]
		},
		"application/onenote": {
			"source": "apache",
			"extensions": [
				"onetoc",
				"onetoc2",
				"onetmp",
				"onepkg"
			]
		},
		"application/oxps": {
			"source": "iana",
			"extensions": [
				"oxps"
			]
		},
		"application/p2p-overlay+xml": {
			"source": "iana"
		},
		"application/parityfec": {
			"source": "iana"
		},
		"application/patch-ops-error+xml": {
			"source": "iana",
			"extensions": [
				"xer"
			]
		},
		"application/pdf": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"pdf"
			]
		},
		"application/pdx": {
			"source": "iana"
		},
		"application/pgp-encrypted": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"pgp"
			]
		},
		"application/pgp-keys": {
			"source": "iana"
		},
		"application/pgp-signature": {
			"source": "iana",
			"extensions": [
				"asc",
				"sig"
			]
		},
		"application/pics-rules": {
			"source": "apache",
			"extensions": [
				"prf"
			]
		},
		"application/pidf+xml": {
			"source": "iana"
		},
		"application/pidf-diff+xml": {
			"source": "iana"
		},
		"application/pkcs10": {
			"source": "iana",
			"extensions": [
				"p10"
			]
		},
		"application/pkcs12": {
			"source": "iana"
		},
		"application/pkcs7-mime": {
			"source": "iana",
			"extensions": [
				"p7m",
				"p7c"
			]
		},
		"application/pkcs7-signature": {
			"source": "iana",
			"extensions": [
				"p7s"
			]
		},
		"application/pkcs8": {
			"source": "iana",
			"extensions": [
				"p8"
			]
		},
		"application/pkix-attr-cert": {
			"source": "iana",
			"extensions": [
				"ac"
			]
		},
		"application/pkix-cert": {
			"source": "iana",
			"extensions": [
				"cer"
			]
		},
		"application/pkix-crl": {
			"source": "iana",
			"extensions": [
				"crl"
			]
		},
		"application/pkix-pkipath": {
			"source": "iana",
			"extensions": [
				"pkipath"
			]
		},
		"application/pkixcmp": {
			"source": "iana",
			"extensions": [
				"pki"
			]
		},
		"application/pls+xml": {
			"source": "iana",
			"extensions": [
				"pls"
			]
		},
		"application/poc-settings+xml": {
			"source": "iana"
		},
		"application/postscript": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"ai",
				"eps",
				"ps"
			]
		},
		"application/ppsp-tracker+json": {
			"source": "iana",
			"compressible": true
		},
		"application/problem+json": {
			"source": "iana",
			"compressible": true
		},
		"application/problem+xml": {
			"source": "iana"
		},
		"application/provenance+xml": {
			"source": "iana"
		},
		"application/prs.alvestrand.titrax-sheet": {
			"source": "iana"
		},
		"application/prs.cww": {
			"source": "iana",
			"extensions": [
				"cww"
			]
		},
		"application/prs.hpub+zip": {
			"source": "iana"
		},
		"application/prs.nprend": {
			"source": "iana"
		},
		"application/prs.plucker": {
			"source": "iana"
		},
		"application/prs.rdf-xml-crypt": {
			"source": "iana"
		},
		"application/prs.xsf+xml": {
			"source": "iana"
		},
		"application/pskc+xml": {
			"source": "iana",
			"extensions": [
				"pskcxml"
			]
		},
		"application/qsig": {
			"source": "iana"
		},
		"application/raptorfec": {
			"source": "iana"
		},
		"application/rdap+json": {
			"source": "iana",
			"compressible": true
		},
		"application/rdf+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"rdf"
			]
		},
		"application/reginfo+xml": {
			"source": "iana",
			"extensions": [
				"rif"
			]
		},
		"application/relax-ng-compact-syntax": {
			"source": "iana",
			"extensions": [
				"rnc"
			]
		},
		"application/remote-printing": {
			"source": "iana"
		},
		"application/reputon+json": {
			"source": "iana",
			"compressible": true
		},
		"application/resource-lists+xml": {
			"source": "iana",
			"extensions": [
				"rl"
			]
		},
		"application/resource-lists-diff+xml": {
			"source": "iana",
			"extensions": [
				"rld"
			]
		},
		"application/rfc+xml": {
			"source": "iana"
		},
		"application/riscos": {
			"source": "iana"
		},
		"application/rlmi+xml": {
			"source": "iana"
		},
		"application/rls-services+xml": {
			"source": "iana",
			"extensions": [
				"rs"
			]
		},
		"application/rpki-ghostbusters": {
			"source": "iana",
			"extensions": [
				"gbr"
			]
		},
		"application/rpki-manifest": {
			"source": "iana",
			"extensions": [
				"mft"
			]
		},
		"application/rpki-roa": {
			"source": "iana",
			"extensions": [
				"roa"
			]
		},
		"application/rpki-updown": {
			"source": "iana"
		},
		"application/rsd+xml": {
			"source": "apache",
			"extensions": [
				"rsd"
			]
		},
		"application/rss+xml": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"rss"
			]
		},
		"application/rtf": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"rtf"
			]
		},
		"application/rtploopback": {
			"source": "iana"
		},
		"application/rtx": {
			"source": "iana"
		},
		"application/samlassertion+xml": {
			"source": "iana"
		},
		"application/samlmetadata+xml": {
			"source": "iana"
		},
		"application/sbml+xml": {
			"source": "iana",
			"extensions": [
				"sbml"
			]
		},
		"application/scaip+xml": {
			"source": "iana"
		},
		"application/scim+json": {
			"source": "iana",
			"compressible": true
		},
		"application/scvp-cv-request": {
			"source": "iana",
			"extensions": [
				"scq"
			]
		},
		"application/scvp-cv-response": {
			"source": "iana",
			"extensions": [
				"scs"
			]
		},
		"application/scvp-vp-request": {
			"source": "iana",
			"extensions": [
				"spq"
			]
		},
		"application/scvp-vp-response": {
			"source": "iana",
			"extensions": [
				"spp"
			]
		},
		"application/sdp": {
			"source": "iana",
			"extensions": [
				"sdp"
			]
		},
		"application/sep+xml": {
			"source": "iana"
		},
		"application/sep-exi": {
			"source": "iana"
		},
		"application/session-info": {
			"source": "iana"
		},
		"application/set-payment": {
			"source": "iana"
		},
		"application/set-payment-initiation": {
			"source": "iana",
			"extensions": [
				"setpay"
			]
		},
		"application/set-registration": {
			"source": "iana"
		},
		"application/set-registration-initiation": {
			"source": "iana",
			"extensions": [
				"setreg"
			]
		},
		"application/sgml": {
			"source": "iana"
		},
		"application/sgml-open-catalog": {
			"source": "iana"
		},
		"application/shf+xml": {
			"source": "iana",
			"extensions": [
				"shf"
			]
		},
		"application/sieve": {
			"source": "iana"
		},
		"application/simple-filter+xml": {
			"source": "iana"
		},
		"application/simple-message-summary": {
			"source": "iana"
		},
		"application/simplesymbolcontainer": {
			"source": "iana"
		},
		"application/slate": {
			"source": "iana"
		},
		"application/smil": {
			"source": "iana"
		},
		"application/smil+xml": {
			"source": "iana",
			"extensions": [
				"smi",
				"smil"
			]
		},
		"application/smpte336m": {
			"source": "iana"
		},
		"application/soap+fastinfoset": {
			"source": "iana"
		},
		"application/soap+xml": {
			"source": "iana",
			"compressible": true
		},
		"application/sparql-query": {
			"source": "iana",
			"extensions": [
				"rq"
			]
		},
		"application/sparql-results+xml": {
			"source": "iana",
			"extensions": [
				"srx"
			]
		},
		"application/spirits-event+xml": {
			"source": "iana"
		},
		"application/sql": {
			"source": "iana"
		},
		"application/srgs": {
			"source": "iana",
			"extensions": [
				"gram"
			]
		},
		"application/srgs+xml": {
			"source": "iana",
			"extensions": [
				"grxml"
			]
		},
		"application/sru+xml": {
			"source": "iana",
			"extensions": [
				"sru"
			]
		},
		"application/ssdl+xml": {
			"source": "apache",
			"extensions": [
				"ssdl"
			]
		},
		"application/ssml+xml": {
			"source": "iana",
			"extensions": [
				"ssml"
			]
		},
		"application/tamp-apex-update": {
			"source": "iana"
		},
		"application/tamp-apex-update-confirm": {
			"source": "iana"
		},
		"application/tamp-community-update": {
			"source": "iana"
		},
		"application/tamp-community-update-confirm": {
			"source": "iana"
		},
		"application/tamp-error": {
			"source": "iana"
		},
		"application/tamp-sequence-adjust": {
			"source": "iana"
		},
		"application/tamp-sequence-adjust-confirm": {
			"source": "iana"
		},
		"application/tamp-status-query": {
			"source": "iana"
		},
		"application/tamp-status-response": {
			"source": "iana"
		},
		"application/tamp-update": {
			"source": "iana"
		},
		"application/tamp-update-confirm": {
			"source": "iana"
		},
		"application/tar": {
			"compressible": true
		},
		"application/tei+xml": {
			"source": "iana",
			"extensions": [
				"tei",
				"teicorpus"
			]
		},
		"application/thraud+xml": {
			"source": "iana",
			"extensions": [
				"tfi"
			]
		},
		"application/timestamp-query": {
			"source": "iana"
		},
		"application/timestamp-reply": {
			"source": "iana"
		},
		"application/timestamped-data": {
			"source": "iana",
			"extensions": [
				"tsd"
			]
		},
		"application/ttml+xml": {
			"source": "iana"
		},
		"application/tve-trigger": {
			"source": "iana"
		},
		"application/ulpfec": {
			"source": "iana"
		},
		"application/urc-grpsheet+xml": {
			"source": "iana"
		},
		"application/urc-ressheet+xml": {
			"source": "iana"
		},
		"application/urc-targetdesc+xml": {
			"source": "iana"
		},
		"application/urc-uisocketdesc+xml": {
			"source": "iana"
		},
		"application/vcard+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vcard+xml": {
			"source": "iana"
		},
		"application/vemmi": {
			"source": "iana"
		},
		"application/vividence.scriptfile": {
			"source": "apache"
		},
		"application/vnd.3gpp-prose+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp-prose-pc3ch+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.access-transfer-events+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.bsf+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.mid-call+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.pic-bw-large": {
			"source": "iana",
			"extensions": [
				"plb"
			]
		},
		"application/vnd.3gpp.pic-bw-small": {
			"source": "iana",
			"extensions": [
				"psb"
			]
		},
		"application/vnd.3gpp.pic-bw-var": {
			"source": "iana",
			"extensions": [
				"pvb"
			]
		},
		"application/vnd.3gpp.sms": {
			"source": "iana"
		},
		"application/vnd.3gpp.srvcc-ext+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.srvcc-info+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.state-and-event-info+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp.ussd+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp2.bcmcsinfo+xml": {
			"source": "iana"
		},
		"application/vnd.3gpp2.sms": {
			"source": "iana"
		},
		"application/vnd.3gpp2.tcap": {
			"source": "iana",
			"extensions": [
				"tcap"
			]
		},
		"application/vnd.3m.post-it-notes": {
			"source": "iana",
			"extensions": [
				"pwn"
			]
		},
		"application/vnd.accpac.simply.aso": {
			"source": "iana",
			"extensions": [
				"aso"
			]
		},
		"application/vnd.accpac.simply.imp": {
			"source": "iana",
			"extensions": [
				"imp"
			]
		},
		"application/vnd.acucobol": {
			"source": "iana",
			"extensions": [
				"acu"
			]
		},
		"application/vnd.acucorp": {
			"source": "iana",
			"extensions": [
				"atc",
				"acutc"
			]
		},
		"application/vnd.adobe.air-application-installer-package+zip": {
			"source": "apache",
			"extensions": [
				"air"
			]
		},
		"application/vnd.adobe.flash.movie": {
			"source": "iana"
		},
		"application/vnd.adobe.formscentral.fcdt": {
			"source": "iana",
			"extensions": [
				"fcdt"
			]
		},
		"application/vnd.adobe.fxp": {
			"source": "iana",
			"extensions": [
				"fxp",
				"fxpl"
			]
		},
		"application/vnd.adobe.partial-upload": {
			"source": "iana"
		},
		"application/vnd.adobe.xdp+xml": {
			"source": "iana",
			"extensions": [
				"xdp"
			]
		},
		"application/vnd.adobe.xfdf": {
			"source": "iana",
			"extensions": [
				"xfdf"
			]
		},
		"application/vnd.aether.imp": {
			"source": "iana"
		},
		"application/vnd.ah-barcode": {
			"source": "iana"
		},
		"application/vnd.ahead.space": {
			"source": "iana",
			"extensions": [
				"ahead"
			]
		},
		"application/vnd.airzip.filesecure.azf": {
			"source": "iana",
			"extensions": [
				"azf"
			]
		},
		"application/vnd.airzip.filesecure.azs": {
			"source": "iana",
			"extensions": [
				"azs"
			]
		},
		"application/vnd.amazon.ebook": {
			"source": "apache",
			"extensions": [
				"azw"
			]
		},
		"application/vnd.americandynamics.acc": {
			"source": "iana",
			"extensions": [
				"acc"
			]
		},
		"application/vnd.amiga.ami": {
			"source": "iana",
			"extensions": [
				"ami"
			]
		},
		"application/vnd.amundsen.maze+xml": {
			"source": "iana"
		},
		"application/vnd.android.package-archive": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"apk"
			]
		},
		"application/vnd.anki": {
			"source": "iana"
		},
		"application/vnd.anser-web-certificate-issue-initiation": {
			"source": "iana",
			"extensions": [
				"cii"
			]
		},
		"application/vnd.anser-web-funds-transfer-initiation": {
			"source": "apache",
			"extensions": [
				"fti"
			]
		},
		"application/vnd.antix.game-component": {
			"source": "iana",
			"extensions": [
				"atx"
			]
		},
		"application/vnd.apache.thrift.binary": {
			"source": "iana"
		},
		"application/vnd.apache.thrift.compact": {
			"source": "iana"
		},
		"application/vnd.apache.thrift.json": {
			"source": "iana"
		},
		"application/vnd.api+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.apple.installer+xml": {
			"source": "iana",
			"extensions": [
				"mpkg"
			]
		},
		"application/vnd.apple.mpegurl": {
			"source": "iana",
			"extensions": [
				"m3u8"
			]
		},
		"application/vnd.apple.pkpass": {
			"compressible": false,
			"extensions": [
				"pkpass"
			]
		},
		"application/vnd.arastra.swi": {
			"source": "iana"
		},
		"application/vnd.aristanetworks.swi": {
			"source": "iana",
			"extensions": [
				"swi"
			]
		},
		"application/vnd.artsquare": {
			"source": "iana"
		},
		"application/vnd.astraea-software.iota": {
			"source": "iana",
			"extensions": [
				"iota"
			]
		},
		"application/vnd.audiograph": {
			"source": "iana",
			"extensions": [
				"aep"
			]
		},
		"application/vnd.autopackage": {
			"source": "iana"
		},
		"application/vnd.avistar+xml": {
			"source": "iana"
		},
		"application/vnd.balsamiq.bmml+xml": {
			"source": "iana"
		},
		"application/vnd.balsamiq.bmpr": {
			"source": "iana"
		},
		"application/vnd.bekitzur-stech+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.biopax.rdf+xml": {
			"source": "iana"
		},
		"application/vnd.blueice.multipass": {
			"source": "iana",
			"extensions": [
				"mpm"
			]
		},
		"application/vnd.bluetooth.ep.oob": {
			"source": "iana"
		},
		"application/vnd.bluetooth.le.oob": {
			"source": "iana"
		},
		"application/vnd.bmi": {
			"source": "iana",
			"extensions": [
				"bmi"
			]
		},
		"application/vnd.businessobjects": {
			"source": "iana",
			"extensions": [
				"rep"
			]
		},
		"application/vnd.cab-jscript": {
			"source": "iana"
		},
		"application/vnd.canon-cpdl": {
			"source": "iana"
		},
		"application/vnd.canon-lips": {
			"source": "iana"
		},
		"application/vnd.cendio.thinlinc.clientconf": {
			"source": "iana"
		},
		"application/vnd.century-systems.tcp_stream": {
			"source": "iana"
		},
		"application/vnd.chemdraw+xml": {
			"source": "iana",
			"extensions": [
				"cdxml"
			]
		},
		"application/vnd.chipnuts.karaoke-mmd": {
			"source": "iana",
			"extensions": [
				"mmd"
			]
		},
		"application/vnd.cinderella": {
			"source": "iana",
			"extensions": [
				"cdy"
			]
		},
		"application/vnd.cirpack.isdn-ext": {
			"source": "iana"
		},
		"application/vnd.citationstyles.style+xml": {
			"source": "iana"
		},
		"application/vnd.claymore": {
			"source": "iana",
			"extensions": [
				"cla"
			]
		},
		"application/vnd.cloanto.rp9": {
			"source": "iana",
			"extensions": [
				"rp9"
			]
		},
		"application/vnd.clonk.c4group": {
			"source": "iana",
			"extensions": [
				"c4g",
				"c4d",
				"c4f",
				"c4p",
				"c4u"
			]
		},
		"application/vnd.cluetrust.cartomobile-config": {
			"source": "iana",
			"extensions": [
				"c11amc"
			]
		},
		"application/vnd.cluetrust.cartomobile-config-pkg": {
			"source": "iana",
			"extensions": [
				"c11amz"
			]
		},
		"application/vnd.coffeescript": {
			"source": "iana"
		},
		"application/vnd.collection+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.collection.doc+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.collection.next+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.commerce-battelle": {
			"source": "iana"
		},
		"application/vnd.commonspace": {
			"source": "iana",
			"extensions": [
				"csp"
			]
		},
		"application/vnd.contact.cmsg": {
			"source": "iana",
			"extensions": [
				"cdbcmsg"
			]
		},
		"application/vnd.cosmocaller": {
			"source": "iana",
			"extensions": [
				"cmc"
			]
		},
		"application/vnd.crick.clicker": {
			"source": "iana",
			"extensions": [
				"clkx"
			]
		},
		"application/vnd.crick.clicker.keyboard": {
			"source": "iana",
			"extensions": [
				"clkk"
			]
		},
		"application/vnd.crick.clicker.palette": {
			"source": "iana",
			"extensions": [
				"clkp"
			]
		},
		"application/vnd.crick.clicker.template": {
			"source": "iana",
			"extensions": [
				"clkt"
			]
		},
		"application/vnd.crick.clicker.wordbank": {
			"source": "iana",
			"extensions": [
				"clkw"
			]
		},
		"application/vnd.criticaltools.wbs+xml": {
			"source": "iana",
			"extensions": [
				"wbs"
			]
		},
		"application/vnd.ctc-posml": {
			"source": "iana",
			"extensions": [
				"pml"
			]
		},
		"application/vnd.ctct.ws+xml": {
			"source": "iana"
		},
		"application/vnd.cups-pdf": {
			"source": "iana"
		},
		"application/vnd.cups-postscript": {
			"source": "iana"
		},
		"application/vnd.cups-ppd": {
			"source": "iana",
			"extensions": [
				"ppd"
			]
		},
		"application/vnd.cups-raster": {
			"source": "iana"
		},
		"application/vnd.cups-raw": {
			"source": "iana"
		},
		"application/vnd.curl": {
			"source": "iana"
		},
		"application/vnd.curl.car": {
			"source": "apache",
			"extensions": [
				"car"
			]
		},
		"application/vnd.curl.pcurl": {
			"source": "apache",
			"extensions": [
				"pcurl"
			]
		},
		"application/vnd.cyan.dean.root+xml": {
			"source": "iana"
		},
		"application/vnd.cybank": {
			"source": "iana"
		},
		"application/vnd.dart": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"dart"
			]
		},
		"application/vnd.data-vision.rdz": {
			"source": "iana",
			"extensions": [
				"rdz"
			]
		},
		"application/vnd.debian.binary-package": {
			"source": "iana"
		},
		"application/vnd.dece.data": {
			"source": "iana",
			"extensions": [
				"uvf",
				"uvvf",
				"uvd",
				"uvvd"
			]
		},
		"application/vnd.dece.ttml+xml": {
			"source": "iana",
			"extensions": [
				"uvt",
				"uvvt"
			]
		},
		"application/vnd.dece.unspecified": {
			"source": "iana",
			"extensions": [
				"uvx",
				"uvvx"
			]
		},
		"application/vnd.dece.zip": {
			"source": "iana",
			"extensions": [
				"uvz",
				"uvvz"
			]
		},
		"application/vnd.denovo.fcselayout-link": {
			"source": "iana",
			"extensions": [
				"fe_launch"
			]
		},
		"application/vnd.desmume-movie": {
			"source": "iana"
		},
		"application/vnd.dir-bi.plate-dl-nosuffix": {
			"source": "iana"
		},
		"application/vnd.dm.delegation+xml": {
			"source": "iana"
		},
		"application/vnd.dna": {
			"source": "iana",
			"extensions": [
				"dna"
			]
		},
		"application/vnd.document+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.dolby.mlp": {
			"source": "apache",
			"extensions": [
				"mlp"
			]
		},
		"application/vnd.dolby.mobile.1": {
			"source": "iana"
		},
		"application/vnd.dolby.mobile.2": {
			"source": "iana"
		},
		"application/vnd.doremir.scorecloud-binary-document": {
			"source": "iana"
		},
		"application/vnd.dpgraph": {
			"source": "iana",
			"extensions": [
				"dpg"
			]
		},
		"application/vnd.dreamfactory": {
			"source": "iana",
			"extensions": [
				"dfac"
			]
		},
		"application/vnd.drive+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.ds-keypoint": {
			"source": "apache",
			"extensions": [
				"kpxx"
			]
		},
		"application/vnd.dtg.local": {
			"source": "iana"
		},
		"application/vnd.dtg.local.flash": {
			"source": "iana"
		},
		"application/vnd.dtg.local.html": {
			"source": "iana"
		},
		"application/vnd.dvb.ait": {
			"source": "iana",
			"extensions": [
				"ait"
			]
		},
		"application/vnd.dvb.dvbj": {
			"source": "iana"
		},
		"application/vnd.dvb.esgcontainer": {
			"source": "iana"
		},
		"application/vnd.dvb.ipdcdftnotifaccess": {
			"source": "iana"
		},
		"application/vnd.dvb.ipdcesgaccess": {
			"source": "iana"
		},
		"application/vnd.dvb.ipdcesgaccess2": {
			"source": "iana"
		},
		"application/vnd.dvb.ipdcesgpdd": {
			"source": "iana"
		},
		"application/vnd.dvb.ipdcroaming": {
			"source": "iana"
		},
		"application/vnd.dvb.iptv.alfec-base": {
			"source": "iana"
		},
		"application/vnd.dvb.iptv.alfec-enhancement": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-aggregate-root+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-container+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-generic+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-ia-msglist+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-ia-registration-request+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-ia-registration-response+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.notif-init+xml": {
			"source": "iana"
		},
		"application/vnd.dvb.pfr": {
			"source": "iana"
		},
		"application/vnd.dvb.service": {
			"source": "iana",
			"extensions": [
				"svc"
			]
		},
		"application/vnd.dxr": {
			"source": "iana"
		},
		"application/vnd.dynageo": {
			"source": "iana",
			"extensions": [
				"geo"
			]
		},
		"application/vnd.dzr": {
			"source": "iana"
		},
		"application/vnd.easykaraoke.cdgdownload": {
			"source": "iana"
		},
		"application/vnd.ecdis-update": {
			"source": "iana"
		},
		"application/vnd.ecowin.chart": {
			"source": "iana",
			"extensions": [
				"mag"
			]
		},
		"application/vnd.ecowin.filerequest": {
			"source": "iana"
		},
		"application/vnd.ecowin.fileupdate": {
			"source": "iana"
		},
		"application/vnd.ecowin.series": {
			"source": "iana"
		},
		"application/vnd.ecowin.seriesrequest": {
			"source": "iana"
		},
		"application/vnd.ecowin.seriesupdate": {
			"source": "iana"
		},
		"application/vnd.emclient.accessrequest+xml": {
			"source": "iana"
		},
		"application/vnd.enliven": {
			"source": "iana",
			"extensions": [
				"nml"
			]
		},
		"application/vnd.enphase.envoy": {
			"source": "iana"
		},
		"application/vnd.eprints.data+xml": {
			"source": "iana"
		},
		"application/vnd.epson.esf": {
			"source": "iana",
			"extensions": [
				"esf"
			]
		},
		"application/vnd.epson.msf": {
			"source": "iana",
			"extensions": [
				"msf"
			]
		},
		"application/vnd.epson.quickanime": {
			"source": "iana",
			"extensions": [
				"qam"
			]
		},
		"application/vnd.epson.salt": {
			"source": "iana",
			"extensions": [
				"slt"
			]
		},
		"application/vnd.epson.ssf": {
			"source": "iana",
			"extensions": [
				"ssf"
			]
		},
		"application/vnd.ericsson.quickcall": {
			"source": "iana"
		},
		"application/vnd.eszigno3+xml": {
			"source": "iana",
			"extensions": [
				"es3",
				"et3"
			]
		},
		"application/vnd.etsi.aoc+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.asic-e+zip": {
			"source": "iana"
		},
		"application/vnd.etsi.asic-s+zip": {
			"source": "iana"
		},
		"application/vnd.etsi.cug+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvcommand+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvdiscovery+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvprofile+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvsad-bc+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvsad-cod+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvsad-npvr+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvservice+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvsync+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.iptvueprofile+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.mcid+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.mheg5": {
			"source": "iana"
		},
		"application/vnd.etsi.overload-control-policy-dataset+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.pstn+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.sci+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.simservs+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.timestamp-token": {
			"source": "iana"
		},
		"application/vnd.etsi.tsl+xml": {
			"source": "iana"
		},
		"application/vnd.etsi.tsl.der": {
			"source": "iana"
		},
		"application/vnd.eudora.data": {
			"source": "iana"
		},
		"application/vnd.ezpix-album": {
			"source": "iana",
			"extensions": [
				"ez2"
			]
		},
		"application/vnd.ezpix-package": {
			"source": "iana",
			"extensions": [
				"ez3"
			]
		},
		"application/vnd.f-secure.mobile": {
			"source": "iana"
		},
		"application/vnd.fastcopy-disk-image": {
			"source": "iana"
		},
		"application/vnd.fdf": {
			"source": "iana",
			"extensions": [
				"fdf"
			]
		},
		"application/vnd.fdsn.mseed": {
			"source": "iana",
			"extensions": [
				"mseed"
			]
		},
		"application/vnd.fdsn.seed": {
			"source": "iana",
			"extensions": [
				"seed",
				"dataless"
			]
		},
		"application/vnd.ffsns": {
			"source": "iana"
		},
		"application/vnd.filmit.zfc": {
			"source": "iana"
		},
		"application/vnd.fints": {
			"source": "iana"
		},
		"application/vnd.firemonkeys.cloudcell": {
			"source": "iana"
		},
		"application/vnd.flographit": {
			"source": "iana",
			"extensions": [
				"gph"
			]
		},
		"application/vnd.fluxtime.clip": {
			"source": "iana",
			"extensions": [
				"ftc"
			]
		},
		"application/vnd.font-fontforge-sfd": {
			"source": "iana"
		},
		"application/vnd.framemaker": {
			"source": "iana",
			"extensions": [
				"fm",
				"frame",
				"maker",
				"book"
			]
		},
		"application/vnd.frogans.fnc": {
			"source": "iana",
			"extensions": [
				"fnc"
			]
		},
		"application/vnd.frogans.ltf": {
			"source": "iana",
			"extensions": [
				"ltf"
			]
		},
		"application/vnd.fsc.weblaunch": {
			"source": "iana",
			"extensions": [
				"fsc"
			]
		},
		"application/vnd.fujitsu.oasys": {
			"source": "iana",
			"extensions": [
				"oas"
			]
		},
		"application/vnd.fujitsu.oasys2": {
			"source": "iana",
			"extensions": [
				"oa2"
			]
		},
		"application/vnd.fujitsu.oasys3": {
			"source": "iana",
			"extensions": [
				"oa3"
			]
		},
		"application/vnd.fujitsu.oasysgp": {
			"source": "iana",
			"extensions": [
				"fg5"
			]
		},
		"application/vnd.fujitsu.oasysprs": {
			"source": "iana",
			"extensions": [
				"bh2"
			]
		},
		"application/vnd.fujixerox.art-ex": {
			"source": "iana"
		},
		"application/vnd.fujixerox.art4": {
			"source": "iana"
		},
		"application/vnd.fujixerox.ddd": {
			"source": "iana",
			"extensions": [
				"ddd"
			]
		},
		"application/vnd.fujixerox.docuworks": {
			"source": "iana",
			"extensions": [
				"xdw"
			]
		},
		"application/vnd.fujixerox.docuworks.binder": {
			"source": "iana",
			"extensions": [
				"xbd"
			]
		},
		"application/vnd.fujixerox.docuworks.container": {
			"source": "iana"
		},
		"application/vnd.fujixerox.hbpl": {
			"source": "iana"
		},
		"application/vnd.fut-misnet": {
			"source": "iana"
		},
		"application/vnd.fuzzysheet": {
			"source": "iana",
			"extensions": [
				"fzs"
			]
		},
		"application/vnd.genomatix.tuxedo": {
			"source": "iana",
			"extensions": [
				"txd"
			]
		},
		"application/vnd.geo+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.geocube+xml": {
			"source": "iana"
		},
		"application/vnd.geogebra.file": {
			"source": "iana",
			"extensions": [
				"ggb"
			]
		},
		"application/vnd.geogebra.tool": {
			"source": "iana",
			"extensions": [
				"ggt"
			]
		},
		"application/vnd.geometry-explorer": {
			"source": "iana",
			"extensions": [
				"gex",
				"gre"
			]
		},
		"application/vnd.geonext": {
			"source": "iana",
			"extensions": [
				"gxt"
			]
		},
		"application/vnd.geoplan": {
			"source": "iana",
			"extensions": [
				"g2w"
			]
		},
		"application/vnd.geospace": {
			"source": "iana",
			"extensions": [
				"g3w"
			]
		},
		"application/vnd.gerber": {
			"source": "iana"
		},
		"application/vnd.globalplatform.card-content-mgt": {
			"source": "iana"
		},
		"application/vnd.globalplatform.card-content-mgt-response": {
			"source": "iana"
		},
		"application/vnd.gmx": {
			"source": "iana",
			"extensions": [
				"gmx"
			]
		},
		"application/vnd.google-apps.document": {
			"compressible": false,
			"extensions": [
				"gdoc"
			]
		},
		"application/vnd.google-apps.presentation": {
			"compressible": false,
			"extensions": [
				"gslides"
			]
		},
		"application/vnd.google-apps.spreadsheet": {
			"compressible": false,
			"extensions": [
				"gsheet"
			]
		},
		"application/vnd.google-earth.kml+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"kml"
			]
		},
		"application/vnd.google-earth.kmz": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"kmz"
			]
		},
		"application/vnd.gov.sk.e-form+xml": {
			"source": "iana"
		},
		"application/vnd.gov.sk.e-form+zip": {
			"source": "iana"
		},
		"application/vnd.gov.sk.xmldatacontainer+xml": {
			"source": "iana"
		},
		"application/vnd.grafeq": {
			"source": "iana",
			"extensions": [
				"gqf",
				"gqs"
			]
		},
		"application/vnd.gridmp": {
			"source": "iana"
		},
		"application/vnd.groove-account": {
			"source": "iana",
			"extensions": [
				"gac"
			]
		},
		"application/vnd.groove-help": {
			"source": "iana",
			"extensions": [
				"ghf"
			]
		},
		"application/vnd.groove-identity-message": {
			"source": "iana",
			"extensions": [
				"gim"
			]
		},
		"application/vnd.groove-injector": {
			"source": "iana",
			"extensions": [
				"grv"
			]
		},
		"application/vnd.groove-tool-message": {
			"source": "iana",
			"extensions": [
				"gtm"
			]
		},
		"application/vnd.groove-tool-template": {
			"source": "iana",
			"extensions": [
				"tpl"
			]
		},
		"application/vnd.groove-vcard": {
			"source": "iana",
			"extensions": [
				"vcg"
			]
		},
		"application/vnd.hal+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.hal+xml": {
			"source": "iana",
			"extensions": [
				"hal"
			]
		},
		"application/vnd.handheld-entertainment+xml": {
			"source": "iana",
			"extensions": [
				"zmm"
			]
		},
		"application/vnd.hbci": {
			"source": "iana",
			"extensions": [
				"hbci"
			]
		},
		"application/vnd.hcl-bireports": {
			"source": "iana"
		},
		"application/vnd.hdt": {
			"source": "iana"
		},
		"application/vnd.heroku+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.hhe.lesson-player": {
			"source": "iana",
			"extensions": [
				"les"
			]
		},
		"application/vnd.hp-hpgl": {
			"source": "iana",
			"extensions": [
				"hpgl"
			]
		},
		"application/vnd.hp-hpid": {
			"source": "iana",
			"extensions": [
				"hpid"
			]
		},
		"application/vnd.hp-hps": {
			"source": "iana",
			"extensions": [
				"hps"
			]
		},
		"application/vnd.hp-jlyt": {
			"source": "iana",
			"extensions": [
				"jlt"
			]
		},
		"application/vnd.hp-pcl": {
			"source": "iana",
			"extensions": [
				"pcl"
			]
		},
		"application/vnd.hp-pclxl": {
			"source": "iana",
			"extensions": [
				"pclxl"
			]
		},
		"application/vnd.httphone": {
			"source": "iana"
		},
		"application/vnd.hydrostatix.sof-data": {
			"source": "iana",
			"extensions": [
				"sfd-hdstx"
			]
		},
		"application/vnd.hyperdrive+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.hzn-3d-crossword": {
			"source": "iana"
		},
		"application/vnd.ibm.afplinedata": {
			"source": "iana"
		},
		"application/vnd.ibm.electronic-media": {
			"source": "iana"
		},
		"application/vnd.ibm.minipay": {
			"source": "iana",
			"extensions": [
				"mpy"
			]
		},
		"application/vnd.ibm.modcap": {
			"source": "iana",
			"extensions": [
				"afp",
				"listafp",
				"list3820"
			]
		},
		"application/vnd.ibm.rights-management": {
			"source": "iana",
			"extensions": [
				"irm"
			]
		},
		"application/vnd.ibm.secure-container": {
			"source": "iana",
			"extensions": [
				"sc"
			]
		},
		"application/vnd.iccprofile": {
			"source": "iana",
			"extensions": [
				"icc",
				"icm"
			]
		},
		"application/vnd.ieee.1905": {
			"source": "iana"
		},
		"application/vnd.igloader": {
			"source": "iana",
			"extensions": [
				"igl"
			]
		},
		"application/vnd.immervision-ivp": {
			"source": "iana",
			"extensions": [
				"ivp"
			]
		},
		"application/vnd.immervision-ivu": {
			"source": "iana",
			"extensions": [
				"ivu"
			]
		},
		"application/vnd.ims.imsccv1p1": {
			"source": "iana"
		},
		"application/vnd.ims.imsccv1p2": {
			"source": "iana"
		},
		"application/vnd.ims.imsccv1p3": {
			"source": "iana"
		},
		"application/vnd.ims.lis.v2.result+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.ims.lti.v2.toolproxy+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.ims.lti.v2.toolproxy.id+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.ims.lti.v2.toolsettings+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.ims.lti.v2.toolsettings.simple+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.informedcontrol.rms+xml": {
			"source": "iana"
		},
		"application/vnd.informix-visionary": {
			"source": "iana"
		},
		"application/vnd.infotech.project": {
			"source": "iana"
		},
		"application/vnd.infotech.project+xml": {
			"source": "iana"
		},
		"application/vnd.innopath.wamp.notification": {
			"source": "iana"
		},
		"application/vnd.insors.igm": {
			"source": "iana",
			"extensions": [
				"igm"
			]
		},
		"application/vnd.intercon.formnet": {
			"source": "iana",
			"extensions": [
				"xpw",
				"xpx"
			]
		},
		"application/vnd.intergeo": {
			"source": "iana",
			"extensions": [
				"i2g"
			]
		},
		"application/vnd.intertrust.digibox": {
			"source": "iana"
		},
		"application/vnd.intertrust.nncp": {
			"source": "iana"
		},
		"application/vnd.intu.qbo": {
			"source": "iana",
			"extensions": [
				"qbo"
			]
		},
		"application/vnd.intu.qfx": {
			"source": "iana",
			"extensions": [
				"qfx"
			]
		},
		"application/vnd.iptc.g2.catalogitem+xml": {
			"source": "iana"
		},
		"application/vnd.iptc.g2.conceptitem+xml": {
			"source": "iana"
		},
		"application/vnd.iptc.g2.knowledgeitem+xml": {
			"source": "iana"
		},
		"application/vnd.iptc.g2.newsitem+xml": {
			"source": "iana"
		},
		"application/vnd.iptc.g2.newsmessage+xml": {
			"source": "iana"
		},
		"application/vnd.iptc.g2.packageitem+xml": {
			"source": "iana"
		},
		"application/vnd.iptc.g2.planningitem+xml": {
			"source": "iana"
		},
		"application/vnd.ipunplugged.rcprofile": {
			"source": "iana",
			"extensions": [
				"rcprofile"
			]
		},
		"application/vnd.irepository.package+xml": {
			"source": "iana",
			"extensions": [
				"irp"
			]
		},
		"application/vnd.is-xpr": {
			"source": "iana",
			"extensions": [
				"xpr"
			]
		},
		"application/vnd.isac.fcs": {
			"source": "iana",
			"extensions": [
				"fcs"
			]
		},
		"application/vnd.jam": {
			"source": "iana",
			"extensions": [
				"jam"
			]
		},
		"application/vnd.japannet-directory-service": {
			"source": "iana"
		},
		"application/vnd.japannet-jpnstore-wakeup": {
			"source": "iana"
		},
		"application/vnd.japannet-payment-wakeup": {
			"source": "iana"
		},
		"application/vnd.japannet-registration": {
			"source": "iana"
		},
		"application/vnd.japannet-registration-wakeup": {
			"source": "iana"
		},
		"application/vnd.japannet-setstore-wakeup": {
			"source": "iana"
		},
		"application/vnd.japannet-verification": {
			"source": "iana"
		},
		"application/vnd.japannet-verification-wakeup": {
			"source": "iana"
		},
		"application/vnd.jcp.javame.midlet-rms": {
			"source": "iana",
			"extensions": [
				"rms"
			]
		},
		"application/vnd.jisp": {
			"source": "iana",
			"extensions": [
				"jisp"
			]
		},
		"application/vnd.joost.joda-archive": {
			"source": "iana",
			"extensions": [
				"joda"
			]
		},
		"application/vnd.jsk.isdn-ngn": {
			"source": "iana"
		},
		"application/vnd.kahootz": {
			"source": "iana",
			"extensions": [
				"ktz",
				"ktr"
			]
		},
		"application/vnd.kde.karbon": {
			"source": "iana",
			"extensions": [
				"karbon"
			]
		},
		"application/vnd.kde.kchart": {
			"source": "iana",
			"extensions": [
				"chrt"
			]
		},
		"application/vnd.kde.kformula": {
			"source": "iana",
			"extensions": [
				"kfo"
			]
		},
		"application/vnd.kde.kivio": {
			"source": "iana",
			"extensions": [
				"flw"
			]
		},
		"application/vnd.kde.kontour": {
			"source": "iana",
			"extensions": [
				"kon"
			]
		},
		"application/vnd.kde.kpresenter": {
			"source": "iana",
			"extensions": [
				"kpr",
				"kpt"
			]
		},
		"application/vnd.kde.kspread": {
			"source": "iana",
			"extensions": [
				"ksp"
			]
		},
		"application/vnd.kde.kword": {
			"source": "iana",
			"extensions": [
				"kwd",
				"kwt"
			]
		},
		"application/vnd.kenameaapp": {
			"source": "iana",
			"extensions": [
				"htke"
			]
		},
		"application/vnd.kidspiration": {
			"source": "iana",
			"extensions": [
				"kia"
			]
		},
		"application/vnd.kinar": {
			"source": "iana",
			"extensions": [
				"kne",
				"knp"
			]
		},
		"application/vnd.koan": {
			"source": "iana",
			"extensions": [
				"skp",
				"skd",
				"skt",
				"skm"
			]
		},
		"application/vnd.kodak-descriptor": {
			"source": "iana",
			"extensions": [
				"sse"
			]
		},
		"application/vnd.las.las+xml": {
			"source": "iana",
			"extensions": [
				"lasxml"
			]
		},
		"application/vnd.liberty-request+xml": {
			"source": "iana"
		},
		"application/vnd.llamagraphics.life-balance.desktop": {
			"source": "iana",
			"extensions": [
				"lbd"
			]
		},
		"application/vnd.llamagraphics.life-balance.exchange+xml": {
			"source": "iana",
			"extensions": [
				"lbe"
			]
		},
		"application/vnd.lotus-1-2-3": {
			"source": "iana",
			"extensions": [
				"123"
			]
		},
		"application/vnd.lotus-approach": {
			"source": "iana",
			"extensions": [
				"apr"
			]
		},
		"application/vnd.lotus-freelance": {
			"source": "iana",
			"extensions": [
				"pre"
			]
		},
		"application/vnd.lotus-notes": {
			"source": "iana",
			"extensions": [
				"nsf"
			]
		},
		"application/vnd.lotus-organizer": {
			"source": "iana",
			"extensions": [
				"org"
			]
		},
		"application/vnd.lotus-screencam": {
			"source": "iana",
			"extensions": [
				"scm"
			]
		},
		"application/vnd.lotus-wordpro": {
			"source": "iana",
			"extensions": [
				"lwp"
			]
		},
		"application/vnd.macports.portpkg": {
			"source": "iana",
			"extensions": [
				"portpkg"
			]
		},
		"application/vnd.mapbox-vector-tile": {
			"source": "iana"
		},
		"application/vnd.marlin.drm.actiontoken+xml": {
			"source": "iana"
		},
		"application/vnd.marlin.drm.conftoken+xml": {
			"source": "iana"
		},
		"application/vnd.marlin.drm.license+xml": {
			"source": "iana"
		},
		"application/vnd.marlin.drm.mdcf": {
			"source": "iana"
		},
		"application/vnd.mason+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.maxmind.maxmind-db": {
			"source": "iana"
		},
		"application/vnd.mcd": {
			"source": "iana",
			"extensions": [
				"mcd"
			]
		},
		"application/vnd.medcalcdata": {
			"source": "iana",
			"extensions": [
				"mc1"
			]
		},
		"application/vnd.mediastation.cdkey": {
			"source": "iana",
			"extensions": [
				"cdkey"
			]
		},
		"application/vnd.meridian-slingshot": {
			"source": "iana"
		},
		"application/vnd.mfer": {
			"source": "iana",
			"extensions": [
				"mwf"
			]
		},
		"application/vnd.mfmp": {
			"source": "iana",
			"extensions": [
				"mfm"
			]
		},
		"application/vnd.micro+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.micrografx.flo": {
			"source": "iana",
			"extensions": [
				"flo"
			]
		},
		"application/vnd.micrografx.igx": {
			"source": "iana",
			"extensions": [
				"igx"
			]
		},
		"application/vnd.microsoft.portable-executable": {
			"source": "iana"
		},
		"application/vnd.miele+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.mif": {
			"source": "iana",
			"extensions": [
				"mif"
			]
		},
		"application/vnd.minisoft-hp3000-save": {
			"source": "iana"
		},
		"application/vnd.mitsubishi.misty-guard.trustweb": {
			"source": "iana"
		},
		"application/vnd.mobius.daf": {
			"source": "iana",
			"extensions": [
				"daf"
			]
		},
		"application/vnd.mobius.dis": {
			"source": "iana",
			"extensions": [
				"dis"
			]
		},
		"application/vnd.mobius.mbk": {
			"source": "iana",
			"extensions": [
				"mbk"
			]
		},
		"application/vnd.mobius.mqy": {
			"source": "iana",
			"extensions": [
				"mqy"
			]
		},
		"application/vnd.mobius.msl": {
			"source": "iana",
			"extensions": [
				"msl"
			]
		},
		"application/vnd.mobius.plc": {
			"source": "iana",
			"extensions": [
				"plc"
			]
		},
		"application/vnd.mobius.txf": {
			"source": "iana",
			"extensions": [
				"txf"
			]
		},
		"application/vnd.mophun.application": {
			"source": "iana",
			"extensions": [
				"mpn"
			]
		},
		"application/vnd.mophun.certificate": {
			"source": "iana",
			"extensions": [
				"mpc"
			]
		},
		"application/vnd.motorola.flexsuite": {
			"source": "iana"
		},
		"application/vnd.motorola.flexsuite.adsi": {
			"source": "iana"
		},
		"application/vnd.motorola.flexsuite.fis": {
			"source": "iana"
		},
		"application/vnd.motorola.flexsuite.gotap": {
			"source": "iana"
		},
		"application/vnd.motorola.flexsuite.kmr": {
			"source": "iana"
		},
		"application/vnd.motorola.flexsuite.ttc": {
			"source": "iana"
		},
		"application/vnd.motorola.flexsuite.wem": {
			"source": "iana"
		},
		"application/vnd.motorola.iprm": {
			"source": "iana"
		},
		"application/vnd.mozilla.xul+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"xul"
			]
		},
		"application/vnd.ms-3mfdocument": {
			"source": "iana"
		},
		"application/vnd.ms-artgalry": {
			"source": "iana",
			"extensions": [
				"cil"
			]
		},
		"application/vnd.ms-asf": {
			"source": "iana"
		},
		"application/vnd.ms-cab-compressed": {
			"source": "iana",
			"extensions": [
				"cab"
			]
		},
		"application/vnd.ms-color.iccprofile": {
			"source": "apache"
		},
		"application/vnd.ms-excel": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"xls",
				"xlm",
				"xla",
				"xlc",
				"xlt",
				"xlw"
			]
		},
		"application/vnd.ms-excel.addin.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"xlam"
			]
		},
		"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"xlsb"
			]
		},
		"application/vnd.ms-excel.sheet.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"xlsm"
			]
		},
		"application/vnd.ms-excel.template.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"xltm"
			]
		},
		"application/vnd.ms-fontobject": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"eot"
			]
		},
		"application/vnd.ms-htmlhelp": {
			"source": "iana",
			"extensions": [
				"chm"
			]
		},
		"application/vnd.ms-ims": {
			"source": "iana",
			"extensions": [
				"ims"
			]
		},
		"application/vnd.ms-lrm": {
			"source": "iana",
			"extensions": [
				"lrm"
			]
		},
		"application/vnd.ms-office.activex+xml": {
			"source": "iana"
		},
		"application/vnd.ms-officetheme": {
			"source": "iana",
			"extensions": [
				"thmx"
			]
		},
		"application/vnd.ms-opentype": {
			"source": "apache",
			"compressible": true
		},
		"application/vnd.ms-package.obfuscated-opentype": {
			"source": "apache"
		},
		"application/vnd.ms-pki.seccat": {
			"source": "apache",
			"extensions": [
				"cat"
			]
		},
		"application/vnd.ms-pki.stl": {
			"source": "apache",
			"extensions": [
				"stl"
			]
		},
		"application/vnd.ms-playready.initiator+xml": {
			"source": "iana"
		},
		"application/vnd.ms-powerpoint": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"ppt",
				"pps",
				"pot"
			]
		},
		"application/vnd.ms-powerpoint.addin.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"ppam"
			]
		},
		"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"pptm"
			]
		},
		"application/vnd.ms-powerpoint.slide.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"sldm"
			]
		},
		"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"ppsm"
			]
		},
		"application/vnd.ms-powerpoint.template.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"potm"
			]
		},
		"application/vnd.ms-printdevicecapabilities+xml": {
			"source": "iana"
		},
		"application/vnd.ms-printing.printticket+xml": {
			"source": "apache"
		},
		"application/vnd.ms-printschematicket+xml": {
			"source": "iana"
		},
		"application/vnd.ms-project": {
			"source": "iana",
			"extensions": [
				"mpp",
				"mpt"
			]
		},
		"application/vnd.ms-tnef": {
			"source": "iana"
		},
		"application/vnd.ms-windows.devicepairing": {
			"source": "iana"
		},
		"application/vnd.ms-windows.nwprinting.oob": {
			"source": "iana"
		},
		"application/vnd.ms-windows.printerpairing": {
			"source": "iana"
		},
		"application/vnd.ms-windows.wsd.oob": {
			"source": "iana"
		},
		"application/vnd.ms-wmdrm.lic-chlg-req": {
			"source": "iana"
		},
		"application/vnd.ms-wmdrm.lic-resp": {
			"source": "iana"
		},
		"application/vnd.ms-wmdrm.meter-chlg-req": {
			"source": "iana"
		},
		"application/vnd.ms-wmdrm.meter-resp": {
			"source": "iana"
		},
		"application/vnd.ms-word.document.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"docm"
			]
		},
		"application/vnd.ms-word.template.macroenabled.12": {
			"source": "iana",
			"extensions": [
				"dotm"
			]
		},
		"application/vnd.ms-works": {
			"source": "iana",
			"extensions": [
				"wps",
				"wks",
				"wcm",
				"wdb"
			]
		},
		"application/vnd.ms-wpl": {
			"source": "iana",
			"extensions": [
				"wpl"
			]
		},
		"application/vnd.ms-xpsdocument": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"xps"
			]
		},
		"application/vnd.msa-disk-image": {
			"source": "iana"
		},
		"application/vnd.mseq": {
			"source": "iana",
			"extensions": [
				"mseq"
			]
		},
		"application/vnd.msign": {
			"source": "iana"
		},
		"application/vnd.multiad.creator": {
			"source": "iana"
		},
		"application/vnd.multiad.creator.cif": {
			"source": "iana"
		},
		"application/vnd.music-niff": {
			"source": "iana"
		},
		"application/vnd.musician": {
			"source": "iana",
			"extensions": [
				"mus"
			]
		},
		"application/vnd.muvee.style": {
			"source": "iana",
			"extensions": [
				"msty"
			]
		},
		"application/vnd.mynfc": {
			"source": "iana",
			"extensions": [
				"taglet"
			]
		},
		"application/vnd.ncd.control": {
			"source": "iana"
		},
		"application/vnd.ncd.reference": {
			"source": "iana"
		},
		"application/vnd.nervana": {
			"source": "iana"
		},
		"application/vnd.netfpx": {
			"source": "iana"
		},
		"application/vnd.neurolanguage.nlu": {
			"source": "iana",
			"extensions": [
				"nlu"
			]
		},
		"application/vnd.nintendo.nitro.rom": {
			"source": "iana"
		},
		"application/vnd.nintendo.snes.rom": {
			"source": "iana"
		},
		"application/vnd.nitf": {
			"source": "iana",
			"extensions": [
				"ntf",
				"nitf"
			]
		},
		"application/vnd.noblenet-directory": {
			"source": "iana",
			"extensions": [
				"nnd"
			]
		},
		"application/vnd.noblenet-sealer": {
			"source": "iana",
			"extensions": [
				"nns"
			]
		},
		"application/vnd.noblenet-web": {
			"source": "iana",
			"extensions": [
				"nnw"
			]
		},
		"application/vnd.nokia.catalogs": {
			"source": "iana"
		},
		"application/vnd.nokia.conml+wbxml": {
			"source": "iana"
		},
		"application/vnd.nokia.conml+xml": {
			"source": "iana"
		},
		"application/vnd.nokia.iptv.config+xml": {
			"source": "iana"
		},
		"application/vnd.nokia.isds-radio-presets": {
			"source": "iana"
		},
		"application/vnd.nokia.landmark+wbxml": {
			"source": "iana"
		},
		"application/vnd.nokia.landmark+xml": {
			"source": "iana"
		},
		"application/vnd.nokia.landmarkcollection+xml": {
			"source": "iana"
		},
		"application/vnd.nokia.n-gage.ac+xml": {
			"source": "iana"
		},
		"application/vnd.nokia.n-gage.data": {
			"source": "iana",
			"extensions": [
				"ngdat"
			]
		},
		"application/vnd.nokia.n-gage.symbian.install": {
			"source": "iana",
			"extensions": [
				"n-gage"
			]
		},
		"application/vnd.nokia.ncd": {
			"source": "iana"
		},
		"application/vnd.nokia.pcd+wbxml": {
			"source": "iana"
		},
		"application/vnd.nokia.pcd+xml": {
			"source": "iana"
		},
		"application/vnd.nokia.radio-preset": {
			"source": "iana",
			"extensions": [
				"rpst"
			]
		},
		"application/vnd.nokia.radio-presets": {
			"source": "iana",
			"extensions": [
				"rpss"
			]
		},
		"application/vnd.novadigm.edm": {
			"source": "iana",
			"extensions": [
				"edm"
			]
		},
		"application/vnd.novadigm.edx": {
			"source": "iana",
			"extensions": [
				"edx"
			]
		},
		"application/vnd.novadigm.ext": {
			"source": "iana",
			"extensions": [
				"ext"
			]
		},
		"application/vnd.ntt-local.content-share": {
			"source": "iana"
		},
		"application/vnd.ntt-local.file-transfer": {
			"source": "iana"
		},
		"application/vnd.ntt-local.ogw_remote-access": {
			"source": "iana"
		},
		"application/vnd.ntt-local.sip-ta_remote": {
			"source": "iana"
		},
		"application/vnd.ntt-local.sip-ta_tcp_stream": {
			"source": "iana"
		},
		"application/vnd.oasis.opendocument.chart": {
			"source": "iana",
			"extensions": [
				"odc"
			]
		},
		"application/vnd.oasis.opendocument.chart-template": {
			"source": "iana",
			"extensions": [
				"otc"
			]
		},
		"application/vnd.oasis.opendocument.database": {
			"source": "iana",
			"extensions": [
				"odb"
			]
		},
		"application/vnd.oasis.opendocument.formula": {
			"source": "iana",
			"extensions": [
				"odf"
			]
		},
		"application/vnd.oasis.opendocument.formula-template": {
			"source": "iana",
			"extensions": [
				"odft"
			]
		},
		"application/vnd.oasis.opendocument.graphics": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"odg"
			]
		},
		"application/vnd.oasis.opendocument.graphics-template": {
			"source": "iana",
			"extensions": [
				"otg"
			]
		},
		"application/vnd.oasis.opendocument.image": {
			"source": "iana",
			"extensions": [
				"odi"
			]
		},
		"application/vnd.oasis.opendocument.image-template": {
			"source": "iana",
			"extensions": [
				"oti"
			]
		},
		"application/vnd.oasis.opendocument.presentation": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"odp"
			]
		},
		"application/vnd.oasis.opendocument.presentation-template": {
			"source": "iana",
			"extensions": [
				"otp"
			]
		},
		"application/vnd.oasis.opendocument.spreadsheet": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"ods"
			]
		},
		"application/vnd.oasis.opendocument.spreadsheet-template": {
			"source": "iana",
			"extensions": [
				"ots"
			]
		},
		"application/vnd.oasis.opendocument.text": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"odt"
			]
		},
		"application/vnd.oasis.opendocument.text-master": {
			"source": "iana",
			"extensions": [
				"odm"
			]
		},
		"application/vnd.oasis.opendocument.text-template": {
			"source": "iana",
			"extensions": [
				"ott"
			]
		},
		"application/vnd.oasis.opendocument.text-web": {
			"source": "iana",
			"extensions": [
				"oth"
			]
		},
		"application/vnd.obn": {
			"source": "iana"
		},
		"application/vnd.oftn.l10n+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.oipf.contentaccessdownload+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.contentaccessstreaming+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.cspg-hexbinary": {
			"source": "iana"
		},
		"application/vnd.oipf.dae.svg+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.dae.xhtml+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.mippvcontrolmessage+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.pae.gem": {
			"source": "iana"
		},
		"application/vnd.oipf.spdiscovery+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.spdlist+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.ueprofile+xml": {
			"source": "iana"
		},
		"application/vnd.oipf.userprofile+xml": {
			"source": "iana"
		},
		"application/vnd.olpc-sugar": {
			"source": "iana",
			"extensions": [
				"xo"
			]
		},
		"application/vnd.oma-scws-config": {
			"source": "iana"
		},
		"application/vnd.oma-scws-http-request": {
			"source": "iana"
		},
		"application/vnd.oma-scws-http-response": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.drm-trigger+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.imd+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.ltkm": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.notification+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.provisioningtrigger": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.sgboot": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.sgdd+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.sgdu": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.simple-symbol-container": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.smartcard-trigger+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.sprov+xml": {
			"source": "iana"
		},
		"application/vnd.oma.bcast.stkm": {
			"source": "iana"
		},
		"application/vnd.oma.cab-address-book+xml": {
			"source": "iana"
		},
		"application/vnd.oma.cab-feature-handler+xml": {
			"source": "iana"
		},
		"application/vnd.oma.cab-pcc+xml": {
			"source": "iana"
		},
		"application/vnd.oma.cab-subs-invite+xml": {
			"source": "iana"
		},
		"application/vnd.oma.cab-user-prefs+xml": {
			"source": "iana"
		},
		"application/vnd.oma.dcd": {
			"source": "iana"
		},
		"application/vnd.oma.dcdc": {
			"source": "iana"
		},
		"application/vnd.oma.dd2+xml": {
			"source": "iana",
			"extensions": [
				"dd2"
			]
		},
		"application/vnd.oma.drm.risd+xml": {
			"source": "iana"
		},
		"application/vnd.oma.group-usage-list+xml": {
			"source": "iana"
		},
		"application/vnd.oma.pal+xml": {
			"source": "iana"
		},
		"application/vnd.oma.poc.detailed-progress-report+xml": {
			"source": "iana"
		},
		"application/vnd.oma.poc.final-report+xml": {
			"source": "iana"
		},
		"application/vnd.oma.poc.groups+xml": {
			"source": "iana"
		},
		"application/vnd.oma.poc.invocation-descriptor+xml": {
			"source": "iana"
		},
		"application/vnd.oma.poc.optimized-progress-report+xml": {
			"source": "iana"
		},
		"application/vnd.oma.push": {
			"source": "iana"
		},
		"application/vnd.oma.scidm.messages+xml": {
			"source": "iana"
		},
		"application/vnd.oma.xcap-directory+xml": {
			"source": "iana"
		},
		"application/vnd.omads-email+xml": {
			"source": "iana"
		},
		"application/vnd.omads-file+xml": {
			"source": "iana"
		},
		"application/vnd.omads-folder+xml": {
			"source": "iana"
		},
		"application/vnd.omaloc-supl-init": {
			"source": "iana"
		},
		"application/vnd.openblox.game+xml": {
			"source": "iana"
		},
		"application/vnd.openblox.game-binary": {
			"source": "iana"
		},
		"application/vnd.openeye.oeb": {
			"source": "iana"
		},
		"application/vnd.openofficeorg.extension": {
			"source": "apache",
			"extensions": [
				"oxt"
			]
		},
		"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawing+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml-template": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"pptx"
			]
		},
		"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slide": {
			"source": "iana",
			"extensions": [
				"sldx"
			]
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
			"source": "iana",
			"extensions": [
				"ppsx"
			]
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.template": {
			"source": "apache",
			"extensions": [
				"potx"
			]
		},
		"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml-template": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"xlsx"
			]
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
			"source": "apache",
			"extensions": [
				"xltx"
			]
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.theme+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.vmldrawing": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml-template": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"docx"
			]
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
			"source": "apache",
			"extensions": [
				"dotx"
			]
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-package.core-properties+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
			"source": "iana"
		},
		"application/vnd.openxmlformats-package.relationships+xml": {
			"source": "iana"
		},
		"application/vnd.oracle.resource+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.orange.indata": {
			"source": "iana"
		},
		"application/vnd.osa.netdeploy": {
			"source": "iana"
		},
		"application/vnd.osgeo.mapguide.package": {
			"source": "iana",
			"extensions": [
				"mgp"
			]
		},
		"application/vnd.osgi.bundle": {
			"source": "iana"
		},
		"application/vnd.osgi.dp": {
			"source": "iana",
			"extensions": [
				"dp"
			]
		},
		"application/vnd.osgi.subsystem": {
			"source": "iana",
			"extensions": [
				"esa"
			]
		},
		"application/vnd.otps.ct-kip+xml": {
			"source": "iana"
		},
		"application/vnd.oxli.countgraph": {
			"source": "iana"
		},
		"application/vnd.pagerduty+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.palm": {
			"source": "iana",
			"extensions": [
				"pdb",
				"pqa",
				"oprc"
			]
		},
		"application/vnd.panoply": {
			"source": "iana"
		},
		"application/vnd.paos+xml": {
			"source": "iana"
		},
		"application/vnd.paos.xml": {
			"source": "apache"
		},
		"application/vnd.pawaafile": {
			"source": "iana",
			"extensions": [
				"paw"
			]
		},
		"application/vnd.pcos": {
			"source": "iana"
		},
		"application/vnd.pg.format": {
			"source": "iana",
			"extensions": [
				"str"
			]
		},
		"application/vnd.pg.osasli": {
			"source": "iana",
			"extensions": [
				"ei6"
			]
		},
		"application/vnd.piaccess.application-licence": {
			"source": "iana"
		},
		"application/vnd.picsel": {
			"source": "iana",
			"extensions": [
				"efif"
			]
		},
		"application/vnd.pmi.widget": {
			"source": "iana",
			"extensions": [
				"wg"
			]
		},
		"application/vnd.poc.group-advertisement+xml": {
			"source": "iana"
		},
		"application/vnd.pocketlearn": {
			"source": "iana",
			"extensions": [
				"plf"
			]
		},
		"application/vnd.powerbuilder6": {
			"source": "iana",
			"extensions": [
				"pbd"
			]
		},
		"application/vnd.powerbuilder6-s": {
			"source": "iana"
		},
		"application/vnd.powerbuilder7": {
			"source": "iana"
		},
		"application/vnd.powerbuilder7-s": {
			"source": "iana"
		},
		"application/vnd.powerbuilder75": {
			"source": "iana"
		},
		"application/vnd.powerbuilder75-s": {
			"source": "iana"
		},
		"application/vnd.preminet": {
			"source": "iana"
		},
		"application/vnd.previewsystems.box": {
			"source": "iana",
			"extensions": [
				"box"
			]
		},
		"application/vnd.proteus.magazine": {
			"source": "iana",
			"extensions": [
				"mgz"
			]
		},
		"application/vnd.publishare-delta-tree": {
			"source": "iana",
			"extensions": [
				"qps"
			]
		},
		"application/vnd.pvi.ptid1": {
			"source": "iana",
			"extensions": [
				"ptid"
			]
		},
		"application/vnd.pwg-multiplexed": {
			"source": "iana"
		},
		"application/vnd.pwg-xhtml-print+xml": {
			"source": "iana"
		},
		"application/vnd.qualcomm.brew-app-res": {
			"source": "iana"
		},
		"application/vnd.quark.quarkxpress": {
			"source": "iana",
			"extensions": [
				"qxd",
				"qxt",
				"qwd",
				"qwt",
				"qxl",
				"qxb"
			]
		},
		"application/vnd.quobject-quoxdocument": {
			"source": "iana"
		},
		"application/vnd.radisys.moml+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-audit+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-audit-conf+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-audit-conn+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-audit-dialog+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-audit-stream+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-conf+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog-base+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog-fax-detect+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog-group+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog-speech+xml": {
			"source": "iana"
		},
		"application/vnd.radisys.msml-dialog-transform+xml": {
			"source": "iana"
		},
		"application/vnd.rainstor.data": {
			"source": "iana"
		},
		"application/vnd.rapid": {
			"source": "iana"
		},
		"application/vnd.realvnc.bed": {
			"source": "iana",
			"extensions": [
				"bed"
			]
		},
		"application/vnd.recordare.musicxml": {
			"source": "iana",
			"extensions": [
				"mxl"
			]
		},
		"application/vnd.recordare.musicxml+xml": {
			"source": "iana",
			"extensions": [
				"musicxml"
			]
		},
		"application/vnd.renlearn.rlprint": {
			"source": "iana"
		},
		"application/vnd.rig.cryptonote": {
			"source": "iana",
			"extensions": [
				"cryptonote"
			]
		},
		"application/vnd.rim.cod": {
			"source": "apache",
			"extensions": [
				"cod"
			]
		},
		"application/vnd.rn-realmedia": {
			"source": "apache",
			"extensions": [
				"rm"
			]
		},
		"application/vnd.rn-realmedia-vbr": {
			"source": "apache",
			"extensions": [
				"rmvb"
			]
		},
		"application/vnd.route66.link66+xml": {
			"source": "iana",
			"extensions": [
				"link66"
			]
		},
		"application/vnd.rs-274x": {
			"source": "iana"
		},
		"application/vnd.ruckus.download": {
			"source": "iana"
		},
		"application/vnd.s3sms": {
			"source": "iana"
		},
		"application/vnd.sailingtracker.track": {
			"source": "iana",
			"extensions": [
				"st"
			]
		},
		"application/vnd.sbm.cid": {
			"source": "iana"
		},
		"application/vnd.sbm.mid2": {
			"source": "iana"
		},
		"application/vnd.scribus": {
			"source": "iana"
		},
		"application/vnd.sealed.3df": {
			"source": "iana"
		},
		"application/vnd.sealed.csf": {
			"source": "iana"
		},
		"application/vnd.sealed.doc": {
			"source": "iana"
		},
		"application/vnd.sealed.eml": {
			"source": "iana"
		},
		"application/vnd.sealed.mht": {
			"source": "iana"
		},
		"application/vnd.sealed.net": {
			"source": "iana"
		},
		"application/vnd.sealed.ppt": {
			"source": "iana"
		},
		"application/vnd.sealed.tiff": {
			"source": "iana"
		},
		"application/vnd.sealed.xls": {
			"source": "iana"
		},
		"application/vnd.sealedmedia.softseal.html": {
			"source": "iana"
		},
		"application/vnd.sealedmedia.softseal.pdf": {
			"source": "iana"
		},
		"application/vnd.seemail": {
			"source": "iana",
			"extensions": [
				"see"
			]
		},
		"application/vnd.sema": {
			"source": "iana",
			"extensions": [
				"sema"
			]
		},
		"application/vnd.semd": {
			"source": "iana",
			"extensions": [
				"semd"
			]
		},
		"application/vnd.semf": {
			"source": "iana",
			"extensions": [
				"semf"
			]
		},
		"application/vnd.shana.informed.formdata": {
			"source": "iana",
			"extensions": [
				"ifm"
			]
		},
		"application/vnd.shana.informed.formtemplate": {
			"source": "iana",
			"extensions": [
				"itp"
			]
		},
		"application/vnd.shana.informed.interchange": {
			"source": "iana",
			"extensions": [
				"iif"
			]
		},
		"application/vnd.shana.informed.package": {
			"source": "iana",
			"extensions": [
				"ipk"
			]
		},
		"application/vnd.simtech-mindmapper": {
			"source": "iana",
			"extensions": [
				"twd",
				"twds"
			]
		},
		"application/vnd.siren+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.smaf": {
			"source": "iana",
			"extensions": [
				"mmf"
			]
		},
		"application/vnd.smart.notebook": {
			"source": "iana"
		},
		"application/vnd.smart.teacher": {
			"source": "iana",
			"extensions": [
				"teacher"
			]
		},
		"application/vnd.software602.filler.form+xml": {
			"source": "iana"
		},
		"application/vnd.software602.filler.form-xml-zip": {
			"source": "iana"
		},
		"application/vnd.solent.sdkm+xml": {
			"source": "iana",
			"extensions": [
				"sdkm",
				"sdkd"
			]
		},
		"application/vnd.spotfire.dxp": {
			"source": "iana",
			"extensions": [
				"dxp"
			]
		},
		"application/vnd.spotfire.sfs": {
			"source": "iana",
			"extensions": [
				"sfs"
			]
		},
		"application/vnd.sss-cod": {
			"source": "iana"
		},
		"application/vnd.sss-dtf": {
			"source": "iana"
		},
		"application/vnd.sss-ntf": {
			"source": "iana"
		},
		"application/vnd.stardivision.calc": {
			"source": "apache",
			"extensions": [
				"sdc"
			]
		},
		"application/vnd.stardivision.draw": {
			"source": "apache",
			"extensions": [
				"sda"
			]
		},
		"application/vnd.stardivision.impress": {
			"source": "apache",
			"extensions": [
				"sdd"
			]
		},
		"application/vnd.stardivision.math": {
			"source": "apache",
			"extensions": [
				"smf"
			]
		},
		"application/vnd.stardivision.writer": {
			"source": "apache",
			"extensions": [
				"sdw",
				"vor"
			]
		},
		"application/vnd.stardivision.writer-global": {
			"source": "apache",
			"extensions": [
				"sgl"
			]
		},
		"application/vnd.stepmania.package": {
			"source": "iana",
			"extensions": [
				"smzip"
			]
		},
		"application/vnd.stepmania.stepchart": {
			"source": "iana",
			"extensions": [
				"sm"
			]
		},
		"application/vnd.street-stream": {
			"source": "iana"
		},
		"application/vnd.sun.wadl+xml": {
			"source": "iana"
		},
		"application/vnd.sun.xml.calc": {
			"source": "apache",
			"extensions": [
				"sxc"
			]
		},
		"application/vnd.sun.xml.calc.template": {
			"source": "apache",
			"extensions": [
				"stc"
			]
		},
		"application/vnd.sun.xml.draw": {
			"source": "apache",
			"extensions": [
				"sxd"
			]
		},
		"application/vnd.sun.xml.draw.template": {
			"source": "apache",
			"extensions": [
				"std"
			]
		},
		"application/vnd.sun.xml.impress": {
			"source": "apache",
			"extensions": [
				"sxi"
			]
		},
		"application/vnd.sun.xml.impress.template": {
			"source": "apache",
			"extensions": [
				"sti"
			]
		},
		"application/vnd.sun.xml.math": {
			"source": "apache",
			"extensions": [
				"sxm"
			]
		},
		"application/vnd.sun.xml.writer": {
			"source": "apache",
			"extensions": [
				"sxw"
			]
		},
		"application/vnd.sun.xml.writer.global": {
			"source": "apache",
			"extensions": [
				"sxg"
			]
		},
		"application/vnd.sun.xml.writer.template": {
			"source": "apache",
			"extensions": [
				"stw"
			]
		},
		"application/vnd.sus-calendar": {
			"source": "iana",
			"extensions": [
				"sus",
				"susp"
			]
		},
		"application/vnd.svd": {
			"source": "iana",
			"extensions": [
				"svd"
			]
		},
		"application/vnd.swiftview-ics": {
			"source": "iana"
		},
		"application/vnd.symbian.install": {
			"source": "apache",
			"extensions": [
				"sis",
				"sisx"
			]
		},
		"application/vnd.syncml+xml": {
			"source": "iana",
			"extensions": [
				"xsm"
			]
		},
		"application/vnd.syncml.dm+wbxml": {
			"source": "iana",
			"extensions": [
				"bdm"
			]
		},
		"application/vnd.syncml.dm+xml": {
			"source": "iana",
			"extensions": [
				"xdm"
			]
		},
		"application/vnd.syncml.dm.notification": {
			"source": "iana"
		},
		"application/vnd.syncml.dmddf+wbxml": {
			"source": "iana"
		},
		"application/vnd.syncml.dmddf+xml": {
			"source": "iana"
		},
		"application/vnd.syncml.dmtnds+wbxml": {
			"source": "iana"
		},
		"application/vnd.syncml.dmtnds+xml": {
			"source": "iana"
		},
		"application/vnd.syncml.ds.notification": {
			"source": "iana"
		},
		"application/vnd.tao.intent-module-archive": {
			"source": "iana",
			"extensions": [
				"tao"
			]
		},
		"application/vnd.tcpdump.pcap": {
			"source": "iana",
			"extensions": [
				"pcap",
				"cap",
				"dmp"
			]
		},
		"application/vnd.tmd.mediaflex.api+xml": {
			"source": "iana"
		},
		"application/vnd.tml": {
			"source": "iana"
		},
		"application/vnd.tmobile-livetv": {
			"source": "iana",
			"extensions": [
				"tmo"
			]
		},
		"application/vnd.trid.tpt": {
			"source": "iana",
			"extensions": [
				"tpt"
			]
		},
		"application/vnd.triscape.mxs": {
			"source": "iana",
			"extensions": [
				"mxs"
			]
		},
		"application/vnd.trueapp": {
			"source": "iana",
			"extensions": [
				"tra"
			]
		},
		"application/vnd.truedoc": {
			"source": "iana"
		},
		"application/vnd.ubisoft.webplayer": {
			"source": "iana"
		},
		"application/vnd.ufdl": {
			"source": "iana",
			"extensions": [
				"ufd",
				"ufdl"
			]
		},
		"application/vnd.uiq.theme": {
			"source": "iana",
			"extensions": [
				"utz"
			]
		},
		"application/vnd.umajin": {
			"source": "iana",
			"extensions": [
				"umj"
			]
		},
		"application/vnd.unity": {
			"source": "iana",
			"extensions": [
				"unityweb"
			]
		},
		"application/vnd.uoml+xml": {
			"source": "iana",
			"extensions": [
				"uoml"
			]
		},
		"application/vnd.uplanet.alert": {
			"source": "iana"
		},
		"application/vnd.uplanet.alert-wbxml": {
			"source": "iana"
		},
		"application/vnd.uplanet.bearer-choice": {
			"source": "iana"
		},
		"application/vnd.uplanet.bearer-choice-wbxml": {
			"source": "iana"
		},
		"application/vnd.uplanet.cacheop": {
			"source": "iana"
		},
		"application/vnd.uplanet.cacheop-wbxml": {
			"source": "iana"
		},
		"application/vnd.uplanet.channel": {
			"source": "iana"
		},
		"application/vnd.uplanet.channel-wbxml": {
			"source": "iana"
		},
		"application/vnd.uplanet.list": {
			"source": "iana"
		},
		"application/vnd.uplanet.list-wbxml": {
			"source": "iana"
		},
		"application/vnd.uplanet.listcmd": {
			"source": "iana"
		},
		"application/vnd.uplanet.listcmd-wbxml": {
			"source": "iana"
		},
		"application/vnd.uplanet.signal": {
			"source": "iana"
		},
		"application/vnd.uri-map": {
			"source": "iana"
		},
		"application/vnd.valve.source.material": {
			"source": "iana"
		},
		"application/vnd.vcx": {
			"source": "iana",
			"extensions": [
				"vcx"
			]
		},
		"application/vnd.vd-study": {
			"source": "iana"
		},
		"application/vnd.vectorworks": {
			"source": "iana"
		},
		"application/vnd.verimatrix.vcas": {
			"source": "iana"
		},
		"application/vnd.vidsoft.vidconference": {
			"source": "iana"
		},
		"application/vnd.visio": {
			"source": "iana",
			"extensions": [
				"vsd",
				"vst",
				"vss",
				"vsw"
			]
		},
		"application/vnd.visionary": {
			"source": "iana",
			"extensions": [
				"vis"
			]
		},
		"application/vnd.vividence.scriptfile": {
			"source": "iana"
		},
		"application/vnd.vsf": {
			"source": "iana",
			"extensions": [
				"vsf"
			]
		},
		"application/vnd.wap.sic": {
			"source": "iana"
		},
		"application/vnd.wap.slc": {
			"source": "iana"
		},
		"application/vnd.wap.wbxml": {
			"source": "iana",
			"extensions": [
				"wbxml"
			]
		},
		"application/vnd.wap.wmlc": {
			"source": "iana",
			"extensions": [
				"wmlc"
			]
		},
		"application/vnd.wap.wmlscriptc": {
			"source": "iana",
			"extensions": [
				"wmlsc"
			]
		},
		"application/vnd.webturbo": {
			"source": "iana",
			"extensions": [
				"wtb"
			]
		},
		"application/vnd.wfa.p2p": {
			"source": "iana"
		},
		"application/vnd.wfa.wsc": {
			"source": "iana"
		},
		"application/vnd.windows.devicepairing": {
			"source": "iana"
		},
		"application/vnd.wmc": {
			"source": "iana"
		},
		"application/vnd.wmf.bootstrap": {
			"source": "iana"
		},
		"application/vnd.wolfram.mathematica": {
			"source": "iana"
		},
		"application/vnd.wolfram.mathematica.package": {
			"source": "iana"
		},
		"application/vnd.wolfram.player": {
			"source": "iana",
			"extensions": [
				"nbp"
			]
		},
		"application/vnd.wordperfect": {
			"source": "iana",
			"extensions": [
				"wpd"
			]
		},
		"application/vnd.wqd": {
			"source": "iana",
			"extensions": [
				"wqd"
			]
		},
		"application/vnd.wrq-hp3000-labelled": {
			"source": "iana"
		},
		"application/vnd.wt.stf": {
			"source": "iana",
			"extensions": [
				"stf"
			]
		},
		"application/vnd.wv.csp+wbxml": {
			"source": "iana"
		},
		"application/vnd.wv.csp+xml": {
			"source": "iana"
		},
		"application/vnd.wv.ssp+xml": {
			"source": "iana"
		},
		"application/vnd.xacml+json": {
			"source": "iana",
			"compressible": true
		},
		"application/vnd.xara": {
			"source": "iana",
			"extensions": [
				"xar"
			]
		},
		"application/vnd.xfdl": {
			"source": "iana",
			"extensions": [
				"xfdl"
			]
		},
		"application/vnd.xfdl.webform": {
			"source": "iana"
		},
		"application/vnd.xmi+xml": {
			"source": "iana"
		},
		"application/vnd.xmpie.cpkg": {
			"source": "iana"
		},
		"application/vnd.xmpie.dpkg": {
			"source": "iana"
		},
		"application/vnd.xmpie.plan": {
			"source": "iana"
		},
		"application/vnd.xmpie.ppkg": {
			"source": "iana"
		},
		"application/vnd.xmpie.xlim": {
			"source": "iana"
		},
		"application/vnd.yamaha.hv-dic": {
			"source": "iana",
			"extensions": [
				"hvd"
			]
		},
		"application/vnd.yamaha.hv-script": {
			"source": "iana",
			"extensions": [
				"hvs"
			]
		},
		"application/vnd.yamaha.hv-voice": {
			"source": "iana",
			"extensions": [
				"hvp"
			]
		},
		"application/vnd.yamaha.openscoreformat": {
			"source": "iana",
			"extensions": [
				"osf"
			]
		},
		"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
			"source": "iana",
			"extensions": [
				"osfpvg"
			]
		},
		"application/vnd.yamaha.remote-setup": {
			"source": "iana"
		},
		"application/vnd.yamaha.smaf-audio": {
			"source": "iana",
			"extensions": [
				"saf"
			]
		},
		"application/vnd.yamaha.smaf-phrase": {
			"source": "iana",
			"extensions": [
				"spf"
			]
		},
		"application/vnd.yamaha.through-ngn": {
			"source": "iana"
		},
		"application/vnd.yamaha.tunnel-udpencap": {
			"source": "iana"
		},
		"application/vnd.yaoweme": {
			"source": "iana"
		},
		"application/vnd.yellowriver-custom-menu": {
			"source": "iana",
			"extensions": [
				"cmp"
			]
		},
		"application/vnd.zul": {
			"source": "iana",
			"extensions": [
				"zir",
				"zirz"
			]
		},
		"application/vnd.zzazz.deck+xml": {
			"source": "iana",
			"extensions": [
				"zaz"
			]
		},
		"application/voicexml+xml": {
			"source": "iana",
			"extensions": [
				"vxml"
			]
		},
		"application/vq-rtcpxr": {
			"source": "iana"
		},
		"application/watcherinfo+xml": {
			"source": "iana"
		},
		"application/whoispp-query": {
			"source": "iana"
		},
		"application/whoispp-response": {
			"source": "iana"
		},
		"application/widget": {
			"source": "iana",
			"extensions": [
				"wgt"
			]
		},
		"application/winhlp": {
			"source": "apache",
			"extensions": [
				"hlp"
			]
		},
		"application/wita": {
			"source": "iana"
		},
		"application/wordperfect5.1": {
			"source": "iana"
		},
		"application/wsdl+xml": {
			"source": "iana",
			"extensions": [
				"wsdl"
			]
		},
		"application/wspolicy+xml": {
			"source": "iana",
			"extensions": [
				"wspolicy"
			]
		},
		"application/x-7z-compressed": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"7z"
			]
		},
		"application/x-abiword": {
			"source": "apache",
			"extensions": [
				"abw"
			]
		},
		"application/x-ace-compressed": {
			"source": "apache",
			"extensions": [
				"ace"
			]
		},
		"application/x-amf": {
			"source": "apache"
		},
		"application/x-apple-diskimage": {
			"source": "apache",
			"extensions": [
				"dmg"
			]
		},
		"application/x-authorware-bin": {
			"source": "apache",
			"extensions": [
				"aab",
				"x32",
				"u32",
				"vox"
			]
		},
		"application/x-authorware-map": {
			"source": "apache",
			"extensions": [
				"aam"
			]
		},
		"application/x-authorware-seg": {
			"source": "apache",
			"extensions": [
				"aas"
			]
		},
		"application/x-bcpio": {
			"source": "apache",
			"extensions": [
				"bcpio"
			]
		},
		"application/x-bdoc": {
			"compressible": false,
			"extensions": [
				"bdoc"
			]
		},
		"application/x-bittorrent": {
			"source": "apache",
			"extensions": [
				"torrent"
			]
		},
		"application/x-blorb": {
			"source": "apache",
			"extensions": [
				"blb",
				"blorb"
			]
		},
		"application/x-bzip": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"bz"
			]
		},
		"application/x-bzip2": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"bz2",
				"boz"
			]
		},
		"application/x-cbr": {
			"source": "apache",
			"extensions": [
				"cbr",
				"cba",
				"cbt",
				"cbz",
				"cb7"
			]
		},
		"application/x-cdlink": {
			"source": "apache",
			"extensions": [
				"vcd"
			]
		},
		"application/x-cfs-compressed": {
			"source": "apache",
			"extensions": [
				"cfs"
			]
		},
		"application/x-chat": {
			"source": "apache",
			"extensions": [
				"chat"
			]
		},
		"application/x-chess-pgn": {
			"source": "apache",
			"extensions": [
				"pgn"
			]
		},
		"application/x-chrome-extension": {
			"extensions": [
				"crx"
			]
		},
		"application/x-cocoa": {
			"source": "nginx",
			"extensions": [
				"cco"
			]
		},
		"application/x-compress": {
			"source": "apache"
		},
		"application/x-conference": {
			"source": "apache",
			"extensions": [
				"nsc"
			]
		},
		"application/x-cpio": {
			"source": "apache",
			"extensions": [
				"cpio"
			]
		},
		"application/x-csh": {
			"source": "apache",
			"extensions": [
				"csh"
			]
		},
		"application/x-deb": {
			"compressible": false
		},
		"application/x-debian-package": {
			"source": "apache",
			"extensions": [
				"deb",
				"udeb"
			]
		},
		"application/x-dgc-compressed": {
			"source": "apache",
			"extensions": [
				"dgc"
			]
		},
		"application/x-director": {
			"source": "apache",
			"extensions": [
				"dir",
				"dcr",
				"dxr",
				"cst",
				"cct",
				"cxt",
				"w3d",
				"fgd",
				"swa"
			]
		},
		"application/x-doom": {
			"source": "apache",
			"extensions": [
				"wad"
			]
		},
		"application/x-dtbncx+xml": {
			"source": "apache",
			"extensions": [
				"ncx"
			]
		},
		"application/x-dtbook+xml": {
			"source": "apache",
			"extensions": [
				"dtb"
			]
		},
		"application/x-dtbresource+xml": {
			"source": "apache",
			"extensions": [
				"res"
			]
		},
		"application/x-dvi": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"dvi"
			]
		},
		"application/x-envoy": {
			"source": "apache",
			"extensions": [
				"evy"
			]
		},
		"application/x-eva": {
			"source": "apache",
			"extensions": [
				"eva"
			]
		},
		"application/x-font-bdf": {
			"source": "apache",
			"extensions": [
				"bdf"
			]
		},
		"application/x-font-dos": {
			"source": "apache"
		},
		"application/x-font-framemaker": {
			"source": "apache"
		},
		"application/x-font-ghostscript": {
			"source": "apache",
			"extensions": [
				"gsf"
			]
		},
		"application/x-font-libgrx": {
			"source": "apache"
		},
		"application/x-font-linux-psf": {
			"source": "apache",
			"extensions": [
				"psf"
			]
		},
		"application/x-font-otf": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"otf"
			]
		},
		"application/x-font-pcf": {
			"source": "apache",
			"extensions": [
				"pcf"
			]
		},
		"application/x-font-snf": {
			"source": "apache",
			"extensions": [
				"snf"
			]
		},
		"application/x-font-speedo": {
			"source": "apache"
		},
		"application/x-font-sunos-news": {
			"source": "apache"
		},
		"application/x-font-ttf": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"ttf",
				"ttc"
			]
		},
		"application/x-font-type1": {
			"source": "apache",
			"extensions": [
				"pfa",
				"pfb",
				"pfm",
				"afm"
			]
		},
		"application/x-font-vfont": {
			"source": "apache"
		},
		"application/x-freearc": {
			"source": "apache",
			"extensions": [
				"arc"
			]
		},
		"application/x-futuresplash": {
			"source": "apache",
			"extensions": [
				"spl"
			]
		},
		"application/x-gca-compressed": {
			"source": "apache",
			"extensions": [
				"gca"
			]
		},
		"application/x-glulx": {
			"source": "apache",
			"extensions": [
				"ulx"
			]
		},
		"application/x-gnumeric": {
			"source": "apache",
			"extensions": [
				"gnumeric"
			]
		},
		"application/x-gramps-xml": {
			"source": "apache",
			"extensions": [
				"gramps"
			]
		},
		"application/x-gtar": {
			"source": "apache",
			"extensions": [
				"gtar"
			]
		},
		"application/x-gzip": {
			"source": "apache"
		},
		"application/x-hdf": {
			"source": "apache",
			"extensions": [
				"hdf"
			]
		},
		"application/x-httpd-php": {
			"compressible": true,
			"extensions": [
				"php"
			]
		},
		"application/x-install-instructions": {
			"source": "apache",
			"extensions": [
				"install"
			]
		},
		"application/x-iso9660-image": {
			"source": "apache",
			"extensions": [
				"iso"
			]
		},
		"application/x-java-archive-diff": {
			"source": "nginx",
			"extensions": [
				"jardiff"
			]
		},
		"application/x-java-jnlp-file": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"jnlp"
			]
		},
		"application/x-javascript": {
			"compressible": true
		},
		"application/x-latex": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"latex"
			]
		},
		"application/x-lua-bytecode": {
			"extensions": [
				"luac"
			]
		},
		"application/x-lzh-compressed": {
			"source": "apache",
			"extensions": [
				"lzh",
				"lha"
			]
		},
		"application/x-makeself": {
			"source": "nginx",
			"extensions": [
				"run"
			]
		},
		"application/x-mie": {
			"source": "apache",
			"extensions": [
				"mie"
			]
		},
		"application/x-mobipocket-ebook": {
			"source": "apache",
			"extensions": [
				"prc",
				"mobi"
			]
		},
		"application/x-mpegurl": {
			"compressible": false
		},
		"application/x-ms-application": {
			"source": "apache",
			"extensions": [
				"application"
			]
		},
		"application/x-ms-shortcut": {
			"source": "apache",
			"extensions": [
				"lnk"
			]
		},
		"application/x-ms-wmd": {
			"source": "apache",
			"extensions": [
				"wmd"
			]
		},
		"application/x-ms-wmz": {
			"source": "apache",
			"extensions": [
				"wmz"
			]
		},
		"application/x-ms-xbap": {
			"source": "apache",
			"extensions": [
				"xbap"
			]
		},
		"application/x-msaccess": {
			"source": "apache",
			"extensions": [
				"mdb"
			]
		},
		"application/x-msbinder": {
			"source": "apache",
			"extensions": [
				"obd"
			]
		},
		"application/x-mscardfile": {
			"source": "apache",
			"extensions": [
				"crd"
			]
		},
		"application/x-msclip": {
			"source": "apache",
			"extensions": [
				"clp"
			]
		},
		"application/x-msdos-program": {
			"extensions": [
				"exe"
			]
		},
		"application/x-msdownload": {
			"source": "apache",
			"extensions": [
				"exe",
				"dll",
				"com",
				"bat",
				"msi"
			]
		},
		"application/x-msmediaview": {
			"source": "apache",
			"extensions": [
				"mvb",
				"m13",
				"m14"
			]
		},
		"application/x-msmetafile": {
			"source": "apache",
			"extensions": [
				"wmf",
				"wmz",
				"emf",
				"emz"
			]
		},
		"application/x-msmoney": {
			"source": "apache",
			"extensions": [
				"mny"
			]
		},
		"application/x-mspublisher": {
			"source": "apache",
			"extensions": [
				"pub"
			]
		},
		"application/x-msschedule": {
			"source": "apache",
			"extensions": [
				"scd"
			]
		},
		"application/x-msterminal": {
			"source": "apache",
			"extensions": [
				"trm"
			]
		},
		"application/x-mswrite": {
			"source": "apache",
			"extensions": [
				"wri"
			]
		},
		"application/x-netcdf": {
			"source": "apache",
			"extensions": [
				"nc",
				"cdf"
			]
		},
		"application/x-ns-proxy-autoconfig": {
			"compressible": true,
			"extensions": [
				"pac"
			]
		},
		"application/x-nzb": {
			"source": "apache",
			"extensions": [
				"nzb"
			]
		},
		"application/x-perl": {
			"source": "nginx",
			"extensions": [
				"pl",
				"pm"
			]
		},
		"application/x-pilot": {
			"source": "nginx",
			"extensions": [
				"prc",
				"pdb"
			]
		},
		"application/x-pkcs12": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"p12",
				"pfx"
			]
		},
		"application/x-pkcs7-certificates": {
			"source": "apache",
			"extensions": [
				"p7b",
				"spc"
			]
		},
		"application/x-pkcs7-certreqresp": {
			"source": "apache",
			"extensions": [
				"p7r"
			]
		},
		"application/x-rar-compressed": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"rar"
			]
		},
		"application/x-redhat-package-manager": {
			"source": "nginx",
			"extensions": [
				"rpm"
			]
		},
		"application/x-research-info-systems": {
			"source": "apache",
			"extensions": [
				"ris"
			]
		},
		"application/x-sea": {
			"source": "nginx",
			"extensions": [
				"sea"
			]
		},
		"application/x-sh": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"sh"
			]
		},
		"application/x-shar": {
			"source": "apache",
			"extensions": [
				"shar"
			]
		},
		"application/x-shockwave-flash": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"swf"
			]
		},
		"application/x-silverlight-app": {
			"source": "apache",
			"extensions": [
				"xap"
			]
		},
		"application/x-sql": {
			"source": "apache",
			"extensions": [
				"sql"
			]
		},
		"application/x-stuffit": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"sit"
			]
		},
		"application/x-stuffitx": {
			"source": "apache",
			"extensions": [
				"sitx"
			]
		},
		"application/x-subrip": {
			"source": "apache",
			"extensions": [
				"srt"
			]
		},
		"application/x-sv4cpio": {
			"source": "apache",
			"extensions": [
				"sv4cpio"
			]
		},
		"application/x-sv4crc": {
			"source": "apache",
			"extensions": [
				"sv4crc"
			]
		},
		"application/x-t3vm-image": {
			"source": "apache",
			"extensions": [
				"t3"
			]
		},
		"application/x-tads": {
			"source": "apache",
			"extensions": [
				"gam"
			]
		},
		"application/x-tar": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"tar"
			]
		},
		"application/x-tcl": {
			"source": "apache",
			"extensions": [
				"tcl",
				"tk"
			]
		},
		"application/x-tex": {
			"source": "apache",
			"extensions": [
				"tex"
			]
		},
		"application/x-tex-tfm": {
			"source": "apache",
			"extensions": [
				"tfm"
			]
		},
		"application/x-texinfo": {
			"source": "apache",
			"extensions": [
				"texinfo",
				"texi"
			]
		},
		"application/x-tgif": {
			"source": "apache",
			"extensions": [
				"obj"
			]
		},
		"application/x-ustar": {
			"source": "apache",
			"extensions": [
				"ustar"
			]
		},
		"application/x-wais-source": {
			"source": "apache",
			"extensions": [
				"src"
			]
		},
		"application/x-web-app-manifest+json": {
			"compressible": true,
			"extensions": [
				"webapp"
			]
		},
		"application/x-www-form-urlencoded": {
			"source": "iana",
			"compressible": true
		},
		"application/x-x509-ca-cert": {
			"source": "apache",
			"extensions": [
				"der",
				"crt",
				"pem"
			]
		},
		"application/x-xfig": {
			"source": "apache",
			"extensions": [
				"fig"
			]
		},
		"application/x-xliff+xml": {
			"source": "apache",
			"extensions": [
				"xlf"
			]
		},
		"application/x-xpinstall": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"xpi"
			]
		},
		"application/x-xz": {
			"source": "apache",
			"extensions": [
				"xz"
			]
		},
		"application/x-zmachine": {
			"source": "apache",
			"extensions": [
				"z1",
				"z2",
				"z3",
				"z4",
				"z5",
				"z6",
				"z7",
				"z8"
			]
		},
		"application/x400-bp": {
			"source": "iana"
		},
		"application/xacml+xml": {
			"source": "iana"
		},
		"application/xaml+xml": {
			"source": "apache",
			"extensions": [
				"xaml"
			]
		},
		"application/xcap-att+xml": {
			"source": "iana"
		},
		"application/xcap-caps+xml": {
			"source": "iana"
		},
		"application/xcap-diff+xml": {
			"source": "iana",
			"extensions": [
				"xdf"
			]
		},
		"application/xcap-el+xml": {
			"source": "iana"
		},
		"application/xcap-error+xml": {
			"source": "iana"
		},
		"application/xcap-ns+xml": {
			"source": "iana"
		},
		"application/xcon-conference-info+xml": {
			"source": "iana"
		},
		"application/xcon-conference-info-diff+xml": {
			"source": "iana"
		},
		"application/xenc+xml": {
			"source": "iana",
			"extensions": [
				"xenc"
			]
		},
		"application/xhtml+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"xhtml",
				"xht"
			]
		},
		"application/xhtml-voice+xml": {
			"source": "apache"
		},
		"application/xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"xml",
				"xsl",
				"xsd",
				"rng"
			]
		},
		"application/xml-dtd": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"dtd"
			]
		},
		"application/xml-external-parsed-entity": {
			"source": "iana"
		},
		"application/xml-patch+xml": {
			"source": "iana"
		},
		"application/xmpp+xml": {
			"source": "iana"
		},
		"application/xop+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"xop"
			]
		},
		"application/xproc+xml": {
			"source": "apache",
			"extensions": [
				"xpl"
			]
		},
		"application/xslt+xml": {
			"source": "iana",
			"extensions": [
				"xslt"
			]
		},
		"application/xspf+xml": {
			"source": "apache",
			"extensions": [
				"xspf"
			]
		},
		"application/xv+xml": {
			"source": "iana",
			"extensions": [
				"mxml",
				"xhvml",
				"xvml",
				"xvm"
			]
		},
		"application/yang": {
			"source": "iana",
			"extensions": [
				"yang"
			]
		},
		"application/yin+xml": {
			"source": "iana",
			"extensions": [
				"yin"
			]
		},
		"application/zip": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"zip"
			]
		},
		"application/zlib": {
			"source": "iana"
		},
		"audio/1d-interleaved-parityfec": {
			"source": "iana"
		},
		"audio/32kadpcm": {
			"source": "iana"
		},
		"audio/3gpp": {
			"source": "iana"
		},
		"audio/3gpp2": {
			"source": "iana"
		},
		"audio/ac3": {
			"source": "iana"
		},
		"audio/adpcm": {
			"source": "apache",
			"extensions": [
				"adp"
			]
		},
		"audio/amr": {
			"source": "iana"
		},
		"audio/amr-wb": {
			"source": "iana"
		},
		"audio/amr-wb+": {
			"source": "iana"
		},
		"audio/aptx": {
			"source": "iana"
		},
		"audio/asc": {
			"source": "iana"
		},
		"audio/atrac-advanced-lossless": {
			"source": "iana"
		},
		"audio/atrac-x": {
			"source": "iana"
		},
		"audio/atrac3": {
			"source": "iana"
		},
		"audio/basic": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"au",
				"snd"
			]
		},
		"audio/bv16": {
			"source": "iana"
		},
		"audio/bv32": {
			"source": "iana"
		},
		"audio/clearmode": {
			"source": "iana"
		},
		"audio/cn": {
			"source": "iana"
		},
		"audio/dat12": {
			"source": "iana"
		},
		"audio/dls": {
			"source": "iana"
		},
		"audio/dsr-es201108": {
			"source": "iana"
		},
		"audio/dsr-es202050": {
			"source": "iana"
		},
		"audio/dsr-es202211": {
			"source": "iana"
		},
		"audio/dsr-es202212": {
			"source": "iana"
		},
		"audio/dv": {
			"source": "iana"
		},
		"audio/dvi4": {
			"source": "iana"
		},
		"audio/eac3": {
			"source": "iana"
		},
		"audio/encaprtp": {
			"source": "iana"
		},
		"audio/evrc": {
			"source": "iana"
		},
		"audio/evrc-qcp": {
			"source": "iana"
		},
		"audio/evrc0": {
			"source": "iana"
		},
		"audio/evrc1": {
			"source": "iana"
		},
		"audio/evrcb": {
			"source": "iana"
		},
		"audio/evrcb0": {
			"source": "iana"
		},
		"audio/evrcb1": {
			"source": "iana"
		},
		"audio/evrcnw": {
			"source": "iana"
		},
		"audio/evrcnw0": {
			"source": "iana"
		},
		"audio/evrcnw1": {
			"source": "iana"
		},
		"audio/evrcwb": {
			"source": "iana"
		},
		"audio/evrcwb0": {
			"source": "iana"
		},
		"audio/evrcwb1": {
			"source": "iana"
		},
		"audio/evs": {
			"source": "iana"
		},
		"audio/fwdred": {
			"source": "iana"
		},
		"audio/g711-0": {
			"source": "iana"
		},
		"audio/g719": {
			"source": "iana"
		},
		"audio/g722": {
			"source": "iana"
		},
		"audio/g7221": {
			"source": "iana"
		},
		"audio/g723": {
			"source": "iana"
		},
		"audio/g726-16": {
			"source": "iana"
		},
		"audio/g726-24": {
			"source": "iana"
		},
		"audio/g726-32": {
			"source": "iana"
		},
		"audio/g726-40": {
			"source": "iana"
		},
		"audio/g728": {
			"source": "iana"
		},
		"audio/g729": {
			"source": "iana"
		},
		"audio/g7291": {
			"source": "iana"
		},
		"audio/g729d": {
			"source": "iana"
		},
		"audio/g729e": {
			"source": "iana"
		},
		"audio/gsm": {
			"source": "iana"
		},
		"audio/gsm-efr": {
			"source": "iana"
		},
		"audio/gsm-hr-08": {
			"source": "iana"
		},
		"audio/ilbc": {
			"source": "iana"
		},
		"audio/ip-mr_v2.5": {
			"source": "iana"
		},
		"audio/isac": {
			"source": "apache"
		},
		"audio/l16": {
			"source": "iana"
		},
		"audio/l20": {
			"source": "iana"
		},
		"audio/l24": {
			"source": "iana",
			"compressible": false
		},
		"audio/l8": {
			"source": "iana"
		},
		"audio/lpc": {
			"source": "iana"
		},
		"audio/midi": {
			"source": "apache",
			"extensions": [
				"mid",
				"midi",
				"kar",
				"rmi"
			]
		},
		"audio/mobile-xmf": {
			"source": "iana"
		},
		"audio/mp4": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"m4a",
				"mp4a"
			]
		},
		"audio/mp4a-latm": {
			"source": "iana"
		},
		"audio/mpa": {
			"source": "iana"
		},
		"audio/mpa-robust": {
			"source": "iana"
		},
		"audio/mpeg": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"mpga",
				"mp2",
				"mp2a",
				"mp3",
				"m2a",
				"m3a"
			]
		},
		"audio/mpeg4-generic": {
			"source": "iana"
		},
		"audio/musepack": {
			"source": "apache"
		},
		"audio/ogg": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"oga",
				"ogg",
				"spx"
			]
		},
		"audio/opus": {
			"source": "iana"
		},
		"audio/parityfec": {
			"source": "iana"
		},
		"audio/pcma": {
			"source": "iana"
		},
		"audio/pcma-wb": {
			"source": "iana"
		},
		"audio/pcmu": {
			"source": "iana"
		},
		"audio/pcmu-wb": {
			"source": "iana"
		},
		"audio/prs.sid": {
			"source": "iana"
		},
		"audio/qcelp": {
			"source": "iana"
		},
		"audio/raptorfec": {
			"source": "iana"
		},
		"audio/red": {
			"source": "iana"
		},
		"audio/rtp-enc-aescm128": {
			"source": "iana"
		},
		"audio/rtp-midi": {
			"source": "iana"
		},
		"audio/rtploopback": {
			"source": "iana"
		},
		"audio/rtx": {
			"source": "iana"
		},
		"audio/s3m": {
			"source": "apache",
			"extensions": [
				"s3m"
			]
		},
		"audio/silk": {
			"source": "apache",
			"extensions": [
				"sil"
			]
		},
		"audio/smv": {
			"source": "iana"
		},
		"audio/smv-qcp": {
			"source": "iana"
		},
		"audio/smv0": {
			"source": "iana"
		},
		"audio/sp-midi": {
			"source": "iana"
		},
		"audio/speex": {
			"source": "iana"
		},
		"audio/t140c": {
			"source": "iana"
		},
		"audio/t38": {
			"source": "iana"
		},
		"audio/telephone-event": {
			"source": "iana"
		},
		"audio/tone": {
			"source": "iana"
		},
		"audio/uemclip": {
			"source": "iana"
		},
		"audio/ulpfec": {
			"source": "iana"
		},
		"audio/vdvi": {
			"source": "iana"
		},
		"audio/vmr-wb": {
			"source": "iana"
		},
		"audio/vnd.3gpp.iufp": {
			"source": "iana"
		},
		"audio/vnd.4sb": {
			"source": "iana"
		},
		"audio/vnd.audiokoz": {
			"source": "iana"
		},
		"audio/vnd.celp": {
			"source": "iana"
		},
		"audio/vnd.cisco.nse": {
			"source": "iana"
		},
		"audio/vnd.cmles.radio-events": {
			"source": "iana"
		},
		"audio/vnd.cns.anp1": {
			"source": "iana"
		},
		"audio/vnd.cns.inf1": {
			"source": "iana"
		},
		"audio/vnd.dece.audio": {
			"source": "iana",
			"extensions": [
				"uva",
				"uvva"
			]
		},
		"audio/vnd.digital-winds": {
			"source": "iana",
			"extensions": [
				"eol"
			]
		},
		"audio/vnd.dlna.adts": {
			"source": "iana"
		},
		"audio/vnd.dolby.heaac.1": {
			"source": "iana"
		},
		"audio/vnd.dolby.heaac.2": {
			"source": "iana"
		},
		"audio/vnd.dolby.mlp": {
			"source": "iana"
		},
		"audio/vnd.dolby.mps": {
			"source": "iana"
		},
		"audio/vnd.dolby.pl2": {
			"source": "iana"
		},
		"audio/vnd.dolby.pl2x": {
			"source": "iana"
		},
		"audio/vnd.dolby.pl2z": {
			"source": "iana"
		},
		"audio/vnd.dolby.pulse.1": {
			"source": "iana"
		},
		"audio/vnd.dra": {
			"source": "iana",
			"extensions": [
				"dra"
			]
		},
		"audio/vnd.dts": {
			"source": "iana",
			"extensions": [
				"dts"
			]
		},
		"audio/vnd.dts.hd": {
			"source": "iana",
			"extensions": [
				"dtshd"
			]
		},
		"audio/vnd.dvb.file": {
			"source": "iana"
		},
		"audio/vnd.everad.plj": {
			"source": "iana"
		},
		"audio/vnd.hns.audio": {
			"source": "iana"
		},
		"audio/vnd.lucent.voice": {
			"source": "iana",
			"extensions": [
				"lvp"
			]
		},
		"audio/vnd.ms-playready.media.pya": {
			"source": "iana",
			"extensions": [
				"pya"
			]
		},
		"audio/vnd.nokia.mobile-xmf": {
			"source": "iana"
		},
		"audio/vnd.nortel.vbk": {
			"source": "iana"
		},
		"audio/vnd.nuera.ecelp4800": {
			"source": "iana",
			"extensions": [
				"ecelp4800"
			]
		},
		"audio/vnd.nuera.ecelp7470": {
			"source": "iana",
			"extensions": [
				"ecelp7470"
			]
		},
		"audio/vnd.nuera.ecelp9600": {
			"source": "iana",
			"extensions": [
				"ecelp9600"
			]
		},
		"audio/vnd.octel.sbc": {
			"source": "iana"
		},
		"audio/vnd.qcelp": {
			"source": "iana"
		},
		"audio/vnd.rhetorex.32kadpcm": {
			"source": "iana"
		},
		"audio/vnd.rip": {
			"source": "iana",
			"extensions": [
				"rip"
			]
		},
		"audio/vnd.rn-realaudio": {
			"compressible": false
		},
		"audio/vnd.sealedmedia.softseal.mpeg": {
			"source": "iana"
		},
		"audio/vnd.vmx.cvsd": {
			"source": "iana"
		},
		"audio/vnd.wave": {
			"compressible": false
		},
		"audio/vorbis": {
			"source": "iana",
			"compressible": false
		},
		"audio/vorbis-config": {
			"source": "iana"
		},
		"audio/wav": {
			"compressible": false,
			"extensions": [
				"wav"
			]
		},
		"audio/wave": {
			"compressible": false,
			"extensions": [
				"wav"
			]
		},
		"audio/webm": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"weba"
			]
		},
		"audio/x-aac": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"aac"
			]
		},
		"audio/x-aiff": {
			"source": "apache",
			"extensions": [
				"aif",
				"aiff",
				"aifc"
			]
		},
		"audio/x-caf": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"caf"
			]
		},
		"audio/x-flac": {
			"source": "apache",
			"extensions": [
				"flac"
			]
		},
		"audio/x-m4a": {
			"source": "nginx",
			"extensions": [
				"m4a"
			]
		},
		"audio/x-matroska": {
			"source": "apache",
			"extensions": [
				"mka"
			]
		},
		"audio/x-mpegurl": {
			"source": "apache",
			"extensions": [
				"m3u"
			]
		},
		"audio/x-ms-wax": {
			"source": "apache",
			"extensions": [
				"wax"
			]
		},
		"audio/x-ms-wma": {
			"source": "apache",
			"extensions": [
				"wma"
			]
		},
		"audio/x-pn-realaudio": {
			"source": "apache",
			"extensions": [
				"ram",
				"ra"
			]
		},
		"audio/x-pn-realaudio-plugin": {
			"source": "apache",
			"extensions": [
				"rmp"
			]
		},
		"audio/x-realaudio": {
			"source": "nginx",
			"extensions": [
				"ra"
			]
		},
		"audio/x-tta": {
			"source": "apache"
		},
		"audio/x-wav": {
			"source": "apache",
			"extensions": [
				"wav"
			]
		},
		"audio/xm": {
			"source": "apache",
			"extensions": [
				"xm"
			]
		},
		"chemical/x-cdx": {
			"source": "apache",
			"extensions": [
				"cdx"
			]
		},
		"chemical/x-cif": {
			"source": "apache",
			"extensions": [
				"cif"
			]
		},
		"chemical/x-cmdf": {
			"source": "apache",
			"extensions": [
				"cmdf"
			]
		},
		"chemical/x-cml": {
			"source": "apache",
			"extensions": [
				"cml"
			]
		},
		"chemical/x-csml": {
			"source": "apache",
			"extensions": [
				"csml"
			]
		},
		"chemical/x-pdb": {
			"source": "apache"
		},
		"chemical/x-xyz": {
			"source": "apache",
			"extensions": [
				"xyz"
			]
		},
		"font/opentype": {
			"compressible": true,
			"extensions": [
				"otf"
			]
		},
		"image/bmp": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"bmp"
			]
		},
		"image/cgm": {
			"source": "iana",
			"extensions": [
				"cgm"
			]
		},
		"image/fits": {
			"source": "iana"
		},
		"image/g3fax": {
			"source": "iana",
			"extensions": [
				"g3"
			]
		},
		"image/gif": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"gif"
			]
		},
		"image/ief": {
			"source": "iana",
			"extensions": [
				"ief"
			]
		},
		"image/jp2": {
			"source": "iana"
		},
		"image/jpeg": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"jpeg",
				"jpg",
				"jpe"
			]
		},
		"image/jpm": {
			"source": "iana"
		},
		"image/jpx": {
			"source": "iana"
		},
		"image/ktx": {
			"source": "iana",
			"extensions": [
				"ktx"
			]
		},
		"image/naplps": {
			"source": "iana"
		},
		"image/pjpeg": {
			"compressible": false
		},
		"image/png": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"png"
			]
		},
		"image/prs.btif": {
			"source": "iana",
			"extensions": [
				"btif"
			]
		},
		"image/prs.pti": {
			"source": "iana"
		},
		"image/pwg-raster": {
			"source": "iana"
		},
		"image/sgi": {
			"source": "apache",
			"extensions": [
				"sgi"
			]
		},
		"image/svg+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"svg",
				"svgz"
			]
		},
		"image/t38": {
			"source": "iana"
		},
		"image/tiff": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"tiff",
				"tif"
			]
		},
		"image/tiff-fx": {
			"source": "iana"
		},
		"image/vnd.adobe.photoshop": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"psd"
			]
		},
		"image/vnd.airzip.accelerator.azv": {
			"source": "iana"
		},
		"image/vnd.cns.inf2": {
			"source": "iana"
		},
		"image/vnd.dece.graphic": {
			"source": "iana",
			"extensions": [
				"uvi",
				"uvvi",
				"uvg",
				"uvvg"
			]
		},
		"image/vnd.djvu": {
			"source": "iana",
			"extensions": [
				"djvu",
				"djv"
			]
		},
		"image/vnd.dvb.subtitle": {
			"source": "iana",
			"extensions": [
				"sub"
			]
		},
		"image/vnd.dwg": {
			"source": "iana",
			"extensions": [
				"dwg"
			]
		},
		"image/vnd.dxf": {
			"source": "iana",
			"extensions": [
				"dxf"
			]
		},
		"image/vnd.fastbidsheet": {
			"source": "iana",
			"extensions": [
				"fbs"
			]
		},
		"image/vnd.fpx": {
			"source": "iana",
			"extensions": [
				"fpx"
			]
		},
		"image/vnd.fst": {
			"source": "iana",
			"extensions": [
				"fst"
			]
		},
		"image/vnd.fujixerox.edmics-mmr": {
			"source": "iana",
			"extensions": [
				"mmr"
			]
		},
		"image/vnd.fujixerox.edmics-rlc": {
			"source": "iana",
			"extensions": [
				"rlc"
			]
		},
		"image/vnd.globalgraphics.pgb": {
			"source": "iana"
		},
		"image/vnd.microsoft.icon": {
			"source": "iana"
		},
		"image/vnd.mix": {
			"source": "iana"
		},
		"image/vnd.mozilla.apng": {
			"source": "iana"
		},
		"image/vnd.ms-modi": {
			"source": "iana",
			"extensions": [
				"mdi"
			]
		},
		"image/vnd.ms-photo": {
			"source": "apache",
			"extensions": [
				"wdp"
			]
		},
		"image/vnd.net-fpx": {
			"source": "iana",
			"extensions": [
				"npx"
			]
		},
		"image/vnd.radiance": {
			"source": "iana"
		},
		"image/vnd.sealed.png": {
			"source": "iana"
		},
		"image/vnd.sealedmedia.softseal.gif": {
			"source": "iana"
		},
		"image/vnd.sealedmedia.softseal.jpg": {
			"source": "iana"
		},
		"image/vnd.svf": {
			"source": "iana"
		},
		"image/vnd.tencent.tap": {
			"source": "iana"
		},
		"image/vnd.valve.source.texture": {
			"source": "iana"
		},
		"image/vnd.wap.wbmp": {
			"source": "iana",
			"extensions": [
				"wbmp"
			]
		},
		"image/vnd.xiff": {
			"source": "iana",
			"extensions": [
				"xif"
			]
		},
		"image/vnd.zbrush.pcx": {
			"source": "iana"
		},
		"image/webp": {
			"source": "apache",
			"extensions": [
				"webp"
			]
		},
		"image/x-3ds": {
			"source": "apache",
			"extensions": [
				"3ds"
			]
		},
		"image/x-cmu-raster": {
			"source": "apache",
			"extensions": [
				"ras"
			]
		},
		"image/x-cmx": {
			"source": "apache",
			"extensions": [
				"cmx"
			]
		},
		"image/x-freehand": {
			"source": "apache",
			"extensions": [
				"fh",
				"fhc",
				"fh4",
				"fh5",
				"fh7"
			]
		},
		"image/x-icon": {
			"source": "apache",
			"compressible": true,
			"extensions": [
				"ico"
			]
		},
		"image/x-jng": {
			"source": "nginx",
			"extensions": [
				"jng"
			]
		},
		"image/x-mrsid-image": {
			"source": "apache",
			"extensions": [
				"sid"
			]
		},
		"image/x-ms-bmp": {
			"source": "nginx",
			"compressible": true,
			"extensions": [
				"bmp"
			]
		},
		"image/x-pcx": {
			"source": "apache",
			"extensions": [
				"pcx"
			]
		},
		"image/x-pict": {
			"source": "apache",
			"extensions": [
				"pic",
				"pct"
			]
		},
		"image/x-portable-anymap": {
			"source": "apache",
			"extensions": [
				"pnm"
			]
		},
		"image/x-portable-bitmap": {
			"source": "apache",
			"extensions": [
				"pbm"
			]
		},
		"image/x-portable-graymap": {
			"source": "apache",
			"extensions": [
				"pgm"
			]
		},
		"image/x-portable-pixmap": {
			"source": "apache",
			"extensions": [
				"ppm"
			]
		},
		"image/x-rgb": {
			"source": "apache",
			"extensions": [
				"rgb"
			]
		},
		"image/x-tga": {
			"source": "apache",
			"extensions": [
				"tga"
			]
		},
		"image/x-xbitmap": {
			"source": "apache",
			"extensions": [
				"xbm"
			]
		},
		"image/x-xcf": {
			"compressible": false
		},
		"image/x-xpixmap": {
			"source": "apache",
			"extensions": [
				"xpm"
			]
		},
		"image/x-xwindowdump": {
			"source": "apache",
			"extensions": [
				"xwd"
			]
		},
		"message/cpim": {
			"source": "iana"
		},
		"message/delivery-status": {
			"source": "iana"
		},
		"message/disposition-notification": {
			"source": "iana"
		},
		"message/external-body": {
			"source": "iana"
		},
		"message/feedback-report": {
			"source": "iana"
		},
		"message/global": {
			"source": "iana"
		},
		"message/global-delivery-status": {
			"source": "iana"
		},
		"message/global-disposition-notification": {
			"source": "iana"
		},
		"message/global-headers": {
			"source": "iana"
		},
		"message/http": {
			"source": "iana",
			"compressible": false
		},
		"message/imdn+xml": {
			"source": "iana",
			"compressible": true
		},
		"message/news": {
			"source": "iana"
		},
		"message/partial": {
			"source": "iana",
			"compressible": false
		},
		"message/rfc822": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"eml",
				"mime"
			]
		},
		"message/s-http": {
			"source": "iana"
		},
		"message/sip": {
			"source": "iana"
		},
		"message/sipfrag": {
			"source": "iana"
		},
		"message/tracking-status": {
			"source": "iana"
		},
		"message/vnd.si.simp": {
			"source": "iana"
		},
		"message/vnd.wfa.wsc": {
			"source": "iana"
		},
		"model/iges": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"igs",
				"iges"
			]
		},
		"model/mesh": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"msh",
				"mesh",
				"silo"
			]
		},
		"model/vnd.collada+xml": {
			"source": "iana",
			"extensions": [
				"dae"
			]
		},
		"model/vnd.dwf": {
			"source": "iana",
			"extensions": [
				"dwf"
			]
		},
		"model/vnd.flatland.3dml": {
			"source": "iana"
		},
		"model/vnd.gdl": {
			"source": "iana",
			"extensions": [
				"gdl"
			]
		},
		"model/vnd.gs-gdl": {
			"source": "apache"
		},
		"model/vnd.gs.gdl": {
			"source": "iana"
		},
		"model/vnd.gtw": {
			"source": "iana",
			"extensions": [
				"gtw"
			]
		},
		"model/vnd.moml+xml": {
			"source": "iana"
		},
		"model/vnd.mts": {
			"source": "iana",
			"extensions": [
				"mts"
			]
		},
		"model/vnd.opengex": {
			"source": "iana"
		},
		"model/vnd.parasolid.transmit.binary": {
			"source": "iana"
		},
		"model/vnd.parasolid.transmit.text": {
			"source": "iana"
		},
		"model/vnd.rosette.annotated-data-model": {
			"source": "iana"
		},
		"model/vnd.valve.source.compiled-map": {
			"source": "iana"
		},
		"model/vnd.vtu": {
			"source": "iana",
			"extensions": [
				"vtu"
			]
		},
		"model/vrml": {
			"source": "iana",
			"compressible": false,
			"extensions": [
				"wrl",
				"vrml"
			]
		},
		"model/x3d+binary": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"x3db",
				"x3dbz"
			]
		},
		"model/x3d+fastinfoset": {
			"source": "iana"
		},
		"model/x3d+vrml": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"x3dv",
				"x3dvz"
			]
		},
		"model/x3d+xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"x3d",
				"x3dz"
			]
		},
		"model/x3d-vrml": {
			"source": "iana"
		},
		"multipart/alternative": {
			"source": "iana",
			"compressible": false
		},
		"multipart/appledouble": {
			"source": "iana"
		},
		"multipart/byteranges": {
			"source": "iana"
		},
		"multipart/digest": {
			"source": "iana"
		},
		"multipart/encrypted": {
			"source": "iana",
			"compressible": false
		},
		"multipart/form-data": {
			"source": "iana",
			"compressible": false
		},
		"multipart/header-set": {
			"source": "iana"
		},
		"multipart/mixed": {
			"source": "iana",
			"compressible": false
		},
		"multipart/parallel": {
			"source": "iana"
		},
		"multipart/related": {
			"source": "iana",
			"compressible": false
		},
		"multipart/report": {
			"source": "iana"
		},
		"multipart/signed": {
			"source": "iana",
			"compressible": false
		},
		"multipart/voice-message": {
			"source": "iana"
		},
		"multipart/x-mixed-replace": {
			"source": "iana"
		},
		"text/1d-interleaved-parityfec": {
			"source": "iana"
		},
		"text/cache-manifest": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"appcache",
				"manifest"
			]
		},
		"text/calendar": {
			"source": "iana",
			"extensions": [
				"ics",
				"ifb"
			]
		},
		"text/calender": {
			"compressible": true
		},
		"text/cmd": {
			"compressible": true
		},
		"text/coffeescript": {
			"extensions": [
				"coffee",
				"litcoffee"
			]
		},
		"text/css": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"css"
			]
		},
		"text/csv": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"csv"
			]
		},
		"text/csv-schema": {
			"source": "iana"
		},
		"text/directory": {
			"source": "iana"
		},
		"text/dns": {
			"source": "iana"
		},
		"text/ecmascript": {
			"source": "iana"
		},
		"text/encaprtp": {
			"source": "iana"
		},
		"text/enriched": {
			"source": "iana"
		},
		"text/fwdred": {
			"source": "iana"
		},
		"text/grammar-ref-list": {
			"source": "iana"
		},
		"text/hjson": {
			"extensions": [
				"hjson"
			]
		},
		"text/html": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"html",
				"htm",
				"shtml"
			]
		},
		"text/jade": {
			"extensions": [
				"jade"
			]
		},
		"text/javascript": {
			"source": "iana",
			"compressible": true
		},
		"text/jcr-cnd": {
			"source": "iana"
		},
		"text/jsx": {
			"compressible": true,
			"extensions": [
				"jsx"
			]
		},
		"text/less": {
			"extensions": [
				"less"
			]
		},
		"text/markdown": {
			"source": "iana"
		},
		"text/mathml": {
			"source": "nginx",
			"extensions": [
				"mml"
			]
		},
		"text/mizar": {
			"source": "iana"
		},
		"text/n3": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"n3"
			]
		},
		"text/parameters": {
			"source": "iana"
		},
		"text/parityfec": {
			"source": "iana"
		},
		"text/plain": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"txt",
				"text",
				"conf",
				"def",
				"list",
				"log",
				"in",
				"ini"
			]
		},
		"text/provenance-notation": {
			"source": "iana"
		},
		"text/prs.fallenstein.rst": {
			"source": "iana"
		},
		"text/prs.lines.tag": {
			"source": "iana",
			"extensions": [
				"dsc"
			]
		},
		"text/raptorfec": {
			"source": "iana"
		},
		"text/red": {
			"source": "iana"
		},
		"text/rfc822-headers": {
			"source": "iana"
		},
		"text/richtext": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"rtx"
			]
		},
		"text/rtf": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"rtf"
			]
		},
		"text/rtp-enc-aescm128": {
			"source": "iana"
		},
		"text/rtploopback": {
			"source": "iana"
		},
		"text/rtx": {
			"source": "iana"
		},
		"text/sgml": {
			"source": "iana",
			"extensions": [
				"sgml",
				"sgm"
			]
		},
		"text/slim": {
			"extensions": [
				"slim",
				"slm"
			]
		},
		"text/stylus": {
			"extensions": [
				"stylus",
				"styl"
			]
		},
		"text/t140": {
			"source": "iana"
		},
		"text/tab-separated-values": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"tsv"
			]
		},
		"text/troff": {
			"source": "iana",
			"extensions": [
				"t",
				"tr",
				"roff",
				"man",
				"me",
				"ms"
			]
		},
		"text/turtle": {
			"source": "iana",
			"extensions": [
				"ttl"
			]
		},
		"text/ulpfec": {
			"source": "iana"
		},
		"text/uri-list": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"uri",
				"uris",
				"urls"
			]
		},
		"text/vcard": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"vcard"
			]
		},
		"text/vnd.a": {
			"source": "iana"
		},
		"text/vnd.abc": {
			"source": "iana"
		},
		"text/vnd.curl": {
			"source": "iana",
			"extensions": [
				"curl"
			]
		},
		"text/vnd.curl.dcurl": {
			"source": "apache",
			"extensions": [
				"dcurl"
			]
		},
		"text/vnd.curl.mcurl": {
			"source": "apache",
			"extensions": [
				"mcurl"
			]
		},
		"text/vnd.curl.scurl": {
			"source": "apache",
			"extensions": [
				"scurl"
			]
		},
		"text/vnd.debian.copyright": {
			"source": "iana"
		},
		"text/vnd.dmclientscript": {
			"source": "iana"
		},
		"text/vnd.dvb.subtitle": {
			"source": "iana",
			"extensions": [
				"sub"
			]
		},
		"text/vnd.esmertec.theme-descriptor": {
			"source": "iana"
		},
		"text/vnd.fly": {
			"source": "iana",
			"extensions": [
				"fly"
			]
		},
		"text/vnd.fmi.flexstor": {
			"source": "iana",
			"extensions": [
				"flx"
			]
		},
		"text/vnd.graphviz": {
			"source": "iana",
			"extensions": [
				"gv"
			]
		},
		"text/vnd.in3d.3dml": {
			"source": "iana",
			"extensions": [
				"3dml"
			]
		},
		"text/vnd.in3d.spot": {
			"source": "iana",
			"extensions": [
				"spot"
			]
		},
		"text/vnd.iptc.newsml": {
			"source": "iana"
		},
		"text/vnd.iptc.nitf": {
			"source": "iana"
		},
		"text/vnd.latex-z": {
			"source": "iana"
		},
		"text/vnd.motorola.reflex": {
			"source": "iana"
		},
		"text/vnd.ms-mediapackage": {
			"source": "iana"
		},
		"text/vnd.net2phone.commcenter.command": {
			"source": "iana"
		},
		"text/vnd.radisys.msml-basic-layout": {
			"source": "iana"
		},
		"text/vnd.si.uricatalogue": {
			"source": "iana"
		},
		"text/vnd.sun.j2me.app-descriptor": {
			"source": "iana",
			"extensions": [
				"jad"
			]
		},
		"text/vnd.trolltech.linguist": {
			"source": "iana"
		},
		"text/vnd.wap.si": {
			"source": "iana"
		},
		"text/vnd.wap.sl": {
			"source": "iana"
		},
		"text/vnd.wap.wml": {
			"source": "iana",
			"extensions": [
				"wml"
			]
		},
		"text/vnd.wap.wmlscript": {
			"source": "iana",
			"extensions": [
				"wmls"
			]
		},
		"text/vtt": {
			"charset": "UTF-8",
			"compressible": true,
			"extensions": [
				"vtt"
			]
		},
		"text/x-asm": {
			"source": "apache",
			"extensions": [
				"s",
				"asm"
			]
		},
		"text/x-c": {
			"source": "apache",
			"extensions": [
				"c",
				"cc",
				"cxx",
				"cpp",
				"h",
				"hh",
				"dic"
			]
		},
		"text/x-component": {
			"source": "nginx",
			"extensions": [
				"htc"
			]
		},
		"text/x-fortran": {
			"source": "apache",
			"extensions": [
				"f",
				"for",
				"f77",
				"f90"
			]
		},
		"text/x-gwt-rpc": {
			"compressible": true
		},
		"text/x-handlebars-template": {
			"extensions": [
				"hbs"
			]
		},
		"text/x-java-source": {
			"source": "apache",
			"extensions": [
				"java"
			]
		},
		"text/x-jquery-tmpl": {
			"compressible": true
		},
		"text/x-lua": {
			"extensions": [
				"lua"
			]
		},
		"text/x-markdown": {
			"compressible": true,
			"extensions": [
				"markdown",
				"md",
				"mkd"
			]
		},
		"text/x-nfo": {
			"source": "apache",
			"extensions": [
				"nfo"
			]
		},
		"text/x-opml": {
			"source": "apache",
			"extensions": [
				"opml"
			]
		},
		"text/x-pascal": {
			"source": "apache",
			"extensions": [
				"p",
				"pas"
			]
		},
		"text/x-processing": {
			"compressible": true,
			"extensions": [
				"pde"
			]
		},
		"text/x-sass": {
			"extensions": [
				"sass"
			]
		},
		"text/x-scss": {
			"extensions": [
				"scss"
			]
		},
		"text/x-setext": {
			"source": "apache",
			"extensions": [
				"etx"
			]
		},
		"text/x-sfv": {
			"source": "apache",
			"extensions": [
				"sfv"
			]
		},
		"text/x-suse-ymp": {
			"compressible": true,
			"extensions": [
				"ymp"
			]
		},
		"text/x-uuencode": {
			"source": "apache",
			"extensions": [
				"uu"
			]
		},
		"text/x-vcalendar": {
			"source": "apache",
			"extensions": [
				"vcs"
			]
		},
		"text/x-vcard": {
			"source": "apache",
			"extensions": [
				"vcf"
			]
		},
		"text/xml": {
			"source": "iana",
			"compressible": true,
			"extensions": [
				"xml"
			]
		},
		"text/xml-external-parsed-entity": {
			"source": "iana"
		},
		"text/yaml": {
			"extensions": [
				"yaml",
				"yml"
			]
		},
		"video/1d-interleaved-parityfec": {
			"source": "apache"
		},
		"video/3gpp": {
			"source": "apache",
			"extensions": [
				"3gp",
				"3gpp"
			]
		},
		"video/3gpp-tt": {
			"source": "apache"
		},
		"video/3gpp2": {
			"source": "apache",
			"extensions": [
				"3g2"
			]
		},
		"video/bmpeg": {
			"source": "apache"
		},
		"video/bt656": {
			"source": "apache"
		},
		"video/celb": {
			"source": "apache"
		},
		"video/dv": {
			"source": "apache"
		},
		"video/h261": {
			"source": "apache",
			"extensions": [
				"h261"
			]
		},
		"video/h263": {
			"source": "apache",
			"extensions": [
				"h263"
			]
		},
		"video/h263-1998": {
			"source": "apache"
		},
		"video/h263-2000": {
			"source": "apache"
		},
		"video/h264": {
			"source": "apache",
			"extensions": [
				"h264"
			]
		},
		"video/h264-rcdo": {
			"source": "apache"
		},
		"video/h264-svc": {
			"source": "apache"
		},
		"video/jpeg": {
			"source": "apache",
			"extensions": [
				"jpgv"
			]
		},
		"video/jpeg2000": {
			"source": "apache"
		},
		"video/jpm": {
			"source": "apache",
			"extensions": [
				"jpm",
				"jpgm"
			]
		},
		"video/mj2": {
			"source": "apache",
			"extensions": [
				"mj2",
				"mjp2"
			]
		},
		"video/mp1s": {
			"source": "apache"
		},
		"video/mp2p": {
			"source": "apache"
		},
		"video/mp2t": {
			"source": "apache",
			"extensions": [
				"ts"
			]
		},
		"video/mp4": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"mp4",
				"mp4v",
				"mpg4"
			]
		},
		"video/mp4v-es": {
			"source": "apache"
		},
		"video/mpeg": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"mpeg",
				"mpg",
				"mpe",
				"m1v",
				"m2v"
			]
		},
		"video/mpeg4-generic": {
			"source": "apache"
		},
		"video/mpv": {
			"source": "apache"
		},
		"video/nv": {
			"source": "apache"
		},
		"video/ogg": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"ogv"
			]
		},
		"video/parityfec": {
			"source": "apache"
		},
		"video/pointer": {
			"source": "apache"
		},
		"video/quicktime": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"qt",
				"mov"
			]
		},
		"video/raw": {
			"source": "apache"
		},
		"video/rtp-enc-aescm128": {
			"source": "apache"
		},
		"video/rtx": {
			"source": "apache"
		},
		"video/smpte292m": {
			"source": "apache"
		},
		"video/ulpfec": {
			"source": "apache"
		},
		"video/vc1": {
			"source": "apache"
		},
		"video/vnd.cctv": {
			"source": "apache"
		},
		"video/vnd.dece.hd": {
			"source": "apache",
			"extensions": [
				"uvh",
				"uvvh"
			]
		},
		"video/vnd.dece.mobile": {
			"source": "apache",
			"extensions": [
				"uvm",
				"uvvm"
			]
		},
		"video/vnd.dece.mp4": {
			"source": "apache"
		},
		"video/vnd.dece.pd": {
			"source": "apache",
			"extensions": [
				"uvp",
				"uvvp"
			]
		},
		"video/vnd.dece.sd": {
			"source": "apache",
			"extensions": [
				"uvs",
				"uvvs"
			]
		},
		"video/vnd.dece.video": {
			"source": "apache",
			"extensions": [
				"uvv",
				"uvvv"
			]
		},
		"video/vnd.directv.mpeg": {
			"source": "apache"
		},
		"video/vnd.directv.mpeg-tts": {
			"source": "apache"
		},
		"video/vnd.dlna.mpeg-tts": {
			"source": "apache"
		},
		"video/vnd.dvb.file": {
			"source": "apache",
			"extensions": [
				"dvb"
			]
		},
		"video/vnd.fvt": {
			"source": "apache",
			"extensions": [
				"fvt"
			]
		},
		"video/vnd.hns.video": {
			"source": "apache"
		},
		"video/vnd.iptvforum.1dparityfec-1010": {
			"source": "apache"
		},
		"video/vnd.iptvforum.1dparityfec-2005": {
			"source": "apache"
		},
		"video/vnd.iptvforum.2dparityfec-1010": {
			"source": "apache"
		},
		"video/vnd.iptvforum.2dparityfec-2005": {
			"source": "apache"
		},
		"video/vnd.iptvforum.ttsavc": {
			"source": "apache"
		},
		"video/vnd.iptvforum.ttsmpeg2": {
			"source": "apache"
		},
		"video/vnd.motorola.video": {
			"source": "apache"
		},
		"video/vnd.motorola.videop": {
			"source": "apache"
		},
		"video/vnd.mpegurl": {
			"source": "apache",
			"extensions": [
				"mxu",
				"m4u"
			]
		},
		"video/vnd.ms-playready.media.pyv": {
			"source": "apache",
			"extensions": [
				"pyv"
			]
		},
		"video/vnd.nokia.interleaved-multimedia": {
			"source": "apache"
		},
		"video/vnd.nokia.videovoip": {
			"source": "apache"
		},
		"video/vnd.objectvideo": {
			"source": "apache"
		},
		"video/vnd.sealed.mpeg1": {
			"source": "apache"
		},
		"video/vnd.sealed.mpeg4": {
			"source": "apache"
		},
		"video/vnd.sealed.swf": {
			"source": "apache"
		},
		"video/vnd.sealedmedia.softseal.mov": {
			"source": "apache"
		},
		"video/vnd.uvvu.mp4": {
			"source": "apache",
			"extensions": [
				"uvu",
				"uvvu"
			]
		},
		"video/vnd.vivo": {
			"source": "apache",
			"extensions": [
				"viv"
			]
		},
		"video/webm": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"webm"
			]
		},
		"video/x-f4v": {
			"source": "apache",
			"extensions": [
				"f4v"
			]
		},
		"video/x-fli": {
			"source": "apache",
			"extensions": [
				"fli"
			]
		},
		"video/x-flv": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"flv"
			]
		},
		"video/x-m4v": {
			"source": "apache",
			"extensions": [
				"m4v"
			]
		},
		"video/x-matroska": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"mkv",
				"mk3d",
				"mks"
			]
		},
		"video/x-mng": {
			"source": "apache",
			"extensions": [
				"mng"
			]
		},
		"video/x-ms-asf": {
			"source": "apache",
			"extensions": [
				"asf",
				"asx"
			]
		},
		"video/x-ms-vob": {
			"source": "apache",
			"extensions": [
				"vob"
			]
		},
		"video/x-ms-wm": {
			"source": "apache",
			"extensions": [
				"wm"
			]
		},
		"video/x-ms-wmv": {
			"source": "apache",
			"compressible": false,
			"extensions": [
				"wmv"
			]
		},
		"video/x-ms-wmx": {
			"source": "apache",
			"extensions": [
				"wmx"
			]
		},
		"video/x-ms-wvx": {
			"source": "apache",
			"extensions": [
				"wvx"
			]
		},
		"video/x-msvideo": {
			"source": "apache",
			"extensions": [
				"avi"
			]
		},
		"video/x-sgi-movie": {
			"source": "apache",
			"extensions": [
				"movie"
			]
		},
		"video/x-smv": {
			"source": "apache",
			"extensions": [
				"smv"
			]
		},
		"x-conference/x-cooltalk": {
			"source": "apache",
			"extensions": [
				"ice"
			]
		},
		"x-shader/x-fragment": {
			"compressible": true
		},
		"x-shader/x-vertex": {
			"compressible": true
		}
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = isJSON;

	/**
	 * Check if `body` should be interpreted as json.
	 */

	function isJSON(body) {
	  if (!body) return false;
	  if ('string' == typeof body) return false;
	  if ('function' == typeof body.pipe) return false;
	  if (Buffer.isBuffer(body)) return false;
	  return true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 45 */
/***/ function(module, exports) {

	/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module variables.
	 * @private
	 */

	var matchHtmlRegExp = /["'&<>]/;

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = escapeHtml;

	/**
	 * Escape special characters in the given string of html.
	 *
	 * @param  {string} string The string to escape for inserting into HTML
	 * @return {string}
	 * @public
	 */

	function escapeHtml(string) {
	  var str = '' + string;
	  var match = matchHtmlRegExp.exec(str);

	  if (!match) {
	    return str;
	  }

	  var escape;
	  var html = '';
	  var index = 0;
	  var lastIndex = 0;

	  for (index = match.index; index < str.length; index++) {
	    switch (str.charCodeAt(index)) {
	      case 34: // "
	        escape = '&quot;';
	        break;
	      case 38: // &
	        escape = '&amp;';
	        break;
	      case 39: // '
	        escape = '&#39;';
	        break;
	      case 60: // <
	        escape = '&lt;';
	        break;
	      case 62: // >
	        escape = '&gt;';
	        break;
	      default:
	        continue;
	    }

	    if (lastIndex !== index) {
	      html += str.substring(lastIndex, index);
	    }

	    lastIndex = index + 1;
	    html += escape;
	  }

	  return lastIndex !== index
	    ? html + str.substring(lastIndex, index)
	    : html;
	}


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * type-is
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module dependencies.
	 * @private
	 */

	var typer = __webpack_require__(47)
	var mime = __webpack_require__(41)

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = typeofrequest
	module.exports.is = typeis
	module.exports.hasBody = hasbody
	module.exports.normalize = normalize
	module.exports.match = mimeMatch

	/**
	 * Compare a `value` content-type with `types`.
	 * Each `type` can be an extension like `html`,
	 * a special shortcut like `multipart` or `urlencoded`,
	 * or a mime type.
	 *
	 * If no types match, `false` is returned.
	 * Otherwise, the first `type` that matches is returned.
	 *
	 * @param {String} value
	 * @param {Array} types
	 * @public
	 */

	function typeis(value, types_) {
	  var i
	  var types = types_

	  // remove parameters and normalize
	  var val = tryNormalizeType(value)

	  // no type or invalid
	  if (!val) {
	    return false
	  }

	  // support flattened arguments
	  if (types && !Array.isArray(types)) {
	    types = new Array(arguments.length - 1)
	    for (i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1]
	    }
	  }

	  // no types, return the content type
	  if (!types || !types.length) {
	    return val
	  }

	  var type
	  for (i = 0; i < types.length; i++) {
	    if (mimeMatch(normalize(type = types[i]), val)) {
	      return type[0] === '+' || type.indexOf('*') !== -1
	        ? val
	        : type
	    }
	  }

	  // no matches
	  return false
	}

	/**
	 * Check if a request has a request body.
	 * A request with a body __must__ either have `transfer-encoding`
	 * or `content-length` headers set.
	 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
	 *
	 * @param {Object} request
	 * @return {Boolean}
	 * @public
	 */

	function hasbody(req) {
	  return req.headers['transfer-encoding'] !== undefined
	    || !isNaN(req.headers['content-length'])
	}

	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains any of the give mime `type`s.
	 * If there is no request body, `null` is returned.
	 * If there is no content type, `false` is returned.
	 * Otherwise, it returns the first `type` that matches.
	 *
	 * Examples:
	 *
	 *     // With Content-Type: text/html; charset=utf-8
	 *     this.is('html'); // => 'html'
	 *     this.is('text/html'); // => 'text/html'
	 *     this.is('text/*', 'application/json'); // => 'text/html'
	 *
	 *     // When Content-Type is application/json
	 *     this.is('json', 'urlencoded'); // => 'json'
	 *     this.is('application/json'); // => 'application/json'
	 *     this.is('html', 'application/*'); // => 'application/json'
	 *
	 *     this.is('html'); // => false
	 *
	 * @param {String|Array} types...
	 * @return {String|false|null}
	 * @public
	 */

	function typeofrequest(req, types_) {
	  var types = types_

	  // no body
	  if (!hasbody(req)) {
	    return null
	  }

	  // support flattened arguments
	  if (arguments.length > 2) {
	    types = new Array(arguments.length - 1)
	    for (var i = 0; i < types.length; i++) {
	      types[i] = arguments[i + 1]
	    }
	  }

	  // request content type
	  var value = req.headers['content-type']

	  return typeis(value, types)
	}

	/**
	 * Normalize a mime type.
	 * If it's a shorthand, expand it to a valid mime type.
	 *
	 * In general, you probably want:
	 *
	 *   var type = is(req, ['urlencoded', 'json', 'multipart']);
	 *
	 * Then use the appropriate body parsers.
	 * These three are the most common request body types
	 * and are thus ensured to work.
	 *
	 * @param {String} type
	 * @private
	 */

	function normalize(type) {
	  if (typeof type !== 'string') {
	    // invalid type
	    return false
	  }

	  switch (type) {
	    case 'urlencoded':
	      return 'application/x-www-form-urlencoded'
	    case 'multipart':
	      return 'multipart/*'
	  }

	  if (type[0] === '+') {
	    // "+json" -> "*/*+json" expando
	    return '*/*' + type
	  }

	  return type.indexOf('/') === -1
	    ? mime.lookup(type)
	    : type
	}

	/**
	 * Check if `expected` mime type
	 * matches `actual` mime type with
	 * wildcard and +suffix support.
	 *
	 * @param {String} expected
	 * @param {String} actual
	 * @return {Boolean}
	 * @private
	 */

	function mimeMatch(expected, actual) {
	  // invalid type
	  if (expected === false) {
	    return false
	  }

	  // split types
	  var actualParts = actual.split('/')
	  var expectedParts = expected.split('/')

	  // invalid format
	  if (actualParts.length !== 2 || expectedParts.length !== 2) {
	    return false
	  }

	  // validate type
	  if (expectedParts[0] !== '*' && expectedParts[0] !== actualParts[0]) {
	    return false
	  }

	  // validate suffix wildcard
	  if (expectedParts[1].substr(0, 2) === '*+') {
	    return expectedParts[1].length <= actualParts[1].length + 1
	      && expectedParts[1].substr(1) === actualParts[1].substr(1 - expectedParts[1].length)
	  }

	  // validate subtype
	  if (expectedParts[1] !== '*' && expectedParts[1] !== actualParts[1]) {
	    return false
	  }

	  return true
	}

	/**
	 * Normalize a type and remove parameters.
	 *
	 * @param {string} value
	 * @return {string}
	 * @private
	 */

	function normalizeType(value) {
	  // parse the type
	  var type = typer.parse(value)

	  // remove the parameters
	  type.parameters = undefined

	  // reformat it
	  return typer.format(type)
	}

	/**
	 * Try to normalize a type and remove parameters.
	 *
	 * @param {string} value
	 * @return {string}
	 * @private
	 */

	function tryNormalizeType(value) {
	  try {
	    return normalizeType(value)
	  } catch (err) {
	    return null
	  }
	}


/***/ },
/* 47 */
/***/ function(module, exports) {

	/*!
	 * media-typer
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * RegExp to match *( ";" parameter ) in RFC 2616 sec 3.7
	 *
	 * parameter     = token "=" ( token | quoted-string )
	 * token         = 1*<any CHAR except CTLs or separators>
	 * separators    = "(" | ")" | "<" | ">" | "@"
	 *               | "," | ";" | ":" | "\" | <">
	 *               | "/" | "[" | "]" | "?" | "="
	 *               | "{" | "}" | SP | HT
	 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
	 * qdtext        = <any TEXT except <">>
	 * quoted-pair   = "\" CHAR
	 * CHAR          = <any US-ASCII character (octets 0 - 127)>
	 * TEXT          = <any OCTET except CTLs, but including LWS>
	 * LWS           = [CRLF] 1*( SP | HT )
	 * CRLF          = CR LF
	 * CR            = <US-ASCII CR, carriage return (13)>
	 * LF            = <US-ASCII LF, linefeed (10)>
	 * SP            = <US-ASCII SP, space (32)>
	 * SHT           = <US-ASCII HT, horizontal-tab (9)>
	 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
	 * OCTET         = <any 8-bit sequence of data>
	 */
	var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
	var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/
	var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/

	/**
	 * RegExp to match quoted-pair in RFC 2616
	 *
	 * quoted-pair = "\" CHAR
	 * CHAR        = <any US-ASCII character (octets 0 - 127)>
	 */
	var qescRegExp = /\\([\u0000-\u007f])/g;

	/**
	 * RegExp to match chars that must be quoted-pair in RFC 2616
	 */
	var quoteRegExp = /([\\"])/g;

	/**
	 * RegExp to match type in RFC 6838
	 *
	 * type-name = restricted-name
	 * subtype-name = restricted-name
	 * restricted-name = restricted-name-first *126restricted-name-chars
	 * restricted-name-first  = ALPHA / DIGIT
	 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
	 *                          "$" / "&" / "-" / "^" / "_"
	 * restricted-name-chars =/ "." ; Characters before first dot always
	 *                              ; specify a facet name
	 * restricted-name-chars =/ "+" ; Characters after last plus always
	 *                              ; specify a structured syntax suffix
	 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
	 * DIGIT =  %x30-39             ; 0-9
	 */
	var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/
	var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/
	var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;

	/**
	 * Module exports.
	 */

	exports.format = format
	exports.parse = parse

	/**
	 * Format object to media type.
	 *
	 * @param {object} obj
	 * @return {string}
	 * @api public
	 */

	function format(obj) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('argument obj is required')
	  }

	  var parameters = obj.parameters
	  var subtype = obj.subtype
	  var suffix = obj.suffix
	  var type = obj.type

	  if (!type || !typeNameRegExp.test(type)) {
	    throw new TypeError('invalid type')
	  }

	  if (!subtype || !subtypeNameRegExp.test(subtype)) {
	    throw new TypeError('invalid subtype')
	  }

	  // format as type/subtype
	  var string = type + '/' + subtype

	  // append +suffix
	  if (suffix) {
	    if (!typeNameRegExp.test(suffix)) {
	      throw new TypeError('invalid suffix')
	    }

	    string += '+' + suffix
	  }

	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param
	    var params = Object.keys(parameters).sort()

	    for (var i = 0; i < params.length; i++) {
	      param = params[i]

	      if (!tokenRegExp.test(param)) {
	        throw new TypeError('invalid parameter name')
	      }

	      string += '; ' + param + '=' + qstring(parameters[param])
	    }
	  }

	  return string
	}

	/**
	 * Parse media type to object.
	 *
	 * @param {string|object} string
	 * @return {Object}
	 * @api public
	 */

	function parse(string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }

	  // support req/res-like objects as argument
	  if (typeof string === 'object') {
	    string = getcontenttype(string)
	  }

	  if (typeof string !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }

	  var index = string.indexOf(';')
	  var type = index !== -1
	    ? string.substr(0, index)
	    : string

	  var key
	  var match
	  var obj = splitType(type)
	  var params = {}
	  var value

	  paramRegExp.lastIndex = index

	  while (match = paramRegExp.exec(string)) {
	    if (match.index !== index) {
	      throw new TypeError('invalid parameter format')
	    }

	    index += match[0].length
	    key = match[1].toLowerCase()
	    value = match[2]

	    if (value[0] === '"') {
	      // remove quotes and escapes
	      value = value
	        .substr(1, value.length - 2)
	        .replace(qescRegExp, '$1')
	    }

	    params[key] = value
	  }

	  if (index !== -1 && index !== string.length) {
	    throw new TypeError('invalid parameter format')
	  }

	  obj.parameters = params

	  return obj
	}

	/**
	 * Get content-type from req/res objects.
	 *
	 * @param {object}
	 * @return {Object}
	 * @api private
	 */

	function getcontenttype(obj) {
	  if (typeof obj.getHeader === 'function') {
	    // res-like
	    return obj.getHeader('content-type')
	  }

	  if (typeof obj.headers === 'object') {
	    // req-like
	    return obj.headers && obj.headers['content-type']
	  }
	}

	/**
	 * Quote a string if necessary.
	 *
	 * @param {string} val
	 * @return {string}
	 * @api private
	 */

	function qstring(val) {
	  var str = String(val)

	  // no need to quote tokens
	  if (tokenRegExp.test(str)) {
	    return str
	  }

	  if (str.length > 0 && !textRegExp.test(str)) {
	    throw new TypeError('invalid parameter value')
	  }

	  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
	}

	/**
	 * Simply "type/subtype+siffx" into parts.
	 *
	 * @param {string} string
	 * @return {Object}
	 * @api private
	 */

	function splitType(string) {
	  var match = typeRegExp.exec(string.toLowerCase())

	  if (!match) {
	    throw new TypeError('invalid media type')
	  }

	  var type = match[1]
	  var subtype = match[2]
	  var suffix

	  // suffix after last +
	  var index = subtype.lastIndexOf('+')
	  if (index !== -1) {
	    suffix = subtype.substr(index + 1)
	    subtype = subtype.substr(0, index)
	  }

	  var obj = {
	    type: type,
	    subtype: subtype,
	    suffix: suffix
	  }

	  return obj
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	
	var codes = __webpack_require__(49);

	module.exports = status;

	// [Integer...]
	status.codes = Object.keys(codes).map(function (code) {
	  code = ~~code;
	  var msg = codes[code];
	  status[code] = msg;
	  status[msg] = status[msg.toLowerCase()] = code;
	  return code;
	});

	// status codes for redirects
	status.redirect = {
	  300: true,
	  301: true,
	  302: true,
	  303: true,
	  305: true,
	  307: true,
	  308: true,
	};

	// status codes for empty bodies
	status.empty = {
	  204: true,
	  205: true,
	  304: true,
	};

	// status codes for when you should retry the request
	status.retry = {
	  502: true,
	  503: true,
	  504: true,
	};

	function status(code) {
	  if (typeof code === 'number') {
	    if (!status[code]) throw new Error('invalid status code: ' + code);
	    return code;
	  }

	  if (typeof code !== 'string') {
	    throw new TypeError('code must be a number or string');
	  }

	  // '403'
	  var n = parseInt(code, 10)
	  if (!isNaN(n)) {
	    if (!status[n]) throw new Error('invalid status code: ' + n);
	    return n;
	  }

	  n = status[code.toLowerCase()];
	  if (!n) throw new Error('invalid status message: "' + code + '"');
	  return n;
	}


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = {
		"100": "Continue",
		"101": "Switching Protocols",
		"102": "Processing",
		"200": "OK",
		"201": "Created",
		"202": "Accepted",
		"203": "Non-Authoritative Information",
		"204": "No Content",
		"205": "Reset Content",
		"206": "Partial Content",
		"207": "Multi-Status",
		"208": "Already Reported",
		"226": "IM Used",
		"300": "Multiple Choices",
		"301": "Moved Permanently",
		"302": "Found",
		"303": "See Other",
		"304": "Not Modified",
		"305": "Use Proxy",
		"306": "(Unused)",
		"307": "Temporary Redirect",
		"308": "Permanent Redirect",
		"400": "Bad Request",
		"401": "Unauthorized",
		"402": "Payment Required",
		"403": "Forbidden",
		"404": "Not Found",
		"405": "Method Not Allowed",
		"406": "Not Acceptable",
		"407": "Proxy Authentication Required",
		"408": "Request Timeout",
		"409": "Conflict",
		"410": "Gone",
		"411": "Length Required",
		"412": "Precondition Failed",
		"413": "Payload Too Large",
		"414": "URI Too Long",
		"415": "Unsupported Media Type",
		"416": "Range Not Satisfiable",
		"417": "Expectation Failed",
		"418": "I'm a teapot",
		"422": "Unprocessable Entity",
		"423": "Locked",
		"424": "Failed Dependency",
		"425": "Unordered Collection",
		"426": "Upgrade Required",
		"428": "Precondition Required",
		"429": "Too Many Requests",
		"431": "Request Header Fields Too Large",
		"451": "Unavailable For Legal Reasons",
		"500": "Internal Server Error",
		"501": "Not Implemented",
		"502": "Bad Gateway",
		"503": "Service Unavailable",
		"504": "Gateway Timeout",
		"505": "HTTP Version Not Supported",
		"506": "Variant Also Negotiates",
		"507": "Insufficient Storage",
		"508": "Loop Detected",
		"509": "Bandwidth Limit Exceeded",
		"510": "Not Extended",
		"511": "Network Authentication Required"
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * destroy
	 * Copyright(c) 2014 Jonathan Ong
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module dependencies.
	 * @private
	 */

	var ReadStream = __webpack_require__(51).ReadStream
	var Stream = __webpack_require__(24)

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = destroy

	/**
	 * Destroy a stream.
	 *
	 * @param {object} stream
	 * @public
	 */

	function destroy(stream) {
	  if (stream instanceof ReadStream) {
	    return destroyReadStream(stream)
	  }

	  if (!(stream instanceof Stream)) {
	    return stream
	  }

	  if (typeof stream.destroy === 'function') {
	    stream.destroy()
	  }

	  return stream
	}

	/**
	 * Destroy a ReadStream.
	 *
	 * @param {object} stream
	 * @private
	 */

	function destroyReadStream(stream) {
	  stream.destroy()

	  if (typeof stream.close === 'function') {
	    // node.js core bug work-around
	    stream.on('open', onOpenClose)
	  }

	  return stream
	}

	/**
	 * On open handler to close stream.
	 * @private
	 */

	function onOpenClose() {
	  if (typeof this.fd === 'number') {
	    // actually close down the fd
	    this.close()
	  }
	}


/***/ },
/* 51 */
/***/ function(module, exports) {

	

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	// when used in node, this will actually load the util module we depend on
	// versus loading the builtin util module as happens otherwise
	// this is a bug in node module loading as far as I am concerned
	var util = __webpack_require__(53);

	var pSlice = Array.prototype.slice;
	var hasOwn = Object.prototype.hasOwnProperty;

	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert = module.exports = ok;

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  }
	  else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;

	      // try to strip useless frames
	      var fn_name = stackStartFunction.name;
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }

	      this.stack = out;
	    }
	  }
	};

	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);

	function replacer(key, value) {
	  if (util.isUndefined(value)) {
	    return '' + value;
	  }
	  if (util.isNumber(value) && !isFinite(value)) {
	    return value.toString();
	  }
	  if (util.isFunction(value) || util.isRegExp(value)) {
	    return value.toString();
	  }
	  return value;
	}

	function truncate(s, n) {
	  if (util.isString(s)) {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}

	function getMessage(self) {
	  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(JSON.stringify(self.expected, replacer), 128);
	}

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);

	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);

	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);

	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};

	function _deepEqual(actual, expected) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
	    if (actual.length != expected.length) return false;

	    for (var i = 0; i < actual.length; i++) {
	      if (actual[i] !== expected[i]) return false;
	    }

	    return true;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!util.isObject(actual) && !util.isObject(expected)) {
	    return actual == expected;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected);
	  }
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b) {
	  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b)) {
	    return a === b;
	  }
	  var aIsArgs = isArguments(a),
	      bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b);
	  }
	  var ka = objectKeys(a),
	      kb = objectKeys(b),
	      key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key])) return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);

	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};

	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);

	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  } else if (actual instanceof expected) {
	    return true;
	  } else if (expected.call({}, actual) === true) {
	    return true;
	  }

	  return false;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (util.isString(expected)) {
	    message = expected;
	    expected = null;
	  }

	  try {
	    block();
	  } catch (e) {
	    actual = e;
	  }

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  if (!shouldThrow && expectedException(actual, expected)) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);

	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws.apply(this, [true].concat(pSlice.call(arguments)));
	};

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/message) {
	  _throws.apply(this, [false].concat(pSlice.call(arguments)));
	};

	assert.ifError = function(err) { if (err) {throw err;}};

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(54);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(55);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 55 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports) {

	/*!
	 * vary
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 */

	module.exports = vary;
	module.exports.append = append;

	/**
	 * RegExp to match field-name in RFC 7230 sec 3.2
	 *
	 * field-name    = token
	 * token         = 1*tchar
	 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	 *               / DIGIT / ALPHA
	 *               ; any VCHAR, except delimiters
	 */

	var fieldNameRegExp = /^[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+$/

	/**
	 * Append a field to a vary header.
	 *
	 * @param {String} header
	 * @param {String|Array} field
	 * @return {String}
	 * @api public
	 */

	function append(header, field) {
	  if (typeof header !== 'string') {
	    throw new TypeError('header argument is required');
	  }

	  if (!field) {
	    throw new TypeError('field argument is required');
	  }

	  // get fields array
	  var fields = !Array.isArray(field)
	    ? parse(String(field))
	    : field;

	  // assert on invalid field names
	  for (var i = 0; i < fields.length; i++) {
	    if (!fieldNameRegExp.test(fields[i])) {
	      throw new TypeError('field argument contains an invalid header name');
	    }
	  }

	  // existing, unspecified vary
	  if (header === '*') {
	    return header;
	  }

	  // enumerate current values
	  var val = header;
	  var vals = parse(header.toLowerCase());

	  // unspecified vary
	  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
	    return '*';
	  }

	  for (var i = 0; i < fields.length; i++) {
	    var fld = fields[i].toLowerCase();

	    // append value (case-preserving)
	    if (vals.indexOf(fld) === -1) {
	      vals.push(fld);
	      val = val
	        ? val + ', ' + fields[i]
	        : fields[i];
	    }
	  }

	  return val;
	}

	/**
	 * Parse a vary header into an array.
	 *
	 * @param {String} header
	 * @return {Array}
	 * @api private
	 */

	function parse(header) {
	  return header.trim().split(/ *, */);
	}

	/**
	 * Mark that a request is varied on a header field.
	 *
	 * @param {Object} res
	 * @param {String|Array} field
	 * @api public
	 */

	function vary(res, field) {
	  if (!res || !res.getHeader || !res.setHeader) {
	    // quack quack
	    throw new TypeError('res argument is required');
	  }

	  // get existing header
	  var val = res.getHeader('Vary') || ''
	  var header = Array.isArray(val)
	    ? val.join(', ')
	    : String(val);

	  // set new header
	  if ((val = append(header, field))) {
	    res.setHeader('Vary', val);
	  }
	}


/***/ },
/* 57 */
/***/ function(module, exports) {

	
	/**
	 * Expose compositor.
	 */

	module.exports = compose;

	/**
	 * Compose `middleware` returning
	 * a fully valid middleware comprised
	 * of all those which are passed.
	 *
	 * @param {Array} middleware
	 * @return {Function}
	 * @api public
	 */

	function compose(middleware){
	  return function *(next){
	    if (!next) next = noop();

	    var i = middleware.length;

	    while (i--) {
	      next = middleware[i].call(this, next);
	    }

	    return yield *next;
	  }
	}

	/**
	 * Noop.
	 *
	 * @api private
	 */

	function *noop(){}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	'use strict';

	/**
	 * Module dependencies.
	 */

	var createError = __webpack_require__(59);
	var httpAssert = __webpack_require__(61);
	var delegate = __webpack_require__(65);
	var statuses = __webpack_require__(48);

	/**
	 * Context prototype.
	 */

	var proto = module.exports = {

	  /**
	   * util.inspect() implementation, which
	   * just returns the JSON output.
	   *
	   * @return {Object}
	   * @api public
	   */

	  inspect: function(){
	    return this.toJSON();
	  },

	  /**
	   * Return JSON representation.
	   *
	   * Here we explicitly invoke .toJSON() on each
	   * object, as iteration will otherwise fail due
	   * to the getters and cause utilities such as
	   * clone() to fail.
	   *
	   * @return {Object}
	   * @api public
	   */

	  toJSON: function(){
	    return {
	      request: this.request.toJSON(),
	      response: this.response.toJSON(),
	      app: this.app.toJSON(),
	      originalUrl: this.originalUrl,
	      req: '<original node req>',
	      res: '<original node res>',
	      socket: '<original node socket>',
	    }
	  },

	  /**
	   * Similar to .throw(), adds assertion.
	   *
	   *    this.assert(this.user, 401, 'Please login!');
	   *
	   * See: https://github.com/jshttp/http-assert
	   *
	   * @param {Mixed} test
	   * @param {Number} status
	   * @param {String} message
	   * @api public
	   */

	  assert: httpAssert,

	  /**
	   * Throw an error with `msg` and optional `status`
	   * defaulting to 500. Note that these are user-level
	   * errors, and the message may be exposed to the client.
	   *
	   *    this.throw(403)
	   *    this.throw('name required', 400)
	   *    this.throw(400, 'name required')
	   *    this.throw('something exploded')
	   *    this.throw(new Error('invalid'), 400);
	   *    this.throw(400, new Error('invalid'));
	   *
	   * See: https://github.com/jshttp/http-errors
	   *
	   * @param {String|Number|Error} err, msg or status
	   * @param {String|Number|Error} [err, msg or status]
	   * @param {Object} [props]
	   * @api public
	   */

	  throw: function(){
	    throw createError.apply(null, arguments);
	  },

	  /**
	   * Default error handling.
	   *
	   * @param {Error} err
	   * @api private
	   */

	  onerror: function(err){
	    // don't do anything if there is no error.
	    // this allows you to pass `this.onerror`
	    // to node-style callbacks.
	    if (null == err) return;

	    if (!(err instanceof Error)) err = new Error('non-error thrown: ' + err);

	    // delegate
	    this.app.emit('error', err, this);

	    // nothing we can do here other
	    // than delegate to the app-level
	    // handler and log.
	    if (this.headerSent || !this.writable) {
	      err.headerSent = true;
	      return;
	    }

	    // unset all headers, and set those specified
	    this.res._headers = {};
	    this.set(err.headers);

	    // force text/plain
	    this.type = 'text';

	    // ENOENT support
	    if ('ENOENT' == err.code) err.status = 404;

	    // default to 500
	    if ('number' != typeof err.status || !statuses[err.status]) err.status = 500;

	    // respond
	    var code = statuses[err.status];
	    var msg = err.expose ? err.message : code;
	    this.status = err.status;
	    this.length = Buffer.byteLength(msg);
	    this.res.end(msg);
	  }
	};

	/**
	 * Response delegation.
	 */

	delegate(proto, 'response')
	  .method('attachment')
	  .method('redirect')
	  .method('remove')
	  .method('vary')
	  .method('set')
	  .method('append')
	  .access('status')
	  .access('message')
	  .access('body')
	  .access('length')
	  .access('type')
	  .access('lastModified')
	  .access('etag')
	  .getter('headerSent')
	  .getter('writable');

	/**
	 * Request delegation.
	 */

	delegate(proto, 'request')
	  .method('acceptsLanguages')
	  .method('acceptsEncodings')
	  .method('acceptsCharsets')
	  .method('accepts')
	  .method('get')
	  .method('is')
	  .access('querystring')
	  .access('idempotent')
	  .access('socket')
	  .access('search')
	  .access('method')
	  .access('query')
	  .access('path')
	  .access('url')
	  .getter('origin')
	  .getter('href')
	  .getter('subdomains')
	  .getter('protocol')
	  .getter('host')
	  .getter('hostname')
	  .getter('header')
	  .getter('headers')
	  .getter('secure')
	  .getter('stale')
	  .getter('fresh')
	  .getter('ips')
	  .getter('ip');

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	
	var statuses = __webpack_require__(48);
	var inherits = __webpack_require__(60);

	function toIdentifier(str) {
	  return str.split(' ').map(function (token) {
	    return token.slice(0, 1).toUpperCase() + token.slice(1)
	  }).join('').replace(/[^ _0-9a-z]/gi, '')
	}

	exports = module.exports = function httpError() {
	  // so much arity going on ~_~
	  var err;
	  var msg;
	  var status = 500;
	  var props = {};
	  for (var i = 0; i < arguments.length; i++) {
	    var arg = arguments[i];
	    if (arg instanceof Error) {
	      err = arg;
	      status = err.status || err.statusCode || status;
	      continue;
	    }
	    switch (typeof arg) {
	      case 'string':
	        msg = arg;
	        break;
	      case 'number':
	        status = arg;
	        break;
	      case 'object':
	        props = arg;
	        break;
	    }
	  }

	  if (typeof status !== 'number' || !statuses[status]) {
	    status = 500
	  }

	  // constructor
	  var HttpError = exports[status]

	  if (!err) {
	    // create error
	    err = HttpError
	      ? new HttpError(msg)
	      : new Error(msg || statuses[status])
	    Error.captureStackTrace(err, httpError)
	  }

	  if (!HttpError || !(err instanceof HttpError)) {
	    // add properties to generic error
	    err.expose = status < 500
	    err.status = err.statusCode = status
	  }

	  for (var key in props) {
	    if (key !== 'status' && key !== 'statusCode') {
	      err[key] = props[key]
	    }
	  }

	  return err;
	};

	var HttpError = exports.HttpError = function HttpError() {
	  throw new TypeError('cannot construct abstract class');
	};

	inherits(HttpError, Error);

	// create generic error objects
	var codes = statuses.codes.filter(function (num) {
	  return num >= 400;
	});

	codes.forEach(function (code) {
	  var name = toIdentifier(statuses[code])
	  var className = name.match(/Error$/) ? name : name + 'Error'

	  if (code >= 500) {
	    var ServerError = function ServerError(msg) {
	      var self = new Error(msg != null ? msg : statuses[code])
	      Error.captureStackTrace(self, ServerError)
	      self.__proto__ = ServerError.prototype
	      Object.defineProperty(self, 'name', {
	        enumerable: false,
	        configurable: true,
	        value: className,
	        writable: true
	      })
	      return self
	    }
	    inherits(ServerError, HttpError);
	    ServerError.prototype.status =
	    ServerError.prototype.statusCode = code;
	    ServerError.prototype.expose = false;
	    exports[code] =
	    exports[name] = ServerError
	    return;
	  }

	  var ClientError = function ClientError(msg) {
	    var self = new Error(msg != null ? msg : statuses[code])
	    Error.captureStackTrace(self, ClientError)
	    self.__proto__ = ClientError.prototype
	    Object.defineProperty(self, 'name', {
	      enumerable: false,
	      configurable: true,
	      value: className,
	      writable: true
	    })
	    return self
	  }
	  inherits(ClientError, HttpError);
	  ClientError.prototype.status =
	  ClientError.prototype.statusCode = code;
	  ClientError.prototype.expose = true;
	  exports[code] =
	  exports[name] = ClientError
	  return;
	});

	// backwards-compatibility
	exports["I'mateapot"] = exports.ImATeapot


/***/ },
/* 60 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var createError = __webpack_require__(59);
	var eql = __webpack_require__(62);

	module.exports = assert;

	function assert(value, status, msg, opts) {
	  if (value) return;
	  throw createError(status, msg, opts);
	}

	assert.equal = function(a, b, status, msg, opts) {
	  assert(a == b, status, msg, opts);
	};

	assert.notEqual = function(a, b, status, msg, opts) {
	  assert(a != b, status, msg, opts);
	};

	assert.strictEqual = function(a, b, status, msg, opts) {
	  assert(a === b, status, msg, opts);
	};

	assert.notStrictEqual = function(a, b, status, msg, opts) {
	  assert(a !== b, status, msg, opts);
	};

	assert.deepEqual = function(a, b, status, msg, opts) {
	  assert(eql(a, b), status, msg, opts);
	};

	assert.notDeepEqual = function(a, b, status, msg, opts) {
	  assert(!eql(a, b), status, msg, opts);
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(63);
	var isArguments = __webpack_require__(64);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 63 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 64 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 65 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Delegator`.
	 */

	module.exports = Delegator;

	/**
	 * Initialize a delegator.
	 *
	 * @param {Object} proto
	 * @param {String} target
	 * @api public
	 */

	function Delegator(proto, target) {
	  if (!(this instanceof Delegator)) return new Delegator(proto, target);
	  this.proto = proto;
	  this.target = target;
	  this.methods = [];
	  this.getters = [];
	  this.setters = [];
	  this.fluents = [];
	}

	/**
	 * Delegate method `name`.
	 *
	 * @param {String} name
	 * @return {Delegator} self
	 * @api public
	 */

	Delegator.prototype.method = function(name){
	  var proto = this.proto;
	  var target = this.target;
	  this.methods.push(name);

	  proto[name] = function(){
	    return this[target][name].apply(this[target], arguments);
	  };

	  return this;
	};

	/**
	 * Delegator accessor `name`.
	 *
	 * @param {String} name
	 * @return {Delegator} self
	 * @api public
	 */

	Delegator.prototype.access = function(name){
	  return this.getter(name).setter(name);
	};

	/**
	 * Delegator getter `name`.
	 *
	 * @param {String} name
	 * @return {Delegator} self
	 * @api public
	 */

	Delegator.prototype.getter = function(name){
	  var proto = this.proto;
	  var target = this.target;
	  this.getters.push(name);

	  proto.__defineGetter__(name, function(){
	    return this[target][name];
	  });

	  return this;
	};

	/**
	 * Delegator setter `name`.
	 *
	 * @param {String} name
	 * @return {Delegator} self
	 * @api public
	 */

	Delegator.prototype.setter = function(name){
	  var proto = this.proto;
	  var target = this.target;
	  this.setters.push(name);

	  proto.__defineSetter__(name, function(val){
	    return this[target][name] = val;
	  });

	  return this;
	};

	/**
	 * Delegator fluent accessor
	 *
	 * @param {String} name
	 * @return {Delegator} self
	 * @api public
	 */

	Delegator.prototype.fluent = function (name) {
	  var proto = this.proto;
	  var target = this.target;
	  this.fluents.push(name);

	  proto[name] = function(val){
	    if ('undefined' != typeof val) {
	      this[target][name] = val;
	      return this;
	    } else {
	      return this[target][name];
	    }
	  };

	  return this;
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	/**
	 * Module dependencies.
	 */

	var contentType = __webpack_require__(67);
	var stringify = __webpack_require__(68).format;
	var parse = __webpack_require__(74);
	var qs = __webpack_require__(75);
	var typeis = __webpack_require__(46);
	var fresh = __webpack_require__(78);

	/**
	 * Prototype.
	 */

	module.exports = {

	  /**
	   * Return request header.
	   *
	   * @return {Object}
	   * @api public
	   */

	  get header() {
	    return this.req.headers;
	  },

	  /**
	   * Return request header, alias as request.header
	   *
	   * @return {Object}
	   * @api public
	   */

	  get headers() {
	    return this.req.headers;
	  },

	  /**
	   * Get request URL.
	   *
	   * @return {String}
	   * @api public
	   */

	  get url() {
	    return this.req.url;
	  },

	  /**
	   * Set request URL.
	   *
	   * @api public
	   */

	  set url(val) {
	    this.req.url = val;
	  },

	  /**
	   * Get origin of URL.
	   *
	   * @return {String}
	   * @api public
	   */

	  get origin() {
	    return this.protocol + '://' + this.host;
	  },

	  /**
	   * Get full request URL.
	   *
	   * @return {String}
	   * @api public
	   */

	  get href() {
	    // support: `GET http://example.com/foo`
	    if (/^https?:\/\//i.test(this.originalUrl)) {
	      return this.originalUrl;
	    }
	    return this.origin + this.originalUrl;
	  },

	  /**
	   * Get request method.
	   *
	   * @return {String}
	   * @api public
	   */

	  get method() {
	    return this.req.method;
	  },

	  /**
	   * Set request method.
	   *
	   * @param {String} val
	   * @api public
	   */

	  set method(val) {
	    this.req.method = val;
	  },

	  /**
	   * Get request pathname.
	   *
	   * @return {String}
	   * @api public
	   */

	  get path() {
	    return parse(this.req).pathname;
	  },

	  /**
	   * Set pathname, retaining the query-string when present.
	   *
	   * @param {String} path
	   * @api public
	   */

	  set path(path) {
	    var url = parse(this.req);
	    if (url.pathname === path) return;

	    url.pathname = path;
	    url.path = null;

	    this.url = stringify(url);
	  },

	  /**
	   * Get parsed query-string.
	   *
	   * @return {Object}
	   * @api public
	   */

	  get query() {
	    var str = this.querystring;
	    var c = this._querycache = this._querycache || {};
	    return c[str] || (c[str] = qs.parse(str));
	  },

	  /**
	   * Set query-string as an object.
	   *
	   * @param {Object} obj
	   * @api public
	   */

	  set query(obj) {
	    this.querystring = qs.stringify(obj);
	  },

	  /**
	   * Get query string.
	   *
	   * @return {String}
	   * @api public
	   */

	  get querystring() {
	    if (!this.req) return '';
	    return parse(this.req).query || '';
	  },

	  /**
	   * Set querystring.
	   *
	   * @param {String} str
	   * @api public
	   */

	  set querystring(str) {
	    var url = parse(this.req);
	    if (url.search === '?' + str) return;

	    url.search = str;
	    url.path = null;

	    this.url = stringify(url);
	  },

	  /**
	   * Get the search string. Same as the querystring
	   * except it includes the leading ?.
	   *
	   * @return {String}
	   * @api public
	   */

	  get search() {
	    if (!this.querystring) return '';
	    return '?' + this.querystring;
	  },

	  /**
	   * Set the search string. Same as
	   * response.querystring= but included for ubiquity.
	   *
	   * @param {String} str
	   * @api public
	   */

	  set search(str) {
	    this.querystring = str;
	  },

	  /**
	   * Parse the "Host" header field host
	   * and support X-Forwarded-Host when a
	   * proxy is enabled.
	   *
	   * @return {String} hostname:port
	   * @api public
	   */

	  get host() {
	    var proxy = this.app.proxy;
	    var host = proxy && this.get('X-Forwarded-Host');
	    host = host || this.get('Host');
	    if (!host) return '';
	    return host.split(/\s*,\s*/)[0];
	  },

	  /**
	   * Parse the "Host" header field hostname
	   * and support X-Forwarded-Host when a
	   * proxy is enabled.
	   *
	   * @return {String} hostname
	   * @api public
	   */

	  get hostname() {
	    var host = this.host;
	    if (!host) return '';
	    return host.split(':')[0];
	  },

	  /**
	   * Check if the request is fresh, aka
	   * Last-Modified and/or the ETag
	   * still match.
	   *
	   * @return {Boolean}
	   * @api public
	   */

	  get fresh() {
	    var method = this.method;
	    var s = this.ctx.status;

	    // GET or HEAD for weak freshness validation only
	    if ('GET' != method && 'HEAD' != method) return false;

	    // 2xx or 304 as per rfc2616 14.26
	    if ((s >= 200 && s < 300) || 304 == s) {
	      return fresh(this.header, this.ctx.response.header);
	    }

	    return false;
	  },

	  /**
	   * Check if the request is stale, aka
	   * "Last-Modified" and / or the "ETag" for the
	   * resource has changed.
	   *
	   * @return {Boolean}
	   * @api public
	   */

	  get stale() {
	    return !this.fresh;
	  },

	  /**
	   * Check if the request is idempotent.
	   *
	   * @return {Boolean}
	   * @api public
	   */

	  get idempotent() {
	    var methods = ['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
	    return !!~methods.indexOf(this.method);
	  },

	  /**
	   * Return the request socket.
	   *
	   * @return {Connection}
	   * @api public
	   */

	  get socket() {
	    return this.req.socket;
	  },

	  /**
	   * Get the charset when present or undefined.
	   *
	   * @return {String}
	   * @api public
	   */

	  get charset() {
	    var type = this.get('Content-Type');
	    if (!type) return '';

	    return contentType.parse(type).parameters.charset || '';
	  },

	  /**
	   * Return parsed Content-Length when present.
	   *
	   * @return {Number}
	   * @api public
	   */

	  get length() {
	    var len = this.get('Content-Length');
	    if (len == '') return;
	    return ~~len;
	  },

	  /**
	   * Return the protocol string "http" or "https"
	   * when requested with TLS. When the proxy setting
	   * is enabled the "X-Forwarded-Proto" header
	   * field will be trusted. If you're running behind
	   * a reverse proxy that supplies https for you this
	   * may be enabled.
	   *
	   * @return {String}
	   * @api public
	   */

	  get protocol() {
	    var proxy = this.app.proxy;
	    if (this.socket.encrypted) return 'https';
	    if (!proxy) return 'http';
	    var proto = this.get('X-Forwarded-Proto') || 'http';
	    return proto.split(/\s*,\s*/)[0];
	  },

	  /**
	   * Short-hand for:
	   *
	   *    this.protocol == 'https'
	   *
	   * @return {Boolean}
	   * @api public
	   */

	  get secure() {
	    return 'https' == this.protocol;
	  },

	  /**
	   * Return the remote address, or when
	   * `app.proxy` is `true` return
	   * the upstream addr.
	   *
	   * @return {String}
	   * @api public
	   */

	  get ip() {
	    return this.ips[0] || this.socket.remoteAddress || '';
	  },

	  /**
	   * When `app.proxy` is `true`, parse
	   * the "X-Forwarded-For" ip address list.
	   *
	   * For example if the value were "client, proxy1, proxy2"
	   * you would receive the array `["client", "proxy1", "proxy2"]`
	   * where "proxy2" is the furthest down-stream.
	   *
	   * @return {Array}
	   * @api public
	   */

	  get ips() {
	    var proxy = this.app.proxy;
	    var val = this.get('X-Forwarded-For');
	    return proxy && val
	      ? val.split(/\s*,\s*/)
	      : [];
	  },

	  /**
	   * Return subdomains as an array.
	   *
	   * Subdomains are the dot-separated parts of the host before the main domain of
	   * the app. By default, the domain of the app is assumed to be the last two
	   * parts of the host. This can be changed by setting `app.subdomainOffset`.
	   *
	   * For example, if the domain is "tobi.ferrets.example.com":
	   * If `app.subdomainOffset` is not set, this.subdomains is `["ferrets", "tobi"]`.
	   * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
	   *
	   * @return {Array}
	   * @api public
	   */

	  get subdomains() {
	    var offset = this.app.subdomainOffset;
	    return (this.host || '')
	      .split('.')
	      .reverse()
	      .slice(offset);
	  },

	  /**
	   * Check if the given `type(s)` is acceptable, returning
	   * the best match when true, otherwise `undefined`, in which
	   * case you should respond with 406 "Not Acceptable".
	   *
	   * The `type` value may be a single mime type string
	   * such as "application/json", the extension name
	   * such as "json" or an array `["json", "html", "text/plain"]`. When a list
	   * or array is given the _best_ match, if any is returned.
	   *
	   * Examples:
	   *
	   *     // Accept: text/html
	   *     this.accepts('html');
	   *     // => "html"
	   *
	   *     // Accept: text/*, application/json
	   *     this.accepts('html');
	   *     // => "html"
	   *     this.accepts('text/html');
	   *     // => "text/html"
	   *     this.accepts('json', 'text');
	   *     // => "json"
	   *     this.accepts('application/json');
	   *     // => "application/json"
	   *
	   *     // Accept: text/*, application/json
	   *     this.accepts('image/png');
	   *     this.accepts('png');
	   *     // => undefined
	   *
	   *     // Accept: text/*;q=.5, application/json
	   *     this.accepts(['html', 'json']);
	   *     this.accepts('html', 'json');
	   *     // => "json"
	   *
	   * @param {String|Array} type(s)...
	   * @return {String|Array|Boolean}
	   * @api public
	   */

	  accepts: function(){
	    return this.accept.types.apply(this.accept, arguments);
	  },

	  /**
	   * Return accepted encodings or best fit based on `encodings`.
	   *
	   * Given `Accept-Encoding: gzip, deflate`
	   * an array sorted by quality is returned:
	   *
	   *     ['gzip', 'deflate']
	   *
	   * @param {String|Array} encoding(s)...
	   * @return {String|Array}
	   * @api public
	   */

	  acceptsEncodings: function(){
	    return this.accept.encodings.apply(this.accept, arguments);
	  },

	  /**
	   * Return accepted charsets or best fit based on `charsets`.
	   *
	   * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
	   * an array sorted by quality is returned:
	   *
	   *     ['utf-8', 'utf-7', 'iso-8859-1']
	   *
	   * @param {String|Array} charset(s)...
	   * @return {String|Array}
	   * @api public
	   */

	  acceptsCharsets: function(){
	    return this.accept.charsets.apply(this.accept, arguments);
	  },

	  /**
	   * Return accepted languages or best fit based on `langs`.
	   *
	   * Given `Accept-Language: en;q=0.8, es, pt`
	   * an array sorted by quality is returned:
	   *
	   *     ['es', 'pt', 'en']
	   *
	   * @param {String|Array} lang(s)...
	   * @return {Array|String}
	   * @api public
	   */

	  acceptsLanguages: function(){
	    return this.accept.languages.apply(this.accept, arguments);
	  },

	  /**
	   * Check if the incoming request contains the "Content-Type"
	   * header field, and it contains any of the give mime `type`s.
	   * If there is no request body, `null` is returned.
	   * If there is no content type, `false` is returned.
	   * Otherwise, it returns the first `type` that matches.
	   *
	   * Examples:
	   *
	   *     // With Content-Type: text/html; charset=utf-8
	   *     this.is('html'); // => 'html'
	   *     this.is('text/html'); // => 'text/html'
	   *     this.is('text/*', 'application/json'); // => 'text/html'
	   *
	   *     // When Content-Type is application/json
	   *     this.is('json', 'urlencoded'); // => 'json'
	   *     this.is('application/json'); // => 'application/json'
	   *     this.is('html', 'application/*'); // => 'application/json'
	   *
	   *     this.is('html'); // => false
	   *
	   * @param {String|Array} types...
	   * @return {String|false|null}
	   * @api public
	   */

	  is: function(types){
	    if (!types) return typeis(this.req);
	    if (!Array.isArray(types)) types = [].slice.call(arguments);
	    return typeis(this.req, types);
	  },

	  /**
	   * Return the request mime type void of
	   * parameters such as "charset".
	   *
	   * @return {String}
	   * @api public
	   */

	  get type() {
	    var type = this.get('Content-Type');
	    if (!type) return '';
	    return type.split(';')[0];
	  },

	  /**
	   * Return request header.
	   *
	   * The `Referrer` header field is special-cased,
	   * both `Referrer` and `Referer` are interchangeable.
	   *
	   * Examples:
	   *
	   *     this.get('Content-Type');
	   *     // => "text/plain"
	   *
	   *     this.get('content-type');
	   *     // => "text/plain"
	   *
	   *     this.get('Something');
	   *     // => undefined
	   *
	   * @param {String} field
	   * @return {String}
	   * @api public
	   */

	  get: function(field){
	    var req = this.req;
	    switch (field = field.toLowerCase()) {
	      case 'referer':
	      case 'referrer':
	        return req.headers.referrer || req.headers.referer || '';
	      default:
	        return req.headers[field] || '';
	    }
	  },

	  /**
	   * Inspect implementation.
	   *
	   * @return {Object}
	   * @api public
	   */

	  inspect: function(){
	    if (!this.req) return;
	    return this.toJSON();
	  },

	  /**
	   * Return JSON representation.
	   *
	   * @return {Object}
	   * @api public
	   */

	  toJSON: function(){
	    return {
	      method: this.method,
	      url: this.url,
	      header: this.header
	    };
	  }
	};


/***/ },
/* 67 */
/***/ function(module, exports) {

	/*!
	 * content-type
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	/**
	 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
	 *
	 * parameter     = token "=" ( token / quoted-string )
	 * token         = 1*tchar
	 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	 *               / DIGIT / ALPHA
	 *               ; any VCHAR, except delimiters
	 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
	 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
	 * obs-text      = %x80-FF
	 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
	 */
	var paramRegExp = /; *([!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+) */g
	var textRegExp = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
	var tokenRegExp = /^[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+$/

	/**
	 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
	 *
	 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
	 * obs-text    = %x80-FF
	 */
	var qescRegExp = /\\([\u000b\u0020-\u00ff])/g

	/**
	 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
	 */
	var quoteRegExp = /([\\"])/g

	/**
	 * RegExp to match type in RFC 6838
	 *
	 * media-type = type "/" subtype
	 * type       = token
	 * subtype    = token
	 */
	var typeRegExp = /^[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+\/[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+$/

	/**
	 * Module exports.
	 * @public
	 */

	exports.format = format
	exports.parse = parse

	/**
	 * Format object to media type.
	 *
	 * @param {object} obj
	 * @return {string}
	 * @public
	 */

	function format(obj) {
	  if (!obj || typeof obj !== 'object') {
	    throw new TypeError('argument obj is required')
	  }

	  var parameters = obj.parameters
	  var type = obj.type

	  if (!type || !typeRegExp.test(type)) {
	    throw new TypeError('invalid type')
	  }

	  var string = type

	  // append parameters
	  if (parameters && typeof parameters === 'object') {
	    var param
	    var params = Object.keys(parameters).sort()

	    for (var i = 0; i < params.length; i++) {
	      param = params[i]

	      if (!tokenRegExp.test(param)) {
	        throw new TypeError('invalid parameter name')
	      }

	      string += '; ' + param + '=' + qstring(parameters[param])
	    }
	  }

	  return string
	}

	/**
	 * Parse media type to object.
	 *
	 * @param {string|object} string
	 * @return {Object}
	 * @public
	 */

	function parse(string) {
	  if (!string) {
	    throw new TypeError('argument string is required')
	  }

	  if (typeof string === 'object') {
	    // support req/res-like objects as argument
	    string = getcontenttype(string)

	    if (typeof string !== 'string') {
	      throw new TypeError('content-type header is missing from object');
	    }
	  }

	  if (typeof string !== 'string') {
	    throw new TypeError('argument string is required to be a string')
	  }

	  var index = string.indexOf(';')
	  var type = index !== -1
	    ? string.substr(0, index).trim()
	    : string.trim()

	  if (!typeRegExp.test(type)) {
	    throw new TypeError('invalid media type')
	  }

	  var key
	  var match
	  var obj = new ContentType(type.toLowerCase())
	  var value

	  paramRegExp.lastIndex = index

	  while (match = paramRegExp.exec(string)) {
	    if (match.index !== index) {
	      throw new TypeError('invalid parameter format')
	    }

	    index += match[0].length
	    key = match[1].toLowerCase()
	    value = match[2]

	    if (value[0] === '"') {
	      // remove quotes and escapes
	      value = value
	        .substr(1, value.length - 2)
	        .replace(qescRegExp, '$1')
	    }

	    obj.parameters[key] = value
	  }

	  if (index !== -1 && index !== string.length) {
	    throw new TypeError('invalid parameter format')
	  }

	  return obj
	}

	/**
	 * Get content-type from req/res objects.
	 *
	 * @param {object}
	 * @return {Object}
	 * @private
	 */

	function getcontenttype(obj) {
	  if (typeof obj.getHeader === 'function') {
	    // res-like
	    return obj.getHeader('content-type')
	  }

	  if (typeof obj.headers === 'object') {
	    // req-like
	    return obj.headers && obj.headers['content-type']
	  }
	}

	/**
	 * Quote a string if necessary.
	 *
	 * @param {string} val
	 * @return {string}
	 * @private
	 */

	function qstring(val) {
	  var str = String(val)

	  // no need to quote tokens
	  if (tokenRegExp.test(str)) {
	    return str
	  }

	  if (str.length > 0 && !textRegExp.test(str)) {
	    throw new TypeError('invalid parameter value')
	  }

	  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
	}

	/**
	 * Class to represent a content type.
	 * @private
	 */
	function ContentType(type) {
	  this.parameters = Object.create(null)
	  this.type = type
	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var punycode = __webpack_require__(69);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(71);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)(module), (function() { return this; }())))

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(72);
	exports.encode = exports.stringify = __webpack_require__(73);


/***/ },
/* 72 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },
/* 73 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * parseurl
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2014 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(68)
	var parse = url.parse
	var Url = url.Url

	/**
	 * Pattern for a simple path case.
	 * See: https://github.com/joyent/node/pull/7878
	 */

	var simplePathRegExp = /^(\/\/?(?!\/)[^\?#\s]*)(\?[^#\s]*)?$/

	/**
	 * Exports.
	 */

	module.exports = parseurl
	module.exports.original = originalurl

	/**
	 * Parse the `req` url with memoization.
	 *
	 * @param {ServerRequest} req
	 * @return {Object}
	 * @api public
	 */

	function parseurl(req) {
	  var url = req.url

	  if (url === undefined) {
	    // URL is undefined
	    return undefined
	  }

	  var parsed = req._parsedUrl

	  if (fresh(url, parsed)) {
	    // Return cached URL parse
	    return parsed
	  }

	  // Parse the URL
	  parsed = fastparse(url)
	  parsed._raw = url

	  return req._parsedUrl = parsed
	};

	/**
	 * Parse the `req` original url with fallback and memoization.
	 *
	 * @param {ServerRequest} req
	 * @return {Object}
	 * @api public
	 */

	function originalurl(req) {
	  var url = req.originalUrl

	  if (typeof url !== 'string') {
	    // Fallback
	    return parseurl(req)
	  }

	  var parsed = req._parsedOriginalUrl

	  if (fresh(url, parsed)) {
	    // Return cached URL parse
	    return parsed
	  }

	  // Parse the URL
	  parsed = fastparse(url)
	  parsed._raw = url

	  return req._parsedOriginalUrl = parsed
	};

	/**
	 * Parse the `str` url with fast-path short-cut.
	 *
	 * @param {string} str
	 * @return {Object}
	 * @api private
	 */

	function fastparse(str) {
	  // Try fast path regexp
	  // See: https://github.com/joyent/node/pull/7878
	  var simplePath = typeof str === 'string' && simplePathRegExp.exec(str)

	  // Construct simple URL
	  if (simplePath) {
	    var pathname = simplePath[1]
	    var search = simplePath[2] || null
	    var url = Url !== undefined
	      ? new Url()
	      : {}
	    url.path = str
	    url.href = str
	    url.pathname = pathname
	    url.search = search
	    url.query = search && search.substr(1)

	    return url
	  }

	  return parse(str)
	}

	/**
	 * Determine if parsed is still fresh for url.
	 *
	 * @param {string} url
	 * @param {object} parsedUrl
	 * @return {boolean}
	 * @api private
	 */

	function fresh(url, parsedUrl) {
	  return typeof parsedUrl === 'object'
	    && parsedUrl !== null
	    && (Url === undefined || parsedUrl instanceof Url)
	    && parsedUrl._raw === url
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(76);
	exports.encode = exports.stringify = __webpack_require__(77);


/***/ },
/* 76 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },
/* 77 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}

	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};


/***/ },
/* 78 */
/***/ function(module, exports) {

	
	/**
	 * Expose `fresh()`.
	 */

	module.exports = fresh;

	/**
	 * Check freshness of `req` and `res` headers.
	 *
	 * When the cache is "fresh" __true__ is returned,
	 * otherwise __false__ is returned to indicate that
	 * the cache is now stale.
	 *
	 * @param {Object} req
	 * @param {Object} res
	 * @return {Boolean}
	 * @api public
	 */

	function fresh(req, res) {
	  // defaults
	  var etagMatches = true;
	  var notModified = true;

	  // fields
	  var modifiedSince = req['if-modified-since'];
	  var noneMatch = req['if-none-match'];
	  var lastModified = res['last-modified'];
	  var etag = res['etag'];
	  var cc = req['cache-control'];

	  // unconditional request
	  if (!modifiedSince && !noneMatch) return false;

	  // check for no-cache cache request directive
	  if (cc && cc.indexOf('no-cache') !== -1) return false;  

	  // parse if-none-match
	  if (noneMatch) noneMatch = noneMatch.split(/ *, */);

	  // if-none-match
	  if (noneMatch) {
	    etagMatches = noneMatch.some(function (match) {
	      return match === '*' || match === etag || match === 'W/' + etag;
	    });
	  }

	  // if-modified-since
	  if (modifiedSince) {
	    modifiedSince = new Date(modifiedSince);
	    lastModified = new Date(lastModified);
	    notModified = lastModified <= modifiedSince;
	  }

	  return !! (etagMatches && notModified);
	}


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var deprecate = __webpack_require__(80)('cookies')
	var Keygrip = __webpack_require__(81)
	var http = __webpack_require__(97)
	var cache = {}

	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */

	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

	function Cookies(request, response, options) {
	  if (!(this instanceof Cookies)) return new Cookies(request, response, options)

	  this.secure = undefined
	  this.request = request
	  this.response = response

	  if (options) {
	    if (Array.isArray(options)) {
	      // array of key strings
	      deprecate('"keys" argument; provide using options {"key": [...]}')
	      this.keys = new Keygrip(options)
	    } else if (options.constructor && options.constructor.name === 'Keygrip') {
	      // any keygrip constructor to allow different versions
	      deprecate('"keys" argument; provide using options {"key": keygrip}')
	      this.keys = options
	    } else {
	      this.keys = Array.isArray(options.keys) ? new Keygrip(options.keys) : options.keys
	      this.secure = options.secure
	    }
	  }
	}

	Cookies.prototype.get = function(name, opts) {
	  var sigName = name + ".sig"
	    , header, match, value, remote, data, index
	    , signed = opts && opts.signed !== undefined ? opts.signed : !!this.keys

	  header = this.request.headers["cookie"]
	  if (!header) return

	  match = header.match(getPattern(name))
	  if (!match) return

	  value = match[1]
	  if (!opts || !signed) return value

	  remote = this.get(sigName)
	  if (!remote) return

	  data = name + "=" + value
	  if (!this.keys) throw new Error('.keys required for signed cookies');
	  index = this.keys.index(data, remote)

	  if (index < 0) {
	    this.set(sigName, null, {path: "/", signed: false })
	  } else {
	    index && this.set(sigName, this.keys.sign(data), { signed: false })
	    return value
	  }
	};

	Cookies.prototype.set = function(name, value, opts) {
	  var res = this.response
	    , req = this.request
	    , headers = res.getHeader("Set-Cookie") || []
	    , secure = this.secure !== undefined ? !!this.secure : req.protocol === 'https' || req.connection.encrypted
	    , cookie = new Cookie(name, value, opts)
	    , signed = opts && opts.signed !== undefined ? opts.signed : !!this.keys

	  if (typeof headers == "string") headers = [headers]

	  if (!secure && opts && opts.secure) {
	    throw new Error('Cannot send secure cookie over unencrypted connection')
	  }

	  cookie.secure = secure
	  if (opts && "secure" in opts) cookie.secure = opts.secure

	  if (opts && "secureProxy" in opts) {
	    deprecate('"secureProxy" option; use "secure" option, provide "secure" to constructor if needed')
	    cookie.secure = opts.secureProxy
	  }

	  headers = pushCookie(headers, cookie)

	  if (opts && signed) {
	    if (!this.keys) throw new Error('.keys required for signed cookies');
	    cookie.value = this.keys.sign(cookie.toString())
	    cookie.name += ".sig"
	    headers = pushCookie(headers, cookie)
	  }

	  var setHeader = res.set ? http.OutgoingMessage.prototype.setHeader : res.setHeader
	  setHeader.call(res, 'Set-Cookie', headers)
	  return this
	};

	function Cookie(name, value, attrs) {
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument value is invalid');
	  }

	  value || (this.expires = new Date(0))

	  this.name = name
	  this.value = value || ""

	  for (var name in attrs) {
	    this[name] = attrs[name]
	  }

	  if (this.path && !fieldContentRegExp.test(this.path)) {
	    throw new TypeError('option path is invalid');
	  }

	  if (this.domain && !fieldContentRegExp.test(this.domain)) {
	    throw new TypeError('option domain is invalid');
	  }
	}

	Cookie.prototype.path = "/";
	Cookie.prototype.expires = undefined;
	Cookie.prototype.domain = undefined;
	Cookie.prototype.httpOnly = true;
	Cookie.prototype.secure = false;
	Cookie.prototype.overwrite = false;

	Cookie.prototype.toString = function() {
	  return this.name + "=" + this.value
	};

	Cookie.prototype.toHeader = function() {
	  var header = this.toString()

	  if (this.maxAge) this.expires = new Date(Date.now() + this.maxAge);

	  if (this.path     ) header += "; path=" + this.path
	  if (this.expires  ) header += "; expires=" + this.expires.toUTCString()
	  if (this.domain   ) header += "; domain=" + this.domain
	  if (this.secure   ) header += "; secure"
	  if (this.httpOnly ) header += "; httponly"

	  return header
	};

	// back-compat so maxage mirrors maxAge
	Object.defineProperty(Cookie.prototype, 'maxage', {
	  configurable: true,
	  enumerable: true,
	  get: function () { return this.maxAge },
	  set: function (val) { return this.maxAge = val }
	});

	function getPattern(name) {
	  if (cache[name]) return cache[name]

	  return cache[name] = new RegExp(
	    "(?:^|;) *" +
	    name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
	    "=([^;]*)"
	  )
	}

	function pushCookie(cookies, cookie) {
	  if (cookie.overwrite) {
	    cookies = cookies.filter(function(c) { return c.indexOf(cookie.name+'=') !== 0 })
	  }
	  cookies.push(cookie.toHeader())
	  return cookies
	}

	Cookies.connect = Cookies.express = function(keys) {
	  return function(req, res, next) {
	    req.cookies = res.cookies = new Cookies(req, res, {
	      keys: keys
	    })

	    next()
	  }
	}

	Cookies.Cookie = Cookie

	module.exports = Cookies


/***/ },
/* 80 */
/***/ function(module, exports) {

	/*!
	 * depd
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = depd

	/**
	 * Create deprecate for namespace in caller.
	 */

	function depd(namespace) {
	  if (!namespace) {
	    throw new TypeError('argument namespace is required')
	  }

	  function deprecate(message) {
	    // no-op in browser
	  }

	  deprecate._file = undefined
	  deprecate._ignored = true
	  deprecate._namespace = namespace
	  deprecate._traced = false
	  deprecate._warned = Object.create(null)

	  deprecate.function = wrapfunction
	  deprecate.property = wrapproperty

	  return deprecate
	}

	/**
	 * Return a wrapped function in a deprecation message.
	 *
	 * This is a no-op version of the wrapper, which does nothing but call
	 * validation.
	 */

	function wrapfunction(fn, message) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('argument fn must be a function')
	  }

	  return fn
	}

	/**
	 * Wrap property in a deprecation message.
	 *
	 * This is a no-op version of the wrapper, which does nothing but call
	 * validation.
	 */

	function wrapproperty(obj, prop, message) {
	  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
	    throw new TypeError('argument obj must be object')
	  }

	  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

	  if (!descriptor) {
	    throw new TypeError('must call property on owner object')
	  }

	  if (!descriptor.configurable) {
	    throw new TypeError('property must be configurable')
	  }

	  return
	}


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var crypto = __webpack_require__(82)
	  
	function Keygrip(keys, algorithm, encoding) {
	  if (!algorithm) algorithm = "sha1";
	  if (!encoding) encoding = "base64";
	  if (!(this instanceof Keygrip)) return new Keygrip(keys, algorithm, encoding)

	  if (!keys || !(0 in keys)) {
	    throw new Error("Keys must be provided.")
	  }

	  function sign(data, key) {
	    return crypto
	      .createHmac(algorithm, key)
	      .update(data).digest(encoding)
	      .replace(/\/|\+|=/g, function(x) {
	        return ({ "/": "_", "+": "-", "=": "" })[x]
	      })
	  }

	  this.sign = function(data){ return sign(data, keys[0]) }

	  this.verify = function(data, digest) {
	    return this.index(data, digest) > -1
	  }

	  this.index = function(data, digest) {
	    for (var i = 0, l = keys.length; i < l; i++) {
	      if (constantTimeCompare(digest, sign(data, keys[i]))) return i
	    }

	    return -1
	  }
	}

	Keygrip.sign = Keygrip.verify = Keygrip.index = function() {
	  throw new Error("Usage: require('keygrip')(<array-of-keys>)")
	}

	//http://codahale.com/a-lesson-in-timing-attacks/
	var constantTimeCompare = function(val1, val2){
	    if(val1 == null && val2 != null){
	        return false;
	    } else if(val2 == null && val1 != null){
	        return false;
	    } else if(val1 == null && val2 == null){
	        return true;
	    }

	    if(val1.length !== val2.length){
	        return false;
	    }

	    var matches = 1;

	    for(var i = 0; i < val1.length; i++){
	        matches &= (val1.charAt(i) === val2.charAt(i) ? 1 : 0); //Don't short circuit
	    }

	    return matches === 1;
	};

	module.exports = Keygrip


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(83)

	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}

	exports.createHash = __webpack_require__(85)

	exports.createHmac = __webpack_require__(94)

	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}

	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}

	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}

	var p = __webpack_require__(95)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync


	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createCipher'
	, 'createCipheriv'
	, 'createDecipher'
	, 'createDecipheriv'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(84)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5).Buffer))

/***/ },
/* 84 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(86)

	var md5 = toConstructor(__webpack_require__(91))
	var rmd160 = toConstructor(__webpack_require__(93))

	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}

	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}

	var Buffer = __webpack_require__(5).Buffer
	var Hash   = __webpack_require__(87)(Buffer)

	exports.sha1 = __webpack_require__(88)(Buffer, Hash)
	exports.sha256 = __webpack_require__(89)(Buffer, Hash)
	exports.sha512 = __webpack_require__(90)(Buffer, Hash)


/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {

	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }

	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }

	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }

	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block

	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)

	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }

	      s += ch
	      f += ch

	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s

	    return this
	  }

	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8

	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80

	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)

	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }

	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)

	    var hash = this._update(this._block) || this._hash()

	    return enc ? hash.toString(enc) : hash
	  }

	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }

	  return Hash
	}


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = __webpack_require__(53).inherits

	module.exports = function (Buffer, Hash) {

	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0

	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)

	  var POOL = []

	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()

	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)

	    this._h = null
	    this.init()
	  }

	  inherits(Sha1, Hash)

	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0

	    Hash.prototype.init.call(this)
	    return this
	  }

	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {

	    var a, b, c, d, e, _a, _b, _c, _d, _e

	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e

	    var w = this._w

	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )

	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }

	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }

	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }

	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }

	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }

	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }

	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }

	  return Sha1
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(53).inherits

	module.exports = function (Buffer, Hash) {

	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]

	  var W = new Array(64)

	  function Sha256() {
	    this.init()

	    this._w = W //new Array(64)

	    Hash.call(this, 16*4, 14*4)
	  }

	  inherits(Sha256, Hash)

	  Sha256.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }

	  function R (X, n) {
	    return (X >>> n);
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }

	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }

	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }

	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }

	  Sha256.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }

	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0

	  };

	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)

	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)

	    return H
	  }

	  return Sha256

	}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(53).inherits

	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]

	  var W = new Array(160)

	  function Sha512() {
	    this.init()
	    this._w = W

	    Hash.call(this, 128, 112)
	  }

	  inherits(Sha512, Hash)

	  Sha512.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  Sha512.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0

	    for (var i = 0; i < 80; i++) {
	      var j = i * 2

	      var Wi, Wil

	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)

	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]

	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]

	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)

	        W[j] = Wi
	        W[j + 1] = Wil
	      }

	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)

	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]

	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)

	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }

	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0

	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }

	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)

	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }

	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)

	    return H
	  }

	  return Sha512

	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(92);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}

	module.exports = { hash: hash };

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160



	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};

	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};

	var processBlock = function (H, M, offset) {

	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];

	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }

	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;

	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;

	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};

	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}

	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}

	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}

	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}

	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}

	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}

	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');

	  var m = bytesToWords(message);

	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;

	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );

	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }

	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];

	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }

	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(85)

	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)

	module.exports = Hmac

	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg

	  var blocksize = (alg === 'sha512') ? 128 : 64

	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }

	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)

	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }

	  this._hash = createHash(alg).update(ipad)
	}

	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}

	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(96)

	module.exports = function (crypto, exports) {
	  exports = exports || {}

	  var exported = pbkdf2Export(crypto)

	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync

	  return exports
	}


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }

	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')

	    setTimeout(function() {
	      var result

	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }

	      callback(undefined, result)
	    })
	  }

	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')

	    if (iterations < 0)
	      throw new TypeError('Bad iterations')

	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')

	    if (keylen < 0)
	      throw new TypeError('Bad key length')

	    digest = digest || 'sha1'

	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)

	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)

	      var U = crypto.createHmac(digest, password).update(block1).digest()

	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen

	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }

	      U.copy(T, 0, 0, hLen)

	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()

	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }

	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }

	    return DK
	  }

	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).Buffer))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var http = module.exports;
	var EventEmitter = __webpack_require__(12).EventEmitter;
	var Request = __webpack_require__(98);
	var url = __webpack_require__(68)

	http.request = function (params, cb) {
	    if (typeof params === 'string') {
	        params = url.parse(params)
	    }
	    if (!params) params = {};
	    if (!params.host && !params.port) {
	        params.port = parseInt(window.location.port, 10);
	    }
	    if (!params.host && params.hostname) {
	        params.host = params.hostname;
	    }

	    if (!params.protocol) {
	        if (params.scheme) {
	            params.protocol = params.scheme + ':';
	        } else {
	            params.protocol = window.location.protocol;
	        }
	    }

	    if (!params.host) {
	        params.host = window.location.hostname || window.location.host;
	    }
	    if (/:/.test(params.host)) {
	        if (!params.port) {
	            params.port = params.host.split(':')[1];
	        }
	        params.host = params.host.split(':')[0];
	    }
	    if (!params.port) params.port = params.protocol == 'https:' ? 443 : 80;
	    
	    var req = new Request(new xhrHttp, params);
	    if (cb) req.on('response', cb);
	    return req;
	};　   　　

	http.get = function (params, cb) {
	    params.method = 'GET';
	    var req = http.request(params, cb);
	    req.end();
	    return req;
	};

	http.Agent = function () {};
	http.Agent.defaultMaxSockets = 4;

	var xhrHttp = (function () {
	    if (typeof window === 'undefined') {
	        throw new Error('no window object present');
	    }
					else if (window.XMLHttpRequest) {
	        return window.XMLHttpRequest;
	    }
	    else if (window.ActiveXObject) {
	        var axs = [
	            'Msxml2.XMLHTTP.6.0',
	            'Msxml2.XMLHTTP.3.0',
	            'Microsoft.XMLHTTP'
	        ];
	        for (var i = 0; i < axs.length; i++) {
	            try {
	                var ax = new(window.ActiveXObject)(axs[i]);
	                return function () {
	                    if (ax) {
	                        var ax_ = ax;
	                        ax = null;
	                        return ax_;
	                    }
	                    else {
	                        return new(window.ActiveXObject)(axs[i]);
	                    }
	                };
	            }
	            catch (e) {}
	        }
	        throw new Error('ajax not supported in this browser')
	    }
	    else {
	        throw new Error('ajax not supported in this browser');
	    }
	})();

	http.STATUS_CODES = {
	    100 : 'Continue',
	    101 : 'Switching Protocols',
	    102 : 'Processing',                 // RFC 2518, obsoleted by RFC 4918
	    200 : 'OK',
	    201 : 'Created',
	    202 : 'Accepted',
	    203 : 'Non-Authoritative Information',
	    204 : 'No Content',
	    205 : 'Reset Content',
	    206 : 'Partial Content',
	    207 : 'Multi-Status',               // RFC 4918
	    300 : 'Multiple Choices',
	    301 : 'Moved Permanently',
	    302 : 'Moved Temporarily',
	    303 : 'See Other',
	    304 : 'Not Modified',
	    305 : 'Use Proxy',
	    307 : 'Temporary Redirect',
	    400 : 'Bad Request',
	    401 : 'Unauthorized',
	    402 : 'Payment Required',
	    403 : 'Forbidden',
	    404 : 'Not Found',
	    405 : 'Method Not Allowed',
	    406 : 'Not Acceptable',
	    407 : 'Proxy Authentication Required',
	    408 : 'Request Time-out',
	    409 : 'Conflict',
	    410 : 'Gone',
	    411 : 'Length Required',
	    412 : 'Precondition Failed',
	    413 : 'Request Entity Too Large',
	    414 : 'Request-URI Too Large',
	    415 : 'Unsupported Media Type',
	    416 : 'Requested Range Not Satisfiable',
	    417 : 'Expectation Failed',
	    418 : 'I\'m a teapot',              // RFC 2324
	    422 : 'Unprocessable Entity',       // RFC 4918
	    423 : 'Locked',                     // RFC 4918
	    424 : 'Failed Dependency',          // RFC 4918
	    425 : 'Unordered Collection',       // RFC 4918
	    426 : 'Upgrade Required',           // RFC 2817
	    428 : 'Precondition Required',      // RFC 6585
	    429 : 'Too Many Requests',          // RFC 6585
	    431 : 'Request Header Fields Too Large',// RFC 6585
	    500 : 'Internal Server Error',
	    501 : 'Not Implemented',
	    502 : 'Bad Gateway',
	    503 : 'Service Unavailable',
	    504 : 'Gateway Time-out',
	    505 : 'HTTP Version Not Supported',
	    506 : 'Variant Also Negotiates',    // RFC 2295
	    507 : 'Insufficient Storage',       // RFC 4918
	    509 : 'Bandwidth Limit Exceeded',
	    510 : 'Not Extended',               // RFC 2774
	    511 : 'Network Authentication Required' // RFC 6585
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(24);
	var Response = __webpack_require__(99);
	var Base64 = __webpack_require__(100);
	var inherits = __webpack_require__(101);

	var Request = module.exports = function (xhr, params) {
	    var self = this;
	    self.writable = true;
	    self.xhr = xhr;
	    self.body = [];
	    
	    self.uri = (params.protocol || 'http:') + '//'
	        + params.host
	        + (params.port ? ':' + params.port : '')
	        + (params.path || '/')
	    ;
	    
	    if (typeof params.withCredentials === 'undefined') {
	        params.withCredentials = true;
	    }

	    try { xhr.withCredentials = params.withCredentials }
	    catch (e) {}
	    
	    if (params.responseType) try { xhr.responseType = params.responseType }
	    catch (e) {}
	    
	    xhr.open(
	        params.method || 'GET',
	        self.uri,
	        true
	    );

	    xhr.onerror = function(event) {
	        self.emit('error', new Error('Network error'));
	    };

	    self._headers = {};
	    
	    if (params.headers) {
	        var keys = objectKeys(params.headers);
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            if (!self.isSafeRequestHeader(key)) continue;
	            var value = params.headers[key];
	            self.setHeader(key, value);
	        }
	    }
	    
	    if (params.auth) {
	        //basic auth
	        this.setHeader('Authorization', 'Basic ' + Base64.btoa(params.auth));
	    }

	    var res = new Response;
	    res.on('close', function () {
	        self.emit('close');
	    });
	    
	    res.on('ready', function () {
	        self.emit('response', res);
	    });

	    res.on('error', function (err) {
	        self.emit('error', err);
	    });
	    
	    xhr.onreadystatechange = function () {
	        // Fix for IE9 bug
	        // SCRIPT575: Could not complete the operation due to error c00c023f
	        // It happens when a request is aborted, calling the success callback anyway with readyState === 4
	        if (xhr.__aborted) return;
	        res.handle(xhr);
	    };
	};

	inherits(Request, Stream);

	Request.prototype.setHeader = function (key, value) {
	    this._headers[key.toLowerCase()] = value
	};

	Request.prototype.getHeader = function (key) {
	    return this._headers[key.toLowerCase()]
	};

	Request.prototype.removeHeader = function (key) {
	    delete this._headers[key.toLowerCase()]
	};

	Request.prototype.write = function (s) {
	    this.body.push(s);
	};

	Request.prototype.destroy = function (s) {
	    this.xhr.__aborted = true;
	    this.xhr.abort();
	    this.emit('close');
	};

	Request.prototype.end = function (s) {
	    if (s !== undefined) this.body.push(s);

	    var keys = objectKeys(this._headers);
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var value = this._headers[key];
	        if (isArray(value)) {
	            for (var j = 0; j < value.length; j++) {
	                this.xhr.setRequestHeader(key, value[j]);
	            }
	        }
	        else this.xhr.setRequestHeader(key, value)
	    }

	    if (this.body.length === 0) {
	        this.xhr.send('');
	    }
	    else if (typeof this.body[0] === 'string') {
	        this.xhr.send(this.body.join(''));
	    }
	    else if (isArray(this.body[0])) {
	        var body = [];
	        for (var i = 0; i < this.body.length; i++) {
	            body.push.apply(body, this.body[i]);
	        }
	        this.xhr.send(body);
	    }
	    else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
	        var len = 0;
	        for (var i = 0; i < this.body.length; i++) {
	            len += this.body[i].length;
	        }
	        var body = new(this.body[0].constructor)(len);
	        var k = 0;
	        
	        for (var i = 0; i < this.body.length; i++) {
	            var b = this.body[i];
	            for (var j = 0; j < b.length; j++) {
	                body[k++] = b[j];
	            }
	        }
	        this.xhr.send(body);
	    }
	    else if (isXHR2Compatible(this.body[0])) {
	        this.xhr.send(this.body[0]);
	    }
	    else {
	        var body = '';
	        for (var i = 0; i < this.body.length; i++) {
	            body += this.body[i].toString();
	        }
	        this.xhr.send(body);
	    }
	};

	// Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
	Request.unsafeHeaders = [
	    "accept-charset",
	    "accept-encoding",
	    "access-control-request-headers",
	    "access-control-request-method",
	    "connection",
	    "content-length",
	    "cookie",
	    "cookie2",
	    "content-transfer-encoding",
	    "date",
	    "expect",
	    "host",
	    "keep-alive",
	    "origin",
	    "referer",
	    "te",
	    "trailer",
	    "transfer-encoding",
	    "upgrade",
	    "user-agent",
	    "via"
	];

	Request.prototype.isSafeRequestHeader = function (headerName) {
	    if (!headerName) return false;
	    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
	};

	var objectKeys = Object.keys || function (obj) {
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    return keys;
	};

	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};

	var indexOf = function (xs, x) {
	    if (xs.indexOf) return xs.indexOf(x);
	    for (var i = 0; i < xs.length; i++) {
	        if (xs[i] === x) return i;
	    }
	    return -1;
	};

	var isXHR2Compatible = function (obj) {
	    if (typeof Blob !== 'undefined' && obj instanceof Blob) return true;
	    if (typeof ArrayBuffer !== 'undefined' && obj instanceof ArrayBuffer) return true;
	    if (typeof FormData !== 'undefined' && obj instanceof FormData) return true;
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(24);
	var util = __webpack_require__(53);

	var Response = module.exports = function (res) {
	    this.offset = 0;
	    this.readable = true;
	};

	util.inherits(Response, Stream);

	var capable = {
	    streaming : true,
	    status2 : true
	};

	function parseHeaders (res) {
	    var lines = res.getAllResponseHeaders().split(/\r?\n/);
	    var headers = {};
	    for (var i = 0; i < lines.length; i++) {
	        var line = lines[i];
	        if (line === '') continue;
	        
	        var m = line.match(/^([^:]+):\s*(.*)/);
	        if (m) {
	            var key = m[1].toLowerCase(), value = m[2];
	            
	            if (headers[key] !== undefined) {
	            
	                if (isArray(headers[key])) {
	                    headers[key].push(value);
	                }
	                else {
	                    headers[key] = [ headers[key], value ];
	                }
	            }
	            else {
	                headers[key] = value;
	            }
	        }
	        else {
	            headers[line] = true;
	        }
	    }
	    return headers;
	}

	Response.prototype.getResponse = function (xhr) {
	    var respType = String(xhr.responseType).toLowerCase();
	    if (respType === 'blob') return xhr.responseBlob || xhr.response;
	    if (respType === 'arraybuffer') return xhr.response;
	    return xhr.responseText;
	}

	Response.prototype.getHeader = function (key) {
	    return this.headers[key.toLowerCase()];
	};

	Response.prototype.handle = function (res) {
	    if (res.readyState === 2 && capable.status2) {
	        try {
	            this.statusCode = res.status;
	            this.headers = parseHeaders(res);
	        }
	        catch (err) {
	            capable.status2 = false;
	        }
	        
	        if (capable.status2) {
	            this.emit('ready');
	        }
	    }
	    else if (capable.streaming && res.readyState === 3) {
	        try {
	            if (!this.statusCode) {
	                this.statusCode = res.status;
	                this.headers = parseHeaders(res);
	                this.emit('ready');
	            }
	        }
	        catch (err) {}
	        
	        try {
	            this._emitData(res);
	        }
	        catch (err) {
	            capable.streaming = false;
	        }
	    }
	    else if (res.readyState === 4) {
	        if (!this.statusCode) {
	            this.statusCode = res.status;
	            this.emit('ready');
	        }
	        this._emitData(res);
	        
	        if (res.error) {
	            this.emit('error', this.getResponse(res));
	        }
	        else this.emit('end');
	        
	        this.emit('close');
	    }
	};

	Response.prototype._emitData = function (res) {
	    var respBody = this.getResponse(res);
	    if (respBody.toString().match(/ArrayBuffer/)) {
	        this.emit('data', new Uint8Array(respBody, this.offset));
	        this.offset = respBody.byteLength;
	        return;
	    }
	    if (respBody.length > this.offset) {
	        this.emit('data', respBody.slice(this.offset));
	        this.offset = respBody.length;
	    }
	};

	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	;(function () {

	  var object =  true ? exports : this; // #8: web workers
	  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	  function InvalidCharacterError(message) {
	    this.message = message;
	  }
	  InvalidCharacterError.prototype = new Error;
	  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	  // encoder
	  // [https://gist.github.com/999166] by [https://github.com/nignag]
	  object.btoa || (
	  object.btoa = function (input) {
	    for (
	      // initialize result and counter
	      var block, charCode, idx = 0, map = chars, output = '';
	      // if the next input index does not exist:
	      //   change the mapping table to "="
	      //   check if d has no fractional digits
	      input.charAt(idx | 0) || (map = '=', idx % 1);
	      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	    ) {
	      charCode = input.charCodeAt(idx += 3/4);
	      if (charCode > 0xFF) {
	        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
	      }
	      block = block << 8 | charCode;
	    }
	    return output;
	  });

	  // decoder
	  // [https://gist.github.com/1020396] by [https://github.com/atk]
	  object.atob || (
	  object.atob = function (input) {
	    input = input.replace(/=+$/, '');
	    if (input.length % 4 == 1) {
	      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
	    }
	    for (
	      // initialize result and counters
	      var bc = 0, bs, buffer, idx = 0, output = '';
	      // get next character
	      buffer = input.charAt(idx++);
	      // character found in table? initialize bit storage and add its ascii value;
	      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
	        // and if not first of each 4 characters,
	        // convert the first 8 bits to one ascii character
	        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
	    ) {
	      // try to find character in table (0-63, not found => -1)
	      buffer = chars.indexOf(buffer);
	    }
	    return output;
	  });

	}());


/***/ },
/* 101 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * accepts
	 * Copyright(c) 2014 Jonathan Ong
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict'

	/**
	 * Module dependencies.
	 * @private
	 */

	var Negotiator = __webpack_require__(103)
	var mime = __webpack_require__(41)

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = Accepts

	/**
	 * Create a new Accepts object for the given req.
	 *
	 * @param {object} req
	 * @public
	 */

	function Accepts(req) {
	  if (!(this instanceof Accepts))
	    return new Accepts(req)

	  this.headers = req.headers
	  this.negotiator = new Negotiator(req)
	}

	/**
	 * Check if the given `type(s)` is acceptable, returning
	 * the best match when true, otherwise `undefined`, in which
	 * case you should respond with 406 "Not Acceptable".
	 *
	 * The `type` value may be a single mime type string
	 * such as "application/json", the extension name
	 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
	 * or array is given the _best_ match, if any is returned.
	 *
	 * Examples:
	 *
	 *     // Accept: text/html
	 *     this.types('html');
	 *     // => "html"
	 *
	 *     // Accept: text/*, application/json
	 *     this.types('html');
	 *     // => "html"
	 *     this.types('text/html');
	 *     // => "text/html"
	 *     this.types('json', 'text');
	 *     // => "json"
	 *     this.types('application/json');
	 *     // => "application/json"
	 *
	 *     // Accept: text/*, application/json
	 *     this.types('image/png');
	 *     this.types('png');
	 *     // => undefined
	 *
	 *     // Accept: text/*;q=.5, application/json
	 *     this.types(['html', 'json']);
	 *     this.types('html', 'json');
	 *     // => "json"
	 *
	 * @param {String|Array} types...
	 * @return {String|Array|Boolean}
	 * @public
	 */

	Accepts.prototype.type =
	Accepts.prototype.types = function (types_) {
	  var types = types_

	  // support flattened arguments
	  if (types && !Array.isArray(types)) {
	    types = new Array(arguments.length)
	    for (var i = 0; i < types.length; i++) {
	      types[i] = arguments[i]
	    }
	  }

	  // no types, return all requested types
	  if (!types || types.length === 0) {
	    return this.negotiator.mediaTypes()
	  }

	  if (!this.headers.accept) return types[0];
	  var mimes = types.map(extToMime);
	  var accepts = this.negotiator.mediaTypes(mimes.filter(validMime));
	  var first = accepts[0];
	  if (!first) return false;
	  return types[mimes.indexOf(first)];
	}

	/**
	 * Return accepted encodings or best fit based on `encodings`.
	 *
	 * Given `Accept-Encoding: gzip, deflate`
	 * an array sorted by quality is returned:
	 *
	 *     ['gzip', 'deflate']
	 *
	 * @param {String|Array} encodings...
	 * @return {String|Array}
	 * @public
	 */

	Accepts.prototype.encoding =
	Accepts.prototype.encodings = function (encodings_) {
	  var encodings = encodings_

	  // support flattened arguments
	  if (encodings && !Array.isArray(encodings)) {
	    encodings = new Array(arguments.length)
	    for (var i = 0; i < encodings.length; i++) {
	      encodings[i] = arguments[i]
	    }
	  }

	  // no encodings, return all requested encodings
	  if (!encodings || encodings.length === 0) {
	    return this.negotiator.encodings()
	  }

	  return this.negotiator.encodings(encodings)[0] || false
	}

	/**
	 * Return accepted charsets or best fit based on `charsets`.
	 *
	 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
	 * an array sorted by quality is returned:
	 *
	 *     ['utf-8', 'utf-7', 'iso-8859-1']
	 *
	 * @param {String|Array} charsets...
	 * @return {String|Array}
	 * @public
	 */

	Accepts.prototype.charset =
	Accepts.prototype.charsets = function (charsets_) {
	  var charsets = charsets_

	  // support flattened arguments
	  if (charsets && !Array.isArray(charsets)) {
	    charsets = new Array(arguments.length)
	    for (var i = 0; i < charsets.length; i++) {
	      charsets[i] = arguments[i]
	    }
	  }

	  // no charsets, return all requested charsets
	  if (!charsets || charsets.length === 0) {
	    return this.negotiator.charsets()
	  }

	  return this.negotiator.charsets(charsets)[0] || false
	}

	/**
	 * Return accepted languages or best fit based on `langs`.
	 *
	 * Given `Accept-Language: en;q=0.8, es, pt`
	 * an array sorted by quality is returned:
	 *
	 *     ['es', 'pt', 'en']
	 *
	 * @param {String|Array} langs...
	 * @return {Array|String}
	 * @public
	 */

	Accepts.prototype.lang =
	Accepts.prototype.langs =
	Accepts.prototype.language =
	Accepts.prototype.languages = function (languages_) {
	  var languages = languages_

	  // support flattened arguments
	  if (languages && !Array.isArray(languages)) {
	    languages = new Array(arguments.length)
	    for (var i = 0; i < languages.length; i++) {
	      languages[i] = arguments[i]
	    }
	  }

	  // no languages, return all requested languages
	  if (!languages || languages.length === 0) {
	    return this.negotiator.languages()
	  }

	  return this.negotiator.languages(languages)[0] || false
	}

	/**
	 * Convert extnames to mime.
	 *
	 * @param {String} type
	 * @return {String}
	 * @private
	 */

	function extToMime(type) {
	  return type.indexOf('/') === -1
	    ? mime.lookup(type)
	    : type
	}

	/**
	 * Check if mime is valid.
	 *
	 * @param {String} type
	 * @return {String}
	 * @private
	 */

	function validMime(type) {
	  return typeof type === 'string';
	}


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * negotiator
	 * Copyright(c) 2012 Federico Romero
	 * Copyright(c) 2012-2014 Isaac Z. Schlueter
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Cached loaded submodules.
	 * @private
	 */

	var modules = Object.create(null);

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = Negotiator;
	module.exports.Negotiator = Negotiator;

	/**
	 * Create a Negotiator instance from a request.
	 * @param {object} request
	 * @public
	 */

	function Negotiator(request) {
	  if (!(this instanceof Negotiator)) {
	    return new Negotiator(request);
	  }

	  this.request = request;
	}

	Negotiator.prototype.charset = function charset(available) {
	  var set = this.charsets(available);
	  return set && set[0];
	};

	Negotiator.prototype.charsets = function charsets(available) {
	  var preferredCharsets = loadModule('charset').preferredCharsets;
	  return preferredCharsets(this.request.headers['accept-charset'], available);
	};

	Negotiator.prototype.encoding = function encoding(available) {
	  var set = this.encodings(available);
	  return set && set[0];
	};

	Negotiator.prototype.encodings = function encodings(available) {
	  var preferredEncodings = loadModule('encoding').preferredEncodings;
	  return preferredEncodings(this.request.headers['accept-encoding'], available);
	};

	Negotiator.prototype.language = function language(available) {
	  var set = this.languages(available);
	  return set && set[0];
	};

	Negotiator.prototype.languages = function languages(available) {
	  var preferredLanguages = loadModule('language').preferredLanguages;
	  return preferredLanguages(this.request.headers['accept-language'], available);
	};

	Negotiator.prototype.mediaType = function mediaType(available) {
	  var set = this.mediaTypes(available);
	  return set && set[0];
	};

	Negotiator.prototype.mediaTypes = function mediaTypes(available) {
	  var preferredMediaTypes = loadModule('mediaType').preferredMediaTypes;
	  return preferredMediaTypes(this.request.headers.accept, available);
	};

	// Backwards compatibility
	Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
	Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
	Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
	Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
	Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
	Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
	Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
	Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;

	/**
	 * Load the given module.
	 * @private
	 */

	function loadModule(moduleName) {
	  var module = modules[moduleName];

	  if (module !== undefined) {
	    return module;
	  }

	  // This uses a switch for static require analysis
	  switch (moduleName) {
	    case 'charset':
	      module = __webpack_require__(104);
	      break;
	    case 'encoding':
	      module = __webpack_require__(105);
	      break;
	    case 'language':
	      module = __webpack_require__(106);
	      break;
	    case 'mediaType':
	      module = __webpack_require__(107);
	      break;
	    default:
	      throw new Error('Cannot find module \'' + moduleName + '\'');
	  }

	  // Store to prevent invoking require()
	  modules[moduleName] = module;

	  return module;
	}


/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * negotiator
	 * Copyright(c) 2012 Isaac Z. Schlueter
	 * Copyright(c) 2014 Federico Romero
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = preferredCharsets;
	module.exports.preferredCharsets = preferredCharsets;

	/**
	 * Module variables.
	 * @private
	 */

	var simpleCharsetRegExp = /^\s*(\S+?)\s*(?:;(.*))?$/;

	/**
	 * Parse the Accept-Charset header.
	 * @private
	 */

	function parseAcceptCharset(accept) {
	  var accepts = accept.split(',');

	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var charset = parseCharset(accepts[i].trim(), i);

	    if (charset) {
	      accepts[j++] = charset;
	    }
	  }

	  // trim accepts
	  accepts.length = j;

	  return accepts;
	}

	/**
	 * Parse a charset from the Accept-Charset header.
	 * @private
	 */

	function parseCharset(str, i) {
	  var match = simpleCharsetRegExp.exec(str);
	  if (!match) return null;

	  var charset = match[1];
	  var q = 1;
	  if (match[2]) {
	    var params = match[2].split(';')
	    for (var i = 0; i < params.length; i ++) {
	      var p = params[i].trim().split('=');
	      if (p[0] === 'q') {
	        q = parseFloat(p[1]);
	        break;
	      }
	    }
	  }

	  return {
	    charset: charset,
	    q: q,
	    i: i
	  };
	}

	/**
	 * Get the priority of a charset.
	 * @private
	 */

	function getCharsetPriority(charset, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};

	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(charset, accepted[i], index);

	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }

	  return priority;
	}

	/**
	 * Get the specificity of the charset.
	 * @private
	 */

	function specify(charset, spec, index) {
	  var s = 0;
	  if(spec.charset.toLowerCase() === charset.toLowerCase()){
	    s |= 1;
	  } else if (spec.charset !== '*' ) {
	    return null
	  }

	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s
	  }
	}

	/**
	 * Get the preferred charsets from an Accept-Charset header.
	 * @public
	 */

	function preferredCharsets(accept, provided) {
	  // RFC 2616 sec 14.2: no header = *
	  var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');

	  if (!provided) {
	    // sorted list of all charsets
	    return accepts
	      .filter(isQuality)
	      .sort(compareSpecs)
	      .map(getFullCharset);
	  }

	  var priorities = provided.map(function getPriority(type, index) {
	    return getCharsetPriority(type, accepts, index);
	  });

	  // sorted list of accepted charsets
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}

	/**
	 * Compare two specs.
	 * @private
	 */

	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}

	/**
	 * Get full charset string.
	 * @private
	 */

	function getFullCharset(spec) {
	  return spec.charset;
	}

	/**
	 * Check if a spec has any quality.
	 * @private
	 */

	function isQuality(spec) {
	  return spec.q > 0;
	}


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * negotiator
	 * Copyright(c) 2012 Isaac Z. Schlueter
	 * Copyright(c) 2014 Federico Romero
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = preferredEncodings;
	module.exports.preferredEncodings = preferredEncodings;

	/**
	 * Module variables.
	 * @private
	 */

	var simpleEncodingRegExp = /^\s*(\S+?)\s*(?:;(.*))?$/;

	/**
	 * Parse the Accept-Encoding header.
	 * @private
	 */

	function parseAcceptEncoding(accept) {
	  var accepts = accept.split(',');
	  var hasIdentity = false;
	  var minQuality = 1;

	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var encoding = parseEncoding(accepts[i].trim(), i);

	    if (encoding) {
	      accepts[j++] = encoding;
	      hasIdentity = hasIdentity || specify('identity', encoding);
	      minQuality = Math.min(minQuality, encoding.q || 1);
	    }
	  }

	  if (!hasIdentity) {
	    /*
	     * If identity doesn't explicitly appear in the accept-encoding header,
	     * it's added to the list of acceptable encoding with the lowest q
	     */
	    accepts[j++] = {
	      encoding: 'identity',
	      q: minQuality,
	      i: i
	    };
	  }

	  // trim accepts
	  accepts.length = j;

	  return accepts;
	}

	/**
	 * Parse an encoding from the Accept-Encoding header.
	 * @private
	 */

	function parseEncoding(str, i) {
	  var match = simpleEncodingRegExp.exec(str);
	  if (!match) return null;

	  var encoding = match[1];
	  var q = 1;
	  if (match[2]) {
	    var params = match[2].split(';');
	    for (var i = 0; i < params.length; i ++) {
	      var p = params[i].trim().split('=');
	      if (p[0] === 'q') {
	        q = parseFloat(p[1]);
	        break;
	      }
	    }
	  }

	  return {
	    encoding: encoding,
	    q: q,
	    i: i
	  };
	}

	/**
	 * Get the priority of an encoding.
	 * @private
	 */

	function getEncodingPriority(encoding, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};

	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(encoding, accepted[i], index);

	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }

	  return priority;
	}

	/**
	 * Get the specificity of the encoding.
	 * @private
	 */

	function specify(encoding, spec, index) {
	  var s = 0;
	  if(spec.encoding.toLowerCase() === encoding.toLowerCase()){
	    s |= 1;
	  } else if (spec.encoding !== '*' ) {
	    return null
	  }

	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s
	  }
	};

	/**
	 * Get the preferred encodings from an Accept-Encoding header.
	 * @public
	 */

	function preferredEncodings(accept, provided) {
	  var accepts = parseAcceptEncoding(accept || '');

	  if (!provided) {
	    // sorted list of all encodings
	    return accepts
	      .filter(isQuality)
	      .sort(compareSpecs)
	      .map(getFullEncoding);
	  }

	  var priorities = provided.map(function getPriority(type, index) {
	    return getEncodingPriority(type, accepts, index);
	  });

	  // sorted list of accepted encodings
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getEncoding(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}

	/**
	 * Compare two specs.
	 * @private
	 */

	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}

	/**
	 * Get full encoding string.
	 * @private
	 */

	function getFullEncoding(spec) {
	  return spec.encoding;
	}

	/**
	 * Check if a spec has any quality.
	 * @private
	 */

	function isQuality(spec) {
	  return spec.q > 0;
	}


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * negotiator
	 * Copyright(c) 2012 Isaac Z. Schlueter
	 * Copyright(c) 2014 Federico Romero
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = preferredLanguages;
	module.exports.preferredLanguages = preferredLanguages;

	/**
	 * Module variables.
	 * @private
	 */

	var simpleLanguageRegExp = /^\s*(\S+?)(?:-(\S+?))?\s*(?:;(.*))?$/;

	/**
	 * Parse the Accept-Language header.
	 * @private
	 */

	function parseAcceptLanguage(accept) {
	  var accepts = accept.split(',');

	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var langauge = parseLanguage(accepts[i].trim(), i);

	    if (langauge) {
	      accepts[j++] = langauge;
	    }
	  }

	  // trim accepts
	  accepts.length = j;

	  return accepts;
	}

	/**
	 * Parse a language from the Accept-Language header.
	 * @private
	 */

	function parseLanguage(str, i) {
	  var match = simpleLanguageRegExp.exec(str);
	  if (!match) return null;

	  var prefix = match[1],
	      suffix = match[2],
	      full = prefix;

	  if (suffix) full += "-" + suffix;

	  var q = 1;
	  if (match[3]) {
	    var params = match[3].split(';')
	    for (var i = 0; i < params.length; i ++) {
	      var p = params[i].split('=');
	      if (p[0] === 'q') q = parseFloat(p[1]);
	    }
	  }

	  return {
	    prefix: prefix,
	    suffix: suffix,
	    q: q,
	    i: i,
	    full: full
	  };
	}

	/**
	 * Get the priority of a language.
	 * @private
	 */

	function getLanguagePriority(language, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};

	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(language, accepted[i], index);

	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }

	  return priority;
	}

	/**
	 * Get the specificity of the language.
	 * @private
	 */

	function specify(language, spec, index) {
	  var p = parseLanguage(language)
	  if (!p) return null;
	  var s = 0;
	  if(spec.full.toLowerCase() === p.full.toLowerCase()){
	    s |= 4;
	  } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
	    s |= 2;
	  } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
	    s |= 1;
	  } else if (spec.full !== '*' ) {
	    return null
	  }

	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s
	  }
	};

	/**
	 * Get the preferred languages from an Accept-Language header.
	 * @public
	 */

	function preferredLanguages(accept, provided) {
	  // RFC 2616 sec 14.4: no header = *
	  var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');

	  if (!provided) {
	    // sorted list of all languages
	    return accepts
	      .filter(isQuality)
	      .sort(compareSpecs)
	      .map(getFullLanguage);
	  }

	  var priorities = provided.map(function getPriority(type, index) {
	    return getLanguagePriority(type, accepts, index);
	  });

	  // sorted list of accepted languages
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}

	/**
	 * Compare two specs.
	 * @private
	 */

	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}

	/**
	 * Get full language string.
	 * @private
	 */

	function getFullLanguage(spec) {
	  return spec.full;
	}

	/**
	 * Check if a spec has any quality.
	 * @private
	 */

	function isQuality(spec) {
	  return spec.q > 0;
	}


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * negotiator
	 * Copyright(c) 2012 Isaac Z. Schlueter
	 * Copyright(c) 2014 Federico Romero
	 * Copyright(c) 2014-2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = preferredMediaTypes;
	module.exports.preferredMediaTypes = preferredMediaTypes;

	/**
	 * Module variables.
	 * @private
	 */

	var simpleMediaTypeRegExp = /^\s*(\S+?)\/([^;\s]+)\s*(?:;(.*))?$/;

	/**
	 * Parse the Accept header.
	 * @private
	 */

	function parseAccept(accept) {
	  var accepts = splitMediaTypes(accept);

	  for (var i = 0, j = 0; i < accepts.length; i++) {
	    var mediaType = parseMediaType(accepts[i].trim(), i);

	    if (mediaType) {
	      accepts[j++] = mediaType;
	    }
	  }

	  // trim accepts
	  accepts.length = j;

	  return accepts;
	}

	/**
	 * Parse a media type from the Accept header.
	 * @private
	 */

	function parseMediaType(str, i) {
	  var match = simpleMediaTypeRegExp.exec(str);
	  if (!match) return null;

	  var params = Object.create(null);
	  var q = 1;
	  var subtype = match[2];
	  var type = match[1];

	  if (match[3]) {
	    var kvps = splitParameters(match[3]).map(splitKeyValuePair);

	    for (var j = 0; j < kvps.length; j++) {
	      var pair = kvps[j];
	      var key = pair[0].toLowerCase();
	      var val = pair[1];

	      // get the value, unwrapping quotes
	      var value = val && val[0] === '"' && val[val.length - 1] === '"'
	        ? val.substr(1, val.length - 2)
	        : val;

	      if (key === 'q') {
	        q = parseFloat(value);
	        break;
	      }

	      // store parameter
	      params[key] = value;
	    }
	  }

	  return {
	    type: type,
	    subtype: subtype,
	    params: params,
	    q: q,
	    i: i
	  };
	}

	/**
	 * Get the priority of a media type.
	 * @private
	 */

	function getMediaTypePriority(type, accepted, index) {
	  var priority = {o: -1, q: 0, s: 0};

	  for (var i = 0; i < accepted.length; i++) {
	    var spec = specify(type, accepted[i], index);

	    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
	      priority = spec;
	    }
	  }

	  return priority;
	}

	/**
	 * Get the specificity of the media type.
	 * @private
	 */

	function specify(type, spec, index) {
	  var p = parseMediaType(type);
	  var s = 0;

	  if (!p) {
	    return null;
	  }

	  if(spec.type.toLowerCase() == p.type.toLowerCase()) {
	    s |= 4
	  } else if(spec.type != '*') {
	    return null;
	  }

	  if(spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
	    s |= 2
	  } else if(spec.subtype != '*') {
	    return null;
	  }

	  var keys = Object.keys(spec.params);
	  if (keys.length > 0) {
	    if (keys.every(function (k) {
	      return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
	    })) {
	      s |= 1
	    } else {
	      return null
	    }
	  }

	  return {
	    i: index,
	    o: spec.i,
	    q: spec.q,
	    s: s,
	  }
	}

	/**
	 * Get the preferred media types from an Accept header.
	 * @public
	 */

	function preferredMediaTypes(accept, provided) {
	  // RFC 2616 sec 14.2: no header = */*
	  var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');

	  if (!provided) {
	    // sorted list of all types
	    return accepts
	      .filter(isQuality)
	      .sort(compareSpecs)
	      .map(getFullType);
	  }

	  var priorities = provided.map(function getPriority(type, index) {
	    return getMediaTypePriority(type, accepts, index);
	  });

	  // sorted list of accepted types
	  return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
	    return provided[priorities.indexOf(priority)];
	  });
	}

	/**
	 * Compare two specs.
	 * @private
	 */

	function compareSpecs(a, b) {
	  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
	}

	/**
	 * Get full type string.
	 * @private
	 */

	function getFullType(spec) {
	  return spec.type + '/' + spec.subtype;
	}

	/**
	 * Check if a spec has any quality.
	 * @private
	 */

	function isQuality(spec) {
	  return spec.q > 0;
	}

	/**
	 * Count the number of quotes in a string.
	 * @private
	 */

	function quoteCount(string) {
	  var count = 0;
	  var index = 0;

	  while ((index = string.indexOf('"', index)) !== -1) {
	    count++;
	    index++;
	  }

	  return count;
	}

	/**
	 * Split a key value pair.
	 * @private
	 */

	function splitKeyValuePair(str) {
	  var index = str.indexOf('=');
	  var key;
	  var val;

	  if (index === -1) {
	    key = str;
	  } else {
	    key = str.substr(0, index);
	    val = str.substr(index + 1);
	  }

	  return [key, val];
	}

	/**
	 * Split an Accept header into media types.
	 * @private
	 */

	function splitMediaTypes(accept) {
	  var accepts = accept.split(',');

	  for (var i = 1, j = 0; i < accepts.length; i++) {
	    if (quoteCount(accepts[j]) % 2 == 0) {
	      accepts[++j] = accepts[i];
	    } else {
	      accepts[j] += ',' + accepts[i];
	    }
	  }

	  // trim accepts
	  accepts.length = j + 1;

	  return accepts;
	}

	/**
	 * Split a string of parameters.
	 * @private
	 */

	function splitParameters(str) {
	  var parameters = str.split(';');

	  for (var i = 1, j = 0; i < parameters.length; i++) {
	    if (quoteCount(parameters[j]) % 2 == 0) {
	      parameters[++j] = parameters[i];
	    } else {
	      parameters[j] += ';' + parameters[i];
	    }
	  }

	  // trim parameters
	  parameters.length = j + 1;

	  for (var i = 0; i < parameters.length; i++) {
	    parameters[i] = parameters[i].trim();
	  }

	  return parameters;
	}


/***/ },
/* 108 */
/***/ function(module, exports) {

	
	module.exports = function(obj, keys){
	  obj = obj || {};
	  if ('string' == typeof keys) keys = keys.split(/ +/);
	  return keys.reduce(function(ret, key){
	    if (null == obj[key]) return ret;
	    ret[key] = obj[key];
	    return ret;
	  }, {});
	};


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * RESTful resource routing middleware for koa.
	 *
	 * @author Alex Mingoia <talk@alexmingoia.com>
	 * @link https://github.com/alexmingoia/koa-router
	 */

	var debug = __webpack_require__(110)('koa-router');
	var HttpError = __webpack_require__(113);
	var methods = __webpack_require__(117);
	var Layer = __webpack_require__(119);

	/**
	 * @module koa-router
	 */

	module.exports = Router;

	/**
	 * Create a new router.
	 *
	 * @example
	 *
	 * Basic usage:
	 *
	 * ```javascript
	 * var app = require('koa')();
	 * var router = require('koa-router')();
	 *
	 * router.get('/', function *(next) {...});
	 *
	 * app
	 *   .use(router.routes())
	 *   .use(router.allowedMethods());
	 * ```
	 *
	 * @alias module:koa-router
	 * @param {Object=} opts
	 * @param {String=} opts.prefix prefix router paths
	 * @constructor
	 */

	function Router(opts) {
	  if (!(this instanceof Router)) {
	    return new Router(opts);
	  }

	  this.opts = opts || {};
	  this.methods = this.opts.methods || [
	    'HEAD',
	    'OPTIONS',
	    'GET',
	    'PUT',
	    'PATCH',
	    'POST',
	    'DELETE'
	  ];

	  this.params = {};
	  this.stack = [];
	};

	/**
	 * Create `router.verb()` methods, where *verb* is one of the HTTP verbes such
	 * as `router.get()` or `router.post()`.
	 *
	 * Match URL patterns to callback functions or controller actions using `router.verb()`,
	 * where **verb** is one of the HTTP verbs such as `router.get()` or `router.post()`.
	 *
	 * ```javascript
	 * router
	 *   .get('/', function *(next) {
	 *     this.body = 'Hello World!';
	 *   })
	 *   .post('/users', function *(next) {
	 *     // ...
	 *   })
	 *   .put('/users/:id', function *(next) {
	 *     // ...
	 *   })
	 *   .del('/users/:id', function *(next) {
	 *     // ...
	 *   });
	 * ```
	 *
	 * Route paths will be translated to regular expressions using
	 * [path-to-regexp](https://github.com/pillarjs/path-to-regexp).
	 *
	 * Query strings will not be considered when matching requests.
	 *
	 * #### Named routes
	 *
	 * Routes can optionally have names. This allows generation of URLs and easy
	 * renaming of URLs during development.
	 *
	 * ```javascript
	 * router.get('user', '/users/:id', function *(next) {
	 *  // ...
	 * });
	 *
	 * router.url('user', 3);
	 * // => "/users/3"
	 * ```
	 *
	 * #### Multiple middleware
	 *
	 * Multiple middleware may be given:
	 *
	 * ```javascript
	 * router.get(
	 *   '/users/:id',
	 *   function *(next) {
	 *     this.user = yield User.findOne(this.params.id);
	 *     yield next;
	 *   },
	 *   function *(next) {
	 *     console.log(this.user);
	 *     // => { id: 17, name: "Alex" }
	 *   }
	 * );
	 * ```
	 *
	 * ### Nested routers
	 *
	 * Nesting routers is supported:
	 *
	 * ```javascript
	 * var forums = new Router();
	 * var posts = new Router();
	 *
	 * posts.get('/', function *(next) {...});
	 * posts.get('/:pid', function *(next) {...});
	 * forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());
	 *
	 * // responds to "/forums/123/posts" and "/forums/123/posts/123"
	 * app.use(forums.routes());
	 * ```
	 *
	 * #### Router prefixes
	 *
	 * Route paths can be prefixed at the router level:
	 *
	 * ```javascript
	 * var router = new Router({
	 *   prefix: '/users'
	 * });
	 *
	 * router.get('/', ...); // responds to "/users"
	 * router.get('/:id', ...); // responds to "/users/:id"
	 * ```
	 *
	 * #### URL parameters
	 *
	 * Named route parameters are captured and added to `ctx.params`.
	 *
	 * ```javascript
	 * router.get('/:category/:title', function *(next) {
	 *   console.log(this.params);
	 *   // => { category: 'programming', title: 'how-to-node' }
	 * });
	 * ```
	 *
	 * @name get|put|post|patch|delete
	 * @memberof module:koa-router.prototype
	 * @param {String} path
	 * @param {Function=} middleware route middleware(s)
	 * @param {Function} callback route callback
	 * @returns {Router}
	 */

	methods.forEach(function (method) {
	  Router.prototype[method] = function (name, path, middleware) {
	    var middleware;

	    if (typeof path === 'string' || path instanceof RegExp) {
	      middleware = Array.prototype.slice.call(arguments, 2);
	    } else {
	      middleware = Array.prototype.slice.call(arguments, 1);
	      path = name;
	      name = null;
	    }

	    this.register(path, [method], middleware, {
	      name: name
	    });

	    return this;
	  };
	});

	// Alias for `router.delete()` because delete is a reserved word
	Router.prototype.del = Router.prototype['delete'];

	/**
	 * Use given middleware(s) before route callback.
	 *
	 * Only runs if any route is matched. If a path is given, the middleware will
	 * run for any routes that include that path.
	 *
	 * @example
	 *
	 * ```javascript
	 * router.use(session(), authorize());
	 *
	 * // use middleware only with given path
	 * router.use('/users', userAuth());
	 *
	 * app.use(router.routes());
	 * ```
	 *
	 * @param {String=} path
	 * @param {Function} middleware
	 * @param {Function=} ...
	 * @returns {Router}
	 */

	Router.prototype.use = function () {
	  var router = this;
	  var middleware = Array.prototype.slice.call(arguments);
	  var path;

	  // support array of paths
	  if (Array.isArray(middleware[0]) && typeof middleware[0][0] === 'string') {
	    middleware[0].forEach(function (p) {
	      router.use.apply(router, [p].concat(middleware.slice(1)));
	    });

	    return this;
	  }

	  if (typeof middleware[0] === 'string') {
	    path = middleware.shift();
	  }

	  // filter out nested routers from filter
	  middleware = middleware.filter(function (fn) {
	    if (fn.router) {
	      fn.router.stack.forEach(function (layer) {
	        if (path) layer.setPrefix(path);
	        if (router.opts.prefix) layer.setPrefix(router.opts.prefix);
	        router.stack.push(layer);
	      });

	      if (router.params) {
	        Object.keys(router.params).forEach(function (key) {
	          fn.router.param(key, router.params[key]);
	        });
	      }

	      return false;
	    }

	    return true;
	  });

	  if (middleware.length) {
	    router.register(path || '(.*)', [], middleware, {
	      end: false
	    });
	  }

	  return this;
	};

	/**
	 * Set the path prefix for a Router instance that was already initialized.
	 *
	 * @example
	 *
	 * ```javascript
	 * router.prefix('/things/:thing_id')
	 * ```
	 *
	 * @param {String} prefix
	 * @returns {Router}
	 */

	Router.prototype.prefix = function (prefix) {
	  prefix = prefix.replace(/\/$/, '');

	  this.opts.prefix = prefix;

	  this.stack.forEach(function (route) {
	    route.setPrefix(prefix);
	  });

	  return this;
	};

	/**
	 * Returns router middleware which dispatches a route matching the request.
	 *
	 * @returns {Function}
	 */

	Router.prototype.routes = Router.prototype.middleware = function () {
	  var router = this;

	  var dispatch = function *dispatch(next) {
	    debug('%s %s', this.method, this.path);

	    var path = router.opts.routerPath || this.routerPath || this.path;
	    var matched = router.match(path, this.method);
	    var layer, i, ii;

	    if (this.matched) {
	      this.matched.push.apply(this.matched, matched.path);
	    } else {
	      this.matched = matched.path;
	    }

	    if (matched.pathAndMethod.length) {
	      i = matched.pathAndMethod.length;
	      
	      var mostSpecificPath = matched.pathAndMethod[matched.pathAndMethod.length - 1].path
	      this._matchedRoute = mostSpecificPath

	      while (matched.route && i--) {
	        layer = matched.pathAndMethod[i];
	        ii = layer.stack.length;
	        this.captures = layer.captures(path, this.captures);
	        this.params = layer.params(path, this.captures, this.params);
	        debug('dispatch %s %s', layer.path, layer.regexp);

	        while (ii--) {
	          if (layer.stack[ii].constructor.name === 'GeneratorFunction') {
	            next = layer.stack[ii].call(this, next);
	          } else {
	            next = Promise.resolve(layer.stack[ii].call(this, next));
	          }
	        }
	      }
	    }

	    if (typeof next.next === 'function') {
	      yield *next;
	    } else {
	      yield next;
	    }
	  };

	  dispatch.router = this;

	  return dispatch;
	};

	/**
	 * Returns separate middleware for responding to `OPTIONS` requests with
	 * an `Allow` header containing the allowed methods, as well as responding
	 * with `405 Method Not Allowed` and `501 Not Implemented` as appropriate.
	 *
	 * @example
	 *
	 * ```javascript
	 * var app = koa();
	 * var router = router();
	 *
	 * app.use(router.routes());
	 * app.use(router.allowedMethods());
	 * ```
	 *
	 * @param {Object=} options
	 * @param {Boolean=} options.throw throw error instead of setting status and header
	 * @param {Function=} options.notImplemented throw the returned value in place of the default NotImplemented error
	 * @param {Function=} options.methodNotAllowed throw the returned value in place of the default MethodNotAllowed error
	 * @returns {Function}
	 */

	Router.prototype.allowedMethods = function (options) {
	  options = options || {};
	  var implemented = this.methods;

	  return function *allowedMethods(next) {
	    yield *next;

	    var allowed = {};

	    if (!this.status || this.status === 404) {
	      this.matched.forEach(function (route) {
	        route.methods.forEach(function (method) {
	          allowed[method] = method;
	        });
	      });

	      var allowedArr = Object.keys(allowed);

	      if (!~implemented.indexOf(this.method)) {
	        if (options.throw) {
	          var notImplementedThrowable;
	          if (typeof options.notImplemented === 'function') {
	            notImplementedThrowable = options.notImplemented(); // set whatever the user returns from their function
	          } else {
	            notImplementedThrowable = new HttpError.NotImplemented();
	          }
	          throw notImplementedThrowable;
	        } else {
	          this.status = 501;
	          this.set('Allow', allowedArr);
	        }
	      } else if (allowedArr.length) {
	        if (this.method === 'OPTIONS') {
	          this.status = 204;
	        } else if (!allowed[this.method]) {
	          if (options.throw) {
	            var notAllowedThrowable;
	            if (typeof options.methodNotAllowed === 'function') {
	              notAllowedThrowable = options.methodNotAllowed(); // set whatever the user returns from their function
	            } else {
	              notAllowedThrowable = new HttpError.MethodNotAllowed();
	            }
	            throw notAllowedThrowable;
	          } else {
	            this.status = 405;
	          }
	        }
	        this.set('Allow', allowedArr);
	      }
	    }
	  };
	};

	/**
	 * Register route with all methods.
	 *
	 * @param {String} name Optional.
	 * @param {String} path
	 * @param {Function=} middleware You may also pass multiple middleware.
	 * @param {Function} callback
	 * @returns {Router}
	 * @private
	 */

	Router.prototype.all = function (name, path, middleware) {
	  var middleware;

	  if (typeof path === 'string') {
	    middleware = Array.prototype.slice.call(arguments, 2);
	  } else {
	    middleware = Array.prototype.slice.call(arguments, 1);
	    path = name;
	    name = null;
	  }

	  this.register(path, methods, middleware, {
	    name: name
	  });

	  return this;
	};

	/**
	 * Redirect `source` to `destination` URL with optional 30x status `code`.
	 *
	 * Both `source` and `destination` can be route names.
	 *
	 * ```javascript
	 * router.redirect('/login', 'sign-in');
	 * ```
	 *
	 * This is equivalent to:
	 *
	 * ```javascript
	 * router.all('/login', function *() {
	 *   this.redirect('/sign-in');
	 *   this.status = 301;
	 * });
	 * ```
	 *
	 * @param {String} source URL or route name.
	 * @param {String} destination URL or route name.
	 * @param {Number} code HTTP status code (default: 301).
	 * @returns {Router}
	 */

	Router.prototype.redirect = function (source, destination, code) {
	  // lookup source route by name
	  if (source[0] !== '/') {
	    source = this.url(source);
	  }

	  // lookup destination route by name
	  if (destination[0] !== '/') {
	    destination = this.url(destination);
	  }

	  return this.all(source, function *() {
	    this.redirect(destination);
	    this.status = code || 301;
	  });
	};

	/**
	 * Create and register a route.
	 *
	 * @param {String} path Path string.
	 * @param {Array.<String>} methods Array of HTTP verbs.
	 * @param {Function} middleware Multiple middleware also accepted.
	 * @returns {Layer}
	 * @private
	 */

	Router.prototype.register = function (path, methods, middleware, opts) {
	  opts = opts || {};

	  var stack = this.stack;

	  // create route
	  var route = new Layer(path, methods, middleware, {
	    end: opts.end === false ? opts.end : true,
	    name: opts.name,
	    sensitive: opts.sensitive || this.opts.sensitive || false,
	    strict: opts.strict || this.opts.strict || false,
	    prefix: opts.prefix || this.opts.prefix || "",
	  });

	  if (this.opts.prefix) {
	    route.setPrefix(this.opts.prefix);
	  }

	  // add parameter middleware
	  Object.keys(this.params).forEach(function (param) {
	    route.param(param, this.params[param]);
	  }, this);

	  // register route with router
	  if (methods.length || !stack.length) {
	    // if we don't have parameters, put before any with same route
	    // nesting level but with parameters
	    var added = false;

	    if (!route.paramNames.length) {
	      var routeNestingLevel = route.path.toString().split('/').length;

	      added = stack.some(function (m, i) {
	        var mNestingLevel = m.path.toString().split('/').length;
	        var isParamRoute = !!m.paramNames.length;
	        if (routeNestingLevel === mNestingLevel && isParamRoute) {
	          return stack.splice(i, 0, route);
	        }
	      });
	    }

	    if (!added) stack.push(route);
	  } else {
	    stack.some(function (m, i) {
	      if (!m.methods.length && i === stack.length - 1) {
	        return stack.push(route);
	      } else if (m.methods.length) {
	        if (stack[i - 1]) {
	          return stack.splice(i, 0, route);
	        } else {
	          return stack.unshift(route);
	        }
	      }
	    });
	  }

	  return route;
	};

	/**
	 * Lookup route with given `name`.
	 *
	 * @param {String} name
	 * @returns {Layer|false}
	 */

	Router.prototype.route = function (name) {
	  var routes = this.stack;

	  for (var len = routes.length, i=0; i<len; i++) {
	    if (routes[i].name && routes[i].name === name) {
	      return routes[i];
	    }
	  }

	  return false;
	};

	/**
	 * Generate URL for route. Takes a route name and map of named `params`.
	 *
	 * ```javascript
	 * router.get('user', '/users/:id', function *(next) {
	 *  // ...
	 * });
	 *
	 * router.url('user', 3);
	 * // => "/users/3"
	 *
	 * router.url('user', { id: 3 });
	 * // => "/users/3"
	 * ```
	 *
	 * @param {String} name route name
	 * @param {Object} params url parameters
	 * @returns {String|Error}
	 */

	Router.prototype.url = function (name, params) {
	  var route = this.route(name);

	  if (route) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return route.url.apply(route, args);
	  }

	  return new Error("No route found for name: " + name);
	};

	/**
	 * Match given `path` and return corresponding routes.
	 *
	 * @param {String} path
	 * @param {String} method
	 * @returns {Object.<path, pathAndMethod>} returns layers that matched path and
	 * path and method.
	 * @private
	 */

	Router.prototype.match = function (path, method) {
	  var layers = this.stack;
	  var layer;
	  var matched = {
	    path: [],
	    pathAndMethod: [],
	    route: false
	  };

	  for (var len = layers.length, i = 0; i < len; i++) {
	    layer = layers[i];

	    debug('test %s %s', layer.path, layer.regexp);

	    if (layer.match(path)) {
	      matched.path.push(layer);

	      if (layer.methods.length === 0 || ~layer.methods.indexOf(method)) {
	        matched.pathAndMethod.push(layer);
	        if (layer.methods.length) matched.route = true;
	      }
	    }
	  }

	  return matched;
	};

	/**
	 * Run middleware for named route parameters. Useful for auto-loading or
	 * validation.
	 *
	 * @example
	 *
	 * ```javascript
	 * router
	 *   .param('user', function *(id, next) {
	 *     this.user = users[id];
	 *     if (!this.user) return this.status = 404;
	 *     yield next;
	 *   })
	 *   .get('/users/:user', function *(next) {
	 *     this.body = this.user;
	 *   })
	 *   .get('/users/:user/friends', function *(next) {
	 *     this.body = yield this.user.getFriends();
	 *   })
	 *   // /users/3 => {"id": 3, "name": "Alex"}
	 *   // /users/3/friends => [{"id": 4, "name": "TJ"}]
	 * ```
	 *
	 * @param {String} param
	 * @param {Function} middleware
	 * @returns {Router}
	 */

	Router.prototype.param = function (param, middleware) {
	  this.params[param] = middleware;
	  this.stack.forEach(function (route) {
	    route.param(param, middleware);
	  });
	  return this;
	};

	/**
	 * Generate URL from url pattern and given `params`.
	 *
	 * @example
	 *
	 * ```javascript
	 * var url = Router.url('/users/:id', {id: 1});
	 * // => "/users/1"
	 * ```
	 *
	 * @param {String} path url pattern
	 * @param {Object} params url parameters
	 * @returns {String}
	 */
	Router.url = function (path, params) {
	    return Layer.prototype.url.call({path: path}, params);
	};


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(111);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(112);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	
	var statuses = __webpack_require__(114);
	var inherits = __webpack_require__(116);

	function toIdentifier(str) {
	  return str.split(' ').map(function (token) {
	    return token.slice(0, 1).toUpperCase() + token.slice(1)
	  }).join('').replace(/[^ _0-9a-z]/gi, '')
	}

	exports = module.exports = function httpError() {
	  // so much arity going on ~_~
	  var err;
	  var msg;
	  var status = 500;
	  var props = {};
	  for (var i = 0; i < arguments.length; i++) {
	    var arg = arguments[i];
	    if (arg instanceof Error) {
	      err = arg;
	      status = err.status || err.statusCode || status;
	      continue;
	    }
	    switch (typeof arg) {
	      case 'string':
	        msg = arg;
	        break;
	      case 'number':
	        status = arg;
	        break;
	      case 'object':
	        props = arg;
	        break;
	    }
	  }

	  if (typeof status !== 'number' || !statuses[status]) {
	    status = 500
	  }

	  // constructor
	  var HttpError = exports[status]

	  if (!err) {
	    // create error
	    err = HttpError
	      ? new HttpError(msg)
	      : new Error(msg || statuses[status])
	    Error.captureStackTrace(err, httpError)
	  }

	  if (!HttpError || !(err instanceof HttpError)) {
	    // add properties to generic error
	    err.expose = status < 500
	    err.status = err.statusCode = status
	  }

	  for (var key in props) {
	    if (key !== 'status' && key !== 'statusCode') {
	      err[key] = props[key]
	    }
	  }

	  return err;
	};

	var HttpError = exports.HttpError = function HttpError() {
	  throw new TypeError('cannot construct abstract class');
	};

	inherits(HttpError, Error);

	// create generic error objects
	var codes = statuses.codes.filter(function (num) {
	  return num >= 400;
	});

	codes.forEach(function (code) {
	  var name = toIdentifier(statuses[code])
	  var className = name.match(/Error$/) ? name : name + 'Error'

	  if (code >= 500) {
	    var ServerError = function ServerError(msg) {
	      var self = new Error(msg != null ? msg : statuses[code])
	      Error.captureStackTrace(self, ServerError)
	      self.__proto__ = ServerError.prototype
	      Object.defineProperty(self, 'name', {
	        enumerable: false,
	        configurable: true,
	        value: className,
	        writable: true
	      })
	      return self
	    }
	    inherits(ServerError, HttpError);
	    ServerError.prototype.status =
	    ServerError.prototype.statusCode = code;
	    ServerError.prototype.expose = false;
	    exports[code] =
	    exports[name] = ServerError
	    return;
	  }

	  var ClientError = function ClientError(msg) {
	    var self = new Error(msg != null ? msg : statuses[code])
	    Error.captureStackTrace(self, ClientError)
	    self.__proto__ = ClientError.prototype
	    Object.defineProperty(self, 'name', {
	      enumerable: false,
	      configurable: true,
	      value: className,
	      writable: true
	    })
	    return self
	  }
	  inherits(ClientError, HttpError);
	  ClientError.prototype.status =
	  ClientError.prototype.statusCode = code;
	  ClientError.prototype.expose = true;
	  exports[code] =
	  exports[name] = ClientError
	  return;
	});

	// backwards-compatibility
	exports["I'mateapot"] = exports.ImATeapot


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	
	var codes = __webpack_require__(115);

	module.exports = status;

	// [Integer...]
	status.codes = Object.keys(codes).map(function (code) {
	  code = ~~code;
	  var msg = codes[code];
	  status[code] = msg;
	  status[msg] = status[msg.toLowerCase()] = code;
	  return code;
	});

	// status codes for redirects
	status.redirect = {
	  300: true,
	  301: true,
	  302: true,
	  303: true,
	  305: true,
	  307: true,
	  308: true,
	};

	// status codes for empty bodies
	status.empty = {
	  204: true,
	  205: true,
	  304: true,
	};

	// status codes for when you should retry the request
	status.retry = {
	  502: true,
	  503: true,
	  504: true,
	};

	function status(code) {
	  if (typeof code === 'number') {
	    if (!status[code]) throw new Error('invalid status code: ' + code);
	    return code;
	  }

	  if (typeof code !== 'string') {
	    throw new TypeError('code must be a number or string');
	  }

	  // '403'
	  var n = parseInt(code, 10)
	  if (!isNaN(n)) {
	    if (!status[n]) throw new Error('invalid status code: ' + n);
	    return n;
	  }

	  n = status[code.toLowerCase()];
	  if (!n) throw new Error('invalid status message: "' + code + '"');
	  return n;
	}


/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
		"100": "Continue",
		"101": "Switching Protocols",
		"102": "Processing",
		"200": "OK",
		"201": "Created",
		"202": "Accepted",
		"203": "Non-Authoritative Information",
		"204": "No Content",
		"205": "Reset Content",
		"206": "Partial Content",
		"207": "Multi-Status",
		"208": "Already Reported",
		"226": "IM Used",
		"300": "Multiple Choices",
		"301": "Moved Permanently",
		"302": "Found",
		"303": "See Other",
		"304": "Not Modified",
		"305": "Use Proxy",
		"306": "(Unused)",
		"307": "Temporary Redirect",
		"308": "Permanent Redirect",
		"400": "Bad Request",
		"401": "Unauthorized",
		"402": "Payment Required",
		"403": "Forbidden",
		"404": "Not Found",
		"405": "Method Not Allowed",
		"406": "Not Acceptable",
		"407": "Proxy Authentication Required",
		"408": "Request Timeout",
		"409": "Conflict",
		"410": "Gone",
		"411": "Length Required",
		"412": "Precondition Failed",
		"413": "Payload Too Large",
		"414": "URI Too Long",
		"415": "Unsupported Media Type",
		"416": "Range Not Satisfiable",
		"417": "Expectation Failed",
		"418": "I'm a teapot",
		"422": "Unprocessable Entity",
		"423": "Locked",
		"424": "Failed Dependency",
		"425": "Unordered Collection",
		"426": "Upgrade Required",
		"428": "Precondition Required",
		"429": "Too Many Requests",
		"431": "Request Header Fields Too Large",
		"451": "Unavailable For Legal Reasons",
		"500": "Internal Server Error",
		"501": "Not Implemented",
		"502": "Bad Gateway",
		"503": "Service Unavailable",
		"504": "Gateway Timeout",
		"505": "HTTP Version Not Supported",
		"506": "Variant Also Negotiates",
		"507": "Insufficient Storage",
		"508": "Loop Detected",
		"509": "Bandwidth Limit Exceeded",
		"510": "Not Extended",
		"511": "Network Authentication Required"
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * methods
	 * Copyright(c) 2013-2014 TJ Holowaychuk
	 * Copyright(c) 2015-2016 Douglas Christopher Wilson
	 * MIT Licensed
	 */

	'use strict';

	/**
	 * Module dependencies.
	 * @private
	 */

	var http = __webpack_require__(118);

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = getCurrentNodeMethods() || getBasicNodeMethods();

	/**
	 * Get the current Node.js methods.
	 * @private
	 */

	function getCurrentNodeMethods() {
	  return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {
	    return method.toLowerCase();
	  });
	}

	/**
	 * Get the "basic" Node.js methods, a snapshot from Node.js 0.10.
	 * @private
	 */

	function getBasicNodeMethods() {
	  return [
	    'get',
	    'post',
	    'put',
	    'head',
	    'delete',
	    'options',
	    'trace',
	    'copy',
	    'lock',
	    'mkcol',
	    'move',
	    'purge',
	    'propfind',
	    'proppatch',
	    'unlock',
	    'report',
	    'mkactivity',
	    'checkout',
	    'merge',
	    'm-search',
	    'notify',
	    'subscribe',
	    'unsubscribe',
	    'patch',
	    'search',
	    'connect'
	  ];
	}


/***/ },
/* 118 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var debug = __webpack_require__(110)('koa-router');
	var pathToRegExp = __webpack_require__(120);

	module.exports = Layer;

	/**
	 * Initialize a new routing Layer with given `method`, `path`, and `middleware`.
	 *
	 * @param {String|RegExp} path Path string or regular expression.
	 * @param {Array} methods Array of HTTP verbs.
	 * @param {Array} middleware Layer callback/middleware or series of.
	 * @param {Object=} opts
	 * @param {String=} opts.name route name
	 * @param {String=} opts.sensitive case sensitive (default: false)
	 * @param {String=} opts.strict require the trailing slash (default: false)
	 * @returns {Layer}
	 * @private
	 */

	function Layer(path, methods, middleware, opts) {
	  this.opts = opts || {};
	  this.name = this.opts.name || null;
	  this.methods = [];
	  this.paramNames = [];
	  this.stack = Array.isArray(middleware) ? middleware : [middleware];

	  methods.forEach(function(method) {
	    var l = this.methods.push(method.toUpperCase());
	    if (this.methods[l-1] === 'GET') {
	      this.methods.unshift('HEAD');
	    }
	  }, this);

	  // ensure middleware is a function
	  this.stack.forEach(function(fn) {
	    var type = (typeof fn);
	    if (type !== 'function') {
	      throw new Error(
	        methods.toString() + " `" + (this.opts.name || path) +"`: `middleware` "
	        + "must be a function, not `" + type + "`"
	      );
	    }
	  }, this);

	  this.path = path;
	  this.regexp = pathToRegExp(path, this.paramNames, this.opts);

	  debug('defined route %s %s', this.methods, this.opts.prefix + this.path);
	};

	/**
	 * Returns whether request `path` matches route.
	 *
	 * @param {String} path
	 * @returns {Boolean}
	 * @private
	 */

	Layer.prototype.match = function (path) {
	  return this.regexp.test(path);
	};

	/**
	 * Returns map of URL parameters for given `path` and `paramNames`.
	 *
	 * @param {String} path
	 * @param {Array.<String>} captures
	 * @param {Object=} existingParams
	 * @returns {Object}
	 * @private
	 */

	Layer.prototype.params = function (path, captures, existingParams) {
	  var params = existingParams || {};

	  for (var len = captures.length, i=0; i<len; i++) {
	    if (this.paramNames[i]) {
	      var c = captures[i];
	      params[this.paramNames[i].name] = c ? safeDecodeURIComponent(c) : c;
	    }
	  }

	  return params;
	};

	/**
	 * Returns array of regexp url path captures.
	 *
	 * @param {String} path
	 * @returns {Array.<String>}
	 * @private
	 */

	Layer.prototype.captures = function (path) {
	  return path.match(this.regexp).slice(1);
	};

	/**
	 * Generate URL for route using given `params`.
	 *
	 * @example
	 *
	 * ```javascript
	 * var route = new Layer(['GET'], '/users/:id', fn);
	 *
	 * route.url({ id: 123 }); // => "/users/123"
	 * ```
	 *
	 * @param {Object} params url parameters
	 * @returns {String}
	 * @private
	 */

	Layer.prototype.url = function (params) {
	  var args = params;
	  var url = this.path;
	  var toPath = pathToRegExp.compile(url);

	  // argument is of form { key: val }
	  if (typeof params != 'object') {
	    args = Array.prototype.slice.call(arguments);
	  }

	  if (args instanceof Array) {
	    var tokens = pathToRegExp.parse(url);
	    var replace = {};
	    for (var len = tokens.length, i=0, j=0; i<len; i++) {
	      if (tokens[i].name) replace[tokens[i].name] = args[j++];
	    }
	    return toPath(replace);
	  }
	  else {
	    return toPath(params);
	  }
	};

	/**
	 * Run validations on route named parameters.
	 *
	 * @example
	 *
	 * ```javascript
	 * router
	 *   .param('user', function *(id, next) {
	 *     this.user = users[id];
	 *     if (!user) return this.status = 404;
	 *     yield next;
	 *   })
	 *   .get('/users/:user', function *(next) {
	 *     this.body = this.user;
	 *   });
	 * ```
	 *
	 * @param {String} param
	 * @param {Function} middleware
	 * @returns {Layer}
	 * @private
	 */

	Layer.prototype.param = function (param, fn) {
	  var stack = this.stack;
	  var params = this.paramNames;
	  var middleware = function *(next) {
	    next = fn.call(this, this.params[param], next);
	    if (typeof next.next === 'function') {
	      yield *next;
	    } else {
	      yield Promise.resolve(next);
	    }
	  };
	  middleware.param = param;

	  params.forEach(function (p, i) {
	    var prev = params[i - 1];

	    if (param === p.name) {
	      // insert param middleware in order params appear in path
	      if (prev) {
	        if (!stack.some(function (m, i) {
	          if (m.param === prev.name) {
	            return stack.splice(i, 0, middleware);
	          }
	        })) {
	          stack.some(function (m, i) {
	            if (!m.param) {
	              return stack.splice(i, 0, middleware);
	            }
	          });
	        }
	      } else {
	        stack.unshift(middleware);
	      }
	    }
	  });

	  return this;
	};

	/**
	 * Prefix route path.
	 *
	 * @param {String} prefix
	 * @returns {Layer}
	 * @private
	 */

	Layer.prototype.setPrefix = function (prefix) {
	  if (this.path) {
	    this.path = prefix + this.path;
	    this.paramNames = [];
	    this.regexp = pathToRegExp(this.path, this.paramNames, this.opts);
	  }

	  return this;
	};

	/**
	 * Safe decodeURIComponent, won't throw any error.
	 * If `decodeURIComponent` error happen, just return the original value.
	 *
	 * @param {String} text
	 * @returns {String} URL decode original string.
	 * @private
	 */

	function safeDecodeURIComponent(text) {
	  try {
	    return decodeURIComponent(text);
	  } catch (e) {
	    return text;
	  }
	}


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(121)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var suffix = res[6]
	    var asterisk = res[7]

	    var repeat = suffix === '+' || suffix === '*'
	    var optional = suffix === '?' || suffix === '*'
	    var delimiter = prefix || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^' + tokens[i].pattern + '$')
	    }
	  }

	  return function (obj) {
	    var path = ''
	    var data = obj || {}

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encodeURIComponent(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = encodeURIComponent(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = token.pattern

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (prefix) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = keys
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys, options)
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(path, keys, options)
	  }

	  return stringToRegexp(path, keys, options)
	}


/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }
/******/ ]);