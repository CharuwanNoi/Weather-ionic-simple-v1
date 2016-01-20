angular.module('weather').controller('WeatherCtrl', ['$stateParams', 'weatherApi', 'temperatureApi', WeatherCtrl]); 

	function WeatherCtrl($stateParams,weatherApi,temperatureApi) {
		var vm = this;

		console.log($stateParams);

		weatherApi.getWeather($stateParams.lati, $stateParams.longi).then(function(data){
			var x2js = new X2JS();
			var json = x2js.xml_str2json(data);
			// console.log(json.query.results.Result);	
			vm.weather = json.query.results.Result.woeid;	
			console.log(vm.weather);

			temperatureApi.getTemp(vm.weather).then(function(dataTemp) {
				var x2js = new X2JS();
				var json = x2js.xml_str2json(dataTemp)
				//vm.weather = json.query.results.Result.woeid;

				console.log(json);
			});


		});


		


	}