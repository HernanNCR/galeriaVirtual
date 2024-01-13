function cambiarEstilo(id) {
    // Obtén el contenedor_imagen y el nuevo_contenedor
    var contenedor = document.getElementById("contenedor_imagen" + id);
    var ver = document.getElementById("ver" + id);
    var sombra = document.getElementById("contenedor_sombra" + id);
    var imagen = document.getElementById("" + id);
    
    // Verifica si el contenedor existe
    if (contenedor) {
        // Modificar el contenedor_imagen según el id de la imagen
        contenedor.style.position = "fixed";
        contenedor.style.top = "0";
        contenedor.style.left = "0";
        contenedor.style.width = "100%";
        contenedor.style.minHeight = "100%";
        contenedor.style.background = "rgba(0, 0, 0, 0.8)";
        contenedor.style.display = "flex";
        contenedor.style.alignItems = "center";
        contenedor.style.justifyContent = "center";
        contenedor.style.zIndex = "2";

        // Crea el nuevo_contenedor si no existe
        var nuevoContenedor = document.getElementById("nuevo_contenedor" + id);
        if (!nuevoContenedor) {
            nuevoContenedor = document.createElement("div");
            nuevoContenedor.id = "nuevo_contenedor" + id;
            nuevoContenedor.style.position = "fixed";
            nuevoContenedor.style.top = "0";
            nuevoContenedor.style.left = "0";
            nuevoContenedor.style.width = "100%";
            nuevoContenedor.style.height = "10%";
            nuevoContenedor.style.background = "rgba(103, 150, 172,0.8)";
            nuevoContenedor.style.display = "flex";
            nuevoContenedor.style.alignItems = "center";
            nuevoContenedor.style.justifyContent = "center";
            nuevoContenedor.style.zIndex = "2";
            document.body.appendChild(nuevoContenedor);

            ver.style.opacity = "0";
            sombra.style.opacity = "0";
            imagen.style.width = "350px";
            imagen.style.height = "auto";
            imagen.style.transform = "scale(1)";
        }

        // Elimina cualquier hijo existente en nuevoContenedor antes de agregar la nueva imagen
        while (nuevoContenedor.firstChild) {
            nuevoContenedor.removeChild(nuevoContenedor.firstChild);
        }

        // Crea la nueva imagen correspondiente al id y agrégala al nuevo_contenedor
        var nuevaImagen = document.createElement("img");
        nuevaImagen.src = "imagenes/circle-xmark-solid.svg";
        nuevaImagen.style.width = "35px";
        nuevaImagen.style.height = "35px";
        nuevaImagen.style.cursor = "pointer";

        nuevaImagen.addEventListener("click", function () {
            window.location.href = "index.html";

            
        });

        nuevoContenedor.appendChild(nuevaImagen);
    }
}



