var vm = new Vue ({
	el: '#app',
	data: {
		newTodo: '',  //initialising newTodo

		todos: localStorage.getItem('todos')   
      	? JSON.parse(localStorage.getItem('todos'))  
		: [  //set todos list as empty array
		]
	},
	methods: {
		save: function() {     //persist list locally
      		localStorage.setItem('todos', JSON.stringify(this.todos)); 
		},
		addNewTodo: function() {  //called both on click of 'add' button and on keydown Enter
			var newInput = this.newTodo; //store user input
			this.todos.push({content: newInput, completed: false}); //add new item to bottom of list
			this.newTodo = ""; //empty input field after adding new item
			this.save();
		},
		markComplete: function(todo) { //called on click of a todo item
			todo.completed =! todo.completed;  //toggle between 2 states
			this.save();
		},
		deleteTodo: function(todo) { //method called on click of item cross icon
			this.todos.$remove(todo);
			this.save();
		}
	}
});


//Making list sortable with drag and drop
//script courtesy of RubaXa at https://github.com/RubaXa/Sortable
var el = document.getElementById('todo-list');
var sortable = Sortable.create(el, {
    group: "localStorage-example",
    store: {
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group.name);
            return order ? order.split('|') : [];
        },
        set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, order.join('|'));
        }
    }
});

