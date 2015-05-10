angular.module('app.services', [])

.service('PostService', function($http) {
    this.fetch = function() {
        return $http.get('/api/posts')
    }
    
    this.post = function(post) {
        return $http.post('/api/posts', post)
    }
    
    console.log("heyooo")
})