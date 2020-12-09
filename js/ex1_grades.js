console.log('ex1 grades')

const GRADE = parseInt(prompt('Ingresa la calificación del examen'))

if(GRADE>= 90){
    console.log('A')
}
else if(GRADE>=80 && GRADE<90){
    console.log('B')
}
else if (GRADE>=70 && GRADE<80){
    console.log('C')
}
else if (GRADE>=60 && GRADE<70){
    console.log('D')
}
else if (GRADE>=50 && GRADE<60){
    console.log('E')
}
else{
    console.log('F')
}