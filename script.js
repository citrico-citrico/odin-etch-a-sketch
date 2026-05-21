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


