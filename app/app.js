var router = require('angular-ui-router');

var dashboard = angular.module('dashboard', ['ui.router']);

require('bootstrap');
require('./directives');
require('./services');
require('./controllers');

dashboard.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var helloState = {
        name: 'home',
        url: '/home',
       templateUrl: '../home.html'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: '../about.html'
    }

     var galleryState = {
        name: 'gallery',
        url: '/gallery',
        templateUrl: '../gallery.html'
    }
    
    var footer = {
            name: 'footer',
            url: '/footer',
            templateUrl: '../footer.html'
        }
    var mainPage = {
            name: 'mainPage',
            url: '/categories',
            templateUrl: '../../views/mainPage.html'
        }
    $stateProvider.state(helloState);
    $stateProvider.state(mainPage);
    $stateProvider.state(aboutState);
    $stateProvider.state(galleryState);
    $stateProvider.state(footer);
});
