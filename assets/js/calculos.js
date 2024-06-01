/* Calculo de Perímetro y área de Triángulo */

const pTriang = document.getElementById('calcular-perimetro')
const aTriang = document.getElementById('calcular-area')

function calcPTr(e){
    e.preventDefault();
    let trianguloData = obtDataTriang();
    let perimetro = perimTriangulo(trianguloData.a, trianguloData.b, trianguloData.c);
    let elemento = document.getElementById("valPerimetro");
    elemento.textContent = perimetro
}

function calcATr(e){
    e.preventDefault();
    let trianguloData = obtDataTriang();
    let area = areaTriangulo(trianguloData.b, trianguloData.h);
    let elemento = document.getElementById("valArea");
    elemento.textContent = area
}

pTriang.addEventListener('click', calcPTr);
aTriang.addEventListener('click',calcATr);

function obtDataTriang(){
    let atri = document.getElementById('a-triangulo').value
    let btri = document.getElementById('b-triangulo').value
    let ctri = document.getElementById('c-triangulo').value
    let htri = document.getElementById('h-triangulo').value
    return {a: atri, b: btri, c: ctri, h: htri}
}

function perimTriangulo(a, b, c){
    let perTr = parseFloat(a) + parseFloat(b) + parseFloat(c)
    return perTr
}

function areaTriangulo( b, h){
    let aTr = parseFloat(b) * parseFloat(h) / 2
    return aTr
}

/*........0.Calculo perímetro y área de rectángulo..........*/


const pRectang = document.getElementById('calcular-perimetro-rect')
const aRectang = document.getElementById('calcular-area-rect')

function calcPRctng(e){
    e.preventDefault();
    let rectanguloData = obtDataRctng();
    let perimetro = perimRectangulo(rectanguloData.a, rectanguloData.b);
    let elemento = document.getElementById("valPerRect");
    elemento.textContent = perimetro
}

function calcARctng(e){
    e.preventDefault();
    let rectanguloData = obtDataRctng();
    let area = areaRectangulo(rectanguloData.a, rectanguloData.b);
    let elemento = document.getElementById("valAreaRect");
    elemento.textContent = area
}

pRectang.addEventListener('click', calcPRctng);
aRectang.addEventListener('click',calcARctng);

function obtDataRctng(){
    let arect = document.getElementById('a-rectangulo').value
    let brect = document.getElementById('b-rectangulo').value
    
    return {a: arect, b: brect}
}

function perimRectangulo(a, b){
    let perRectng = 2*(parseFloat(a) + parseFloat(b))
    return perRectng
}

function areaRectangulo( a, b){
    let aRectang = parseFloat(a) * parseFloat(b)
    return aRectang
}

/*........0.Calculo perímetro y área de cuadrado..........*/

const pcuad = document.getElementById('calcular-perimetro-cuad')
const aCuad = document.getElementById('calcular-area-cuad')

function calcPCuad(e){
    e.preventDefault();
    let cuadradoData = obtDataCuad();
    let perimetro = perimCuadrado(cuadradoData.lado);
    let elemento = document.getElementById("valPerCuad");
    elemento.textContent = perimetro
}

function calcACuad(e){
    e.preventDefault();
    let cuadradoData = obtDataCuad();
    let area = areaCuadrado(cuadradoData.lado);
    let elemento = document.getElementById("valAreaCuad");
    elemento.textContent = area
}

pcuad.addEventListener('click', calcPCuad);
aCuad.addEventListener('click', calcACuad);

function obtDataCuad(){
    let lcuad = document.getElementById('l-cuadrado').value
    return {lado: lcuad}
}
function perimCuadrado(lado){
    let perCuad = 4 * parseFloat(lado)
    return perCuad
}

function areaCuadrado(lado){
    let aCuad = parseFloat(lado) * parseFloat(lado)
    return aCuad
}

/*........0.Calculo perímetro y área de la circunferencia..........*/

const pCirc = document.getElementById('calcular-perimetro-circ')
const aCirc = document.getElementById('calcular-area-circ')

function calcPCirc(e){
    e.preventDefault();
    let circunfData = obtDataCirc();
    let perimetro = perimCirc(circunfData.radio);
    let elemento = document.getElementById("valPerCirc");
    elemento.textContent = perimetro.toFixed(2)
    console.log(circunfData)
}

function calcACirc(e){
    e.preventDefault();
    let circunfData = obtDataCirc();
    let area = areaCirc(circunfData.radio);
    let elemento = document.getElementById("valAreaCirc");
    elemento.textContent = area.toFixed(2)
}

pCirc.addEventListener('click', calcPCirc);
aCirc.addEventListener('click', calcACirc);

function obtDataCirc(){
    let radCirc = document.getElementById('r-circ').value
    return {radio: radCirc}
}
function perimCirc(radio){
    let perCirc = 2 * 3.1416 * parseFloat(radio)
    return perCirc
}

function areaCirc(radio){
    let aCirc = 3.1416 * parseFloat(radio) * parseFloat(radio)
    return aCirc
}