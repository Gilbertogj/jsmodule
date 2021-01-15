    // $('.vacations: first').hide()
    // // $('.vacation.america').hide()
    // $('.vacation.europe').hide()
    // $('.vacation.asia').show()

$('h2').css('color','aquamarie')
$('.america').css('color','yellow')
$('.details').text('$199.99')
$('h2').text('Titulo de su agrado')


$('.sorting a').click(function(){
    
    $('.america').show()
    $('.america').show()
    $('.europe').hide()
    $('.asia').hide()

})
$('.sorting li:nth-child(2) a').click(function(){
    $('.america').show()
    $('.america').show()
    $('.europe').hide()
    $('.asia').hide()

})
$('.sorting:third').click(function(){
    $('.america').hide()
    $('.america').hide()
    $('.europe').show()
    $('.asia').hide()

})
$('.sorting:fourth').click(function(){
    $('.america').hide()
    $('.america').hide()
    $('.europe').hide()
    $('.asia').show()

})
