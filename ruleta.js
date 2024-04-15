const content = document.querySelector(".addContent")
const input = document.querySelector(".addContent input");
const addButton = document.querySelector(".addItem");

addButton.addEventListener("click", () => {
    const item = input.value;
    input.value = "";
    let newItem = document.createElement("div");
    newItem.setAttribute("class", "item");
    newItem.textContent = item;
    newItem.style.backgroundColor = randomBackGroundColor();
    content.appendChild(newItem);
    item = "";
})

function randomBackGroundColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + "," + g + "," + b + ")");
}