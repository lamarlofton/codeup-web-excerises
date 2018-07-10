

$(function() {

    var $orders = $('#products');
    var $name = $('#name');
    var $quantity = $('#quantity');
    var $categories = $('#categories');
    var $price = $('#price');



    function addOrder(order) {
        $orders.append('<li>'+ order.title +', quantity: '+ order.quantity +', categories: '+ order.categories +', price: '+ order.price + '</li>');

    }

    $.ajax({
        type: 'GET',
        url: 'data/inventory.json',
        success: function (orders) {
            $.each(orders, function(i, order) {
                addOrder(order);
            });

        },
    error: function() {
            alert('error loading products');
      }
    });

    var inventory = ''
    data.forEach(function(item) {
        inventory +='<tr>'
        inventory +='<td>' + item.title + '</td>'
        inventory +='<td>' + item.quantity + '</td>'
        inventory +='<td>' + item.categories + '</td>'
        inventory +='<td>' + item.price + '</td>'
        inventory +='</tr>'
    })
    $('#Add').on('click', function() {

        var order = {
            name: $name.val(),
            quantity: $quantity.val(),
            categories: $categories.val(),
            price: $price.val(),

        };$.ajax({
            type: 'POST',
            url: 'data/inventory.json',
            data: order,
            success: function(newOrder) {
                addOrder(newOrder);
            },
            error: function() {
                alert('error saving order');

            }
        });

        var inventory = ''
        data.forEach(function(item) {
            inventory +='<tr>'
            inventory +='<td>' + item.title + '</td>'
            inventory +='<td>' + item.quantity + '</td>'
            inventory +='<td>' + item.categories + '</td>'
            inventory +='<td>' + item.price + '</td>'
            inventory +='</tr>'
        })

    });
    $orders.delegate('.remove', 'click', function() {

        var $li = $(this).closest('li');
        var self = this;
        $.ajax({
            type:'DELETE',
            url: 'data/inventory.json' + $(this).attr('data-id'),
            success: function (){
                $(self);
            $li.fadeOut(300, function(){
                $(this).remove();
            });

            }
        })
    })

});