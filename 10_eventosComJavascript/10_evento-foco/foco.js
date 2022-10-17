let inpult =document.querySelector("#inputSair")



inpult.addEventListener("focus", function () {
    console.log("Entra no input");
});



inpult.addEventListener("blur", function () {
    console.log("Sai do foco");
});