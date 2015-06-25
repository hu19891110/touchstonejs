var React = require('react');

export var animation = require('./core/animation');
export var Link = require('./core/Link');
export var View = require('./core/View');
export var ViewManager = require('./core/ViewManager');

export var Container = require('react-container');
export var Mixins = require('./mixins');
export var UI = require('./ui');

export function createApp() {
	var app = {
		navigationBars: {},
		viewManagers: {},
		views: {}
	};
	return {
		childContextTypes: {
			app: React.PropTypes.object
		},
		getChildContext () {
			return {
				app: app
			};
		}
	};
}
