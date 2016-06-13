'use strict';

(function() {

  angular.module('iwc', ['ui.router', 'iwc.main', 'iwc.lessons'])

      .config(['$urlRouterProvider' ,function( $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

      }])


})();





'use strict';

/* main nav */

function mainNav() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/nav.html'
    };
    return directive;

}

/* Jumbotron */

function mainJumbotron() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/jumbotron.html'
    };
    return directive;

}

/* Footer */

function mainFooter() {
    var directive = {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/shared/footer.html'
    };
    return directive;

}





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
'use strict';


lessonsService.$inject = ['$http'];

function lessonsService($http) {

    return $http.get('/app/assets/json/lessons.json').then(function(response){



        return response.data.lessons;

    })

}


/*
 // profileService.$inject = [''];

 function profileService() {

 var service = {


 bees: { data: [] },
 targetBee : { data: [] },
 killbee: killbee,
 init: getBees


 };

 return service;


 }
 */

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
'use strict';

// profileService.$inject = [''];

function profileService() {

    var service = {

        /*
        bees: { data: [] },
        targetBee : { data: [] },
        killbee: killbee,
        init: getBees
        */
    };

    return service;


}