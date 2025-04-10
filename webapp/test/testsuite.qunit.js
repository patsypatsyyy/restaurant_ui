sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: patsy.personal.restaurant",
		defaults: {
			page: "ui5://test-resources/patsy/personal/restaurant/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "patsy/personal/restaurant/",
				never: "test-resources/patsy/personal/restaurant/"
			},
			loader: {
				paths: {
					"patsy/personal/restaurant": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for patsy.personal.restaurant"
			},
			"integration/opaTests": {
				title: "Integration tests for patsy.personal.restaurant"
			}
		}
	};
});
