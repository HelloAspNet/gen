//var browserify = require('browserify');
var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var spriter = require('gulp-css-spriter');
var clean = require('gulp-clean');
var contentIncluder = require('gulp-content-includer');
var less = require('gulp-less');
var replace = require('gulp-replace');

var template = require('art-template');
template.config('base', __dirname);
//template.config('openTag', '/*{{');
//template.config('closeTag', '}}*/');


var tpl = (function () {
  var through2 = require('through2');

  template.helper('kToIndex', function (i, format) {
    i += 1;
    if (!format) return i;

    var len = ('' + format).length;
    i = 0..toFixed(len) + i;
    i = i.substring(i.length - len);
    return i;
  });

  template.helper('kToEnIndex', function (i) {
    return 'abcdefghijklmnopqrstuvwxyz'.charAt(i % 26);
  });

  template.helper('kToInt', function (i, format) {
    i += 1;
    if (!format) return i;

    var len = ('' + format).length;
    i = 0..toFixed(len) + i;
    i = i.substring(i.length - len);
    return i;
  });


  return function (data) {
    var stream = through2.obj(function (file, enc, callback) {
      var html = file.contents.toString();
      var render = template.compile(html);
      var newContent = render(data);
      file.contents = new Buffer(newContent);
      this.push(file);
      callback();
    });
    return stream;
  };
})();

(function () {

  gulp.task('tpl-copy', function () {
    return gulp.src('./tpl/*.js')
      .pipe(rename({}))
      .pipe(gulp.dest('./src'));
  });

  gulp.task('tpl-render', function () {

    var options = {
      template: false,       // 使用artTemplate模版【boolean】
      layout: 'position',   // 布局方式【string：position/float】
      bodyWidth: 1000,      // 页面宽度【number】
      header: true,         // 页头模块【boolean】
      footer: true,         // 页脚模块【boolean】
      navigators: ['right'],    // 导航模块【array：['left', 'right', 'top', 'bottom']】
      modules: new Array(27),   // 常规模块【array】
      products: new Array(3),   // 产品模块【array】
      brands: new Array(3),     // 品牌模块【array】
      coupons: new Array(1)     // 红包模块【array】
    };

    return gulp.src('./tpl/*.tt')
      .pipe(tpl(options))
      .pipe(rename(function(file){
        file.extname = '';
      }))
      .pipe(gulp.dest('./src'));
  });

  gulp.task('tpl-html-min', ['tpl-render'], function () {
    var options = {
      removeComments: false,        //清除HTML注释
      collapseWhitespace: false,    //压缩HTML
      collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,      //删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,     //删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
      minifyJS: false,  //压缩页面JS
      minifyCSS: false  //压缩页面CSS
    };

    return gulp.src('./src/*.html')
      .pipe(htmlmin(options))
      .pipe(gulp.dest('./src'));
  });

  gulp.task('init', ['tpl-render', 'tpl-copy', 'tpl-html-min']);

})();

//2
//var express = require('express');
//var app = express();
//var template = require('art-template');
//template.config('base', '');
//template.config('extname', '.html');
//app.engine('.html', template.__express);
//app.set('view engine', 'html');
////app.set('views', __dirname + '/views');


// clean
(function () {
  gulp.task('clean', function () {
    var options = {
      read: false
    };
    return gulp.src('./dist', options)
      .pipe(clean());
  });

  gulp.task('html-clean', function () {
    var options = {
      read: false
    };

    return gulp.src('./dist/*.html', options)
      .pipe(clean());
  });

  gulp.task('css-clean', function () {
    var options = {
      read: false
    };

    return gulp.src('./dist/*.css', options)
      .pipe(clean());
  });

  gulp.task('js-clean', function () {
    var options = {
      read: false
    };

    return gulp.src('./dist/*.js', options)
      .pipe(clean());
  });
})();

