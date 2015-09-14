$(document).ready(function() {
    $('.btn-success').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        if (toAdd.length < 1){
            alert("Pole tekstowe nie może być puste.")
        }else{
        // Adding a new li on the list
        $('.item').append("<li>" + "<span>" + toAdd + "</span>" + "</li>").css({
            'margin-top': '5px',
            'display': 'block',
            'color': 'white',
            'margin-left': '5px'
        });
        }

    });
    // Double click to remove li
    $(document).on('dblclick', 'li', function() {
        $(this).slideUp();
        $(this).append('#done1').text('removed').css({
            'float': 'right',
            'color': 'black',
            'background-color': 'white'
        });
    });
    // 1 click to highlight
    $(document).on('click', 'li', function() {
        $(this).css({
            'background-color': 'rgb(92, 184, 92)',
        });
    // click to FINISH
        if (!$(this).find('#done1').length) {
          $(this).append('<span id="done1">Finished</span>').fadeIn(1000).css({'margin-right': '17px', 'color': 'white'});
          
        }


    });
    // Clear All data from the list
    $('.clear').click(function() {
        $('.form-control').val();
        if (confirm('Are you sure?')) {
            $('li').remove();
            $('.list').append('Lista wyczyszczona').fadeOut(600);
            document.location.reload();
        }
    });
    // Clear input on a click
    $('.form-control').focus(function() {
        $('.form-control').val("");
    });
});