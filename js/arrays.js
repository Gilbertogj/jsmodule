// tabla multiplicar aaray 

const myArray = [1,4,7]

for(let i=0;i<myArray.length;i++){
    const tableNumber = myArray[i]
    
    for(let n=1;n<=10;n++){
        console.log(`${tableNumber}x${n}=${i*n}`)

    }
}



// imprimir en consola el resultao de la suma 
// de todos los elemntos de un array
// [1,2,3,4]
// -> 10

const arraySumNumber = [1,2,3,4,]
let totalArray=0
for(let count =0; count<arraySumNumber.length;count++){
    totalArray+=arraySumNumber[count]
}
console.log(totalArray)

