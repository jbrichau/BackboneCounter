var app = app || {};
	
(function(){

  var Counter = Backbone.Model.extend({

      defaults: {
        countervalue: 0
      },

      increment: function() {
         this.countervalue += 1;
      },

      decrement: function() {
         this.countervalue -= 1;
      }

  });

  var CounterView = Backbone.View.extend({

    tagName: 'h1',

    render: function() {
      this.$el.html(this.model.get('countervalue'));
      return this;
    }
    
  })

  var AppView = Backbone.View.extend({

    el: '#backbonecounter',
    counterview: new CounterView({model: new Counter()}),

    //initialize: function() {
      //counterview = new CounterView({ model: Counter });
    //},

    render: function() {
      this.$el.prepend(this.counterview.render().el);
      return this;
    }
	
  })

  // Kick things off by creating the **App**.
  $(function(){ app = new AppView().render()});
}());

