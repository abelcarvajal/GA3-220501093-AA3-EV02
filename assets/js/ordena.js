
function obtenerValorA() {
    return parseInt(document.getElementById('valorA').value, 10)
}

function obtenerValorB() {
    return parseInt(document.getElementById('valorB').value, 10)
}

function borrar() {
    document.getElementById('valorA').value = ''
    document.getElementById('valorB').value = ''
}

vectorA = []
vectorB = []

let i = 0
let limite = 5

function capturarVectorA() {

    if(i < limite){
        let valor = obtenerValorA()
        if(i == 0 || valor >= vectorA[i - 1]){
            vectorA.push(valor)
            alert(`Valor agregado valor: ${valor}, posición: ${i}`)
            borrar()
            i++
            alert(`Valor de i icrementado ${i}`)
            console.log(vectorA)
        } else {
            alert('El valor ingresado debe ser mayor al anterior')
            borrar()
        }
        if(i == limite){
            alert('Se llego al maximo num de registros')
        }
    }
    let elemento = document.getElementById("ValVectr1")
    elemento.textContent = vectorA
}

let j = 0

function capturarVectorB() {

    if(j < limite){
        let valor = obtenerValorB()
        if(j == 0 || valor >= vectorB[j - 1]){
            vectorB.push(valor)
            alert(`Valor agregado valor: ${valor}, posición: ${j}`)
            borrar()
            j++
            alert(`Valor de j icrementado ${j}`)
            console.log(vectorB)
        } else {
            alert('El valor ingresado debe ser mayor al anterior')
            borrar()
        }
        if(j == limite){
            alert('Se llego al maximo num de registros')
        }
    }
    let elemento = document.getElementById("ValVectr2")
    elemento.textContent = vectorB
}
vectorC = []

function unirVectores(){
    
    vectorC = [...vectorA, ...vectorB]
    vectorC.sort((a,b) => a - b)
    console.log(vectorC)

    let elemento = document.getElementById("ValVectr3")
    elemento.textContent = vectorC
}