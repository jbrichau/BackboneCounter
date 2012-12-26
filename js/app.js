var app;
	
(function(){

  var Counter = Backbone.Model.extend({

      defaults: {
        countervalue: 0
      },

      increment: function() {
         this.save({countervalue: this.get('countervalue') + 1});
      },

      decrement: function() {
         this.save({countervalue: this.get('countervalue') - 1});
      }

  });

  var Counters = Backbone.Collection.extend({
     
     model: Counter,

     localStorage: new Backbone.LocalStorage('counters'),

     initialize: function() {
        this.fetch();
     }
  });

  var theCounters = new Counters();

  var CounterView = Backbone.View.extend({

    tagName: 'h1',

    initialize: function() {
      this.model.on( 'change', this.render, this );
    },

    render: function() {
      this.$el.html(this.model.get('countervalue'));
      return this;
    }
    
  })

  var AppView = Backbone.View.extend({

    el: '#backbonecounter',

    events:{
	    "click .plus" : "plus",
	    "click .min" : "min"
    },

    initialize: function() {
	  var currentCounter;
	  if(theCounters.size() > 0)
		currentCounter = theCounters.last();
	  else
	    currentCounter = theCounters.create({});
      this.counterview = new CounterView({ model: currentCounter });
    },

    render: function() {
      this.$el.prepend(this.counterview.render().el);
      return this;
    },

    plus: function() {
	  this.counterview.model.increment();
    },

    min: function() {
	  this.counterview.model.decrement();
    }
	
  })

  // Kick things off by creating the **App**.
  $(function(){ app = new AppView().render()});
}());

