"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Dan\u00E7arina"] = 0] = "Dan\u00E7arina";
    Profissao[Profissao["Cantora"] = 1] = "Cantora";
    Profissao[Profissao["Ator"] = 2] = "Ator";
    Profissao[Profissao["Cantor"] = 3] = "Cantor";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Paula",
    idade: 20,
    profissao: Profissao.Cantora
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 25,
    profissao: Profissao.Ator
};
let pessoa3 = {
    nome: 'Manuela',
    idade: 24,
    profissao: Profissao.Dançarina
};
let pessoa4 = {
    nome: 'Ricardo',
    idade: 26,
    profissao: Profissao.Cantor
};
