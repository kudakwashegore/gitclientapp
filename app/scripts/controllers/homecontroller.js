//controller for home view
gitApp.controller('homeController',['$scope','$location','userService',function($scope, $location, userService){
    
    //binding username from our shared user service
    $scope.username = userService.username;
    
    //setting up a watch to check if our username was changed
    $scope.$watch('username', function(){
        userService.username = $scope.username;
    });
    
    //handling our form submission and send user to the repo list page
    $scope.getRepos = function(){
        $location.path("/repositories");
    }
}]);