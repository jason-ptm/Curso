// CallBacks
    function prueba(callback){
        callback('pedro');
    }

    function funcNombre(nombre){
        console.log(nombre);
    }

    prueba(funcNombre);

    //Metodo 2

    prueba = (cb) =>{
        cb('pedro');
    }

    funcNombre = (nombre)=>{
        console.log(nombre);
    }

    prueba(funcNombre);

    //metodo 3

    prueba = (cb) =>{
        cb('pedro');
    }

    prueba(funcNombre = (nombre)=>{
        console.log(nombre);
    });

    //metodo 4

    prueba = (cb) =>{
        cb('pedro');
    }

    prueba(nombre => console.log(nombre));

// Promesas
    let nombre = 'juan';

    const promesa = new Promise((resolve,reject)=>{
        if(nombre !=='pedro') reject('No se llama pedro');
        else resolve(nombre);
    })

    // No se maneja el error, se muestra un error en consola
    promesa.then(
        (resultado) => console.log(resultado)
    );

    //Se maneja el error, se muestra en consola el mensaje de error
    promesa.then(
        (resultado) => console.log(resultado)
    ).catch((e) => {
        console.log(e);
    });
    
// Await y Async
    // Simulacion de los datos pedidos a un servidor
    const obtenerInfo = (text) =>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{res(text)},Math.random()*1000);
        })
    }

    // Se reciben los resultados en desorden
    const mostrarInfo1 = () =>{
        data1 = obtenerInfo('1: Puta que sos').then((result)=>{console.log(result)});
        data2 = obtenerInfo('2: Dale boca').then((result)=>{console.log(result)});
        data3 = obtenerInfo('3: Navidad').then((result)=>{console.log(result)});
        
    }
    // Se reciben los datos uno por uno en orden
    const mostrarInfo2 = async () =>{
        data1 = console.log(await obtenerInfo('1: Puta que sos'));
        data2 = console.log(await obtenerInfo('2: Dale boca'));
        data3 = console.log(await obtenerInfo('3: Navidad'));
    }

    mostrarInfo1();
    mostrarInfo2();
// AJAX
    
    // Convertir de JSON  a string
    JSON.stringify();
    // Convertir de string a JSON
    JSON.parse();

// Metodo get
    // Validar metodos para internet explorer

    let peticion;

    if(window.XMLHttpRequest)peticion = new XMLHttpRequest();
    else peticion = new ActiveXObject("Microsoft.XMLHTTP");



    peticion.addEventListener('load',()=>{
        console.log(peticion.response);

    });

    peticion.open('GET','info.txt');

    peticion.send();


// metodo post

    // Validar metodos para internet explorer

    let peticion;

    if(window.XMLHttpRequest)peticion = new XMLHttpRequest();
    else peticion = new ActiveXObject("Microsoft.XMLHTTP");



    peticion.addEventListener('load',()=>{
        console.log(JSON.parse(peticion.response));
    });

    peticion.open('POST','https://reqres.in/api/users');

    peticion.setRequestHeader('Content-type', 'application/json;charset=UFT8')

    peticion.send(JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    }));

