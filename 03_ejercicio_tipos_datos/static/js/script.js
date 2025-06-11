// Declaración de variables
let edad = 18; //Valor numerico Edad
let anioDeNacimiento = 1997; //Tipo numérico INT
let numeroEuler = 2.71828; //Numérico con parte decimal FLOAT
let malChiste = "Una sandia fantasma"; // string
let valorBooleano = true; //Valor Verdadero o falso(0 , 1) Boolean
let arreglito = [1, 2, 3, true, ["Hola"]]; //Array - Lista de elementos 
let objetoUsuario = { nombre: "Soka", edad: 18, correo:"xxxxgmail.com" }; //Object - Diccionario
let valorIndefinid; //Sin valor asignado - undefined
let estadoAmoroso = null; // Valor Nulo - Null
const mes = "Junio"; //Constante - No Varía

//Función Ejemplo
function mostrarEdad(){
  alert("La edad es: "+ edad);
}

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Año de Nacimiento: " + anioDeNacimiento);
}

function mostrarValorEuler() {
  alert("Valor Euler: " + numeroEuler);
}

function mostrarMalChiste() {
  alert("Respuesta: " + malChiste);
}

function mostrarPregunta() {
  alert("Valor respuesta: " + valorBooleano);
}

function mostrarArreglito() {
  alert("Arreglo de números: " + arreglito);
}

function mostrarUsuario() {
  alert("Objeto Usuario: " + JSON.stringify(objetoUsuario));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarPareja() {
  alert("Pareja: " + estadoAmoroso);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
