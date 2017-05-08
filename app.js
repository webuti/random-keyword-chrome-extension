
var app = angular.module('myApp', ['ngCookies']);
app.controller('myCtrl', function($scope,$http,$cookies,$sce) {

 $http.get("kelimeler.json")
    .then(function(response) {

    	if($cookies.get('sira')){
    	 $cookies.put('sira',parseInt($cookies.get('sira'))+1);
    	}
    	else
    	{
    		 $cookies.put('sira',1);
    	}

     
        $scope.myWelcome = response.data[$cookies.get('sira')];
    });


 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

});