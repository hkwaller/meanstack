angular.module('app.controllers', [])

.controller('MainCtrl', function($scope, $http) {
    $http.get('localhost:3000/api/posts')
    .success(function(posts) {
        $scope.posts = posts
    })
    .error(function(err) {
        console.log(err)  
    })
    
    $scope.addPost = function(post) {
        $scope.posts.unshift({
            username: "ghgh",
            text: post.text
        })
    }
})