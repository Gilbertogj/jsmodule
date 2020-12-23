// console.groupCollapsed('dom')

// let tittle= document.createElement("h1")
// let texto =document.createTextNode('soy un titulo desde JS')
// tittle.appendChild(texto)
// document.getElementById('container2').appendChild(tittle)

//container 1

// let ul1= document.createElement("ul")
// let ul2= document.createElement("ul")
// let lista1=document.createElement("li")
// let lista2=document.createElement("li")
// ul1.appendChild(list1)
// ul1.appendChild(list2)


// document.getElementById('container1').appendChild(ul1)
// document.getElementById('container1').appendChild(ul2)

// let uElement='';
// for(let i=1;i<=4;i++){
//     uElement+=`<li>
//                     <a href="">item${i}</a>
//                 <li>`
// }
// console.log(uElement)
// let box=document.getElementById('caja2')
// box.innerHTML=uElement


const kodersArr = ['ale','oscar','ruben','brian']

const addElements = (selector, numberElements, arrNames) => {
    let listKoders =''
    arrNames.forEach((koder, index) => {
        if(index < numberElements){
            listKoders += `<li>Koder ${index+1}:${koder}</li>`  
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}





// addElements('#lista', 4, kodersArr)

const filterKoders =(letter)=> {
    let filtrados=kodersArr.filter((koder)=>{
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista', filtrados.length, filtrados)
}


const filterKodersSelect=()=>{
    let order = document.


}