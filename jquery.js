$(document).ready(function() {
    $('.btn-success').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        // var pic = $('.picture').addClass('show');
        $('.item').append("<li>" + "&nbsp; &nbsp" + toAdd + "</li>").css({
            'background': 'rgb(73, 73, 73)',
            'margin-top': '5px',
            'display': 'block',
            'color': 'white',
            'margin-left': '5px'
        });
    });
    $(document).on('dblclick', 'li', function() {
        $(this).slideUp(1000).text('removed').css({
            'float': 'right',
            'color': 'black',
            'background-color': 'white'
        });
    });
    $(document).on('click', 'li', function() {
        $(this).css({
            'background-color': '#d9534f',
        });
    });
    $('.clear').click(function() {
        $('.form-control').val();
        if (confirm('Are you sure?')) {
            $('li').remove();
            $('.list').append('Lista wyczyszczona').fadeOut(600);
            document.location.reload();
        }
    });
    $('.form-control').focus(function() {
        $('.form-control').val("");
    });
});