// angular goodness goes here.
// general reference dox: https://docs.angularjs.org/tutorial/
(function() {
    var app = angular.module("codeInspired", ["firebase","ngRoute","angularSpectrumColorpicker"]);

    // Global objects?
    var styleObject = {
        'bgColor': '#002B36',
        'color': '#93A1A1',
        'fontSize': '15',
        'cursorColor': '#D30102',
        'keywordColor': '#859900',
        'constantColor': '#CB4B16',
        'functionColor': '#268BD2',
        'stringColor': '#2AA198',
        'commentColor': '#657B83',
        'commentStyle': 'italic',
        'typeColor': '#93A1A1'
    };
    var languages = [
        'JavaScript',
        'PHP',
        'bash',
        'CSS',
        'Ruby',
        'Python'
    ];
    var languageBrushNames = {
        'JavaScript': 'js',
        'PHP': 'php'
    };
    var statusString = "Coming soon.";

    app.controller("DefaultController", function($scope, $firebaseObject) {

        $scope.styleObject        = styleObject;
        $scope.languages          = languages;
        $scope.selectedLanguage   = languages[0];
        $scope.languageBrushNames = languageBrushNames;

        // No firebase yet; I don't want to hard-code my own dummy app here.
        // To set up firebase, see:
        // https://www.firebase.com/docs/web/libraries/angular/quickstart.html
    });

    // Example second controller
    app.controller("DetailController", function($scope, $firebaseObject) {
        $scope.statusMessage = statusString;
    });

    // Components?
    angular.module('codeInspired').component('languageSelector', {
        templateUrl: 'app/_partials/language-selector.html',
        controller: 'DefaultController'
    });
    angular.module('codeInspired').component('dynamicStyle', {
        templateUrl: 'app/_partials/dynamic-style.css',
        controller: 'DefaultController'
    });
    angular.module('codeInspired').component('codeBox', {
        templateUrl: 'app/_partials/code.html',
        controller: 'DefaultController'
    });

    // configuring a very basic routing scheme.
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/editor', {
            templateUrl: 'app/_partials/editor.html',
            controller: 'DefaultController'
          }).
          when('/editor/:themeID', {
            templateUrl: 'app/_partials/editor.html',
            controller: 'DetailController'
          }).
          otherwise({
            redirectTo: '/editor'
          });
      }]);

})();
