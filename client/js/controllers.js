angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, UserService) {
    $scope.$on('login', function(_, user) {
        $scope.currentUser = user
    })
    
    $scope.logout = function() {
        UserService.logout()
    }
    
    if (UserService.token) {
        console.log("nope")
    }
})

.controller('MainCtrl', function($scope, $http, PostService) {
    $scope.posts = []
    
    PostService.fetch().success(function (posts) {
        $scope.posts = posts;
    }).error(function(err) {
        console.log(err)
    })
    
    
    $scope.addPost = function(post) {
        if (post) {
            PostService.post({
                username: 'hkwaller',
                text: post.text
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.post = null
            }).error(function(err) {
                console.log(err)
            })
        }
    }
})

.controller('RegisterCtrl', function($scope, $location, UserService) {
    $scope.register = function(user) {
        UserService.register(user).then(function(response) {
            if (response) {
                $scope.$emit('login', response.data)
            }
        })
    }
})


.controller('LoginCtrl', function($scope, UserService) {
    $scope.login = function(user) {
        UserService.login(user).then(function(response) {
            $scope.$emit('login', response.data)
        })
    }
})
