// Edad canina 
function calculateDogAge(name,dog_age){
    let human_age=16*(Math.log(dos_age))
    console.log(`${name} tiene ${human_age} años caninos`)

}

// Área y circunferencia de un círculo

function calcGeometry(radius){
    const PI=3.141592
    const PERIMETER= PI*2*radius
    const AREA=PI*(Math.pow(radius,2))
    console.log(`El area del circulo es ${AREA} y la circunferencia es ${PERIMETER} `)

}

// Celcius faranheit

function temperatureConverter(temp,unidad){
    if(unidad=='C'){
        let temp2=(temp*1.8)+32
        console.log(temp2)
    }
    if(unidad=='F'){
        let temp2=(temp-32)/1.8
        console.log(temp2)
    }
    
}

// facorial
function factorial(num){
    let r=1
    for (let i = 1; i <= num; i++) {
    r=r*i 
    }
    console.log(`Factorial de ${num} = ${r}`);


}