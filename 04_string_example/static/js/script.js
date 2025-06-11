
function usarString(){
  // Uso de strings Ejemplo
let nombre = prompt("Ingrese su nombre: "); // Variable tipo texto
// Uso de lenght --> Largo de una variable
  let primeraLetra = nombre[0];
 //Asignamos valor a primeraLetra con posición 0 de nombre
  let ultimaLetra = nombre[nombre.length - 1];
  alert("Primera letra es: " + primeraLetra +
    "\nÚltima letra es: " + ultimaLetra
  ); // Mostrar resultado
}
// Tarea: Imprimir segunda letra 
// y penultima del apellido

function manipularApellido() {
  let apellido = prompt("Ingrese su Apellido: ");
  // Segunda letra del apellido
  let segundaLetraApellido = apellido[1];
  // Penúltima letra del apellido
  let penultimaLetraApellido = apellido[apellido.length - 2];
  // Mostrar resultado

  // No se puede modificar porque es inmutable
    apellido[1] = "J"; // No funciona
  alert("Segunda letra del apellido es: " + segundaLetraApellido + 
    "\nPenúltima letra del apellido es: " + penultimaLetraApellido
  );


}