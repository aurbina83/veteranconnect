namespace app.Filters {
  angular.module('app').filter('truncate', () => {
    return function(str: string, length: number) {
      if (str.length <= length) return str;
      else return str.substr(0, length - 3) + '...';
    }
  });
}
