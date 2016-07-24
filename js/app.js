Vue.component ('todo', {  //exiting list of todos

	props: ['list'], //props pass data to components

	template: '#todo-template',

	methods: {
		deleteTodo: function(todo) { //method called on click of item cross icon
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
		addNewTodo: function() {
			var newInput = this.newTodo; //store user input
			this.todos.push({ content: newInput, completed: false }); //add new itemto bottom of list
			this.newTodo = ""; //empty input field after adding new item
		}
 	}
});

