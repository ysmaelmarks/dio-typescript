interface Pessoa{
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao{
    'Dançarina',
    'Cantora',
    'Ator',
    'Cantor'
}

let pessoa1: Pessoa = {
    nome: "Paula",
    idade: 20,
    profissao: Profissao.Cantora
};

let pessoa2: Pessoa = {
    nome: 'Roberto',
    idade: 25,
    profissao: Profissao.Ator
};

let pessoa3: Pessoa = {
    nome: 'Manuela',
    idade: 24,
    profissao: Profissao.Dançarina
};

let pessoa4: Pessoa = {
    nome: 'Ricardo',
    idade: 26,
    profissao: Profissao.Cantor
}

