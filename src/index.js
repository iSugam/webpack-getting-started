import "./main.css";

const backgroundColorInput = document.getElementById("backgroundColor");
const colorInput = document.getElementById("color");

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    document.body.style.backgroundColor = backgroundColorInput.value;

    document.querySelector("h1").style.color = colorInput.value
    document.querySelectorAll("label").forEach(label => {
        label.style.color = colorInput.value
    });
    document.getElementById("back-code").innerText = backgroundColorInput.value.toUpperCase();
    document.getElementById("text-code").innerText = colorInput.value.toUpperCase();
})