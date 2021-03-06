// HOMEWORK REVIEW

// The Return Function

// Global Variables
      // When do we want to actually pass an argument into a function?
            // As often as possible
      // When do we want to deal with a value outside a function?
            // When you can't do the other

// _.map vs. _.each
      // _.map
            // _.map is what you use to TRANSFORM data
            // this is kind of what _.map does:

                  var map = function(arr, func) {
                    var outputArray = [];
                    for (i = 0; i < arr.length; i++) {
                      outputArray[i] = func(arr[i]);
                    }
                    return outputArray;
                  };

      // _.each
            // this is kind of what _.map does:

                  var each = function(arr, func) {
                    for (i = 0; i < arr.length; i++) {
                      func(arr[i]);
                    }
                  };

            // _.each corresponds to the distinction between what a function does and what a function is
                  // what a function IS = whatever its return statement provides
                  // what a function DOES = the internal logic of the function

      // _.each will always return the original value of the function
      // _.map will return a new value based on the transormation within the fucntion
            // If youre using _.each to push values into an empty array, _.map might be a better solution
            // If you're using _.map to make a loop happen but not using the returned value, _.each might be a better solution
      // examples:
            // see the underscorejs website
            // try the _.map and _.each examples out for yourself

// JAVASCRIPT, HTML & CSS together
      // Separation of Concerns
            // HTML = Structure
            // CSS = Style
            // Javascript = Behavior
      // Cool Tools
            // Atom --> View Panes --> Split Screen
                  // Allows you to look at HTML and CSS or Javascript at the same time
            // Emmet (Package) for Atom
                  // makes it faster to write HTML
            //DevTools in your browser
                  // Elements tab is great for looking at HTML
      // HTML IDs and Classes
            // And ID is a unique element, there is only ONE
            // A class is a type that can be applied to multiple elements


  // HTML STUFF
      // DIVs versus SPANs
            // DIVs are block-level objects
                  // DIVs take up the full amount of space on a line
                  // New DIVs will always start on a new line
            // SPANs are in-line objects
                  // SPANs will sit on lines and just take up as much room as there is
                  // A new SPAN will move to a new line if the previous line is full
      // Relative and Absolute Position
            // Three types of positioning
                  // Static = the default
                  // Relative =
                        // Allows you to reposition an element based on where it "natually" sits in the flow of the page
                        // Good for when you want to just nudge something into a specific place
                  // Absolute =
                        // Removes an element from the natural flow of a page
                        // Looks for the next-highest parent element and positions relative to THAT element

    // CSS Selectors and Javascript/jQuery
          // CSS Selectors allow you to apply styles to multiple tagged Elements
          // in Javascript, the jQuery tools do something similar
          // jQuery is a function ($) and we are telling it to look for any elements with the h3 tag:
                $("h3");        //shorthand
                jQuery("h3");   //longhand
          // This will create an array of elements with an h3 HTML tag

          // This will console.log out for any h3 tag you click on:
                $("h3").click(function(x){
                  console.log(x);
                });

          // This will let you modify an input field's value:
                // .val() = the jQuery call you want to use
