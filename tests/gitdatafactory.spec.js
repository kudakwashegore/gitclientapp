//some unit test for gitDatfactory

describe('GitDataFactory Tests', function () {
    
    var gitfactory;

    // loading our gitApp module
    beforeEach(angular.mock.module('gitApp'));

    //injecting the gitdata factory
    beforeEach(inject(function(gitDataFactory) {
        gitfactory = gitDataFactory("kibo007");
    }));

    // lets test if the gitdatafactory injected correctly
    it(': gidatafactory exist', function() {
        expect(gitfactory).toBeDefined();
    });    
    
    //check if the result object exist in our response
    it(': Check if result object exist', function() {
      expect(gitfactory.result).toBeDefined();
    });
    
    //check if the result objects have the data object with an array of repositories
    it(': Check if the result objects have the data object with an array of repositories', function() {
      gitfactory.result
            .$promise.then(function(respData) {  
            expect(respData.data).toBeDefined();
        });      
    });
    
    
    
    //injecting the factory again to test for none existing users
    beforeEach(inject(function(gitDataFactory) {
        gitfactory = gitDataFactory("usernotexist1235");
    }));
    
    //if a user don't exist github will return an object with message "Not Found"
    it(': Check if none existing user impelementation is working', function() {
      gitfactory.result
            .$promise.then(function(respData) {  
            expect(respData.message).equals("Not Found");
        });      
    });
    
    
    //injecting the factory again for user without any repos
    beforeEach(inject(function(gitDataFactory) {
        gitfactory = gitDataFactory("gore");
    }));    
    
    //if a user doesn't have any repos, github returns an empty array
    it(': Check if user with empty repos impelementation is working as expected', function() {
      gitfactory.result
            .$promise.then(function(respData) {  
            expect(respData.data.length).equals(0);
        });      
    });
    
});

