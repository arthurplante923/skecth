const body=document.querySelector("#clickeur");

const container=document.querySelector("#container");

const button=document.querySelector(".choix");

const tout_effacer=document.querySelector(".tout_effacer");

const efface=document.querySelector(".efface");

const button_color=document.querySelectorAll(".couleur");



button.addEventListener("click",()=>{ //choisit la grosseur du canevas

    const clean=document.getElementById("container");// pour tout effacer le canevas.
    clean.innerHTML="";
    let colone=0;
    let row=0;
    colone=prompt("Combien de pixels de haut");
    row=prompt("Combien de pixels de long");
    dessin(colone,row);
});

function effacer_tout(box){
  tout_effacer.addEventListener("click",()=>{ 
    box.style.backgroundColor="rgb(172,172,172)";
  });
}



function dessin(colone,row){
    container.style.setProperty("--grid-colone", colone);//pour setup la grille
    container.style.setProperty("--grid-row", row);//pour setup la grille
    for(let i=0;i<(colone*row);i++){//pour setup la grille
        const box=document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        color(box);
        effacer_tout(box);
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





