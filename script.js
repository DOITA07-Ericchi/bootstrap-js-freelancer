
// Parte che riciclerò per fare la pagina dinamica
const websites = [ {
    nome: "Cabin website",
    foto: "cabin.png"
}, {
    nome: "Cake website",
    foto: "cake.png"
}, {
    nome: "Circus website",
    foto: "circus.png"
}, {
    nome: "Game website",
    foto: "game.png"
}, {
    nome: "Safe website",
    foto: "safe.png"
}, {
    nome: "Submarine website",
    foto: "submarine.png"
} ]

function stampaMembro(sito){
    console.log(`Nome:  ${sito.nome}
Foto:  ${sito.foto}`)
}

function renderizzaMembro(sito){
    let codice = document.getElementById("tabellaSiti");
    codice.innerHTML += // Qua ci va il codice delle card
}

for (let sito of websites) {
    stampaMembro(sito);
    renderizzaMembro(sito);
}