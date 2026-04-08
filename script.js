// Create random hearts + sorry rain
function createRain() {
    const container = document.getElementById("rain-container");

    setInterval(() => {
        const item = document.createElement("div");

        if (Math.random() > 0.5) {
            item.innerHTML = "❤️";
        } else {
            item.innerHTML = "sorry";
            item.style.color = "#ff1a75";
            item.style.fontFamily = "cursive";
        }

        item.classList.add("fall");

        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDuration = (3 + Math.random() * 5) + "s";
        item.style.fontSize = (16 + Math.random() * 20) + "px";

        container.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 8000);

    }, 300);
}

createRain();

function openBook(){
    document.querySelector(".book").classList.toggle("open");
}
