angular.module('app.controllers', [])

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