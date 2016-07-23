gitApp.controller('reposController',['$scope','userService','gitDataFactory',function($scope, userService, gitDataFactory){
    
    //lets get username from our shared user service
    $scope.username = userService.username;    
    
    //lets get data from our factory
    $scope.apiResponse = gitDataFactory($scope.username).result;
    
    //error handling
    ///lets build a scope object to create error messages
    $scope.error = {};
    
    //we use angular promise to check if our request was sucessfull    
    $scope.apiResponse
        .$promise.then(function(respData) {  
            //if the request to the api was successful, then lets collect our data
            $scope.repositories = respData;
        }, function(error) {  
            //there was an error in our request, so lets give error details to our error object
            $scope.error.status = error.status;
            $scope.error.message = error.statusText;
        });
    
}]);
