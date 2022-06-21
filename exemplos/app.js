"use strict";
const pessoa = {
    nome: 'Ysmael',
    idade: 24,
    profissao: 'desenvolvedor'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
// ???????????????
var Profissao2;
(function (Profissao2) {
    Profissao2[Profissao2["Atriz"] = 0] = "Atriz";
    Profissao2[Profissao2["Pintora"] = 1] = "Pintora";
    Profissao2[Profissao2["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao2[Profissao2["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao2 || (Profissao2 = {}));
const Vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao2.Atriz
};
