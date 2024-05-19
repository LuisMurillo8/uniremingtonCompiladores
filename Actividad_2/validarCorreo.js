function validarCorreo(correo) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}

const correoValido = "ejemplo@dominio.com";
const correoInvalido = "ejemplo@dominio";

console.log(validarCorreo(correoValido));
console.log(validarCorreo(correoInvalido));