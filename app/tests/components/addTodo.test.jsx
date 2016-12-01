var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo',() => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onAddTodo prop with a valid data', () => {
		var todoText = "Check mail";
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);

	});

	it('should call onAddTodo prop with a invalid data', () => {
		var todotext = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todotext;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();

	});

});