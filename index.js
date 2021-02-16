const generateArrayBtn = document.getElementById("generateArrayBtn");
const displayGrid = document.getElementById("display");

let globalRandomArray = [];

const generateArray = (arrayLength) => {

    globalRandomArray = [];

    for (let i = 0; i < arrayLength; i++){

        globalRandomArray.push(Math.floor(Math.random() * (50 - 5) + 5));

    }

    drawArray(globalRandomArray);

}

const drawArray = (array) => {

    displayGrid.innerHTML = "";

    for (let i = 0; i < array.length; i++){

        const valueBar = document.createElement("DIV");
        valueBar.classList.add("bar");

        valueBar.style.gridColumnStart = (i+1).toString();
        valueBar.style.gridRowStart = "1";
        valueBar.style.gridRowEnd = array[i];

        displayGrid.appendChild(valueBar);

    }

}

generateArrayBtn.addEventListener("click", () => {
    generateArray(25);
    console.log(globalRandomArray);
})
