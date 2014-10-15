require.config({
  paths: {
    'jquery': 'lib/jquery'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

var movies = [
  { title: "Inception", year: 2010, duration: 148, genre: "Sci-Fi", director: "Christopher Nolan", synopsis: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO." },
  { title: "Fight Club", year: 1999, duration: 139, genre: "Drama", director: "David Fincher", synopsis: "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more..." },
  { title: "Pulp Fiction", year: 1994, duration: 154, genre: "Thriller", director: "Quentin Tarantino", synopsis: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
  { title: "Spirited Away", year: 2001, duration: 125, genre: "Animation", director: "Hayao Miyazaki", synopsis: "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures." },
  { title: "Oldboy", year: 2003, duration: 120, genre: "Thriller", director: "Chan-wook Park", synopsis: "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days." }
];

require(['jquery', 'lib/underscore', 'lib/backbone', 'views/MovieListCollectionView'], function ($, _, B, MovieListCollectionView) {
  $(function() {
    new MovieListCollectionView(movies);
  });
}
);
