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
					text: "Walk the dog",
					completed: false
				}, {
					id: uuid(),
					text: "Bake a cake",
					completed: true
				}, {
					id: uuid(),
					text: "Clean the dishes",
					completed: true
				},
				{
					id: uuid(),
					text: "Feed the cat",
					completed: false
				},
				{
					id: uuid(),
					text: "Meet a friend",
					completed: true
				}
			]
		}	
	},
	//Traversing the todos array and check for the id ad setting the completed state to the opposite
	handleToggle: function(id) {
		var updateTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos: updateTodos});
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
			...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
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
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo  onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;