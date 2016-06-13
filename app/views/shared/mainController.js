'use strict';

(function() {

    angular.module('iwc.main', [])
        .directive('mainNav', mainNav)
        .directive('mainJumbotron', mainJumbotron)
        .directive('mainFooter', mainFooter)
        .controller('MainCtrl',  MainCtrl)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('main', {
                    abstract: true,
                    controller: 'MainCtrl',
                    templateUrl: "views/shared/main.html",
                    controllerAs: 'vm'

                })

        }]);


})();

// this main controller is not required
// but it is often good practice
// if we required multiples pages / sections
// and we wanted to share data and properties across them

function MainCtrl() {

    var vm = this;


}

