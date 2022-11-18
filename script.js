
// Parte che riciclerò per fare la pagina dinamica
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

function calcolaForm(){

}

function submitForm(event){
    event.preventDefault();
    
}

for (let elemento of sito) {
    stampaMembro(elemento);
    renderizzaMembro(elemento);
}