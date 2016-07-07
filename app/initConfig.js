/***
 * initial configuration.
 * this object gets passed to app.js and then injected into the controller.
 ***/
var configObject = {
	'fontURL' : '//fonts.union.io/css/compiled/',
	'styleObject' : {
		'bgColor': '#002B36',
		'color': '#93A1A1',
		'fontSize': 15,
		'fontFamily': 'Source Code Pro',
		'fontWeight': 'normal',
		'lineHeight': 1.2,
		'cursorColor': '#D30102',
		'fields': {
			'comments': {
				'color': '#657B83',
				'weight': 'normal',
				'style': 'italic'
			},
			'strings': {
				'color': '#2AA198',
				'weight': 'normal',
				'style': 'normal'
			},
			'storage': {
				'color': '#93A1A1',
				'weight': 'bold',
				'style': 'normal'
			},
			'functions': {
				'color': '#268BD2',
				'weight': 'normal',
				'style': 'normal'
			},
			'keywords': {
				'color': '#859900',
				'weight': 'normal',
				'style': 'normal'
			},
			'constants': {
				'color': '#CB4B16',
				'weight': 'normal',
				'style': 'normal'
			}
		}
	},
	'languages' : [
		'JavaScript',
		'PHP',
		'bash',
		'CSS',
		'Ruby',
		'Python'
	],
	'languageBrushNames' : {
		'JavaScript': 'js',
		'PHP': 'php'
	},
	'fontFileNames' : [{
			name: 'Source Code Pro',
			fileName: 'source-code-pro'
		}, {
			name: 'Fira Mono',
			fileName: 'fira-mono'
		}, {
			name: 'Consolas',
			fileName: 'consolas'
	}],
	'themes' : {
		'Solarized (Dark)': {
			'backgroundColor': '#002B36',
			'foregroundColor': '#93A1A1'
		},
		'Solarized (Light)': {
			'backgroundColor': 'white',
			'foregroundColor': '#222'
		},
		'Watford': {
			'backgroundColor': 'darkorange',
			'foregroundColor': 'oldlace'
		},
		'Silverlake': {
			'backgroundColor': 'gainsboro',
			'foregroundColor': 'ghostwhite'
		},
		'Union': {
			'backgroundColor': 'lavenderblush',
			'foregroundColor': 'indigo'
		}
	},
	'statusString' : 'Coming soon.'
};

(function(angular, undefined) {
	angular
		.module('octotint.config', [])
		.constant('configObject', configObject);
})(window.angular);
