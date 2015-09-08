var app = angular.module('home',[]);

app.controller('homeController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.activePanel = 'main';
    $scope.isActive = function(name){
        return name == $scope.activePanel
    }
    $scope.connected=false;
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
                        if($scope.permName != "Stranger") $scope.connected = true;
                        console.log(res2);
                    });
                });
        }
    };
    $http.post('permName').then(function(res2){
        $scope.permName = res2.data.permName;
        if($scope.permName != "Stranger") $scope.connected = true;
        console.log(res2);
    });
    $scope.disconnect= function(){
        $http.post('disconnect')
            .then(function(res){
                $http.post('permName').then(function(res2){
                    $scope.permName = res2.data.permName;
                    if($scope.permName == "Stranger") $scope.connected = false;
                    console.log(res2);
                });
            });
    };

}]);