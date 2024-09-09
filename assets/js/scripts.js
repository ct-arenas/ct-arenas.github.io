function copyToClipboard(url, event) {
    // Prevenir comportamiento por defecto
    event.preventDefault();
    
    // Crear un elemento de texto temporal
    var tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    tempInput.value = url;
    document.body.appendChild(tempInput);
    
    // Seleccionar el texto y copiarlo
    tempInput.select();
    document.execCommand("copy");
    
    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempInput);

    // Mostrar el mensaje de que el enlace ha sido copiado
    var copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block";

    // Ocultar el mensaje después de 2 segundos
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 6000);
}