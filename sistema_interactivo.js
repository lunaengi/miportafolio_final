console.log("¡Bienvenido al Sistema Interactivo de Mensajes!")

let nombre = prompt("Por favor, ingresa tu nombre");
let edad = prompt("Por favor, ingresa tu edad");

//convertir edad a numero
edad = parseInt(edad);

//codigo para Validarcion y Mensaje:
if (isNaN(edad)) {
    console.error("Error: Por favor, ingrese una edad valida en numeros.");
}
else if(edad < 18) {
    alert('Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!');
}
else {
    alert('Hola ${nombre}, eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programación!');
}

