'use strict';

// var angular = require('angular');

angular.module('dashboard').controller('dashboardController', DashboardController);

// DashboardController.$inject = ['GithubStatusService'];
function DashboardController() {
    var _this = this;
    _this.github = "From home controller.js";
    console.log(_this.github);
}

module.exports = DashboardController;
