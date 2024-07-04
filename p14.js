function changeColor(c) {
    let h = document.getElementById("heading1");
    h.style.color = `hsl(${c},100%,50%)`;
}
let slider = document.getElementById("c_picker");
slider.addEventListener("input", function () {
    updatec_gradient(this.value);
});
function updatec_gradient(c) {
    document.getElementById("c_gradient");
    c_gradient.style.background = `linear-gradient(to right, hsl(0,100%,50%),hsl(${c},100%,50%)`;
}