//our git factory to send request to github and return the response
gitApp.factory('gitDataFactory',['$resource',function($resource){
        
        return function(username){
            //creating the resourse
            var gitApi = $resource("https://api.github.com/users/" + escape(username) + "/repos",{callback: 'JSON_CALLBACK'},{get: {method: 'JSONP'}});
            
            //lets get the response from git
            var gitApiResults = gitApi.get();
            
            //return the response and wrap it in an object
            return {
                result: gitApiResults
            }
        } 
}]);