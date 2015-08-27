$(document).ready(function() {
    $('.btn-success').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        // Adding a new li on the list
        $('.item').append("<li>" + "<span>" + toAdd + "</span>" + "</li>").css({
            'background': 'rgb(73, 73, 73)',
            'margin-top': '5px',
            'display': 'block',
            'color': 'white',
            'margin-left': '5px'
        });
    });
    // Double click to remove li
    $(document).on('dblclick', 'li', function() {
        $(this).slideUp(1000).text('removed').css({
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
        if (!$(this).find('#done1').length) {
          $(this).append('<span id="done1">Done</span>').fadeIn(1000);
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