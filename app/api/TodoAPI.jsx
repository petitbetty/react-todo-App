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
	},

	//The filteredTodos function will return a filtered array according to the input from the search input field.

	filterTodos: function (todos, showCompleted, filtered) {

		var filteredTodos = todos;

		//Filter by showCompleted
		//We will use the build in method filter() which filters a given array
		filteredTodos = filteredTodos.filter( (todo) => {
			return !todo.completed || showCompleted;
		});

		//Filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			var text = todo.text.toLowerCase()
			console.log(text.indexOf(searchText));
			//return searchText.length === 0 || text.indexOf(searchText) > -1;
		});


		//Sort todos with non-completed first
		//We will be using the build in method sort
		//if a is not completed and b is, return -1 which is a. return 1 is b
		filteredTodos.sort((a,b) => {
			if(!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});


		return filteredTodos;
	}
};