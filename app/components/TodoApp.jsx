var React = require('react');
var TodoList = require('TodoList');
var uuid = require('uuid');

var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: "Walk the dog"
				}, {
					id: uuid(),
					text: "Bake a cake"
				}, {
					id: uuid(),
					text: "Clean the dishes"
				},
				{
					id: uuid(),
					text: "Feed the cat"
				},
				{
					id: uuid(),
					text: "Meet a friend"
				}
			]
		}	
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
			...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			],
		});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});

	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} />
				<AddTodo  onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;