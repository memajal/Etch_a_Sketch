
let conteiner=document.querySelector("#container");


function createContainerGrid(numberOfBox){
    for(let i=0; i<numberOfBox; i++) {
        const gridRow=document.createElement("div");
        gridRow.className="grid-row";
    
        for(let j=0; j<numberOfBox; j++) {
        const gridBox=document.createElement("div");
        gridBox.className="grid-box";
        gridRow.appendChild(gridBox);
        }
    
        conteiner.appendChild(gridRow);
        }    
    }

    createContainerGrid(16);
    const conteinerBox= document.querySelectorAll(".grid-box");

    function onMouseOverEffect(){
        conteinerBox.forEach((box) =>{
            // add a click listener
                box.addEventListener("mouseover", ()=> {
                    box.style.backgroundColor = 'blue'; 
            });  
        });
    }

    function numberofSuqares(){
        let numberofSuqares= prompt
        ("Enter number of squares from 16 to 100");
        console.log(numberofSuqares);
    }



onMouseOverEffect();
