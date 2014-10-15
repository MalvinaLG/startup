define(["lib/backbone"], function(Backbone) {
  var movieAddView = Backbone.View.extend({
    template: _.template($("#movieAddTemplate").html()),

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });
  return movieAddView;
});
