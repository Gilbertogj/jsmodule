console.log('days of the week')

const NUM = parseInt(prompt('Ingrese un número entre 1 y 7'))

// if(NUM>=1 && NUM<=7){
    switch (NUM){
        case 1:
        console.log('Lunes')
        break;

        case 2:
        console.log('Martes')
        break;
        
        case 3:
        console.log('Miercoles')
        break;

        case 4:
        console.log('Jueves')
        break;

        case 5:
        console.log('Viernes')
        break;

        case 6:
        console.log('Sábado')
        break;

        case 7:
        console.log('Domingo')
        break;
    
        default:
        console.log('Número inválido')
        
    
    }
// }
// else{
    // let num = parseInt(prompt('Número inválido debes ingresa un numero entre 1 y 100'))
// }