// min
(function () {

  gulp.task('min', ['html-min', 'css-min', 'js-min']);

  gulp.task('html-min', ['html-clean'], function () {
    var options = {
      removeComments: true,       //清除HTML注释
      collapseWhitespace: false,  //压缩HTML
      collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,      //删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,     //删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
      minifyJS: false,  //压缩页面JS
      minifyCSS: false  //压缩页面CSS
    };

    return gulp.src('./src/*.html')
      .pipe(htmlmin(options))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('css-min', ['css-clean'], function () {
    var options = {
      keepBreaks: true  //是否保留换行
    };

    return gulp.src('./src/*.less')
      .pipe(less())
      .pipe(minifyCSS(options))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('js-min', ['js-clean'], function () {
    var options = {
      mangle: false,
      output: {
        beautify: true
      },
      compress: {
        sequences: false,   //把语句用逗号连接起来
        drop_console: true,
        booleans: false,    //转换布尔值
        join_vars: false
      }
    };

    return gulp.src(['./src/*.js'])
      .pipe(uglify(options))
      .pipe(gulp.dest('./dist'));
  });
})();


gulp.task('concat', function () {

  // libs
  gulp.src([
    './js/template.js',
    './js/zepto.min.js'
  ]).pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/'));

  // photoswipe
  gulp.src([
    './photoswipe/photoswipe.min.js',
    './photoswipe/photoswipe-ui-default.min.js'
  ]).pipe(concat('photoswipe.js'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('copy', function () {
  //return gulp.src('./src/**.{}', )
  //  .pipe(gulp.dest('./dist'));
});


gulp.task('include', ['min'], function () {

  var options = {
    //dirname: '',
    //basename: '',
    //prefix: '',
    //suffix: '',
    //extname: '.html'
  };

  return gulp.src('./dist/*.html')

    .pipe(replace(/(<link[^>]+["'].+\?__insert["'][^>]*(\/)?>)/g, '<style>\n$1\n</style>'))
    .pipe(replace(/(<script[^>]+["'].+\?__insert["'][^>]*><\/script>)/g, '<script>\n$1\n</script>'))
    .pipe(contentIncluder({includerReg: /<link[^>]+["'](.+)\?__insert["'][^>]*(\/)?>/g}))
    .pipe(contentIncluder({includerReg: /<script[^>]+["'](.+)\?__insert["'][^>]*><\/script>/g}))

    .pipe(contentIncluder({
      includerReg: /[\t ]*\/\*#\s+include=([^ ]+)\s+\*\//g
    }))
    .pipe(rename(options))
    .pipe(gulp.dest('./dist'));
});


gulp.task('built', ['include'], function () {
  return gulp.src('./dist/*.html')
    .pipe(replace(/[\r\n]+\s*[\r\n]+/g, '\r\n'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('b2c-clean', function () {
  var options = {
    read: false
  };

  return gulp.src('./dist/*.b2c.html', options)
    .pipe(clean());
});


gulp.task('b2c', ['b2c-clean'], function () {

  var b2cTpl = [
    '<!doctype html>',
    '<html lang="zh">',
    '<head>',
    '  <meta charset="utf-8"/>',
    '  <meta http-equiv="x-dns-prefetch-control" content="on"/>',
    '  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>',
    '  <title></title>',
    '  {jscss}',
    '</head>',
    '<body>',
    '{header}',
    '<link type="text/css" href="http://h.vipstatic.com/upload/actpics/weipinshang/global/all.css" rel="stylesheet"/>',
    '$1',
    '{footer}',
    '</body>',
    '</html>'
  ];

  return gulp.src('./dist/*.html')
    .pipe(replace(/^([\s\S]*)$/gim, b2cTpl.join('\n')))
    .pipe(rename(function (file) {
      file.basename = file.basename.replace(/\.[^.]+/, '') + '.b2c';
    }))
    .pipe(gulp.dest('./dist'));
});
gulp.task('default', function () {

});