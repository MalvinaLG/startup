define(["lib/backbone"], function(Backbone) {
  var movieEditView = Backbone.View.extend({
    template: _.template($("#movieEditTemplate").html()),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  return movieEditView;
});
