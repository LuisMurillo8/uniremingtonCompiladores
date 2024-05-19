// Crear un arreglo con 4 elementos
const miArreglo = ["elemento1", "elemento2", "elemento3", "elemento4"];

// Recorrer el arreglo
for (let i = 0; i < miArreglo.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + miArreglo[i]);
}

// Imprimir el último elemento
console.log("El último elemento es: " + miArreglo[miArreglo.length - 1]);



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
console.log("Números pares menores que 10:", numerosPares);
console.log("Contiene " + numerosPares.length + " elementos");


const newNumero = [1,3,5,7,9]
const newNumeroPares = numerosPares.concat(newNumero);
console.log(newNumeroPares);


// Insertar el valor 20 en el vigésimo elemento del arreglo
numerosPares[19] = 20;

// Mostrar el arreglo con el valor 20 insertado
console.log("Arreglo con el valor 20 en el vigésimo elemento:", numerosPares);