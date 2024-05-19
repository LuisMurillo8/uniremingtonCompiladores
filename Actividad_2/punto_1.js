// Crear un arreglo con 4 elementos
const miArreglo = ["León", "Puma", "Leopardo", "Tigre"];
console.log("A)")
console.log("-Arreglo: [" + miArreglo + "]");
// Recorrer el arreglo
for (let i = 0; i < miArreglo.length; i++) {
    console.log("-Recorriendo el elemento " + (i + 1) + ": " + miArreglo[i]);
}

// Imprimir el último elemento
console.log("-El último elemento es: " + miArreglo[miArreglo.length - 1]);
console.log("--------------------------------------------------");


console.log("B)")
// Crear un arreglo vacío para almacenar los números pares
const numerosPares = [];

// Iterar sobre los números del 1 al 9
for (let i = 1; i < 10; i++) {
    // Verificar si el número es par
    if (i % 2 === 0) {
        // Si es par, añadirlo al arreglo
        numerosPares.push(i);
    }
}

// Imprimir el arreglo de números pares
console.log("-Números pares menores que 10:", numerosPares);
console.log("-Contiene " + numerosPares.length + " elementos");


console.log("-Agregue 1 , 3 , 5 , 7 , 9 al final del array y muestrelo nuevamente")
const newNumero = [1,3,5,7,9];
const newNumeroPares = numerosPares.concat(newNumero);
console.log(newNumeroPares);


// Insertar el valor 20 en el vigésimo elemento del arreglo
console.log("-inserte el valor 20 en el vigésimo elemento del array y muestrelo nuevamente.")
numerosPares[19] = 20;

// Mostrar el arreglo con el valor 20 insertado
console.log(numerosPares);