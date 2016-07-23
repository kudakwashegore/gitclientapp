//directive to share repositories list containers
//restricting it to be used on elements only and setting up variables
gitApp.directive('repoDisplay', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/repo.html',
        replace: true,
        scope: {
            repoName: "@",
            createdDate: "@",
            updatedDate: "@",
            description: "@",
            url: "@",
            dateFormat: "@"
        }
    }
});