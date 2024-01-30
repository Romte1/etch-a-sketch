const container = document.querySelector(".container");
const customButton = document.querySelector(".custom");
const reset = document.querySelector(".reset");
const black = document.querySelector(".black");
const color = document.querySelector(".color");
var lastSqrt;

for (i=0; i<256; i++)    {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('square');
    gridDiv.style = 'height: 60px; width:60px;';
    container.appendChild(gridDiv);
}

let hoverDivs = document.querySelectorAll(".square");

hoverDivs.forEach ((hoverDiv) => {
hoverDiv.addEventListener ('mouseover', () => {
    hoverDiv.style = `background-color:rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)});height: 60px; width:60px;`;
    });
});

customButton.addEventListener('click', () => {
    let squares = parseInt(prompt('What size do you want? (MAX 100)'));
        if (squares<0 || squares>100 || isNaN(squares)==true){
            let squares = parseInt(prompt('Invalid value, try again (1-100)'));
        } else {
            let hoverDivs = document.querySelectorAll(".square");
            hoverDivs.forEach((hoverDiv) => {
                hoverDiv.remove();
            })

            for (i=0; i<squares*squares; i++)    {
                var sqrt = Math.sqrt((960*960)/(squares*squares));
                lastSqrt = sqrt;
                let gridDiv = document.createElement('div');
                gridDiv.classList.add('square');
                gridDiv.style = `height:${sqrt}px; width:${sqrt}px;`;
                container.appendChild(gridDiv);
            }
        }

    let hoverDivs = document.querySelectorAll(".square");
    hoverDivs.forEach ((hoverDiv) => {
    hoverDiv.addEventListener ('mouseover', () => {
    hoverDiv.style = `background-color:rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)});height: ${sqrt}px; width:${sqrt}px;`;

    });
});
})

reset.addEventListener('click', () => {
    let hoverDivs = document.querySelectorAll(".square");
    hoverDivs.forEach((hoverDiv) => {
        if (lastSqrt==undefined) {
            hoverDiv.style = `background-color:white;height:60px;width:60px`;
        } else {
            hoverDiv.style = `background-color:white;height:${lastSqrt}px; width:${lastSqrt}px;`    
        }    
    })

})

black.addEventListener('click', () => {
    let hoverDivs = document.querySelectorAll(".square");

    hoverDivs.forEach ((hoverDiv) => {
        hoverDiv.addEventListener ('mouseover', () => {
            if (lastSqrt==undefined) {
                hoverDiv.style = `background-color:black;height:60px;width:60px`;
            } else {
                hoverDiv.style = `background-color:black;height:${lastSqrt}px; width:${lastSqrt}px;`    
            }
        })
    })
})

color.addEventListener('click', () => {
    let hoverDivs = document.querySelectorAll(".square");

    hoverDivs.forEach ((hoverDiv) => {
        hoverDiv.addEventListener ('mouseover', () => {
            if (lastSqrt==undefined) {
                hoverDiv.style = `background-color:rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)});height:60px;width:60px`;
            } else {
                hoverDiv.style = `background-color:rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)});height:${lastSqrt}px; width:${lastSqrt}px;`    
            }
        })
    })
}) 
