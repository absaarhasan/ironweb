"use strict";function mainNav(){var a={restrict:"A",replace:!0,templateUrl:"views/shared/nav.html"};return a}function mainJumbotron(){var a={restrict:"A",replace:!0,templateUrl:"views/shared/jumbotron.html"};return a}function mainFooter(){var a={restrict:"A",replace:!0,templateUrl:"views/shared/footer.html"};return a}function LessonsCtrl(a){var b=this;b.beginner=a[0].beginner,b.intermediate=a[0].intermediate,b.advanced=a[0].advanced}function lessonsService(a){return a.get("/app/assets/json/lessons.json").then(function(a){return a.data.lessons})}function MainCtrl(){}function ProfileCtrl(a){}function profileService(){var a={};return a}!function(){angular.module("iwc",["ui.router","iwc.main","iwc.lessons"]).config(["$urlRouterProvider",function(a){a.otherwise("/")}])}(),function(){angular.module("iwc.lessons",[]).controller("LessonsCtrl",LessonsCtrl).factory("lessonsService",lessonsService).config(["$stateProvider",function(a){a.state("lessons",{url:"/",parent:"main",controller:"LessonsCtrl",templateUrl:"views/lessons/lessons.html",controllerAs:"vm",resolve:{lessons:lessonsService}})}])}(),LessonsCtrl.$inject=["lessons"],lessonsService.$inject=["$http"],function(){angular.module("iwc.main",[]).directive("mainNav",mainNav).directive("mainJumbotron",mainJumbotron).directive("mainFooter",mainFooter).controller("MainCtrl",MainCtrl).config(["$stateProvider",function(a){a.state("main",{"abstract":!0,controller:"MainCtrl",templateUrl:"views/shared/main.html",controllerAs:"vm"})}])}(),function(){angular.module("cc.profile",[]).controller("ProfileCtrl",ProfileCtrl).factory("profileService",profileService).config(["$stateProvider",function(a){a.state("profile",{url:"/",controller:"ProfileCtrl",templateUrl:"views/profile.html",controllerAs:"vm"})}])}(),ProfileCtrl.$inject=["profileService"];