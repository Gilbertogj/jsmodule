// Edad canina 
function calculateDogAge(name, dog_age){
    
    let human_age=16*(Math.log(dog_age))

    return human_age
    console.log(`${name} tiene ${human_age} años caninos`)

}

//  circunferencia de un círculo

function calcGeometry(radius){
    const PI=3.141592
    const PERIMETER= PI*2*radius
    return PERIMETER
    
    console.log(`El area del circulo es ${AREA} y la circunferencia es ${PERIMETER} `)

}
// AREA
function calcGeometry(radius){
    const PI=3.141592
    const AREA=PI*(raidus*radius)
    return AREA
    
    console.log(`El area del circulo es ${AREA} y la circunferencia es ${PERIMETER} `)

}

// Celcius faranheit

function temperatureConverter(temp, typeGrade){
    
    if(typeGrade ==='C'){
        return (temp*1.8)+32
        // console.log(temp2)
    }
    else{
        return (temp-32)/1.8
        // console.log(temp2)
    }
    
    
}

// facorial
function factorial(num){
    let r=1
    for (let i = 1; i <= num; i++) {
    r=r*i 
    }

    return r
    console.log(`Factorial de ${num} = ${r}`);


}