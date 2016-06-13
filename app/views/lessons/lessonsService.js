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
