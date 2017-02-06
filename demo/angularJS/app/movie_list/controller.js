(function(angular) {
    'use strict';
    angular.module('movie.movie_list', ['ngRoute', 'movie.services.http'])
        // 配置模块路由
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/:category/:page', {
                templateUrl: 'movie_list/view.html',
                controller: 'MovieListController'
            });
        }])

    .controller('MovieListController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        'AppConfig',
        function($scope, $route, $routeParams, HttpService, AppConfig) {
            var count = AppConfig.pageSize;
            var page = parseInt($routeParams.page);
            var start = (page - 1) * count;
            // 控制器 分为两步
            // 1.设计暴露数据
            // 2.设计暴露行为
            $scope.subjects = [];
            $scope.message = '';
            $scope.title = 'Loading...';
            $scope.totalCount = 0;
            $scope.loading = true;
            $scope.totalPages = 0;
            $scope.currentPage = page;
            HttpService.jsonp(
                AppConfig.listApiUrl + $routeParams.category + '?city=绍兴', { start: start, count: count, q: $routeParams.q },
                function(data) {
                    $scope.title = data.title;
                    $scope.subjects = data.subjects;
                    $scope.totalCount = data.total;
                    $scope.totalPages = Math.ceil($scope.totalCount / count);
                    $scope.loading = false;
                    $scope.$apply();
                });
            // 暴露分页的行为
            $scope.goPage = function(page) {
                // 传过来的是第几页就跳到第几页
                if (page >= 1 && page <= $scope.totalPages) {
                    $route.updateParams({ page: page });
                }
            };
        }
    ]);
})(angular);
