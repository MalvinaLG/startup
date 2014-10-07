$(document).ready(function() {

  var matrix = new Movie ('The Matrix',1999,136);
  var tropicT = new DownloadableMovie ('Tropic Thunder',2008,107);


  // Augment the Movie constructor to include "share" and "like"
  augment( Movie, Social);
  //var captainAWS = new Movie ('Captain America The Winter Soldier',2014,136);

  var captainAWS = new Movie();
  captainAWS.set('title','Captain America The Winter Soldier');
  captainAWS.set('year',2014);
  captainAWS.set('duration',136);

  var myObserver = new MovieObserver();

  var actor1 = new Actor('Keanu','Reeves');
  var actor2 = new Actor('Laurence','Fishburne');
  var actor3 = new Actor('Carrie-Anne','Moss');

  matrix.set('actors',[actor1,actor2,actor3]);
  
  var numActors = matrix.get('actors').length;
  var i, actori;
  var names = '';

  for (i = 0; i < numActors; i++) {
    actori = matrix.get('actors')[i];
    names = names + actori.getName() + " " + actori.getLastName() + " - ";
  }

  console.log("Movie "+matrix.get('title')+' starring: '+names);



  $('#button1').click(function() { 
    matrix.play();
  });

  $('#button2').click(function() { 
    matrix.stop();
  });

  $('#button3').click(function() { 
    tropicT.download();
  });

  $('#button4').click(function() { 
    captainAWS.share('V. Rivas');
  });

  $('#button5').click(function() { 
    captainAWS.like();
  });
})