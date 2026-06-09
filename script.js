
/*
 CONTATO
*/

const formulario = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){

```
event.preventDefault();

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const mensagem = document.getElementById("mensagem").value.trim();

if(nome === ""){
    resultado.innerHTML = "Por favor, informe seu nome.";
    resultado.style.color = "#ffb3b3";
    return;
}

if(email === ""){
    resultado.innerHTML = "Por favor, informe seu e-mail.";
    resultado.style.color = "#ffb3b3";
    return;
}

if(!email.includes("@") || !email.includes(".")){
    resultado.innerHTML = "Digite um e-mail válido.";
    resultado.style.color = "#ffb3b3";
    return;
}

if(mensagem === ""){
    resultado.innerHTML = "Por favor, escreva uma mensagem.";
    resultado.style.color = "#ffb3b3";
    return;
}

resultado.innerHTML = "Mensagem enviada com sucesso!";
resultado.style.color = "#C2A178";

formulario.reset();
```

});

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }

});

const reveals = document.querySelectorAll(".reveal");

function revelarElementos(){

    reveals.forEach((elemento)=>{

        const alturaJanela = window.innerHeight;
        const topoElemento = elemento.getBoundingClientRect().top;

        if(topoElemento < alturaJanela - 100){
            elemento.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revelarElementos);

revelarElementos();