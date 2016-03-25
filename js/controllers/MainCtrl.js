/**
 * Created by wyd on 16/3/3.
 */
angular.module('app', ['ui.ace'])
  .controller('MainCtrl', ['$scope', '$http', '$rootScope', '$q', function ($scope, $http, $rootScope, $q) {


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

    template.helper('kToNumber', function (v) {
      v = parseFloat(v);
      return isNaN(v) ? 0 : v;
    });

    template.helper('kToPrice', function (v) {
      if (v == null) return '';
      return '￥' + parseFloat(v);
    });

    var Mod = {};
    Mod.RE_HTML_JS_COMMENT = /<!--[\s\S]*?-->/gm;
    Mod.RE_CSS_JS_COMMENT = /\/\*[\s\S]*?\*\//gm;
    Mod.RE_JS_COMMENT = /\/\/.*/g;
    Mod.RE_BLANK_LINE = /[\r\n]([\r\n\s]*)?[\r\n]/gm;
    Mod.RE_CSS_FORMAT = /([{;])[\r\n\s]+|[\r\n\s]+([}])/g;


    $http.get('./ng_index.json').success(function (res) {

      var MOD_CONFIG = {
        MAPS: {},
        IMG_DIR: 'imgs/',
        NAV_LIST: [
          {id: 'l1', type: 'left'},
          {id: 'r1', type: 'right'}
        ],
        BRAND_LIST: [
          {id: 'h1', hashId: ''},
          {id: 'h2', hashId: '2'}
        ],
        LIST: [],
        DATA: {
          BRAND: {
            VIP_NH: ["670259", "686604"],
            VIP_SH: ["670259", "686604"],
            VIP_CD: ["670259", "686604"],
            VIP_BJ: ["670259", "686604"],
            VIP_HZ: ["670259", "686604"]
          },
          PRODUCT: {
            VIP_NH: ["670259-92551450", "670259-92551457", "670259-92551449"],
            VIP_SH: ["670259-92551450", "670259-92551457", "670259-92551449"],
            VIP_CD: ["670259-92551450", "670259-92551457", "670259-92551449"],
            VIP_BJ: ["670259-92551450", "670259-92551457", "670259-92551449"],
            VIP_HZ: ["670259-92551450", "670259-92551457", "670259-92551449"]
          }
        }
      };

      MOD_CONFIG = _.defaults(res, MOD_CONFIG);

      // 处理data数据
      _.each(MOD_CONFIG.DATA, function (val, key, data) {
        data['_' + key] = val;
        data[key] = angular.toJson(val);
      });

      var promises = [];

      //var values = _.values(config.MAPS);
      //
      //var flatten = _.flatten(values);

      _.forEach(MOD_CONFIG.MAPS, function (mod, id) {
        console.log(mod)


        if (mod.dir) {
          var id = id.toLocaleUpperCase();

          //MOD_CONFIG_MAPS[id] = mod;

          var reqs = [
            req(mod, 'html'),
            req(mod, 'css'),
            req(mod, 'js')
          ];

          promises.push(reqs);
        }
      });


      $q.all(promises).then(function () {
        console.log('init over', MOD_CONFIG);

        $rootScope.MOD_CONFIG = MOD_CONFIG;
        $rootScope.MOD_CONFIG_MAPS = MOD_CONFIG.MAPS;

        console.log($rootScope.MOD_CONFIG_MAPS)

      });


      function req(mod, suffixName) {
        //console.log(mod, suffixName);
        return $http.get(mod.dir + '/index.' + suffixName)
          .success(function (res) {
            //console.log('res', res);
            mod[suffixName] = res;
          })
          .error(function () {
            mod[suffixName] = '';
          });
      }

    });


    $rootScope.updateCode = function (module) {

      _.forEach($rootScope.MOD_CONFIG_MAPS, function (mod) {
        if (module.radio && module !== mod && module.radio === mod.radio) {
          mod.isChecked = false;
        }
      });

      var values = _.values($rootScope.MOD_CONFIG_MAPS);

      var filter = _.filter(values, function (mod) {
        return mod.dir && mod.isChecked;
      });

      var map = _.map(filter, function (mod) {
        return mod.html;
      });

      var code = map.join('\n');

      //console.log('code', code);

      var re = /\{\{#.+?}}/;

      // 渲染嵌套模版
      while (re.test(code)) {

        var render = template.compile(code);

        code = render($rootScope);

      }

      //console.log('render code', code);

      $rootScope.CODE = code;
    };


    $scope.aceLoaded = function (_editor) {

      // Options
      _editor.setReadOnly(true);

    };

    $scope.aceChanged = function (e) {
      //
    };

  }]);