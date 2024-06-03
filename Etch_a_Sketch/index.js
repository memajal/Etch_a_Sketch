let container=document.querySelector("#container");


function createContainerGrid(numberOfBoxes){
    for(let i=0; i<numberOfBoxes; i++) {
        const gridRow=document.createElement("div");
        gridRow.className="grid_row";
        gridRow.setAttribute("style", "display: flex;flex-grow: 1;");
        

        for(let j=0; j<numberOfBoxes; j++) {

        const gridBox=document.createElement("div");
        gridBox.className="grid_box";
        gridBox.setAttribute("style", "flex-grow: 1;border: 2px solid black;");
        gridRow.appendChild(gridBox);

        gridBox.addEventListener("mouseover", ()=> {
            gridBox.style.backgroundColor = 'blue'; });
        }

        container.appendChild(gridRow);
        }    
    }

    


    function numberofSuqares(){
        /*control if the container has divs inside and remove them */
        while(container.firstChild){
             container.removeChild(container.lastChild);
        }
     
        let numberofSuqares= prompt("Enter number of squares <100");

        if(numberofSuqares>100) {
            numberofSuqares= prompt("Enter number of squares <100");
        }
        createContainerGrid(numberofSuqares);
    }

    createContainerGrid(16);


        