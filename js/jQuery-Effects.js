'use strict';
(function() {

//Effects

$('#gone').click(function() {
    $(this).hide();
});

    $('h3').click(function() {
        $('ul').show().slideDown();
    });
    $('#').hide();
    setTimeout(function() {
        $('#').fadeIn();
    }, 8000);


    Fraq

    $("#details").click(function() {
        // event.preventDefault();
        $("dd").toggleClass("invisible");
    });

    $('dt').click(function(){
        $(this).toggleClass('highlighted');
    });

    $('dd').click(function(){
        $(this).next().toggleClass('cursive');
    });

    $('li').click(function () {
        $(this).closest('dl').addClass();
    });
// Traversal Exercise

    $('h3').click(function() {
        $('li').next().css('font-weight', 'bold');
    });

    $('#btn1').click(function() {
        $('ul').each(function() {
            $(this).children().last().css('background-color', 'yellow');
        });
    });

    $('li').click(function(){
        $(this).parent().children().first().css('background-color', 'blue');
    });

    $('#rock').click(function() {
                   var oldClass = $(this).prev().attr("class").split(" ")[1];
                    var newClass = $(this).parent().next().children().first().attr("class").split(" ")[1];
                    $(this).prev().attr("class", "frame " + newClass);
                    $(this).parent().next().children().first().attr("class", "frame " + oldClass)
               });

    $('#skies').click(function() {
                  var choice = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                  var frameChoice = (choice) ? $(this).parent().prev() : $(this).parent().next();
                  var oldClass = $(this).prev().attr("class").split(" ")[1];
                  var newClass = frameChoice.children().first().attr("class").split(" ")[1];
                   $(this).prev().attr("class", "frame " + newClass);
                   frameChoice.children().first().attr("class", "frame " + oldClass)
             });
    $('#workshop').click(function() {
                    var oldClass = $(this).prev().attr("class").split(" ")[1];
                    var newClass = $(this).parent().prev().children().first().attr("class").split(" ")[1];
                    $(this).prev().attr("class", "frame " + newClass);
                    $(this).parent().prev().children().first().attr("class", "frame " + oldClass)
               });




})();