////require('babel-polyfill');
//require('babel-core/register')({
//  sourceMaps: "inline",
//  stage: 1,
//  blacklist: [ "regenerator" ],
//  optional: [ "asyncToGenerator" ]
//});

//
//require('./app');

require("babel-polyfill");
require("babel-core/register")({
  ignore: /node_modules/,
  presets: ['es2015', 'stage-0']
});

//require('./app.js');
require('./mods/user/test.js');