$(document).ready(function(){

  var sourceH = $("#templateH").html();
  var templateHC = Handlebars.compile(sourceH);

  var sourceU = $("#templateU").html();
  var templateUT = _.template(sourceU);

  var sourceD = $("#templateD").html();
  var templateDC = dust.compile(sourceD, "intro");
  dust.loadSource(templateDC);


  $.getJSON('scripts/profiles.json',function(pJson) {
    
    $('#divSection1').html(templateHC(pJson));

    $('#divSection2').html(templateUT(pJson));
    
    dust.render("intro",pJson,function(err, out) {
      $('#divSection3').html(out);
    });
  });

})
