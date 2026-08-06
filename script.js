const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

if (!isTouchDevice) {
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    window.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
    });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animate);
    }

    document.addEventListener("mouseleave", () => {
        cursor.classList.add("hidden");
        dot.classList.add("hidden");
    });

    document.addEventListener("mouseenter", () => {
        cursor.classList.remove("hidden");
        dot.classList.remove("hidden");
    });

    animate();
}

document.querySelector(".btn").addEventListener("mouseenter", () => {
    document.querySelector(".cursor")?.style.setProperty("border-color", "var(--red)");
});
document.querySelector(".btn").addEventListener("mouseleave", () => {
    document.querySelector(".cursor")?.style.removeProperty("border-color");
});
