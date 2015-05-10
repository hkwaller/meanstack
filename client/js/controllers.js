angular.module('app.controllers', [])

.controller('MainCtrl', function($scope) {
    $scope.posts = [
        {
            username: "hkwaller",
            text: "kingen"
        },
        {
            username: "m0nkey",
            text: "kin"
        }
    ]
    
    $scope.addPost = function(post) {
        $scope.posts.unshift({
            username: "ghgh",
            text: post.text
        })
    }
})