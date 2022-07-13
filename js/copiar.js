
let botonCopiar = document.querySelector(".botonCopy");

// copy.addEventListener("click", function(){
//     let contenido = document.querySelector("#textoRespuesta").value;
//     console.log(contenido);
//     //contenido.select();
//     document.execCommand("botonCopy");
// })

botonCopiar.onclick = copy;
function copy(){
    var contenido = document.querySelector(".botonCopy"); 
    mensaje= copy;
    alert("copiado");
    botonCopiar.addEventListener("click", Function (copy));
    var textresult = document.querySelector("#textoRespuesta");
    navigator.clipboard.writeText(textresult.textContent);
    
}
