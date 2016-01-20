angular.module('weather').factory('temperatureApi', ['$http', '$q', TemperatureApi]);
	
	function TemperatureApi($http, $q) {
	
		function getTemp(id) {
			var deferredTemp = $q.defer();
			$http.get("http://weather.yahooapis.com/forecastrss?w="+id+"&u=c")
			.success(function(data){
				deferredTemp.resolve(data);
			})
			.error(function() {
				console.log("Error");
				deferredTemp.reject();
			});
			return deferredTemp.promise;
		}
		return {
			getTemp: getTemp 
	};
}