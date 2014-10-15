define(["lib/backbone"], function(Backbone) {
  var MovieView = Backbone.View.extend({
    template: _.template($("#movieListTemplate").html()),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return MovieView;
});
