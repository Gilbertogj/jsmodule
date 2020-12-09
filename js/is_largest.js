console.log('is largets')
// usamos constante porque esos numero nunca van
// a cambiar  
const NUMBER_ONE = parseInt (prompt('¿Dame un número?'))
const NUMBER_TWO = parseInt (prompt('¿Dame un número?'))

if (NUMBER_ONE > NUMBER_TWO) {
    // Imprimir en consola el NUMBER_ONE
    console.log(`EL ${NUMBER_ONE} es el mayor`)
}else if(NUMBER_ONE === NUMBER_TWO){
    console.log(`EL ${NUMBER_TWO} y el ${NUMBER_ONE} son iguales`)
}else{
    // Imprimir el NUMER_TWO
    console.log(`EL ${NUMBER_TWO} es el mayor`)
}

