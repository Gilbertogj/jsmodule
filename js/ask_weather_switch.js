console.log('Ask eather')

const WEATHER= prompt('¿Como está el clima?')

switch (WEATHER){
    case 'soleado':
    console.log('El día esta soleado por aqui')
    break;

    case 'lluvioso':
    console.log('El día esta soleado por aqui')
    break;

    case 'nevando':
    console.log('El día esta soleado por aqui')
    break;

    case 'nublado':
    console.log('El día esta soleado por aqui')
    break;

    default:
        const WEATHER_TWO = prompt('Descirbe el clima')
    console.log(`El clima esta ${WEATHER_TWO}`)
    

}