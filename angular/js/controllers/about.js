'use strict';

// signup controller
app.controller('AboutPageController', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $scope.user = {};
  $scope.name="About";

    $scope.authError = null;
    $scope.heading="India's Best Birding Community";
    $scope.nextShow='true'
     $scope.isdCode = [
        {value: 91, text: '+91' },
        {value: 92, text: '+92' },
        {value: 93, text: '+93' }
    ];

    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', { email: $scope.user.email, phone: $scope.user.phone})//change as per requirement
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
    
  }])
 ;