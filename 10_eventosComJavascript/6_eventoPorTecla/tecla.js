//  evento de teclado (key event)
// keyup event quando solta a tecla
// keydown  quando aperta 




window.addEventListener("keydown", function (e) {
    if (e.key == 'q') {
        console.log("Apertou a letra q");
    } else if (e.key == "Enter") {
        console.log("Apertou enter");
    }
});




window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        console.log("Soltou o enter")
    }
});