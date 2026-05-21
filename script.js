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


btn.addEventListener("click", function() {
    let userInput = prompt("Input a number of squares per side (limit of 100)", "16");
    let numberValue = +userInput;
    if(+numberValue > 100){
        alert("Select a number less than 100");
        numberValue = 16;
    } else if(numberValue < 0){
        alert("Input a positive number");
    } else{
        createGrid(numberValue);
    }

})
