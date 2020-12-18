// accesors


let obj= {
    name: 'ruben',
    lastname: 'flores',
    age:29,
    assigmnets:[
        {
            na:'español',
            ave:90
        },
        {
            na:'matematicas',
            ave:90
        }
    ],
    getAverage: function(){
        let assigmnets=this.assigmnets
        let total= assignments.reduce((acc,cv)=>{
            return acc+cv.ave
        },0)/assigmnets.length
        return total
    },

    fullname:function(){
        return this.name+' '+this.lastname
    },

    saltar: function(){
        return `${this.name} esta saltando`
    },
    getYearsOld: function(){
        return `${this.age} años`
    }

}
// llamando a las funciones internas en el objecto 
// si solo declaramos el no,bre de la funcion sin los parentesis
// nos arroja la pura estructura de la función
obj.getFullName()  
obj.saltar()
obj.getYearsOld()
obj.getAverage()
// imprimiendo la funion llamada arriba 
console.log(obj.getFullName() )
console.log(obj.saltar())
console.log(obj.getYearsOld())
console.log(obj.getAverage())


let koder={
    name: 'gil',
    age:30,
    email: 'gilbertogj23@gmail',
    generation: '1gPython',
    grades:[90,80,100,60],
    assigmnets:['html','javascript','css','bootstrap'],
    teachers : [
        {name:'Fer' , curse: 'css'},
        {name:'Charles' , curse: 'git'},
        {name:'JorgeL' , curse: 'javascript'},
    ],
    get personalInfo (){
        return `${this.name} ${this.age} años` 
    },
    get average (){
        let grd=this.grades
        let total=grd.reduce((acc,cv)=>{
            return acc+cv
        },0)/grd.length
        return total
    },
    get noAssigmnets(){
        let assignments=let.assigmnets
        return `Número de materias cursadas ${assignments.length}`
    },
    get teachersName (){
        let names=this.teachers
        let total = names.map((cv)=>{
            return cv.name
        })
        return total
    },
    set generation(newgeneration){
        this.generation=newgeneration
    }

}

console.log(koder.personalInfo())
console.log(koder.getAverage())
console.log(koder.getNoAssigmnets())
console.log(koder.getTeachersName())









