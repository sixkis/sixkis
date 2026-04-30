document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.loading = "lazy";
    });
});

window.addEventListener("load", () => {
    console.log("Page fully loaded in:", performance.now(), "ms");
});