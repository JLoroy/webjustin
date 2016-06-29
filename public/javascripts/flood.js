var app = angular.module('flood',[]);

app.controller('floodController', ['$scope', '$filter', '$http','$window', function($scope, $filter, $http, $window){
    $scope.stats="Stats?";

    $scope.current_flooder = {
        photo_url:"floodData/img/fduck.jpg",
        nom:"Ducky Duck",
        stars:3,
        tot_mess:4324,
        tot_word:12444,
        tot_wdif:4033,
        regularity:22,
        smiley:":)",
        abs:25,
        longest:321,
        first:"7 aout 2013",
        months:[12,5,3,12,42,68,125,100,110,40,12,45],
        words:["a", "de","Justin","duck","ducky", "hi", "me","masturbation","oui","non"]
    }

}]);