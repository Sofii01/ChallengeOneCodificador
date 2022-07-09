let botonEncriptar = document.querySelector(".boton1");

botonEncriptar.addEventListener("click",function(){
    let texto = document.querySelector("#textArea").value.toLowerCase();
    ocultarDivText();
    encriptarTexto(texto);
});

let botonDesencriptar = document.querySelector(".boton2");
botonDesencriptar.addEventListener("click", function(){
    let textoEncrip = document.querySelector("#textArea").value.toLowerCase();
    ocultarDivText();

    desencriptarTexto(textoEncrip);
    

})

let copy = document.querySelector(".botonCopy");

copy.addEventListener("click", function(){
    copiar();
})


// funciones

function ocultarDivText(){
    let div = document.querySelector("#ocultar");
    div.classList.remove("invisible");
}

function encriptarTexto(texto) {
    let textoEncriptado = texto.replace(/e/igm, "enter");
    textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");


    document.getElementById("textoRespuesta").innerHTML = textoEncriptado;
    
}
function desencriptarTexto(texto){
    let textoDesencriptado = texto.replace(/enter/igm, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/igm, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/igm, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/igm, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm, "u");

    document.getElementById("textoRespuesta").innerHTML = textoDesencriptado;
}


function copiar() {
    var contenido = document.querySelector("#textoRespuesta");
    contenido.select();
    document.execCommand("botonCopy");
    alert("Se copio el texto");
}










