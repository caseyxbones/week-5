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

// Week 4 Lab 2 Stretch Goal Notes
