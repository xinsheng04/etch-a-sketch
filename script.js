function getRandomColor(){
    const string = "0123456789ABCDEF";
    color = "#";
    for(let i=0; i<6; i++)
        color+=string[Math.floor(Math.random()*16)];
    return color;
}

function changeDivColor(div){
    div.style.backgroundColor = getRandomColor();
}
function createHolder(){
    const newHolder = document.createElement("div");
    console.log("making new holder");
    newHolder.classList.add("holder-specs");
    return newHolder;
}
function createBox(){
    const newDiv = document.createElement("div");
    console.log("making new box");
    newDiv.classList.add("box-specs");
    newDiv.classList.add("flagged");
    //extra- interactive elements
    newDiv.addEventListener("mouseover", () => newDiv.classList.add("box-pressed"));
    newDiv.addEventListener("mouseout", () => newDiv.classList.remove("box-pressed"));
    newDiv.addEventListener("click", () => {
        if(newDiv.classList.contains("flagged")){
            changeDivColor(newDiv);
            newDiv.style.opacity = 0.1;
            newDiv.classList.remove("flagged");
            console.log(1);
        }
        else if(newDiv.style.opacity<1.0){
            newDiv.style.opacity = parseFloat(newDiv.style.opacity)+0.1;
            console.log(2);
        }
    });
    return newDiv;
}

document.addEventListener("DOMContentLoaded", ()=>{
    //execution starts here
    console.log('DOM Content loaded');
    const button = document.getElementById("reset");
    const playArea = document.getElementById("main-div");
    let dimensions;//dimension of playArea

    button.addEventListener("click", () => {
        button.classList.add("button-active");
        setTimeout(() => {
            button.classList.remove("button-active");
        }, 500);
        //clear existing flexbox
        playArea.innerHTML = "";
        //determine size of new play area
        do{
            dimensions = parseInt(prompt("Please enter grid size. For instance, enter 64 to get a grid of 64 x 64.\nPlease enter grid size:", 8));
            if(!Number.isInteger(dimensions) || dimensions <=0)
                alert("Please enter a positive integer greater than 0.");
        }
        while(!Number.isInteger(dimensions) || dimensions <= 0);

        //initialize playArea with flexboxes
        for(let i=0; i<dimensions; i++){
            const newHolder = createHolder();
            playArea.appendChild(newHolder);
            for( let j=0; j<dimensions; j++){
                const newBox = createBox();
                newHolder.appendChild(newBox);
            }
        }
    });

    //determine size of new play area
    do{
        dimensions = parseInt(prompt("Please enter grid size. For instance, enter 64 to get a grid of 64 x 64.\nPlease enter grid size:", 8));
        if(!Number.isInteger(dimensions) || dimensions <= 0)
            alert("Please enter a positive integer greater than 0.");
    }
    while(!Number.isInteger(dimensions) || dimensions <= 0);
    //initialize playArea with flexboxes
    for(let i=0; i<dimensions; i++){
        const newHolder = createHolder();
        playArea.appendChild(newHolder);
        for( let j=0; j<dimensions; j++){
            const newBox = createBox();
            newHolder.appendChild(newBox);
        }
    }
});