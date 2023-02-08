const body=document.querySelector("#clickeur");
const container=document.querySelector("#container");

const button=document.createElement("button");
button.classList.add("choix");
button.textContent="NOUVEAU DESSIN";
clickeur.appendChild(button);

const tout_effacer=document.createElement("button");
tout_effacer.classList.add("tout_effacer");
tout_effacer.textContent="TOUT EFFACER";
clickeur.appendChild(tout_effacer);

const efface=document.createElement("button");
efface.classList.add("efface");
efface.textContent="EFFACE";
clickeur.appendChild(efface);
 
const bleu=document.createElement("button");//bouton pour choisir couleurs et tout ceux en-bas aussi.
const jaune=document.createElement("button");
const rouge=document.createElement("button");
const vert=document.createElement("button");
const noir=document.createElement("button");
const rose=document.createElement("button");
bleu.classList.add("bleu");
jaune.classList.add("jaune");
rouge.classList.add("rouge");
vert.classList.add("vert");
noir.classList.add("noir");
rose.classList.add("rose");
bleu.style.backgroundColor="blue";
jaune.style.backgroundColor="yellow";
rose.style.backgroundColor="pink";
rouge.style.backgroundColor="red";
vert.style.backgroundColor="green";
noir.style.backgroundColor="black";
bleu.textContent="bleu";
jaune.textContent="jaune";
vert.textContent="vert";
noir.textContent="noir";
rose.textContent="rose";
rouge.textContent="rouge";
clickeur.appendChild(bleu);
clickeur.appendChild(jaune);
clickeur.appendChild(rouge);
clickeur.appendChild(vert);
clickeur.appendChild(noir);
clickeur.appendChild(rose);


button.addEventListener("click",()=>{ //choisit la grosseur du canevas
    let colone=0;
    let row=0;
    colone=prompt("Combien de carrés de colone");
    row=prompt("Combien de carrés de rangé");
    dessin(colone,row);
});

tout_effacer.addEventListener("click",()=>{ 
    const clean=document.getElementById("container");// pour tout effacer le canevas.
    clean.innerHTML="";
});


function dessin(colone,row){
    container.style.setProperty('--grid-colone', colone);//pour setup la grille
    container.style.setProperty('--grid-row', row);//pour setup la grille
    for(let i=0;i<(colone*row);i++){//pour setup la grille
        const box=document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        color(box);
    }
}

function color(box){
    jaune.addEventListener("click",()=>{
        const makeJaune = event => event.target.style.backgroundColor = "yellow";
        box.addEventListener("mousedown",makeJaune);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeJaune(event);
        });
    });

    bleu.addEventListener("click",()=>{
        const makeBlue = event => event.target.style.backgroundColor = "blue";
        box.addEventListener("mousedown",makeBlue);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeBlue(event);
        });
    });

    vert.addEventListener("click",()=>{
        const makeVert = event => event.target.style.backgroundColor = "green";
        box.addEventListener("mousedown",makeVert);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeVert(event);
        });
    });

    rose.addEventListener("click",()=>{
        const makeRose = event => event.target.style.backgroundColor = "pink";
        box.addEventListener("mousedown",makeRose);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeRose(event);
        });
    });

    rouge.addEventListener("click",()=>{
        const makeRouge = event => event.target.style.backgroundColor = "red";
        box.addEventListener("mousedown",makeRouge);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeRouge(event);
        });
    });

    noir.addEventListener("click",()=>{
        const makeNoir = event => event.target.style.backgroundColor = "black";
        box.addEventListener("mousedown",makeNoir);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeNoir(event);
        });
    });

    efface.addEventListener("click",()=>{//pour effacer la couleur de la grille
        const makeEfface = event => event.target.style.backgroundColor = "rgb(172,172,172)";
        box.addEventListener("mousedown",makeEfface);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeEfface(event);
        });
    });
}





