var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: "Walk the dog"
				}, {
					id: 2,
					text: "Bake a cake"
				}, {
					id: 3,
					text: "Clean the dishes"
				},
				{
					id: 4,
					text: "Feed the cat"
				},
				{
					id: 5,
					text: "Meet a friend"
				}
			]
		}	
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos} />
			</div>
		);
	}
});

module.exports = TodoApp;