// Imprimir en la consola la tabla del 7 
console.log('Tabla de multiplicar del 7')
for(let i=1 ; i<=7 ; i++){
    let result= 1*i
    console.log("1 x " + i + " = " + result)
}


// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....
console.log('Múltiplos del 7')
for (let i=1; i<=100 ; i++){
    if(i % 7 ===0){
        console.log(i )
    }
}

// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5
console.log('Espacios en cadena de texto')
var str1="en un lugar de mancha"
var res1 = str1.split(" ")
var res2= res1.length-1
console.log(res2)



// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4




