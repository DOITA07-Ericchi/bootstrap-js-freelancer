const prezzi = [20.50, 15.30, 33.60];
const codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

// Controllo della validità del codice sconto
function controllaCodice() {
    let valido = false;
    let codice = document.getElementById("inputCode").value;
    if (codice != ''){
        for (let i = 0; i < codiciPromo.length; i++){
            if(codice == codiciPromo[i]){
                codiciPromo.splice(i, 1); // Rimozione dei codici usati
                valido = true;
                break;
            }
        }
        if(valido === false) {
            let testoRosso = document.getElementById("inputCode")
            testoRosso.classList.add("text-danger");
            alert("Il codice sconto non è valido.");
        }
    }
    return valido;
}

// Calcolo del prezzo finale
function calcolaForm(ore, tipo){
    let prezzo = 0.0;
    switch(tipo) {
        case 'backend':
            prezzo = prezzi[0];
            break;
        case 'frontend':
            prezzo = prezzi[1];
            break;
        case 'analysis':
            prezzo = prezzi[2];
            break;
    }
    let scontoValido = controllaCodice();
    let calcolo = ore * prezzo;
    if (scontoValido == true) {
        calcolo = calcolo/100*75;
    }
    return calcolo;
}

// Funzione del form
function submitForm(event){
    event.preventDefault(); // Importante
    let ore = document.getElementById("inputHours").value;
    let tipo = document.getElementById("inputType").value;
    
    let prezzoFinale = calcolaForm(ore, tipo);
    document.getElementById("totale").innerHTML = 'Il costo totale è: ' + prezzoFinale.toFixed(2) + '€'
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
Foto:  ${sito.foto}
URL:   ${sito.urlo}`)
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