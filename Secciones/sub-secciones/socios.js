const listado = document.getElementById("listado");
const listadoSocios = "socios.json";

fetch(listadoSocios)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( socio => {
            listado.innerHTML += `
                <div><p>Nombre: ${socio.nombre} </p>
                <p>Apellido: ${socio.apellido} </p>
                <p>DNI: ${socio.dni} </p>
                <p>Categoría: ${socio.categoria} </p></div>
                `
        })
    })
    .catch(error => console.log(error))
    .finally( () => console.log("Proceso Finalizado"))
