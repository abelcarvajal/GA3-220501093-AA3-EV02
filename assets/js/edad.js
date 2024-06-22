function validarEdad() {
    if (obtenerEdad() > 0 && obtenerEdad() <= 120) {
        agregarEdad()
    } else {
        alert(`Edad No permitida`)
    }
}

function obtenerEdad() {
    return document.getElementById('edad').value
}

function borrar() {
    document.getElementById('edad').value = ''
}

function reset(){
    document.getElementById("menores").textContent = '***'
    document.getElementById("mayores").textContent  = '***'
    document.getElementById("adulto-mayor").textContent  = '***'
    document.getElementById("edad-menor").textContent  = '***'
    document.getElementById("edad-mayor").textContent  = '***'
    document.getElementById("prom").textContent  = '***'
}

edad = []

function agregarEdad() {

    const limite = 10
    if (edad.length < limite) {
        edad.push(obtenerEdad())
        alert('edad agregada ')
        borrar()
    } else {
        alert(`Se llego al maximo num de registros ${limite}`)
    }

}

function menorEdad() {
    contMenores = 0
    edad.forEach(element => {
        if (element < 18) {
            contMenores++
        } 
    });
    return contMenores
}

function mayorEdad(){
    contMayores = 0
    edad.forEach(element => {
        if (element >= 18) {
            contMayores++
        }
    });
    return contMayores
}

function aMayorEdad(){
    contAmayor = 0
    edad.forEach(element => {
        if (element >= 60) {
            contAmayor++
        }
    });
    return contAmayor
}

function minEdad() {
    menor = Math.min(...edad)
    return menor
}

function maxEdad(){
    mayEdad = Math.max(...edad)
    return mayEdad
}

function promedio(){
    var total = 0
    for(let i = 0; i < edad.length; i++){
        total += parseFloat(edad[i]) 
    }
    let prom = total / edad.length
    return prom
}
const menores = document.getElementById('menores')


function informe(e){
    let menor = menorEdad()
    let mayor = mayorEdad()
    let aMayor = aMayorEdad()
    let edadMenor = minEdad()
    let edadMayor = maxEdad()
    let promed = promedio()

    let elemento1 = document.getElementById("menores")
    let elemento2 = document.getElementById("mayores")
    let elemento3 = document.getElementById("adulto-mayor")
    let elemento4 = document.getElementById("edad-menor")
    let elemento5 = document.getElementById("edad-mayor")
    let elemento6 = document.getElementById("prom")

    elemento1.textContent = menor
    elemento2.textContent = mayor
    elemento3.textContent = aMayor
    elemento4.textContent = edadMenor
    elemento5.textContent = edadMayor
    elemento6.textContent = promed
}