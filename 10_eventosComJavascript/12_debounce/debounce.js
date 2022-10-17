
// debounce que e um suavisador de evento para não reperir varias vezes 


let timeout;


window.addEventListener("mousemove", function (e) {
    this.clearTimeout(timeout);
    timeout = setTimeout(function () {
        console.log(e.x);
    }, 500);
});