const body=document.querySelector("#clickeur");
const container=document.querySelector("#container");

const button=document.createElement("button");
button.classList.add("choix");
button.textContent="DIMENSION DU DESSIN";
clickeur.appendChild(button);

const tout_effacer=document.createElement("button");
tout_effacer.classList.add("tout_effacer");
tout_effacer.textContent="TOUT EFFACER";
clickeur.appendChild(tout_effacer);

const draw=document.createElement("button");
draw.classList.add("draw");
draw.textContent="DESSIN";
clickeur.appendChild(draw);

const efface=document.createElement("button");
efface.classList.add("efface");
efface.textContent="EFFACE";
clickeur.appendChild(efface);

//const couleur=document.createElement("button");
//couleur.classList.add("couleur");
//couleur.textContent="Couleur";
//clickeur.appendChild(couleur);


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
        draw.addEventListener("click",()=>{//pour dessiner sur la grille
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="red";
            });
        });
        efface.addEventListener("click",()=>{//pour effacer la couleur de la grille
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor="rgb(172,172,172)"
            });
        });
    }
}



