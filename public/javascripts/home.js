var app = angular.module('home',[]);

app.controller('homeController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.activePanel = 'main';
    $scope.isActive = function(name){
        return name == $scope.activePanel
    }
}]);