function(){

  var Counter = Backbone.Model.extend({

      defaults: {
        value: 0
      }

      increment: function() {
         this.value += 1;
      }

      decrement: function() {
         this.value -= 1;
      }

  });

  var CounterView = Backbone.View.extend({

    
 })

}());