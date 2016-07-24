Vue.component ('todo', {  //exiting list of todos

	props: ['list'],

	template: '#todo-template',

	methods: {
		deleteTodo: function(todo) {
			this.list.$remove(todo);
		}
	}
});

var vm = new Vue ({
	el: '#app',
	data: {
		todos: [
		]
	},
	methods: {
		addNewTodo: function(newTodo) {
			var newTask = $('#new-item').val(); //store user input
			$('#new-item').val(""); //empty input field after adding new item
			this.todos.push({ content: newTask, completed: false }); //add new itemto bottom of list

		}
 	}
});

