// require('angular');

var dashboard = angular.module('dashboard', ['ui.router']);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['dashboard']);
});

// require('bootstrap');
// require('./directives');
// require('./services');
require('./shared/footer/footerDirective');
require('./components/home/home.controller');
require('./routes.js');


