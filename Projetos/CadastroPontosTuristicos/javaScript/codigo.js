//Vamos criar agora a primeira Div para colocar os elementos dentro

let elementoPai = document.getElementById("ElementoPai");
elementoPai.classList.add('banner-cards');


// Criando um construtor para utilizar o cadastro.

class PontosTuristicos {
    constructor(imageUrl, cidade, pontoTuristico, descricao) {
        this.imageUrl = imageUrl;
        this.cidade = cidade;
        this.pontoTuristico = pontoTuristico;
        this.descricao = descricao;
    }
}

// criando a lista.

let listaPontoTuristicos = [];

// variaveis de uso comum;

const imgUrl = document.getElementById("url_cad");
const nomeCidade = document.getElementById("nome_cad");
const pontoTuristico = document.getElementById("NomeLocal_cad");
const descricaoCidade = document.getElementById("descricao_cad");
const btnSmall = document.getElementById("btnSmall");
let validacaoImg = document.getElementById("imgSmall");
let validacaoPT = document.getElementById("localSmall");
let validacaoCidade = document.getElementById("smallCidade");

// criando a função de cadastrar;

function Cadrastrar() {

    if (nomeCidade.value.length >= 4 && pontoTuristico.value.length >= 4 && imgUrl.value.length >= 4 && descricaoCidade.value.length >= 4) {
        btnValidade = true;
    } else {
        btnValidade = false;
    }

    console.log(btnValidade);
    if (btnValidade == true) {
        const n = new PontosTuristicos(imgUrl.value, nomeCidade.value, pontoTuristico.value, descricaoCidade.value);
        if (nomeCidade.value && pontoTuristico.value && imgUrl.value && descricaoCidade.value) {
            listaPontoTuristicos.push(n);
            rendenizarCards();
        }
        imgUrl.value = "";
        nomeCidade.value = "";
        pontoTuristico.value = "";
        descricaoCidade.value = "";
        btnSmall.innerText = "";
        validacaoImg.innerText = "";
        validacaoCidade.innerText = "";
        validacaoPT.innerText = "";

    } else {
        btnSmall.innerText = "Falta cadastrar informações";
        btnSmall.style.color = "red";
    }


};

// criando a função para renderizar os cards;

function rendenizarCards() {
    let novaDiv = document.createElement("div");
    novaDiv.setAttribute("class", "cards");
    // percorrer a lista de ponto turisticos
    for (const card of listaPontoTuristicos) {
        novaDiv.innerHTML = `   <div class="card-filme">                              
                                    <h1 class ="titulos-card">${card.cidade}</h1>
                                    <h2 class ="titulos-card">${card.pontoTuristico}</h2>
                                    <img src="${card.imageUrl}" class ="card">
                                    <p class ="texto-img">
                                    ${card.descricao}
                                    </p>
                                    </div>
                                `;
        elementoPai.appendChild(novaDiv);
    }
}

// criando as validações

nomeCidade.addEventListener("keyup", function () {
    if (nomeCidade.value.length >= 4) {
        validacaoCidade.innerText = "Ok!";
        validacaoCidade.style.color = "green";

    } else {
        nomeCidade.style.backgroundColor = "#ffffff";
        validacaoCidade.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacaoCidade.style.color = "red";
    }
})

pontoTuristico.addEventListener("keyup", function () {

    if (pontoTuristico.value.length >= 4) {
        validacaoPT.innerText = "Ok!";
        validacaoPT.style.color = "green";

    } else {
        pontoTuristico.style.backgroundColor = "#ffffff";
        validacaoPT.innerText = "Campo obrigatorio com 4 letras no minimo";
        validacaoPT.style.color = "red";

    }
})

imgUrl.addEventListener("keyup", function () {

    if (imgUrl.value.length >= 10) {
        validacaoImg.innerText = "Ok!";
        validacaoImg.style.color = "green";

    } else {
        imgUrl.style.backgroundColor = "#ffffff";
        validacaoImg.innerText = "Campo obrigatorio com no minimo um endereço válido ex: Http ou Https";
        validacaoImg.style.color = "red";
    }
})