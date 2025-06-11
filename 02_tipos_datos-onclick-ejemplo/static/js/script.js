// Declaración de variables
var num = 18; //Menos segura
let anioNacimiento = 2008; //Tipo numérico INT
let numeroDecimal = 3.14; //Numérico con parte decimal FLOAT
let cadenaTexto = "Hola, mundo"; // string
let valorBooleano = true; //Valor Verdadero o falso(0 , 1) Boolean
let arreglo = [1, 2, 3, true, ["Hola"]]; 
//Array - Lista de elementos 
let objetoPersona = { nombre: "Ana", edad: 30 }; //Object - Diccionario
let valorIndefinid; //Sin valor asignado - undefined
let valorNulo = null; // Valor Nulo - Null
const mes = "Junio"; //Constante - No Varía

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Año de Nacimiento: " + anioNacimiento);
}

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
