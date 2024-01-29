const container = document.querySelector(".container");

for (i=0; i<256; i++)    {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('square');
    container.appendChild(gridDiv);
}

let hoverDivs = document.querySelectorAll(".square");

hoverDivs.forEach ((hoverDiv) => {
hoverDiv.addEventListener ('mouseover', () => {
    hoverDiv.style = 'background-color:black;';
    });
});