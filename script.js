let prezzi = [20.50, 15.30, 33.60];
let codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calcolaForm(ore, tipo, codice){

}

function submitForm(event){
    event.preventDefault();
}

// Pagina aggiornata dinamicamente in JS
const sito = [ {
    nome: "Cabin website",
    foto: "cabin.png",
    urlo: "https://ericchi.moe"
}, {
    nome: "Cake website",
    foto: "cake.png",
    urlo: "https://ericchi.moe"
}, {
    nome: "Circus website",
    foto: "circus.png",
    urlo: "https://ericchi.moe"
}, {
    nome: "Game website",
    foto: "game.png",
    urlo: "https://ericchi.moe"
}, {
    nome: "Safe website",
    foto: "safe.png",
    urlo: "https://ericchi.moe"
}, {
    nome: "Submarine website",
    foto: "submarine.png",
    urlo: "https://ericchi.moe"
} ]

function stampaMembro(sito){
    console.log(`Nome:  ${sito.nome}
Foto:  ${sito.foto}`)
}

function renderizzaMembro(sito){
    let codice = document.getElementById("tabellaSiti");
    codice.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
    <div class="card">
    <img src="img/portfolio/` + sito.foto + `" class="card-img-top" alt="`+ sito.nome +`">
    <div class="card-body">
    <h5 class="card-title">` + sito.nome +`</h5>
    <a href="#" class="btn btn-primary btn-info">Preview</a>
    <a href="` + sito.urlo +`" class="btn btn-outline-info">Visit site</a>
    </div>
    </div>
    </div>`
}

for (let elemento of sito) {
    stampaMembro(elemento);
    renderizzaMembro(elemento);
}