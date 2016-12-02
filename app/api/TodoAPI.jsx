var $ = require('jquery');

module.exports = {

	//The setTodos checks if its argument is an array, if so it uses JSON.stringify to turn the array
	//into a string and store it with a key name todos. And returns todos.
	setTodos: function (todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos',JSON.stringify(todos));
			return todos;
		}

	},
	//The getTodos method get the string from the localStorage, assign it to the stringTodos variable
	//and set todos ot an empty array. The try and catch is use in case the JSON.parse() fails. JSON.parse turns a string to and array or object.
	//And now using a return statement, check if the result forn JSON.parse is an array, if not return an empty array.
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos: [];

		try {
			todos = JSON.parse(stringTodos);

		} catch (e) {

		}

		return $.isArray(todos) ? todos : [];
	}
};