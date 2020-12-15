function add(a, b){
    // sentencias
    return a + b

}

add(2,3)

const addArrow = (a,b) => {
    // sentencias
    return a + b 
}


// Edad canina 
const calculateDogAge = (name, dog_age) =>{
    return dog_age * 7
}

//  circunferencia de un círculo

const calcGeometry= (radius)=>{
    return PI * 2 * radius
}

// AREA
const calcGeometry=(radius) => {
    return PI*(raidus*radius)

}

// Celcius faranheit

const temperatureConverter=(temp, typeGrade)=>{
    
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
const  factorial=(num)=>{
    let r=1
    for (let i = 1; i <= num; i++) {
    r=r*i 
    }
    return r
}
