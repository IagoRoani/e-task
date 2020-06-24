// var tagCatalogo = document.getElementById("catalogo").childElementCount;
var jogo = 0;

var imageJogo = ["../sistema-web/img/Cyberpunk_2077.png", "../sistema-web/img/game.jpg", "../sistema-web/img/game.jpg", "../sistema-web/img/game.jpg"
    , "../sistema-web/img/game.jpg", "../sistema-web/img/game.jpg", "../sistema-web/img/game.jpg","../sistema-web/img/game.jpg","../sistema-web/img/game.jpg"
];
var nomeJogo = ["Cyberpunk", "Pubg", "Dota", "Jogo", "Jogo Legal", "Jogos", "Jogo Bom","COD","GTA"];
var precoJogo = ["199,99", "199,99", "199,99", "199,99", "199,99", "199,99", "199,99","199,99","199,99"];

var jogosList = { jogoImage: imageJogo, jogosNome: nomeJogo, jogoPreco: precoJogo };

function jogosCatalogo() {
    for (jogo; jogo < nomeJogo.length; jogo++) {
        catalogo.innerHTML +=
            `<div key="${jogo}" class="game" >
            <img id="jogo-capa" src="${jogosList.jogoImage[jogo]}" alt=""><br>
            <span id="jogo-nome">${jogosList.jogosNome[jogo]}</span> <br>
            <span id="jogo-peco">R$ ${jogosList.jogoPreco[jogo]}</span> 
            <img id="remove" onclick="removerJogo(${jogo})" class="star" src="img/star-white-18dp.svg" alt="">
        </div>`;
    }
    // console.log(jogosList);

}
function removerJogo(identifier) {
    var catalogoRemove = document.querySelector(`.game[key="${identifier}"]`);
    imageJogo.splice(catalogoRemove, 1);
    nomeJogo.splice(catalogoRemove, 1);
    precoJogo.splice(catalogoRemove, 1);
    jogosList = { jogoImage: imageJogo, jogosNome: nomeJogo, jogoPreco: precoJogo };
    catalogo.removeChild(catalogoRemove);
    // console.log(jogosList);
}
window.onload = function atualizarCatalogo() {
    jogosCatalogo();
    setTimeout(() => {
        atualizarCatalogo();
        ledCores();
    }, 150);
};