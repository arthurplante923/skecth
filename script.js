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
 
const bleu=document.createElement("button");
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


button.addEventListener("click",()=>{
    let colone=0;
    let row=0;
    colone=prompt("Combien de carrés de colone");
    row=prompt("Combien de carrés de rangé");
    dessin(colone,row);
});

tout_effacer.addEventListener("click",()=>{
    const clean=document.getElementById("container");// pour tout effacer.
    clean.innerHTML="";
});

function dessin(colone,row){
    container.style.setProperty('--grid-colone', colone);//pour setup la grille
    container.style.setProperty('--grid-row', row);//pour setup la gril
    for(let i=0;i<(colone*row);i++){//pour setup la grille
        const box=document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        jaune.addEventListener("click",()=>{
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="yellow";
            });
        });
        bleu.addEventListener("click",()=>{
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="blue";
            });
        });
        vert.addEventListener("click",()=>{
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="green";
            });
        });
        rose.addEventListener("click",()=>{
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="pink";
            });
        });
        rouge.addEventListener("click",()=>{
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="red";
            });
        });
        noir.addEventListener("click",()=>{
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="black";
            });
        });
        efface.addEventListener("click",()=>{//pour effacer la couleur de la grille
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="rgb(172,172,172)"
            });
        });
    }
}



