$(document).ready(function() {
    'use strict';

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
    }
 ];
function buildList(arrObjs) {
    var output = '';
    output += '<ul>';
    arrObjs.forEach(function(person) {
        output +=  '<li style="color:" + person.favColor + "'>' + person.name + '</li>';
    });
    output += '</ul>';
    return output;
}
$('#add-names-btn').click(function(){
    $('#names-list').html(buildList(people));
    });

});

// $('#add-names-btn').click(function () {
//     $(this).slideUp();
//     people.forEach(function(person) {
// $('#names-list').append('<li>' + person.name + '</li>')
//
//         }
//     $('#names-list').slideUp(1000);
// })









