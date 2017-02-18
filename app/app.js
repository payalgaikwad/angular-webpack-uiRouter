var dashboard = angular.module('dashboard', ['ui.router']);

require('bootstrap');
require('./directives');
require('./services');
require('./components/home/home.controller');
require('./routes.js');
