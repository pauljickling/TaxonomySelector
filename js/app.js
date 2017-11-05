require.config({
   paths: {
      jquery: 'lib/jquery',
      handlebars: 'lib/handlebars',
      backbone: 'lib/backbone',
      text: 'lib/text',
      underscore: 'lib/underscore',
      localstorage : 'lib/backbone.localStorage',
      lockr: 'lib/lockr'
   }
});

require(['views/SelectorView'], function(SelectorView){
   new SelectorView();
});