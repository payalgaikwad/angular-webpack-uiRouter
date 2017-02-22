'use strict';

// var angular = require('angular');

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