container = document.querySelector("#container");
btn = document.querySelector("button"); 

for (let i = 0; i < 16 * 16; i++){
const divs = document.createElement("div");
divs.className = "list-item";
container.appendChild(divs);

divs.addEventListener('mouseenter', () => {
    divs.style.backgroundColor = 'gray';
});
}


btn.addEventListener("click", () =>{
    const myDiv = document.querySelector("#container");
    while(myDiv.firstChild){
        myDiv.removeChild(myDiv.lastChild);
    }
});

function createGrid(number){
    let sideValue = 1000/number;
    sideValue = sideValue + "px";
    

    for (let i = 0; i < number * number; i++){
    const newDivs = document.createElement("div");
    newDivs.className = "new-list-item";
    container.appendChild(newDivs);

    newDivs.style.height = sideValue;
    newDivs.style.width = sideValue;
    
     newDivs.addEventListener('mouseenter', () => {
    newDivs.style.backgroundColor = 'gray';
    });
    }; 
}


btn.addEventListener("click", function(e) {
    e.preventDefault(); 
    let userInput = prompt("Input a number of squares per side (limit of 100)", "16");
    let numberValue = +userInput;
    if(+numberValue > 100){
        numberValue = 16;
        alert("Select a number less than 100");
    } else if(numberValue <= 0){
        numberValue = 16;
        alert("Input a positive number");
    }

   createGrid(numberValue);


})
