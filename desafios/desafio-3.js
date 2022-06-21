"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
function somarAoSaldo(soma) {
    let valorSoma = Number(soma.value);
    campoSaldo.innerHTML = (Number(campoSaldo.innerHTML) + valorSoma).toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
