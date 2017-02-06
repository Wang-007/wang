(function(angular) {
    'use strict';
    angular.module('movie.movie_detail', ['ngRoute', 'movie.services.http'])
        // 配置模块路由
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/detail/:id', {
                templateUrl: 'movie_detail/view.html',
                controller: 'MovieDetaiController'
            });
        }])

    .controller('MovieDetaiController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        'AppConfig',
        function($scope, $route, $routeParams, HttpService, AppConfig) {
            $scope.movie = {};
            var id = $routeParams.id;
            var apiUrl = AppConfig.detailApiUrl + id;
            // 跨域
            HttpService.jsonp(apiUrl, {}, function(data) {
                $scope.movie = data;
                $scope.$apply();
            });
        }
    ]);
})(angular);
