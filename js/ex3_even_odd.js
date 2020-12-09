console.log('even or odd')

let num = parseInt(prompt('Ingresa un numero entre 1 y 100'))

if(num>=1 && num<=100){
    if (num % 2 ===0){
        console.log('El número es par')
    }
    else{
        console.log('El número es impar')
    }
}
else{
    let num = parseInt(prompt('Número inválido debes ingresa un numero entre 1 y 100'))
}