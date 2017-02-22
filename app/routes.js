var router = require('angular-ui-router');


angular.module('dashboard').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var homeState = {
        name: 'home',
        url: '/home',
       templateUrl: '../app/components/home/home.html'
    }

    var productsState = {
        name: 'products',
        url: '/products',
        templateUrl: '../about.html'
    }

     var dealsState = {
        name: 'deals',
        url: '/deals',
        templateUrl: '../gallery.html'
    }

     var contactState = {
        name: 'contact',
        url: '/contact',
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
    $stateProvider.state(homeState);
    $stateProvider.state(dealsState);
    $stateProvider.state(contactState);
    $stateProvider.state(productsState);
    $stateProvider.state(footer);
});
