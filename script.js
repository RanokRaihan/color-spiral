const parent = document.querySelector(".parent");
const stopButton = document.querySelector(".stop");
let isBoxAdding = true;
let boxCount = 0;
let boxLength = 50;
let rotation = 0;
let hue = Math.floor(Math.random() * 360);

const interval = setInterval(() => {
    if (isBoxAdding) {
        //
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        if (rotation === 360) {
            rotation = 0;
        }
        if (hue > 360) {
            hue = 0;
        }
        newBox.style.width = `${boxLength}px`;
        newBox.style.height = `${boxLength}px`;
        newBox.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        // newBox.style.borderColor = `red`;
        newBox.style.borderColor = `hsl(${hue}, 100%, 50%)`;
        parent.appendChild(newBox);
        boxLength += 4;
        rotation += 4;
        hue += 4;
        boxCount += 1;
        if (boxCount === 200) {
            isBoxAdding = false;
        }
    } else {
        //
        parent.removeChild(parent.firstElementChild);
        boxCount -= 1;
        if (boxCount === 0) {
            isBoxAdding = true;
            boxLength = 50;
            rotation = 0;
        }
    }
    //
}, 10);

stopButton.addEventListener("click", () => {
    clearInterval(interval);
});