// FETCH
    // Metodo GET
    peticion = fetch('https://reqres.in/api/users')
        .then(res=>res.json())
        .then(res => console.log(typeof res));

    // Metodo POST

    peticion = fetch('https://reqres.in/api/users',{
        method: "POST",
        body: `{
            "name": "morpheus",
            "job": "leader"
        }`,
        headers: {'Content-type':'application/json'}
    })
    .then(res=>res.json())
    .then(res => console.log(res));

    // mostrar una imagen con BLOB

    const imagen = document.querySelector('.img');

    fetch("https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img));

// AXIOS
    // LINK <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    // Metodo GET
    axios('https://reqres.in/api/users/2').then(res=>console.log(res.data));
    // Metodo POST
        axios.post('https://reqres.in/api/users',{
                "name": "morpheus",
                "job": "leader"
            }).then(res=>console.log(res.data));
// Await y ASync en peticiones
    const getName = async()=>{
        let peticion = await fetch('direccion');
        let resultado = await peticion.json();
        console.log(resultado);
    }

    const getName = async()=>{
        let peticion = await axios('direccion');
        console.log(peticion.data);
    }
// Prototipos
    let objeto ={
        "propiedad" : "datos"
    }
    class variable{
        constructor(){}
        hablar(){
            console.log('HOLA PUTA');
        }
    }
    // Prototipos que creamos
    console.log(objeto.prototype);
    // prototipos que hereda
    console.log(objeto.__proto__);

    let x = new variable; 
    // Agrega la funcion nueva al metodo hablar 
    x.hablar = ()=>{
        console.log('HOLA YA NO SOY MAS GROSERO');
    }
    // Accede a la ultima actualizacion del metodo
    x.hablar()
    // Accede a la primer version del metodo
    x.__proto__.hablar();
    // Modifica el metodo del objeto
    x.__proto__.hablar = ()=>{
        console.log('Ahora modifico la primera version del metodo');
    }
    x.hablar();
// USE STRICT
    "use strict";
    // No permite malas sintaxis

    // Saca un error porque la variable tenemos que definirla
    mal = "Hola";
    console.log(mal);

    // Ya no vota error
    let bine = "hola";
    console.log(bien)

    const obj ={};
    // Se agregan propiedades al objeto y con writeable: false no se permite no sobreescribir
    Object.defineProperty(obj,'nombre',{value:'juan',writable:false});

    // No permite agregar nuevas propiedades
    Object.preventExtensions(obj);
    class x{
        constructor(){
            this.nombre = 'Juan';
        }
        saludar(){
            console.log(this.nombre)
        }
    }

    let obj = new x;

    obj.saludar();

// Storage
"use strict";
    // Agrega un valor en el almacenamiento local
    localStorage.setItem('nombre','Juan');
    console.log(localStorage.getItem('nombre'));
    setTimeout(() => {
        // Remueve el item
        localStorage.removeItem('nombre')
    }, 3000);

    // Agrega un valor
    sessionStorage.setItem('nombre','Juan');
    console.log(sessionStorage.getItem('nombre'));

    setTimeout(() => {
        // Remueve todo
        sessionStorage.clear();
    }, 3000);



// ...num nos sirven para recibir la cantidad de parametros infinita
    sumar = (...num)=>{
        let resultado = 0;
        for(numero of num){
            resultado += numero;
        };
        console.log(resultado);
    }

    sumar(12,43,56,2);

    let edad = 25;
    if(edad > 18){
        console.log('Es mayor de edad');
        console.log('Sos un nene');
        console.log('Anda a estudiar');
    }
    else{console.log('Es menor de edad')};

    (edad > 18) ? 
                (console.log('Es mayor de edad'),
                console.log('Sos un nene'),
                console.log('Anda a estudiar'))
                : console.log('Es menor de edad');

    let array = [1,2,3,4,5];
    console.log(...array);

    let array1 = [1,2,3,4,5];
    let array2 = [6,7,8,9];

    array1.push(...array2);
    // modifica el primer array
    console.log(array1);
    // crea un nuevo array
    let array3 = [...array1,...array2];
    console.log(array3);

    // Pasa la cantidad de parametros necesaria
    const sumar = (num1,num2)=>{
        console.log(num1+num2);
    }
    sumar(...array1);

// DRAG
    const circulo = document.querySelector('.circulo');
    const cuadrado = document.querySelector('.cuadrado');

    circulo.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text-plain',e.target.className);
    });
    // circulo.addEventListener('drag',()=>console.log(2));
    // circulo.addEventListener('dragend',()=>console.log(3));
    cuadrado.addEventListener('dragenter',()=>console.log(1));
    cuadrado.addEventListener('dragover',
    (e)=>{
        // Deja que se pueda poner encima de el objeto, sin el preventDefault no se puede poner encima
        e.preventDefault();
        console.log(2);
    });
    cuadrado.addEventListener('drop',(e)=>{
        console.log(e.dataTransfer.getData('text-plain'));
    });
    cuadrado.addEventListener('dragleave',()=>console.log(4));

