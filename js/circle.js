(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (circle) {
            // TODO: complete this method
            // hint: area = pi * radius^2
           var area = this.getArea();

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true) {
                console.log(Math.round(area));
            // If doRounding is true, round the result to the nearest integer.
            } else{
                console.log(area);// Otherwise, output the complete value
            // console.log("Area of a circle with radius: " + this.radius + ", is: ");

        }
    }
    };
console.log(circle.getArea());


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();