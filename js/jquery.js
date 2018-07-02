//
// $(function() {
//     $('#playButton').click(function() {
//             $('#playOutput').text($('playInput').val());
// });
//
// });
//
//
//  $(function () {
//     $('#playButton').hide(1000).toggle(2000);
//         $('p').css({color:'purple', fontWeight: 'bold'});
// });
//
//  $('.importante').on('mouseover', function () {
//      $(this) .css('background-color',"yellow")
//
//  });
//  $('#playButton').css({color:'green',
//  fontWeight:'bold'});
//  $('.codeup').css('border', '1px dotted red');
//  // $('li').css('font-size', '20px').css('background-color', "blue");
//  $('h1').css('text-align', 'center').css('font-size', '25px').css({color:'grey'});
//
//
//
// var contents = $('h1').text('Welcome To JQuery');
// alert(contents);

// $('*').css('border', '2px solid aqua');

$('h1').click(function() {
    $(this).css('background-color', 'pink');
});
$('p').dblclick(function() {
    $('p').css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);


// $('.name').keyUp(function(event) {
//     console.log(event.key);
// });