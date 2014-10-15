define(["lib/backbone"], function(Backbone) {
  var Movie = Backbone.Model.extend({
    // Default attributes
    defaults: {
      title: '',
      year: '',
      duration: '',
      genre: '',
      director: '',
      synopsis: '',
    },

    initialize: function() {
      console.log('Movie created! Title: '+this.get("title")+' ('+this.get("year")+'), duration: '+this.get("duration")+', genre: '+this.get("genre")+', director: '+this.get("director")+', synopsis: '+this.get("synopsis")+'.');
    },
  });
  return Movie;
});
