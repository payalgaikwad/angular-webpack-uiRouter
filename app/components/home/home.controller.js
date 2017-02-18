'use strict';

var angular = require('angular');

angular.module('dashboard').controller('dashboardController', DashboardController);

DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = "'payal's project";
    console.log(_this.github);
}

module.exports = DashboardController;
