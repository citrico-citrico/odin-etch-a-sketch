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
    const dividedValue = Math.round(1000/number);
    const sideValue = (dividedValue/100) * 90;
    const marginValue = (dividedValue/100) * 2.5;

    for (let i = 0; i < number * number; i++){
    const divs = document.createElement("div");
    divs.className = "new-list-item";
    container.appendChild(divs);

     const parent = document.getElementById('#container');
     const children = container.querySelectorAll("new-list-item");

        children.forEach(child => {
            children.style.height = sideValue;
            children.style.width = sideValue;
            children.style.margin = marginValue
        })
    
    divs.addEventListener('mouseenter', () => {
        divs.style.backgroundColor = 'gray';
    });
    }  

   

   
    
   
}


btn.addEventListener("click", function() {
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
