'use strict';

(function() {

  angular.module('iwc', ['ui.router', 'iwc.main', 'iwc.lessons'])

      .config(['$urlRouterProvider' ,function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

      }])


})();


