
class Socio {
    constructor(nombreSocio, apellidoSocio, numeroDni, categoria){
        this.nombreSocio = nombreSocio;
        this.apellidoSocio = apellidoSocio;
        this.numeroDni = numeroDni;
        this.categoria = categoria;
    }
}

const socios = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarSocio()
})

function agregarSocio() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const categoria = document.getElementById("categoria").value;

    const nuevaSocio = new Socio(nombre, apellido, dni, categoria);
    socios.push(nuevaSocio);

    console.log(socios);
    formulario.reset();
}

const contenedorSocios = document.getElementById("contenedorSocios");
const verSocios = document.getElementById("verSocios");

verSocios.addEventListener("click", () => {
    contenedorSocios.innerHTML = "";

socios.forEach( socio => {
    const div = document.createElement("div");
    div.innerHTML = `
                    <div id="solicitudes">
                        <p>Nombre del Socio: ${socio.nombreSocio} </p>
                        <p>Apellido del Socio: ${socio.apellidoSocio} </p>
                        <p>Número de DNI: ${socio.numeroDni} </p>
                        <p>Categoría: ${socio.categoria} </p>
                        <a href="https://mpago.la/1HFj8DF" target="_blank"><button>PAGAR</button></a>
                    </div>
                    `
    contenedorSocios.appendChild(div);
})
})