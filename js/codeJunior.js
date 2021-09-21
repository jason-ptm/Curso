/* Ejercicio 1
class cliente{
    constructor(nombre){
        this.nombre = nombre
    }
    orden(dinero){
        const precios = [0.6,1,1.6,1.7,1.8,2.9,2.9];
        const nombres = ['Palito de agua','Palito de crema','Bombon heladix','Bombon heladovich','Bombon helardo','Potecito con conflite','Pote 1/4 kg'];
        document.write(`<h1><b>${this.nombre}</b></h1><br>`);
        for(let helado in precios){ 
            
            if(precios[helado] < dinero){
                document.write(`<p>Te puede comprar un <b>${nombres[helado]}</b> y te sobran <b style = "color:green" >${dinero - precios[helado]}</b></p>`)
            }
        }


    }
}

let roberto = new cliente('roberto');
let pedro = new cliente('pedro');
let cofla = new cliente('cofla');

roberto.orden(1.5);
pedro.orden(1.7);
cofla.orden(3);
*/

/*Ejercicio 2.1
entrada = (edad,hora) =>{
    edad = parseInt(edad)
    let cont = 0;
    if(edad >= 18){
        alert('Puedes entrar');
        if(hora >= 2 && cont == 0){
            cont += 1;
            alert('Pasa gratis crack');
        }
    }
    else{
        alert('No puedes pasar');
    }
    
}

let edad = prompt('edad');
let hora = prompt('hora');
entrada(edad,hora)
*/
/* Ejercicio 2.2
class asistencia{
    constructor(){
        this.estudiantes = ['Jose','Alberto','Juan','Juana','Diana','Diego','Cofla'];
        this.asistencia = [0,0,0,0,0,0,0];
    }
    llamarLista(){
        for(let dia = 1; dia<=2;dia++){
            for(x in this.estudiantes){
                let asistenciaDia = prompt(`¿Asistio ${this.estudiantes[x]} el dia ${dia}?`);
                if (asistenciaDia == 'si'){
                    this.asistencia[x]++;
                }
            }
        }
        for(x in this.estudiantes){
            let añadido = "";
            if(this.asistencia[x] <= (1)){
                añadido = ` y fue reprobado por inasistencia`
            }
            alert(`${this.estudiantes[x]} vino ${this.asistencia[x]} dias${añadido}`)
        }
    }
}
let x = new asistencia;
x.llamarLista()
*/
/*Ejercicio 4
clases ={
    fisica:['Profesor 1','Jose','Juan','Juana','Diego','Cofla'],
    quimica:['Profesor 2','Juan','Juana','Diana','Diego','Cofla'],
    mate:['Profesor 3','Jose','Alberto','Juan','Diana','Diego','Cofla'],
    progra:['Profesor 4','Alberto','Juan','Juana','Diana','Diego',],
    lectiva:['Profesor 5','Jose','Alberto','Juan','Juana','Cofla']
}

lista = (nombreMateria) =>{
    let estudiantes = clases[nombreMateria];
    let resultado = "";
    if (estudiantes != undefined){
        estudiantes.shift();
        document.write(`<h1>${nombreMateria}</h1><br><h3>Estudiantes</h3>`)

        for(estudiante of estudiantes){
            document.write(`<p>${estudiante}</p>`)
            if(estudiante == 'Cofla'){
                resultado += materia(nombreMateria);
            }
        }
        return resultado
    }
    else{
        alert('La materia no esta');
    }
}

materia = (nombreMateria) =>{
    let resultado;
    resultado = `<p><b>${nombreMateria}</b>: <b style = 'color:#28a'>${clases[nombreMateria][0]}</b></p>`;
    return resultado;
}
let resultado = `<h3 style ='color:green'>Cofla esta en la materias</h3><br>`;  
resultado += lista('fisica');
resultado += lista('quimica');
resultado += lista('mate');
resultado += lista('progra');
resultado += lista('lectiva');

document.write(resultado)
*/

/*Ejercicio 
const cont = document.querySelector('.flex-container');
let fragmento = document.createDocumentFragment();


crearLlave = (nombre,modelo,precio) =>{
    img = `<img src = "http://assets.stickpng.com/images/580b585b2edbce24c47b2850.png">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
    document.querySelector('.key-data').value = number;
}

for(i=0;i<20;i++){
    let llaves = crearLlave(`llave ${i+1}`,`modelo ${Math.round((Math.random()*1000))}`,`${Math.round(Math.random()*10+30)}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(Math.round((Math.random()*1000)))})
    div.tabIndex = i;
    div.classList.add('flex-item',`item${i}`);
    div.innerHTML += llaves[0] + llaves[1] + llaves[2] + llaves[3];
    fragmento.appendChild(div);
}
cont.appendChild(fragmento);
*/

