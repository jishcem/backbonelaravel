(function(){

	Router = Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		index: function(){
			alert("You are on index page!");
		}		
	});

	new Router;

	Backbone.history.start();

})();