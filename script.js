const container = document.getElementById("rain-container");

function createItem() {
    const item = document.createElement("div");

    // Random heart or sorry
    if (Math.random() > 0.5) {
        item.innerHTML = "❤️";
    } else {
        item.innerHTML = "sorry";
        item.style.color = "#d1005c";
        item.style.fontWeight = "bold";
    }

    item.style.position = "absolute";
    item.style.left = Math.random() * window.innerWidth + "px";
    item.style.top = "-20px";
    item.style.fontSize = (18 + Math.random() * 25) + "px";
    item.style.pointerEvents = "none";

    container.appendChild(item);

    let x = parseFloat(item.style.left);
    let y = -20;

    // Random speed
    let speedY = 1 + Math.random() * 2;
    let driftX = (Math.random() - 0.5) * 1.5;

    function animate() {
        y += speedY;
        x += driftX;

        item.style.top = y + "px";
        item.style.left = x + "px";

        // small random drift change (THIS MAKES IT FLOAT NATURALLY)
        driftX += (Math.random() - 0.5) * 0.05;

        if (y < window.innerHeight) {
            requestAnimationFrame(animate);
        } else {
            item.remove();
        }
    }

    animate();
}

// Create continuously
setInterval(createItem, 200);


// Diary open
function openBook(){
    document.querySelector(".book").classList.toggle("open");
}
