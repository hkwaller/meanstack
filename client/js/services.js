angular.module('app.services', [])

.service('PostService', function($http) {
    this.fetch = function() {
        return $http.get('/api/posts')
    }
    
    this.post = function(post) {
        return $http.post('/api/posts', post)
    }
})

.service('UserService', function($http) {
    var service = this;
    
    this.getUser = function() {
        return $http.get('/api/user', {
            headers: { 'X-Auth': service.token }
        })
    }
        
    this.login = function(user) {
        return $http.post('api/sessions', {
            username: user.username, password: user.password
        }).then(function(val) {
            service.token = val.data
            window.localStorage.token = val.data
            $http.defaults.headers.common['X-Auth'] = val.data
            return service.getUser()
        })
    }
    
    this.register = function(user) {
        return $http.post('api/user', user).then(function(val) {
            this.login(val)
        })
    }
    
    this.logout = function() {
        delete service.token
    }

})
