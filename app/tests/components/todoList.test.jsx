var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo components for each todo item', () => {

		var todos = [{
			id: 1,
			text: 'something to do'
		}, {
			id: 2,
			text: 'Jogging'
		}];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);

		//This TestUtils.scryRenderComponentsWithType method will let us check how many of a given components are rendered under a separat component.
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);


		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render emplty message if no todos', () => {

		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
	
});