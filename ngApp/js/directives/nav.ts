angular.module('app').directive('navbar', () => ({
  templateUrl: '../../templates/nav.html',
  restrict: 'E',
  controller: 'NavController',
  controllerAs: 'nav'
}));
