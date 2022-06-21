let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement ;
let soma = document.getElementById('soma') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});


function somarAoSaldo(soma: HTMLButtonElement) {
    let valorSoma = Number(soma.value);
    campoSaldo.innerHTML = (Number(campoSaldo.innerHTML) + valorSoma).toString();   
}


function limparSaldo() {
    campoSaldo.innerHTML = '0';
}