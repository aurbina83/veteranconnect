namespace app.Filters {
  angular.module('app').filter('url', () => {
    return function(str: string, length: number) {
     return str.substr(0, length - 6) + 'ls.jpg';
    }
  });
}
