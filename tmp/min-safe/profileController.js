'use strict';

(function() {

    angular.module('cc.profile', [])
        .controller('ProfileCtrl',  ProfileCtrl)
        .factory('profileService',  profileService)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('profile', {
                    url: '/',
                    controller: 'ProfileCtrl',
                    templateUrl: "views/profile.html",
                    controllerAs: 'vm'
                })

        }]);


})();

ProfileCtrl.$inject = [ 'profileService'];

function ProfileCtrl(profileService) {

    var vm = this;




}