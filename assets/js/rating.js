
let personas = []

//document.getElementById("formulario").addEventListener("submit", function(event){
//   event.preventDefault();
function obtenerDatos(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value
    const identificacion = document.getElementById("identificacion").value
    const fechaNacimiento = document.getElementById("fecha-nacimiento").value
    const correo = document.getElementById("correo").value
    const ciudadResidencia = document.getElementById("ciudad-residencia").value
    const ciudadOrigen = document.getElementById("ciudad-origen").value
    const artista = document.getElementById("artista").value
    const cancion1 = document.getElementById("cancion1").value
    const cancion2 = document.getElementById("cancion2").value
    const cancion3 = document.getElementById("cancion3").value

    const persona = {
        nombre,
        identificacion,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        artista,
        cancion1, 
        cancion2,
        cancion3,
    }

    personas.push(persona)

    document.getElementById("formulario").reset()
};

function mostrarFormulario(){
    let formulario = document.getElementById("captura-datos")
    let formularioHTML = `
    <form class="row g-3" id="formulario">
                <div class="col-md-5">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="col-md-5">
                    <label for="identificacion" class="form-label">Número de identificacion</label>
                    <input type="text" class="form-control" id="identificacion">
                </div>
                <div class="col-2">
                    <label for="fecha-nacimiento" class="form-label">Fecha de nacimiento</label>
                    <input type="date" class="form-control" id="fecha-nacimiento">
                </div>
                <div class="col-4">
                    <label for="correo" class="form-label">Email</label>
                    <input type="email" class="form-control" id="correo" placeholder="nombre@dominio.com">
                </div>
                <div class="col-md-4">
                    <label for="ciudad-residencia" class="form-label">Ciudad de residencia</label>
                    <input type="text" class="form-control" id="ciudad-residencia">
                </div>
                <div class="col-md-4">
                    <label for="ciudad-origen" class="form-label">Ciudad de origen</label>
                    <input type="text" class="form-control" id="ciudad-origen">
                </div>
                <div class="col-md-4">
                    <label for="artista" class="form-label">Artista favorito</label>
                    <input type="text" class="form-control" id="artista">
                </div>

                <div class="row g-3">

                    <div class="col-4">
                        <label class="form-label" for="cancion1">Cancion favorita No 1</label>
                        <input type="text" class="form-control"  id="cancion1">
                    </div>
                    <div class="col-4">
                        <label class="form-label" for="cancion2">Cancion favorita No 2</label>
                        <input type="text" class="form-control"  id="cancion2">
                    </div>
                    <div class="col-4">
                        <label class="form-label" for="cancion3">Cancion favorita No 3</label>
                        <input type="text" class="form-control"  id="cancion3">
                    </div>

                    <div class="col-12">
                        <button onclick="obtenerDatos(event)" type="button" class="btn btn-secondary" id="guardar">Guardar</button>
                    </div>

                </div>

            </form>
    `
    formulario.innerHTML = formularioHTML
}

function mostrarPersonas(){
    let personasCampo = document.getElementById("personas")
    personasCampo.innerHTML = ""
    personas.forEach((persona, index) => {
        let personaHTML
        if(index == 0){
        
            personaHTML = `
        
        <table class="table table-secondary align-middle">
            <thead>
                <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Encuestado</th>
                    <th scope="col">Identificación</th>
                    <th scope="col">Fecha de nacimiento</th>
                    <th scope="col">Email</th>
                    <th scope="col">Ciudad de residencia</th>
                    <th scope="col">Ciudad de origen</th>
                    <th scope="col">Artista favorito</th>
                    <th scope="col">Canción 1</th>
                    <th scope="col">Canción 2</th>
                    <th scope="col">Canción 3</th>
                </tr>
                <tbody class="table-light">
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${persona.nombre}</td>
                        <td>${persona.identificacion}</td>
                        <td>${persona.fechaNacimiento}</td>
                        <td>${persona.correo}</td>
                        <td>${persona.ciudadResidencia}</td>
                        <td>${persona.ciudadOrigen}</td>
                        <td>${persona.artista}</td>
                        <td>${persona.cancion1}</td>
                        <td>${persona.cancion2}</td>
                        <td>${persona.cancion3}</td>
                    </tr>
                </tbody>
            </thead>
        </table>`
    }else {
        personaHTML = `
        <table class="table table-secondary align-middle">
        <tr></tr>
        <tbody class="table-light">
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${persona.nombre}</td>
            <td>${persona.identificacion}</td>
            <td>${persona.fechaNacimiento}</td>
            <td>${persona.correo}</td>
            <td>${persona.ciudadResidencia}</td>
            <td>${persona.ciudadOrigen}</td>
            <td>${persona.artista}</td>
            <td>${persona.cancion1}</td>
            <td>${persona.cancion2}</td>
            <td>${persona.cancion3}</td>
        </tr>
    </tbody>
    </table>`
    }
    personasCampo.innerHTML += personaHTML
    })
}