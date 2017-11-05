
define(['underscore','backbone','handlebars','models/SelectorModel', 'text!templates/projects.html'],
   function(_, Backbone,handlebars, SelectorModel, projectTemplate){

   var SelectorView = Backbone.View.extend({
      // el - stands for element. Every view has a element associate in with HTML content will be rendered.
      el: '#container',
      // It's the first function called when this view it's instantiated.
      template: handlebars.compile(projectTemplate),
      initialize: function(){
         this.model = new SelectorModel();
         this.render();

      },
      render: function(){
         this.$el.html(this.template());
      }
   });

   return SelectorView;

});


//Get both of the data back