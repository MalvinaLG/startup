requirejs.config({

  baseUrl: 'scripts',

  //paths: {
    //'jquery' : "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min"     

    // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        //jquery: 'jquery-1.9.0'  
  });

// Load the main app module to start the app
requirejs(["main"]);
