(function(){

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	App.Models.Task = Backbone.Model.extend({
		defaults: {
			title: "",
			completed: 0
		}
	});	

	App.Collections.Tasks = Backbone.Collection.extend({
		model: App.Models.Task,
		url: '/tasks'
	});

	App.Views.Task = Backbone.View.extend({
		tagName: 'li',

		render: function() {
			this.$el.html(this.model.get('title'));
			return this;
		}
	});

	App.Views.Tasks = Backbone.View.extend({
		tagName: 'ul',

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},

		addOne: function(task){
			var singleTask = new App.Views.Task({ model: task });
			this.$el.append(singleTask.render().el);
		}
	});

	Router = Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		index: function(){
			console.log("You are on index page!");
		}		
	});

	new Router;

	Backbone.history.start();

	var tasks = new App.Collections.Tasks;
	tasks.fetch();

	var tasksView = new App.Views.Tasks({ collection: tasks });
	tasksView.render();
	
})();