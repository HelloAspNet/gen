/**
 * Created by wyd on 16/3/3.
 */
angular.module('app', ['ui.ace'])
  .controller('MainCtrl', ['$scope', '$http', '$rootScope', '$q', function ($scope, $http, $rootScope, $q) {

    var MOD_MAPS = $rootScope.MOD_MAPS = {};

    $http.get('./ng_index.json').success(function (res) {

      $rootScope.CONFIG = res;

      var promises = [];

      var values = _.values(res);

      var flatten = _.flatten(values);

      _.forEach(flatten, function (mod) {

        if (mod.dir) {
          var id = mod.id.toLocaleUpperCase();

          MOD_MAPS[id] = mod;

          var reqs = [
            req(mod, 'html'),
            req(mod, 'css'),
            req(mod, 'js')
          ];

          promises.push(reqs);
        }
      });

      $q.all(promises).then(function () {
        console.log('init over', MOD_MAPS);
      });

      function req(mod, suffixName) {
        console.log(mod, suffixName)
        return $http.get(mod.dir + '/index.' + suffixName)
          .success(function (res) {
            console.log('res', res);
            mod[suffixName] = res;
          })
          .error(function () {
            mod[suffixName] = '';
          });
      }

    });


    $rootScope.updateCode = function () {

      var values = _.values(MOD_MAPS);

      console.log('values', values);

      var filter = _.filter(values, function (mod) {
        return mod.dir && mod.isChecked;
      });
      console.log('filter', filter);

      var map = _.map(filter, function (mod) {
        return mod.html;
      });
      console.log('map', map);

      var code = map.join('\n');

      console.log('code', code);

      var re = /\{\{#.+?}}/;

      // 渲染嵌套模版
      while(re.test(code)){

        var render = template.compile(code);

        code = render({MOD_MAPS: MOD_MAPS});

      }

      console.log('render code', code);

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