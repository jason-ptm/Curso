const iconMenu = document.querySelector(".show");
const icon = document.querySelector(".icon");
const check = document.getElementById("menu-icon");
const navOptions = document.querySelector(".nav-options");
const firstCont = document.querySelector('.first-cont');
const body = document.getElementsByTagName("body");

check.addEventListener("click",()=>{
    if(check.checked == true){
        navOptions.classList.replace("invisible","visible");
        icon.classList.replace("fa-bars","fa-times");
    }
    else{
        navOptions.classList.replace("visible","invisible");
        icon.classList.replace("fa-times","fa-bars");
    } 
});

document.querySelector('.up-icon').addEventListener("click",()=>{
    window.scroll({
        top:0,
        behavior:"smooth"
    });
});



window.onscroll = ()=>{
    if(window.scrollY > 200)document.querySelector('.up-icon').classList.replace("invisible","visible");
    else document.querySelector('.up-icon').classList.replace("visible","invisible");


    console.log(firstCont.offsetHeight);
    const tempo = firstCont.getBoundingClientRect();
    const inicio = document.getElementById("inicio");
    console.log("top",tempo.top);
    console.log(window.scrollY);
    console.log("bot",(tempo.bottom));

    console.log(inicio);

    if(tempo.bottom>60 || tempo.top>0)inicio.classList.add("focus");
}

window.addEventListener("load",()=>{
    const tempo = firstCont.getBoundingClientRect();
    const inicio = document.getElementById("inicio");
    console.log("top",tempo.top);
    console.log(window.scrollY);
    console.log("bot",(tempo.bottom));

    console.log(inicio);

    if(tempo.bottom>60 || tempo.top>0)inicio.classList.add("focus");
});


