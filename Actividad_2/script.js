//Obtener button
const button = document.getElementById("buttonAnalizar");


button.addEventListener("click" , () => {
    const inputCode = document.getElementById('inputCode').value;
    const tokens = analizadorLexico(inputCode);
    
    const output = document.getElementById("output");

    output.innerHTML = "";

    tokens.forEach(element => {
        const tokenElement = document.createElement('div');
        tokenElement.textContent = `${element.tipo}: ${element.valor}`;
        output.appendChild(tokenElement);
    });
});

function analizadorLexico(input){
    const tokens = [];
    const palabrasReservadas = ['if' , 'else' , 'while' , 'for' , 'function' , 'var' , 'let' , 'const'];

    const palabras = input.split(/\s+/);

    palabras.forEach(palabra => {
        if(palabrasReservadas.includes(palabra)){
            tokens.push({
                tipo: 'Palabra reservada',
                valor: palabra
            });
        }else if(/^[a-zA-Z][a-zA-Z0-9_]*$/.test(palabra)){
            tokens.push({
                tipo: 'Identificador',
                valor: palabra
            });
        }else if(/^(?:\+|-|\*|\/|%|\+\+|--|==|!=|===|!==|>|<|>=|<=|&&|\|\||!|~|\?|:|=|\+=|-=|\*=|\/=|%=|&=|\|=|\^=|<<|>>|>>>|>>>=|<<=|>>=|>>>=|\^|\||&|\.)$/.test(palabra)){
            tokens.push({
                tipo: 'Operador',
                valor: palabra
            });
        }else if(/^-?\d+(\.\d+)?$/.test(palabra)){
            tokens.push({
                tipo: 'Numero',
                valor: palabra
            });
        }else if(/^[\(\)\{\}\[\],;\.]$/.test(palabra)){
            tokens.push({
                tipo: 'Delimitador',
                valor: palabra
            });
        }else{
            tokens.push({
                tipo: 'Desconocida',
                valor: palabra 
            });
        }
    }

    );

    return tokens;

}