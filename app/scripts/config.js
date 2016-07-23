//setting up our route configurations
gitApp.config(function($routeProvider){
    $routeProvider
            //setting up route and controller for homepage 
            .when('/',{
                templateUrl: "templates/home.html",
                controller: "homeController"
            })
            
            //setting up route and controller for the repository list page
            .when('/repositories',{
                templateUrl: "templates/repositories.html",
                controller: "reposController"
            })
    
});