import angular from 'angular';
const ngModuleName = 'azEval';
const ngModule = angular.module(ngModuleName, []);

export default ngModule
  .factory('azEval', azEvalFactory)
  .name; // <-- exporting the module name

// @ngInject
function azEvalFactory($parse) {

  return function azEval(expression, item) {
    let value;
    if (typeof(expression) === 'function') {
      value = expression(item);
    } else if (typeof(expression) === 'string') {
      value = $parse(expression)(item);
    } else {
      console.log('123');
      throw new Error('azEval only accepts functions and expression strings');
    }
    return value;
  };
}
