let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumeros(numero1: number, numero2: number){
    return numero1 + numero2;
}

button?.addEventListener('click', function(){
    let numero1 = Number(input1?.value);
    let numero2 = Number(input2?.value);
    let resultado = adicionarNumeros(numero1, numero2);
    alert(resultado);
});