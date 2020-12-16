



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



