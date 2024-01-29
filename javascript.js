const container = document.querySelector(".container");
let hoverDiv = document.querySelector("div");

for (i=0; i<256; i++)    {
    let gridDiv = document.createElement('div');
    container.appendChild(gridDiv);
}



hoverDiv.addEventListener ('mouseover', () => {
    hoverDiv.style = 'background-color:black;';
})