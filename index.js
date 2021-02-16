const generateArrayBtn = document.getElementById("generateArrayBtn");
const displayGrid = document.getElementById("display");
const algorithmBtns = document.querySelectorAll(".option");

let globalRandomArray = [];

const generateArray = (arrayLength) => {

    globalRandomArray = [];

    for (let i = 0; i < arrayLength; i++) {

        globalRandomArray.push(Math.floor(Math.random() * (50 - 5) + 5));

    }

    drawArray(globalRandomArray);

}

const drawArray = (array) => {

    displayGrid.innerHTML = "";

    for (let i = 0; i < array.length; i++) {

        const valueBar = document.createElement("DIV");
        valueBar.classList.add("bar");

        valueBar.style.gridColumnStart = (i + 1).toString();
        valueBar.style.gridRowStart = "1";
        valueBar.style.gridRowEnd = array[i];

        displayGrid.appendChild(valueBar);

    }

}

const bubbleSort = (array) => {

    for (let i = 1; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            displayGrid.children.item(i).classList.add("selected");
            displayGrid.children.item(j).classList.add("selected");
            if (array[j] > array[i]) {

                let temp = array[i];
                array[i] = array[j];
                displayGrid.children.item(i).style.gridRowEnd = array[j];
                array[j] = temp;
                displayGrid.children.item(j).style.gridRowEnd = temp;

            }
            displayGrid.children.item(j).classList.remove("selected");
        }
        displayGrid.children.item(i).classList.remove("selected");

    }

    return array;
}

generateArrayBtn.addEventListener("click", () => {
    generateArray(25);
    console.log(displayGrid);
})

algorithmBtns.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "bubbleSortBtn":
                console.log(bubbleSort(globalRandomArray));
                break;
        }
    })
})
