var React = require('react');

var AddTodo = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var todoToBeAdded = this.refs.todoText.value;

		if(todoToBeAdded.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoToBeAdded);

		} else {
			this.refs.todoText.focus();
		}
	},
	render: function () {
		return (
			<div onSubmit={this.onFormSubmit}>
				<form>
					<div>
						<input type="text" ref="todoText" placeholder="What do you need to do?" />
					</div>
					<div>
						<button className="button expanded primary">Add todo</button>
					</div>	
				</form>
			</div>
		)
	}
}); 

module.exports = AddTodo;