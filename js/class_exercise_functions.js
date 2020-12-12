

// multiplication table string 

function multiplication(numberString){
    const string=numberString
    for(let i=0;i<numberString.length;i++){

        for(let m=1;m<=10;m++){
            console.log(`${m}x${numberString[i]}=`+m*numberString[i])

        }

    }

}

// plindromo

function palindromo(str1){
    let str2=str1.split(" ").reverse().join().concat('')

    let str3=str1.split(" ")
    console.log(str2)
    if(str3===str2){
        console.log('es un palindromo') 
    }
    else{
        console.log('no es un palindromo')
    }
    
    
}

// 



