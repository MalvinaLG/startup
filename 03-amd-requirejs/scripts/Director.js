define(function () {
        
  // create your module here
  var Director = function (name) {

    this.attributes = {};
    this.attributes['name'] = name;
    this.attributes['quotes'] = []; 
       

    this.set = function(attr,value) { this.attributes[attr] = value; }
    this.get = function(attr) { return this.attributes[attr]; }
  };


  Director.prototype.speak = function() { 
    
    var numQuotes = this.attributes['quotes'].length;

    var i, allQuotes;
    var $divQuotes = $("#divQuotes");
    for(i = 0; i < numQuotes; i++) {
      console.log(this.attributes['name'] + ' says: ' + this.attributes['quotes'][i]);
      $divQuotes.append("<p>" + this.attributes['name'] + " says: " + this.attributes['quotes'][i] + "</p>");

    }

  }

  return Director;
});