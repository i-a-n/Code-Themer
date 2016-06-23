// angular goodness goes here.
// general reference dox: https://docs.angularjs.org/tutorial/
(function() {
    var app = angular.module("codeInspired", ["firebase","ngRoute","angularSpectrumColorpicker"]);

    // Global objects
    var fontURL = "//fonts.union.io/css/compiled/";
    var styleObject = {
        'bgColor'      : '#002B36',
        'color'        : '#93A1A1',
        'fontSize'     : 15,
        'fontFamily'   : 'Source Code Pro',
        'fontWeight'   : 'normal',
        'lineHeight'   : 20,
        'cursorColor'  : '#D30102',
        'fields'       : {
            'keywords' : {
                'color' : '#859900',
                'weight': 'normal',
                'style' : 'normal'
            },
            'constants' : {
                'color' : '#CB4B16',
                'weight': 'normal',
                'style' : 'normal'
            },
            'functions' : {
                'color' : '#268BD2',
                'weight': 'normal',
                'style' : 'normal'
            },
            'strings' : {
                'color' : '#2AA198',
                'weight': 'normal',
                'style' : 'normal'
            },
            'comments' : {
                'color' : '#657B83',
                'weight': 'normal',
                'style' : 'italic'
            },
            'type' : {
                'color' : '#93A1A1',
                'weight': 'normal',
                'style' : 'normal'
            }
        }
    };
    var highlightableFields = [
        'keywords',
        'constants',
        'functions',
        'strings',
        'comments',
        'types'
    ];
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
    var fontFileNames = [
        {
            name: 'Source Code Pro',
            fileName: 'source-code-pro'
        }, {
            name: 'Fira Mono',
            fileName: 'fira-mono'
        }, {
            name: 'Consolas',
            fileName: 'consolas'
        }
    ];
    var statusString = "Coming soon.";

    app.controller("DefaultController", function($scope, $firebaseObject) {

        $scope.styleObject        = styleObject;
        $scope.languages          = languages;
        $scope.selectedLanguage   = languages[0];
        $scope.languageBrushNames = languageBrushNames;
        $scope.fontFileNames      = fontFileNames;

        console.log($scope.styleObject);

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
    app.config(['$routeProvider', function($routeProvider) {
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

    // onready bullshit, sorry for the global var
    app.directive('onReady', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                domReady();
            }
        };
    });

})();
