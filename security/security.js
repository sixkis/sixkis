// Basic XSS protection
function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.value = sanitizeInput(input.value);
        });
    });
});