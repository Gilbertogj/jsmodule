console.log('ex2 numbers between 1 and 100')

let num = parseInt(prompt('Ingresa un numero entre 1 y 100'))

if(num>=1 && num<=100){
    if (num % 2 ===0 && num % 11 ===0){
        console.log('El número es divisible entre 2 y 11')
    }
    else{
        console.log('El número no es divisible entre 2 y 11')
    }
}
else{
    let num = parseInt(prompt('Debes ingresa un numero entre 1 y 100'))
}