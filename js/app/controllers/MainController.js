function MainController($scope){
  $scope.name = 'lisa';
  $scope.email = 'lisamarie616@gmail.com';
  $scope.phone = '555-1212';
}

angular
  .module('app')
  .controller('MainController', MainController);