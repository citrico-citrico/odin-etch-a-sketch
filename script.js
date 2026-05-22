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
    let sideValue = 1000/(number);
    sideValue = (sideValue/100) * 96;
    borderValue = (sideValue/100) * 3;
    borderValue = borderValue / 4;
    borderValue = borderValue + "px";
    sideValue = sideValue + "px";
    
   

    console.log(sideValue);
    console.log(borderValue);

    for (let i = 0; i < number * number; i++){
    const newDivs = document.createElement("div");
    newDivs.className = "new-list-item";
    container.appendChild(newDivs);

    newDivs.style.height = sideValue;
    newDivs.style.width = sideValue;
    newDivs.style.borderWidth = borderValue;
    //newDivs.style.margin = marginValue;

    //  const parent = document.getElementById('#container');
    //  const children = container.querySelectorAll("new-list-item");

    //     children.forEach(child => {
    //         console.log("ll");
    //         children.style.height = sideValue;
    //         children.style.width = sideValue;
    //         children.style.margin = marginValue
    //     })
    
    // newDivs.addEventListener('mouseenter', () => {
    //     newDivs.style.backgroundColor = 'gray';
    // });
    }  

   

   
    
   
}


btn.addEventListener("click", function(e) {
    e.preventDefault(); 
    let userInput = prompt("Input a number of squares per side (limit of 100)", "16");
    let numberValue = +userInput;
    if(+numberValue > 100){
        numberValue = 16;
        alert("Select a number less than 100");
    } else if(numberValue < 0){
        numberValue = 16;
        alert("Input a positive number");
    }

   createGrid(numberValue);


})
