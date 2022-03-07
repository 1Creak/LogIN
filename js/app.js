$(document).ready(function(){

    $('#login').click(function(){
        $('#popup').toggle('.active');
    })
    $('#close').click(function(){
        $('#popup').toggle('.active');
    })
    $('#clean').click(function(){
        $('#mail').val('');
        $('#userName').val('');
    })
    
    $('#myform').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            userPass: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: 'Поле обязательно для заполнения'
            },
            userPass: {
                required: 'Поле обязательно для заполнения',
                minlength:'Длина имени должна быть не менее 5 символов'
            }
        }
    });
});