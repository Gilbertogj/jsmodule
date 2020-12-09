console.log('Ask weather')

const WEATHER= prompt('¿Como está el clima?')

if(WEATHER==="soleado"){
    console.log('El día esta soleado por aqui')
}
else if(WEATHER==="lluvioso"){
    console.log('El día esta lluvioso por aqui')
}
else if(WEATHER==="nevando"){
    console.log('El día esta nevando por aqui')
}
else if(WEATHER==="nublado"){
    console.log('El día esta nublado por aqui')
}
else{
    const WEATHER_TWO = prompt('Descirbe el clima')
    console.log(`El clima esta ${WEATHER_TWO}`)
}
