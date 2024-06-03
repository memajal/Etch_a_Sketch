let numberOfRows=16;
let numberofColumns=16;
let conteiner=document.querySelector("#container");


function createContainerGrid(){
    for(let i=0; i<16; i++) {
        const conteinerBoxVertical=document.createElement("div");
        conteinerBoxVertical.className="conteiner_box_vertical";
        conteinerBoxVertical.setAttribute("style", "border:2px solid red; width:30px; height:auto;");
        conteiner.appendChild(conteinerBoxVertical);

        for(let j=0; j<16; j++) {
            const conteinerBox=document.createElement("div");
        conteinerBox.className="conteiner_box";
        conteinerBox.setAttribute("style", "border:2px solid red; width:auto; height:30px;");
        conteinerBoxVertical.appendChild(conteinerBox);
        }
        }    
    }

    createContainerGrid();
    const conteinerBox= document.querySelectorAll(".conteiner_box");

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