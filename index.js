//capturando o nome para mostrar na outra tela ao abrir a janela
const nomeVisitante =document.getElementById("nome_cad");
const motivoVisitante = document.getElementById("motivo_cad");

const btnAvancar = document.getElementById("btnAvancar");
btnAvancar.setAttribute("disabled", true);
btnAvancar.style.backgroundColor="gray";
motivoVisitante.setAttribute("disabled", true);

const validacao = document.getElementById("validacao");
const validacao2 = document.getElementById("validacao2");

nomeVisitante.addEventListener("keyup", function(){
    
    if(nomeVisitante.value.length >= 3){
        validacao.innerText="Ok!";
        validacao.style.color="green";
        motivoVisitante.removeAttribute("disabled");
       
    }else{
        validacao.innerText="Campo Obrigatório com no mínimo 3 letras";
        validacao.style.color="red";
        motivoVisitante.setAttribute("disabled", true);
        
    }
})

motivoVisitante.addEventListener("keyup", function(){
    
    if(motivoVisitante.value.length >= 10){
        validacao2.innerText="Ok!";
        validacao2.style.color="green";
        btnAvancar.style.backgroundColor="";
        btnAvancar.removeAttribute("disabled");

    }else{
        validacao2.innerText="Campo Obrigatório com no mínimo 10 letras";
        validacao2.style.color="red";
    }
})

export const nomeVisitante;

