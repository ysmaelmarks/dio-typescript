"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    let numero1 = Number(input1 === null || input1 === void 0 ? void 0 : input1.value);
    let numero2 = Number(input2 === null || input2 === void 0 ? void 0 : input2.value);
    let resultado = adicionarNumeros(numero1, numero2);
    alert(resultado);
});
