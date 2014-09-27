/*
  Globant - BootCamp 2014 Bahia Blanca
  Topic1: JavaScript Intro and jQuery

  Author: Malvina Lopez Gherbi
*/


$(document).ready(function() {


  /* Variable to dim on and off */
  var buttonOn = true;


  /* Fade in Welcome section */
	$("#section2").fadeIn(3000, function() {
		$("#textbox1").focus();
  });

  /* Funtion to highlight name from textbox */
  var highlightName = function(strResponse) {

    var strName = strResponse.substring(8,strResponse.length-1);
    var hlName =strResponse.substr(0,8) + "<mark>" + strName + "</mark>" + strResponse.substring(strResponse.length-1);
    return hlName;
  }


  /* Button event to give welcome */
	$("#button1").click(function() {

    var name = $("#textbox1").val();

    if(name != "") {

		  $.post("http://bootcamp.aws.af.cm/welcome/"+name, function(data) {
 			
        $("#divResponse").css({"color":"black", "font-weight":"bold", "font-size":"14px"});	
        $("#divResponse").html(highlightName(data.response));

      })
      
  	  .fail(function() {
        $("#divResponse").css({"color":"red", "font-weight":"normal", "font-size":"12px"});
			  $("#divResponse").html("Request failed: Server error");
        $("#textbox1").focus();
			  
 		  });  	
    }
    else {
      $("#divResponse").css({"color":"red", "font-weight":"normal", "font-size":"12px"});
      $("#divResponse").html("Name missing!");
      $("#textbox1").focus();
    }

	});	



  /* Button event to dim on and off the area outside the tweet section */
  $("#button2").click(function(e) {

    if(buttonOn){
      $(".expose").css("z-index","99999");
      $("#overlay").fadeIn(300);
      buttonOn = !buttonOn;
    }
    else {
      $("#overlay").fadeOut(300, function(){
        $(".expose").css("z-index","1");
      });
      buttonOn = !buttonOn;
    }

  });
	

  /* Ajax used to get the tweets about html5 */
 	$.ajax( {
    dataType: "jsonp",
  	type: "get",
  	url: "http://tweetproxy.ap01.aws.af.cm/search",
  	data: "q=html5",
  	success: function(listTweets) {
  				
  		$.each(listTweets.statuses,function(key, value) {

  			$(".tableTweets").append("<tr><td>"
  			  + "<img src=\"" + value.user.profile_image_url + "\">" + "</td>"	
  				+ "<td>" + value.user.name.fontcolor("maroon").bold() + " "
          + "@" + value.user.screen_name + "<br>"
  				+ value.created_at.small() + "<br>"
				  + value.text
  				+ "</td></tr>");
  		});
  				
  	}

	})
  .fail(function() {
    $(".tableTweets").append("<tr><td>Request failed: Server error</td></tr>");

  });

});
