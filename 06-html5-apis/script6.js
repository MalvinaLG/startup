var idbSupported = false;
var db;


$(document).ready(function() {


  //indexedDB section
  if("indexedDB" in window) {
    idbSupported = true;
  }
  
  if(idbSupported) {

    var request = indexedDB.open("textTopic6",1);
 
    request.onupgradeneeded = function(e) {

      console.log("Running onupgradeneeded...");
      var thisDB = e.target.result;

      if(!thisDB.objectStoreNames.contains("data")) {
        thisDB.createObjectStore("data", {autoIncrement:true});
      }
    }
 
    request.onsuccess = function(e) {

      console.log("Success!");
      db = e.target.result;
      var $textSaveDrag = $('#textSaveDrag');

      $('#btnSave').on('click',function(){

        var textFromTA = $textSaveDrag.val();
        console.log('Text: '+textFromTA);
        $textSaveDrag.val('');
        var data = { data:textFromTA, created:new Date() }
        var transaction = db.transaction(["data"],"readwrite");
        var store = transaction.objectStore("data");

        var request = store.add(data);

        request.onerror = function(e) {
          console.log("Error",e.target.error.name);
        }

        request.onsuccess = function(e) {
          console.log("transaction success!");
        }
      })

      
      $('#btnGet').on('click',function(){

        var transaction = db.transaction(["data"], "readonly");
        var objectStore = transaction.objectStore("data");
 
        var cursor = objectStore.openCursor();
        var $divData = $('#divData');
        $divData.html("");
 
        cursor.onsuccess = function(e) {
            
          var res = e.target.result;

            if(res) {
              var obj = '';
              for(var field in res.value) {
                obj = obj + '<b>' + field + "</b> = " + res.value[field] + '<br>';
              }
              $divData.append('<p>'+obj+'</p>');
              res.continue();
            }
        }
      })


      $('#btnDelete').on('click',function(){

        var transaction = db.transaction(["data"], "readwrite");
        var objectStore = transaction.objectStore("data");
 
        var cursor = objectStore.openCursor();
        $('#divData').html("");
        
        cursor.onsuccess = function(e) {
            
          var res = e.target.result;

          if(res) {
            objectStore.delete(res.key);
            res.continue();
          }
        }
      })
 

    }
 
    request.onerror = function(e) {
      console.log("Error");
      console.dir(e);
    }

  }
  else {
    console.log("indexedDB not supported!!");
    $('#divData').html("indexedDB not supported!!");
  }




  // Canvas - Animation

  var x =  0;
  var y = 15;
  var speed = 4;

  function animate() {

    reqAnimFrame = window.requestAnimationFrame || 
      window.mozRequestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.msRequestAnimationFrame;

    reqAnimFrame(animate);

    x += speed;

    if(x <= 0 || x >= 775) {
      speed = -speed;
    }

    draw();
  }


  function draw() {

    var canvas  = $('#canvasAnimate').get(0);
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, 800, 170);
    context.fillStyle = "#4682B4";
    context.fillRect(x, y, 50, 50);
  }

  animate();

});


// Drag and drop

function allowDrop(ev) {
  ev.preventDefault();
}


function drop(e) {

  e.preventDefault();

  var file = e.dataTransfer.files[0];
  var reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function(event) {
    $("#textSaveDrag").val(event.target.result);
  };
       
}
