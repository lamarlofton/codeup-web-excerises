'use strict';

$(function() {

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


});