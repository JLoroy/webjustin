var app = angular.module('avent',[]);

app.controller('aventController', ['$scope', '$filter', '$http','$window', function($scope, $filter, $http, $window){
    $scope.calendar = [
        [{number:30,secret:"lol"},{number:1,secret:""},{number:2,secret:""},{number:3,secret:""},{number:4,secret:""},{number:5,secret:""},{number:6,secret:""}],
        [{number:7,secret:""},{number:8,secret:""},{number:9,secret:""},{number:10,secret:""},{number:11,secret:""},{number:12,secret:""},{number:13,secret:""}],
        [{number:14,secret:""},{number:15,secret:""},{number:16,secret:""},{number:17,secret:""},{number:18,secret:""},{number:19,secret:""},{number:20,secret:""}],
        [{number:21,secret:""},{number:22,secret:""},{number:23,secret:""},{number:24,secret:""},{number:25,secret:""},{number:26,secret:""},{number:27,secret:""}]
    ];
    $http.get('/aventCalendar',{}).success(
        function(res){
            console.log("Recu le calendar");
            $scope.calendar = res.calendar
        }
    );

}]);