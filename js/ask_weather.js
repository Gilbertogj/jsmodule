console.log('Ask eather')

let weather= prompt('¿Como está el clima?')

if(weather=="soleado"){
    console.log('El día esta soleado por aqui')
}
else if(weather=="lluvioso"){
    console.log('El día esta lluvioso por aqui')
}
else if(weather=="nevando"){
    console.log('El día esta nevando por aqui')
}
else if(weather=="nublado"){
    console.log('El día esta nublado por aqui')
}
else{
    let weather_two = prompt('Descirbe el clima')
    console.log(`El clima esta ${weather_two}`)
}
