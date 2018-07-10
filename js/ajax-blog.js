'use strict';


$.get('data/blog.json').done(function(arrayOfBlogPosts) {
    console.log(arrayOfBlogPosts);
    addBlogData(arrayOfBlogPosts);
});




function addBlogData(array) {
    var blogPosts = '';


    array.forEach(function(blogPost) {
        blogPosts += '<div class=' + '\'jumbotron\'' +'>';
        blogPosts += '<h2>' + blogPost.Title +'</h2>';
        blogPosts += '<p>' + blogPost.Content + '</p>';
        blogPosts += '<p>' + blogPost.Categories + '</p>';
        blogPosts += '<p>' + blogPost.Date + '</p>';
        blogPosts += '</div>'

    });

    $('#posts').append(blogPosts)
};