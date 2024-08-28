

// Fase Prep

// recupero elementi dal DOM
const team = document.getElementById('team');

// Variabili note
//Array contenente oggetti, ed ognuno di essi rappresenta una persona con 3 info pricipali: nome, ruolo, e immagine di presentazione
const teamMembers = [
    {name:'Wayne Barnett', role:'Founder & CEO', picPath:'wayne-barnett-founder-ceo'},
    {name:'Angela Caroll', role:'Chief Editor', picPath:'angela-caroll-chief-editor'},
    {name:'Walter Gordon', role:'Office Manager', picPath:'walter-gordon-office-manager'},
    {name:'Angela Lopez', role:'Social Media Manager', picPath:'angela-lopez-social-media-manager'},
    {name:'Scott Estrada', role:'Developer', picPath:'scott-estrada-developer'},
    {name:'Barbara Ramos', role:'Graphic Designer', picPath:'barbara-ramos-graphic-designer'},     
]

// Dichiaro la variabile che userò per costruire l'output
let teamText = '';

// Produzione Output
for (let i = 0; i < teamMembers.length; i++) {
    person = teamMembers[i];

    //recupero tutte informazioni di una persona
    let name = person.name;
    let role = person.role;
    let picPath = person.picPath;

    // Monto la stringa per ogni persona con il Bonus 1(riga 73: creazione dell'immagine)
    /*
    teamText += `${name}<br>    
                In azieda ricopre il ruolo di ---> ${role}<br>
                La foto di presentazione si trova all'indirizzo: ${picPath}<br>
                <img src='img/${picPath}.jpg'><br><br>
                `;
    */

    // Uso un template literal con le strutture di Bootstrap
    teamText +=`<div class='col d-flex justify-content-center'>
                <div class="card border-0 " style="width: 13rem;">
                <img src="img/${picPath}.jpg" class="card-img-top" alt="${picPath}">
                <div class="card-body text-center">
                <h5 class="card-title fst-italic">${name}</h5>
                <p class="card-text fs-6"><span class='fw-bold text-primary fs-6'>${role}</span></p>
                </div>
                </div>
                </div>`
}

// Mostro il template creato
team.innerHTML = teamText;