// Geolocation

    const geoLoca = navigator.geolocation;

    // esta funcion muestra las coordenadas
    const pos = (x) =>{
        console.log(x);
    }
    // imprime en consola el error
    const err = (e) => console.log(e);
    // parametros adicionales
    const options = {
        maximumAge: 0,
        timeout: 3000,
        enableHightAccuracy: true
    }

    // pide la ubicacion al navegador
    geoLoca.getCurrentPosition(pos,err,options);

// Historial

    console.log(history);
    // Se devulve a la pagina anterior
    history.back();
    // Va a la pagina posterior
    history.forward();

    // history.go()
    // 0 = recarga la pagina
    // 1 = recarga la pagina #1
    // -1 = se va al inicio

    // Deja rastro en el historial
    history.pushState({nombre:'pedro'},'','?putos');

    // No Deja rastro en el historial
    history.replaceState({nombre:'pedro'},'','?putos');
    addEventListener('popstate',(e)=>console.log(e.state));


// MatchMedia

    "use strict";

    // Valida que la condicion se cumpla, si no se cumple el matches es igual a false
    console.log(matchMedia('maxwidth:300px'));

    const caja = document.querySelector('.caja');

    caja.addEventListener('change',()=>{
        if(matchMedia.matches)caja.classList.replace('no-responsive','responsive')
        else if(caja.className == 'responsive')caja.classList.replace('responsive','no-responsive');
    })

// Observe
    "use strict";

    // Observer nos permite saber si algo esta en el viewport del usuario

    // Observar una caja
    // const caja3 = document.querySelector('.caja3');

    // const verificarUbicacion = (entries) =>{
    //     const every = entries[0];
    //     console.log(every.isIntersecting);
    // }

    // const observer = new IntersectionObserver(verificarUbicacion);

    // observer.observe(caja3);

    // observar varias cajas
    const cajas = document.querySelectorAll('.caja');

    const verificarUbicacion = (entries) =>{
        for(let entry of entries){
            if(entry.isIntersecting)console.log('Se esta viendo la caja',entry.target.textContent);
        }
    }

    const options = {
        // por defecto es el viewport 
        root:visualViewport,
        // distnacia anticipada desde donde se va a detectar el elemento
        rootMargin:'30px',
        // Altura a la que se detectara el elemento
        treshold:1

    }

    const observer = new IntersectionObserver(verificarUbicacion);

    for(let caja of cajas)observer.observe(caja);





























    


// Crear base de datos o busca la base de datos
const IDBRquest = indexedDB.open('dataBase',1);

IDBRquest.addEventListener('upgradeneeded',()=>{
    const db = IDBRquest.result;
    db.createObjectStore('nombres',{
        autoIncrement: true
    });
});
IDBRquest.addEventListener('error',()=>{
    alert('error en la creacion de la base de datos');
});

// CRUD
// Create
const addObject = objeto =>{
    const IDBdata = request('nombres','readwrite','Agregado correctamente');
    IDBdata.add(objeto);
}
// Read
const readObject = () =>{
    const IDBdata = request('nombres','readwrite');
    const cursor = IDBdata.openCursor();
    cursor.addEventListener('success',()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else console.log('Datos leidos');
    })
}
// Update
const updateObject = (objeto,key) =>{
    const IDBdata = request('nombres','readwrite','Actualizado correctamente');
    IDBdata.put(objeto,key);
}
// Delete
const deleteObject = key =>{
    const IDBdata = request('nombres','readwrite','Eliminado correctamente');
    IDBdata.delete(key);
}

const request = (tabla,metodo,msg) =>{
    const db = IDBRquest.result;
    // Se puede leer y escribir readwrite o solo leer readonly
    const IDBtransaction = db.transaction(tabla,metodo);
    const objectStore = IDBtransaction.objectStore(tabla);
    IDBtransaction.addEventListener('complete',()=>{
        console.log(msg);
    });
    return objectStore;
}
// Visibility change
    // nos permite saber si estan en otra pestaña o no
    addEventListener('visibilitychange',e=>{
        console.log(document.visibilityState)
    })
