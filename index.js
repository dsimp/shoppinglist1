function lineItem(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e){
        e.preventDefault();
        $(e.target).closest('li').find('.shopping-item).toggleClass('.shopping-item_checked');

    });
}



function deleteItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        e.preventDefault();
        $(e.target).closest('li').remove();

    })
}

function makeShoppingList(){
    $('#js-shopping-list-form').on('submit', function(e){
        e.preventDefault();

        const value = $('#shopping-list-entry').val();
        console.log(value);

        $('.shopping-list').append($(origList(value)));
        $('shopping-list-entry').val('');
    });
};

$(makeShoppingList)
$(lineItem)
$(deleteItem)