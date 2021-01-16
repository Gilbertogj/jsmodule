    // $('.vacations: first').hide()
    // // $('.vacation.america').hide()
    // $('.vacation.europe').hide()
    // $('.vacation.asia').show()

$('h2').css('color','aquamarie')
$('.america').css('color','yellow')
$('.details').text('$199.99')
$('h2').text('Titulo de su agrado')


$('.sorting a').click(function(){
    let continent=$(this).text()
    if(continent==='Todos'){
        $('#vacations .vacation').show()
    }else{
        $('#vacations .vacation').hide()
        $(`#vacations .${continent.toLowerCase()}`).show()
    }
})

$('.desc__faq').hide()
$('.desc__faq:first').show()


