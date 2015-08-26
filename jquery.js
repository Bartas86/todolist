$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        var pic = $('.picture').addClass('show');
        $('.item').append("<li>" + toAdd + "</li>").css({
            'background': 'rgb(73, 73, 73)',
            'margin-top': '5px',
            'display': 'block',
            'color': 'white',
        });
    });
    // $(document).on('click', 'li', function() {
    //     $(this).slideUp(600).text('skasowany').css({
    //         'float': 'right',
    //         'color': 'black',
    //     });
    // });
    $(document).on('click', 'li', function() {
      $(this).css('background-color', 'rgb(36, 176, 73)');
    });

    $('.clear').click(function() {
        $('.form-control').val();
        if (confirm('Are you sure?')) {
            $('li').remove();
            $('.list').append('Lista wyczyszczona').fadeOut(1500);
            document.location.reload();
        }
    });
    $('.form-control').focus(function() {
        $('.form-control').val("");
    });
});