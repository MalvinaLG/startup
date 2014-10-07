define(["jquery", "Movie3", "Director"], function ($, Movie, Director) {

  $(document).ready(function() {

    var alien = new Movie();
    var ridleyScott = new Director('Ridley Scott');
    ridleyScott.set('quotes',['Cast is everything','Do what ...']);
    alien.set('director', ridleyScott);
    //$("#divQuotes").html(alien.get('director').speak());
    alien.get('director').speak();
  });
});