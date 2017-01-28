angular.module('appock.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    $scope.IsSubMenu = false;

    $scope.openSubMenu = function () {
        if ($scope.IsSubMenu) $scope.IsSubMenu = false;
        else $scope.IsSubMenu = true;
    }
})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
})

    .controller('SearchCtrl', function ($scope, $stateParams) {

        $scope.cardList = [
        { src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg' },
        { src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg' },
        { src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg' },
        { src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg' },
        { src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg' },
        { src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg' },
        ];

        $scope.hasFilters = false;
        $scope.openFilters = function () {
            if ($scope.hasFilters) $scope.hasFilters = false;
            else $scope.hasFilters = true;
        }
    })

.controller('MainPageCtrl', function ($scope, $stateParams) {
    

});

