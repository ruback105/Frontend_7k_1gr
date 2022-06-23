const toggleDark = document.getElementById("circle-icon");
const body = document.querySelector("body");

toggleDark.addEventListener("click", () => {
    body.classList.toggle("dark");
})