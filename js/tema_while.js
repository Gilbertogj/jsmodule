// tabla el 7 con while 

let counter=1
while(counter<=10){
    console.log(`7 x ${counter} = ${7*counter}`)
    counter+=1;
}

// tabla del 7 con do while

let counter2=1

do{
    console.log(`8 x ${counter2} = ${8*counter2}`)
    counter2+=1; 
}while(counter2<=10)

// numeros pares entre 1 y 100

let num=1
while(num<=100){
    if (num%2===0){
        console.log(num)
    }
    num+=1
}


const stringtoreverse="hola mundo"
let stringreversed=''
let count=stringtoreverse.length-1

while(count>=0){
    stringreversed += stringtoreverse[count]
    count-=1
}
console.log(stringreversed)

