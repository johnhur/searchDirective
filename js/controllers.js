app.controller('SearchController', ['$scope', function($scope){
	$scope.data = [
		{type:"movie", name:"The developHUR"},
		{type:"actor", name:"John Hur"},
		{type:"director", name:"Ben Hur"}
		]

	$scope.test = "WORKING"

	$scope.addEntity = function(input){
		$scope.input = []
	}

}])
