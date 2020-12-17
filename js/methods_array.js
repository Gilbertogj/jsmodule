



// tabla de multiplicar con for each()
// const arrayTable = [1,4,7]
// arrayTable.forEach( currentElement =>{
    
//     for(let n=1;n<=10;n++){
//         console.log(`${currentElement}x${n}=${currentElement*n}`)

//     }

// })



// function
// [1,2,3]
// ->[2,4,6]

 function double(myArray){
    // const myArray=arrayNumbers
    let newArray=[]
    myArray.forEach(currentElement =>{
    newItems=currentElement*2
    newArray.push(newItems)
    })
    return newArray
}


// function
// [1,2,3]
// ->[2,4]

function even(myArray2){
    // const myArray2=arrayNumbers2
    let newArray2=[]
    myArray2.forEach(currentElement2 =>{
        if(currentElement2%2==0){
            newArray2.push(currentElement2)
        }
    })
    return newArray2
}

// function
// ['hola','mundo']
// ->['ha','mo']
function firsLast(myArray3){
    let newArray3=[]    
    myArray3.forEach(currentElement3 =>{
        newArray3.push(`${currentElement3.slice(0,1)}${currentElement3.slice(-1)}`)
        // o se puede 
        // newAarray.push(currentElement3.slice(0,1)+currentElement3.slice(-1))
    })
    return newArray3
}

// map
// utilizar el map cuando esperamos un arreglo de resultado
[1,2,3].map((currentValue,index,arr)=>{
    console.log(currentValue, index, arr)
})

// multiplicar los elementos del array por dos arrow 
[1,2,3].map((currentValue)=>{
    return currentValue*2
})

// o puede ser asi arrow functions
[1,2,3].map((currentValue) =>currentValue*2)

// con fucntions
arr.map(function(currentValue,index,array){
})


// double con map creando fucntion

const doubleValuesMap = (arr) =>{
    let arrayResult =arr.map(currentValue => currentValue*2 )
    return arrayResult
}

//  o 

const doubleValuesMap = (arr) =>{
    return arr.map(currentValue => currentValue*2 )
}

// o 

const doubleValuesMap = (arr) => arr.map(currentValue => currentValue*2 )
console.log(doubleValuesMap([1,2,3,4,5]))








