console.log('months')

const NUM = parseInt(prompt('Ingrese un número entre 1 y 12'))

// if(NUM>=1 && NUM<=7){
    switch (NUM){
        case 1:
        console.log('Enero 31 días')
        break;

        case 2:
        console.log('Febrero 30 días')
        break;
        
        case 3:
        console.log('Marzo 31 días')
        break;

        case 4:
        console.log('Abril 30 días')
        break;

        case 5:
        console.log('Mayo 31 días')
        break;

        case 6:
        console.log('Junio 30 días')
        break;

        case 7:
        console.log('Julio 31 días')
        break;

        case 8:
        console.log('Agosto 31 días')
        break;

        case 9:
        console.log('Septiembre 30 días')
        break;

        case 10:
        console.log('Octubre 31 días')
        break;

        case 11:
        console.log('Noviembre 30 días')
        break;

        case 12:
        console.log('Diciembre 31 días')
        break;
    
        default:
        console.log('Número inválido')
        
    
    }