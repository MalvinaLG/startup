define(["lib/backbone", "models/Movie"], function(Backbone, Movie) {
  var MovieList = Backbone.Collection.extend({
    model: Movie,
    initialize: function() {
      this.on("add", this.updateSet, this);
      this.on("remove", this.updateSet, this);
    },
    updateSet: function() {
      movies = this.models;
    }
  });
  return MovieList;
});
