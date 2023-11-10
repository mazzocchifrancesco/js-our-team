// Utilizzando i dati forniti (nel prossimo messaggio), creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const container = document.getElementById("container");
const percorsoFoto = "./img/";

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1: Trasformare la stringa foto in una immagine effettiva
for (let i = 0; i < team.length; i++) {
    console.log(`nome membro: ${team[i].nome}, ruolo membro: ${team[i].ruolo}, percorso immagine: ( ${team[i].foto} )`);

    // creazione scheda membro  
    const scheda = document.createElement("div");
    scheda.classList.add("scheda","col-4");

    // creazione immagine, assegnazione id e modifica sorgente
    immagineMembro = document.createElement("img");
    immagineMembro.id = [team[i].nome.substring("0", "3")] + i;
    immagineMembro.src = [percorsoFoto + team[i].foto]
    scheda.append(immagineMembro);

    // aggiunta nome e ruolo
    const nome = team[i].nome;
    const ruolo = team[i].ruolo;
    const percorsoImmagine = team[i].foto;
    const NomeMembro = document.createElement("p")
    NomeMembro.innerText = nome;
    const ruoloMembro = document.createElement("p")
    ruoloMembro.innerText = ruolo;

    container.appendChild(scheda);
    scheda.append(NomeMembro, ruoloMembro);






}
// BONUS 2: Organizzare i singoli membri in card/schede