// Notification
    // pide permiso a notificacion
    Notification.requestPermission(()=>{
        if(Notification.permission == 'granted')new Notification('PUTO QUE SOS')
    });
    // notificacion
    new Notification('PUTO QUE SOS');
// WORKER
// dedicated worker
    const worker = new Worker('worker.js');

    document.querySelector('.btn').addEventListener('click',()=>ejecutarBucle());

    // Recibe el mensaje del worker
    worker.addEventListener('message',(e)=>{
        console.log(e.data);
        // termina el worker y no se puede volver a acceder
        worker.terminate();
    });

    const ejecutarBucle = () =>{
        // envia un mensaje al worker
        worker.postMessage('bestia parda sos'); 
    }


    // ARCHIVO WORKER
    const ejecutarBucle = (e) =>{
        console.log(e.data);
        postMessage('LO SE CRACK')
    }
    // recibe el mensaje del codigo
    addEventListener('message',(e)=>ejecutarBucle(e));  

// Navigator ofrece informacion de la coneccion y el navegador
    console.log(navigator.appCodeName)

// Memorizer
    // Los datos se guardan en el array
    let cache = [];

    // hace que cuando se repitan los datos los muestra al instante ya que ahorra tiempo
    const memoizer = func =>{
        return e => {
            let index = e.toString()
            if(cache[index] == undefined){
                cache[index] = func(e);
            }
            return cache[index]
        }
    }

    const hacerAlgo = num =>{
        const a = 20;
        const b = 12;
        let c = 0;
        for(let i = num -1; i>=0;i--){
            for(let j = i -1; i>=0; i--){
                c += a*b;
            }
        }
        return c
    }

    console.log('Sin memoize');

    const date1 = new Date();
    hacerAlgo(990040000)
    console.log(new Date() - date1);

    const date2 = new Date();
    hacerAlgo(690040000)
    console.log(new Date() - date2);

    const date3 = new Date();
    hacerAlgo(990040000)
    console.log(new Date() - date3);

    const date4 = new Date();
    hacerAlgo(690040000)
    console.log(new Date() - date4);

    console.log('');

    console.log('Con memoize');

    const memo = memoizer(hacerAlgo);

    const date5 = new Date();
    memo(990040000)
    console.log(new Date() - date5);

    const date6 = new Date();
    memo(690040000)
    console.log(new Date() - date6);

    const date7 = new Date();
    memo(990040000)
    console.log(new Date() - date7);

    const date8 = new Date();
    memo(690040000)
    console.log(new Date() - date8);

    console.log('');
// CACHE
    caches.open('practica').then(cache =>{
        // un solo archivo
        cache.add('info.txt');
        // recibe como parametros un array de archivos
        cache.addAll(['info2.txt','info3.txt']);
        // lee el archivo como promesa
        cache.match('info.txt').then(res=>{
            console.log(res);
        });
        // solicita informacion de cada archivo en caché
        cache.keys().then(e=>console.log(e))
    })
// Service worker
    if(navigator.serviceWorker){
        // Instalar service worker
        navigator.serviceWorker.register('worker.js');
    }
    // Activa el service worker cuando termina de cargar y envia un mensaje
    navigator.serviceWorker.ready.then(res=>res.active.postMessage('HOLA PUTA'));

    navigator.serviceWorker.addEventListener('message',e=>{
        document.querySelector('.cont').innerHTML = `Te contesto ${e.data}`
    })

    
        // Verifica que se haya instalando el servicewrokeer
    self.addEventListener('install',e=>{
        console.log('Instalando...')
    });
    // Activar el serviceWorker
    self.addEventListener('activate',e=>{
        console.log('activo')
    });
    // Interceptar peticion
    self.addEventListener('fetch',()=>{
        console.log('Interceptando peticion')
    });
    // Recibe el mensaje
    self.addEventListener('message',e=>{
        console.log(`El mensaje es: ${e.data}`);
        e.source.postMessage('PUTA SOS VOS CRACK');
    })