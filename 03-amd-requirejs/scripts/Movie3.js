define(

  ["Director"],

  function(Director) {

    /*
    function Movie (title, duration, year) {
      this.attributes = {};
      this.attributes['title'] = title;
      this.attributes['duration'] = duration;
      this.attributes['year'] = year;
    }

    Movie.prototype = {
      constructor: Movie,
      play:function (){
        //console.log('Playing '+this.attributes['title']+'...');
        $.publish('movies',['play',this.attributes['title']]);
      },
      stop:function (){
        //console.log(this.attributes['title']+' stopped.');
        $.publish('movies',['stop',this.attributes['title']]);
      },
      set:function (attr, value){
        this.attributes[attr] = value;
      },
      get:function (attr){
        return this.attributes[attr];
      }
    }*/


    /*
     * Movie refactored as a Module
     */
    var Movie = (function (title,year,duration) {
    
      return function (title,year,duration) {
        this.attributes = {};
        this.attributes['title'] = title;
        this.attributes['year'] = year;
        this.attributes['duration'] = duration;
        this.attributes['actors'] = [];
        this.attributes['director'];
       

        this.set = function(attr,value) { this.attributes[attr] = value; }
        this.get = function(attr) { return this.attributes[attr]; }
      } 
    
    })();


    Movie.prototype.play = function() { 
      $.publish('movies',['play',this.attributes['title']]);
    }
    Movie.prototype.stop = function() {
      $.publish('movies',['stop',this.attributes['title']]);
    }

    return Movie;
  }

);