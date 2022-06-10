window.addEventListener("load", )
const input = document.getElementById("click-me");
console.log(input)
input.addEventListener("keypress", (e) => {
    console.log (e.key);
})