/*
esercizio di oggi: Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

 # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/

const team = [
    {name:'Wayne Barnett', role:'Founder & CEO', picPath:'wayne-barnett-founder-ceo'},
    {name:'Angela Caroll', role:'Chief Editor', picPath:'angela-caroll-chief-editor'},
    {name:'Walter Gordon', role:'Office Manager', picPath:'walter-gordon-office-manager'},
    {name:'Angela Lopez', role:'Social Media Manager', picPath:'angela-lopez-social-media-manager'},
    {name:'Scott Estrada', role:'Developer', picPath:'scott-estrada-developer'},
    {name:'Barbara Ramos', role:'Graphic Designer', picPath:'barbara-ramos-graphic-designer'},     
]

for (let i = 0; i < team.length; i++) {
    person = team[i];
    console.log(person.name);
    console.log('il suo ruolo in azienda è: ',person.role);
    console.log('il percorso per la sua foto profilo è: ', person.picPath)
    console.log('---------------------------------------------------------');
}