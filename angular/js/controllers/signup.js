'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.name = "asdasdas";
    $scope.authError = null;
    $scope.message="You can have different member profile (including display name) for each community, but your contact details (used for verification) shall not be shared publicaly in any of them",
    $scope.information='You need a flockt ID to access Indian Birds and other communities.',
    $scope.nextShow='true'
     $scope.isdCode = [
        {value: 91, text: '+91' },
        {value: 92, text: '+92' },
        {value: 93, text: '+93' }
    ];
     $scope.Page= function() {
      alert("signup");
   var title = 'default';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle }
   };
};
    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', { email: $scope.user.email, phone: $scope.user.phone})//Kindly change as per requirement
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          $state.go('app.signup');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }]) ;