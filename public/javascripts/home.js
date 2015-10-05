var app = angular.module('home',[]);

app.controller('homeController', ['$scope', '$filter', '$http','$window', function($scope, $filter, $http, $window){
    $scope.activePanel = 'main';
    $scope.isActive = function(name){
        return name == $scope.activePanel
    }
    $scope.connected=false;
    $scope.permission = 0;
    $scope.password = "";
    $scope.connect = function(){
        if($scope.password == ""){
            $scope.password="you need to put a password in here"
        }
        else{
            $http.post('authorization', {password:$scope.password})
                .then(function(res){
                    $http.post('permName').then(function(res2){
                        $scope.permName = res2.data.permName;
                        $scope.permission = res2.data.permission;
                        if($scope.permName != "Stranger") $scope.connected = true;
                        console.log(res2);
                    });
                });
        }
    };
    $http.post('permName').then(function(res2){
        $scope.permName = res2.data.permName;
        $scope.permission = res2.data.permission;
        if($scope.permName != "Stranger") $scope.connected = true;
        console.log(res2);
    });
    $scope.disconnect= function(){
        $http.post('disconnect')
            .then(function(res){
                $http.post('permName').then(function(res2){
                    $scope.permName = res2.data.permName;
                    $scope.permission = res2.data.permission;
                    if($scope.permName == "Stranger") $scope.connected = false;
                    console.log(res2);
                });
            });
    };

    $scope.isConnected = function(){
        console.log("is connected?");
        console.log($scope.connected)
        return $scope.connected
    };
    $scope.hiddenIfConnected = function(){
        return $scope.connected?"hidden":"";
    }

    $scope.goToPage = function(page){
        console.log("go to "+page);
        $window.location.href = '/'+page;

    }
}]);