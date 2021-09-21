/*Ejercicio 1
let y = window.screen.availHeight;
let x = window.screen.availWidth;

let comprar = confirm(`la pantalla es de ${x} x ${y}`);

if(comprar){
    alert('compra exitosa')
}
else{
    alert('vete puta')
}

let href = window.location.href;
let pathName = window.location.pathname;
let hostName = window.location.hostname;
let protocol = window.location.protocol;

let html = `protocolo: ${protocol}<br>pathname: ${pathName}<br>hostname: ${hostName}<br>href: ${href}`;

document.write(html)
*/
/*Ejercicio 3-a
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const materia = document.getElementById('materia');
const btn = document.getElementById('btn');
const resultado = document.querySelector('.resultado');

validarCampos = () =>{
    let error = [];
    error[0] = true;
    console.log(nombre.value.length)
    if(nombre.value.length < 5 || nombre.value.length > 30){
        console.log(error,error[1]);
        error.push(`Verificar tamaño de nombre<br>`);
    }
    if((email.value.length < 5 || 
        email.value.length > 30 ) || 
        (email.value.indexOf('@') == -1 && 
        email.value.indexOf('.') == -1)){
            console.log(error,error[2]);
            error.push(`Email invalido<br>`);
    }
    if(materia.value.length < 5 || materia.value.length > 30){
        error.push('Verificar tamaño de materia');
    }

    else{
        error[0] = false;
    }
    console.log(error)
    return error;
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let error = validarCampos();
    let temp = "";
    if(error[0]){
        error.shift();
        error.forEach(x => {
            temp += x;
        });
        resultado.classList.add('red');
        resultado.innerHTML = temp;
    }
    else{
        resultado.classList.add('green');
        resultado.innerHTML = 'solicitud enviada correctamente';
    
    }
})
*/