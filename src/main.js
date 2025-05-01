const botonCarga = document.getElementById("boton-carga");
botonCarga.onclick = () => cargarProductos();


// FUNCIONALIDAD - No tocar debajo

function cargarProductos(){
    arrayProductos.forEach((producto, index) => {
        db.collection("productos").add(producto)
            .then((docRef) => {
                console.log("Producto agregado con ID: ", docRef.id);
                if(arrayProductos.length === (index + 1)){
                    alert("Productos agregados correctamente. No volver a usar el botón para evitar cargar varias veces los mismos productos");
                };
            })
            .catch((error) => {
                console.error("Error al agregar producto: ", error);
            });
    });
};