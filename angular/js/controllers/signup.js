'use strict';

// signup controller
app.controller('SignupFormController', ['$scope','$rootScope', '$http', '$state', function($scope, $rootScope,$http, $state) {
    $scope.user = {};
      $scope.name="Indian Birds";
    $scope.authError = null;
    $scope.message="You can have different member profile (including display name) for each community, but your contact details (used for verification) shall not be shared publicaly in any of them",
    $scope.information='You need a flockt ID to access Indian Birds and other communities.',
    $scope.information_30='You seem to have a flockt ID already. Enter your password, or ask for an OTP',
    $scope.information_30_email='EMIL ME A LOGIN LINK TO H*****@G***L.COM',
    $scope.information_30_otp='SEND ME AN OTP TO +91 9******5397',
    $scope.information_31='Welcome back!',
    $scope.information_31_second='We recommand you to set a new password.',
    $scope.information_32='You do not seem to have a flockt ID with that email id. Go back to try with your mobile#, or proceed to create a new Id',
    
    $scope.nextShow='true'
     $scope.isdCode = [
        {value: 91, text: '+91' },
        {value: 92, text: '+92' },
        {value: 93, text: '+93' }
    ];
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