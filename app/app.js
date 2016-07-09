(function() {
	var app = angular.module("octotint",
		[
			"firebase",
			"ngRoute",
			"angularSpectrumColorpicker",
			"octotint.config"
		]);

	app.controller("DefaultController", function($scope, $firebaseObject, configObject) {

		$scope.styleObject        = configObject.styleObject;
		$scope.languages          = configObject.languages;
		$scope.selectedLanguage   = configObject.languages[0];
		$scope.languageBrushNames = configObject.languageBrushNames;
		$scope.fontFileNames      = configObject.fontFileNames;
		$scope.themes             = configObject.themes;

		// No firebase yet; I don't want to hard-code my own dummy app here.
		// To set up firebase, see:
		// https://www.firebase.com/docs/web/libraries/angular/quickstart.html
	});

	// Example second controller
	app.controller("DetailController", function($scope, $firebaseObject) {
		$scope.statusMessage = statusString;
	});

	// Components?
	app.component('languageSelector', {
			templateUrl: 'app/_partials/language-selector.html',
			controller: 'DefaultController'
		}
	);
	app.component('dynamicStyle', {
			templateUrl: 'app/_partials/dynamic-style.css',
			controller: 'DefaultController'
		}
	);
	app.component('codeBox', {
			templateUrl: 'app/_partials/code.html',
			controller: 'DefaultController'
		}
	);
	app.component('logoSvg', {
			templateUrl: 'app/_partials/logo.html',
			controller: 'DefaultController'
		}
	);

	// configuring a very basic routing scheme.
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/editor', {
				templateUrl: 'app/_partials/editor.html',
				controller: 'DefaultController'
			})
			.when('/editor/:themeID', {
				templateUrl: 'app/_partials/editor.html',
				controller: 'DetailController'
			})
			.otherwise({
				redirectTo: '/editor'
			});
	}]);

	// onready garbage. directive for each element that needs an onReady init
	app.directive('headerInit', function() {
		return {
			restrict: 'A',
			link: function(scope, elem, attrs) {
				onReady.headerInit();
			}
		};
	});
	app.directive('toolbarControlInit', function() {
		return {
			restrict: 'A',
			link: function(scope, elem, attrs) {
				onReady.toolbarControlInit();
			}
		};
	});

})();
