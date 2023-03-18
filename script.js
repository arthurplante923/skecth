const body=document.querySelector("#clickeur");

const container=document.querySelector("#container");

const button=document.querySelector(".choix");

const tout_effacer=document.querySelector(".tout_effacer");

const efface=document.querySelector(".efface");

const button_color=document.querySelectorAll(".couleur");



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
    container.style.setProperty("--grid-colone", colone);//pour setup la grille
    container.style.setProperty("--grid-row", row);//pour setup la grille
    for(let i=0;i<(colone*row);i++){//pour setup la grille
        const box=document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        color(box);
    }
}

function color(box){

  button_color.forEach(button=>{
    button.addEventListener("click",()=>{
      const makeColor = event => event.target.style.backgroundColor = button.innerText;
        box.addEventListener("mousedown",makeColor);
        box.addEventListener("mousemove", event => {
          if (event.buttons == 1) makeColor(event);
        });
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





