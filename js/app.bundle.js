webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var dashboard = angular.module('dashboard', ['ui.router']);

	__webpack_require__(1);
	// require('./directives');
	// require('./services');
	__webpack_require__(15);
	__webpack_require__(18);
	__webpack_require__(19);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(16);

	angular.module('dashboard').directive('myfooter', footerDirective);

	function footerDirective() {
	  return {
	    restrict: 'E',
	    scope: {

	    },
	    templateUrl: "app/shared/footer/footer.html",
	    // link: function (scope, element, attrs) {
	    //   scope.$watch(attrs.check, function (val) {
	    //     var words = val ? 'Yep' : 'Nope';
	    //     element.text(words);
	    //   });
	    }
	  }


	module.exports = footerDirective;

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(16);

	angular.module('dashboard').controller('dashboardController', DashboardController);

	// DashboardController.$inject = ['GithubStatusService'];
	function DashboardController() {
	    var _this = this;
	    _this.github = "From home controller.js";
	    console.log(_this.github);
	}

	module.exports = DashboardController;


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var router = __webpack_require__(20);


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


/***/ }

});