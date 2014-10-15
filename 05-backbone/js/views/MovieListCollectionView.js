define(
  ["lib/backbone",
    "views/MovieCollectionView",
    "collections/MovieList"
  ], function(Backbone, MovieCollectionView, MovieList) {
    var MovieListCollectionView = Backbone.View.extend({
      el: "body",
      events: {
        "click .btnAdd ": "addMovie",
        "submit #add": "saveNewMovie",
        "click #divMovies div .btnEdit": "editMovie",
        "click .btnRemove": "removeMovie",
        "submit #edit": "saveMovie",
        "click .btnCancel ": "cancelMovie"
      },
      initialize: function(movies) {
        movieListCollection = new MovieList(movies);
        this.movieView = new MovieCollectionView(movieListCollection);
      },
      addMovie: function(e) {
        this.movieView.addMovie();
      },
      saveNewMovie: function(e) {
        e.preventDefault();
        this.movieView.saveNewMovie();
      },
      editMovie: function(e) {
        var idDivParent = $(e.currentTarget).parent().attr('id');
        var numIdDivParent = idDivParent.substring(2,idDivParent.length);
        this.movieView.editMovieColl(numIdDivParent);
      },
      saveMovie: function(e) {
        e.preventDefault();
        this.movieView.saveMovie();
      },
      cancelMovie: function(e) {
        this.movieView.cancelMovie();
      },
      removeMovie: function(e) {
        var idDivParent = $(e.currentTarget).parent().attr('id');
        var numIdDivParent = idDivParent.substring(2,idDivParent.length);
        this.movieView.removeMovieColl(numIdDivParent);
      }
    });
    return MovieListCollectionView;
});
