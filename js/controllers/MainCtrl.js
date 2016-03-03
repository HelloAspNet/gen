/**
 * Created by wyd on 16/3/3.
 */
angular.module('app', ['ui.ace'])
  .controller('MainCtrl', ['$scope', '$http', '$rootScope', '$q', function ($scope, $http, $rootScope, $q) {


    $http.get('./index.json').success(function (res) {

      $rootScope.CONFIG = res;

      _.forEach(res.mods, function(mod, i){
        mod.index = i;
      });

    });

    var CODE = {
      htmlMaps: {},
      cssMaps: {},
      jsMaps: {},
      update: function(){
        $rootScope.CODE = _.values(this.htmlMaps).sort(function(a, b){
          return a.index - b.index;
        }).map(function(obj){
          return obj.html;
        }).join('\n');
      }
    };


    $rootScope.getMod = function(obj){

      var url = 'mods/' + obj.map + '/index';

      if(_.has(CODE.htmlMaps, obj.id)) {
        delete CODE.htmlMaps[obj.id];
        CODE.update();
      }
      else {
        var promise = _.isUndefined(obj.html) ? $http.get(url + '.html') : $q.when({data: obj.html});
        promise.then(function (res) {
          obj.html = res.data;
          CODE.htmlMaps[obj.id] = obj;
          CODE.update();
        }, function(){
          obj.html = '';
        });
      }

      if(_.has(CODE.cssMaps, obj.id)) {
        delete CODE.cssMaps[obj.id];
        CODE.update();
      }
      else {
        var promise = _.isUndefined(obj.css) ? $http.get(url + '.css') : $q.when({data: obj.css});
        promise.then(function (res) {
          obj.css = res.data;
          CODE.cssMaps[obj.id] = obj;
          CODE.update();
        }, function(){
          obj.css = '';
        });
      }

      if(_.has(CODE.jsMaps, obj.id)) {
        delete CODE.jsMaps[obj.id];
        CODE.update();
      }
      else {
        var promise = _.isUndefined(obj.js) ? $http.get(url + '.js') : $q.when({data: obj.js});
        promise.then(function (res) {
          obj.js = res.data;
          CODE.jsMaps[obj.id] = obj;
          CODE.update();
        }, function(){
          obj.js = '';
        });
      }
      

     
    };



    $scope.aceLoaded = function (_editor) {

      // Options
      _editor.setReadOnly(true);

    };

    $scope.aceChanged = function (e) {
      //
    };

  }]);