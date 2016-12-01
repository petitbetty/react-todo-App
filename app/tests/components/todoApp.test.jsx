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

	it('should add todo to the todos state on the handleAddTodo',() => {
		var todoText = " test text";
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />)

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		//Check that todos first item has completed vale of false
		expect(todoApp.state.todos[0].completed).toBe(false);

		//Call handleToggle with 11
		todoApp.handleToggle(11);

		//Verify that value is true
		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});