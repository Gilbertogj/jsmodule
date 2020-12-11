// Imprimir la tabla del 8 al reves 

console.log('tabla del 8 en reversa')

for(let i=10 ; i>=1 ; i--){
    console.log(`${i} x 8 = ${i*8}`)
}

//  Imprimir los numeros pares entre 1 y 100 

console.log('numeros pares entre 1y 100')

for(let i=1 ; i<=100 ; i++ ){
    if (i%2===0){
        console.log(i)
    }
}

// dado un string "reverse" invertir el orden del string

console.log('reverse string')
var string1 = "reverse"
var array_string= string1.split("")
var array2=string1.split("")
var reverse_array=array_string.reverse()
var join_array=reverse_array.join("")

console.log(join_array)

const stringtoreverse="hola mundo"
let stringreversed=''

for(let i=stringtoreverse.length-1;i>=0;i--){
    stringreversed += stringtoreverse[i]

}

console.log(stringreversed)



