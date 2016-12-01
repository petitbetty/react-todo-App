var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
	it('shoud exist', () => {
		expect(Todo).toExist();
	});
});