angular.module('weather').controller('ListCtrl', ['$scope','$state','weatherApi', ListCtrl]); 

function ListCtrl($scope, $state, weatherApi) {

	$scope.onClicked = function(lati,longi){
		$state.go('weather', {lati:lati, longi:longi});
	};
	
}

