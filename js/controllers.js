app.controller('SearchController', ['$scope', function($scope){
	$scope.data = [
		{type:"movie", name:"The Develop-HUR"},
		{type:"actor", name:"John Hur"},
		{type:"director", name:"Phil Kim"}
		]

	$scope.showForm = false

	$scope.addEntity = function(input){
		$scope.data.push($scope.newEnt)
		$scope.newEnt = ""
	}

	$scope.toggleForm = function(){
		$scope.showForm = !$scope.showForm
	}

}])
