// arr.reduce(callback(accumulator,currentValue,[index[,array]])[,initialValue])

const arrReduce=[1,2,3,4]
arrReduce.reduce((accumulator,currentValue)=>{
    let suma =accumulator+currentValue
    console.log(accumulator,currentValue)
    return suma


},0)

arrReduce.reduce((accumulator,currentValue)=> accumulator+currentValue,0)


//['a','b','c','c','b']
//=> 2
// nos devuelve el numero de veces que aparece una letra
const arr =['a','b','c','c','b']
arr.reduce((accumulator,currentValue)=>{
    let total=accumulator+ currentValue === 'c' ? 1 : 0
    return total 
},0)
// segundo metodo 
const arr =['a','b','c','c','b']
arr.reduce((accumulator,currentValue)=>{
    if(currentValue === 'c'){
        return  accumulator+1
    }
    else{
        return accumulator
    }   
},0)

//  convertir string to array

const arr2=['en','algun','lugar','de','la','mancha']
arr2.reduce((accumulator,currentValue)=>{
    let str1 =accumulator+" "+currentValue
    return str1
},"")
    


