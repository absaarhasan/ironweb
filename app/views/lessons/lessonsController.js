'use strict';

(function() {

    angular.module('iwc.lessons', [])
        .controller('LessonsCtrl',  LessonsCtrl)
        .factory('lessonsService',  lessonsService)
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider

                .state('lessons', {
                    url: '/',
                    parent: 'main',
                    controller: 'LessonsCtrl',
                    templateUrl: "views/lessons/lessons.html",
                    controllerAs: 'vm',
                    resolve: {
                        lessons: lessonsService
                    }
                })

        }]);


})();

LessonsCtrl.$inject = [ 'lessons'];

function LessonsCtrl(lessons) {

    var vm = this;

    vm.beginner = lessons[0].beginner;
    vm.intermediate = lessons[0].intermediate;
    vm.advanced = lessons[0].advanced;


}