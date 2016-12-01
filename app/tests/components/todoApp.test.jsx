var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});
});