define(["lib/backbone", "models/Movie", "views/MovieView", "views/MovieAddView", "views/MovieEditView"], function(Backbone, Movie, MovieView, MovieAddView, MovieEditView) {
  var MovieCollectionView = Backbone.View.extend({
    el: '#divMovies',
    modelEdit: '',
    numIdDivParentM: '',

    initialize: function(collection) {
      this.collection = collection;
      this.render();
      this.collection.on("reset", this.render, this);
    },
    render: function() {
      this.$el.html("");
      var index;
      this.collection.each(function(movie, index) {
        this.renderMovie(movie, index);
      }, this);
    },
    renderMovie: function(movie, index) {
      var movieView = new MovieView({model: movie});
      var template = _.template($("#movieListTemplate").html());
      $("#divMovies").append("<div id='id"+index+"'>"+template(movieView.model.toJSON())+"</div>");
    },
    addMovie: function() {
      this.$el.html("");
      var movieAddView = new MovieAddView();
      this.$el.html(movieAddView.render().el);
    },
    saveNewMovie: function() {
      var vacio = 'no';
      var data = {};
      $("#add").children("input[type='text']").each(function(i, el) {
        data[el.id] = $(el).val(); 
        if((vacio === 'no') && (!$(el).val())) {
          vacio = 'si';
        }
      });
      $("#add").children("textarea[id='synopsis']").each(function(i, el) {
        data[el.id] = $(el).val(); 
        if((vacio === 'no') && (!$(el).val())) {
          vacio = 'si';
        }
      });
      if(vacio === 'no'){
        var newMovie = new Movie(data);
        this.collection.add(newMovie);
        var numCollection = this.collection.length;
        this.render();
      }
      else {
        $("#divEmpty").html("Please, fill in all the blanks!!");
      }
    },
    renderEdit: function(movie) {
      var movieEditView = new MovieEditView({model: movie});
      this.$el.html(movieEditView.render().el);
    },
    editMovieColl: function(numIdDivParent) {
      this.$el.html("");
      numIdDivParentM = numIdDivParent;
      modelEdit = this.collection.at(numIdDivParent);
      this.renderEdit(modelEdit);
    },
    saveMovie: function() {
      var vacio = 'no';
      var data2 = {};
      $("#edit").children("input[type='text']").each(function(i, el) {
        data2[el.id] = $(el).val(); 
        if((vacio === 'no') && (!$(el).val())) {
          vacio = 'si';
        }
      });
      $("#edit").children("textarea[id='synopsis']").each(function(i, el) {
        data2[el.id] = $(el).val(); 
        if((vacio === 'no') && (!$(el).val())) {
          vacio = 'si';
        }
      });
      if(vacio === 'no'){
        var newMovie2 = new Movie(data2);
        this.collection.remove(modelEdit);
        this.collection.add(newMovie2, {at: numIdDivParentM});
        var numCollection = this.collection.length;
        this.render();
      }
      else {
        $("#divEmpty2").html("Please, fill in all the blanks!!");
      }
    },
    cancelMovie: function() {
      this.render();
    },
    removeMovieColl: function(numIdDivParent) {
      this.$el.html("");
      numIdDivParentM = numIdDivParent;
      modelEdit = this.collection.at(numIdDivParent);
      this.collection.remove(modelEdit);
      var numCollection = this.collection.length;
      this.render();
    }
  });
  return MovieCollectionView;
});
