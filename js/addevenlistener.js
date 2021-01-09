

// BOM
// Browser Object Model 
// mediante el evento resize 
// resolucion ancho <=767
// aparecer contenido mobile 
// desaparecer contenido desktop
// sino 
// desparecer contenido mobile 
// aparecer contenido desktop 
// window.innerHeight


// function
// document.cookie
// logged=true
// si existe la cookie logged 
// mensaje: bienvenido 
// logged=false
// sino existe 
// mensaje: user offline
// loguearlo (stear cokkie a true)

const isLogged = () =>{
    if(document.cookie.includes('logged=true')){
        document.querySelector('#session').innerHTML='Bienvenido'
    }
    else{
        document.querySelector('#session').innerHTML='User is offline'
        document.cookie="logged=true"
    }
}
window-addEventListener('load',isLogged)



// HomeWork
// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html




// 2.
// Crear un div con un mensaje de
// “Este sitio se ve mejor en desktop”
// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje






