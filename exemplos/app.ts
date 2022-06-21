const pessoa = {
    nome: 'Ysmael',
    idade: 24,
    profissao: 'desenvolvedor'

}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'

}

// ???????????????

enum Profissao2{
    Atriz,
    Pintora,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface IPessoa{
    nome: string,
    idade: number,
    profissao: Profissao2
}

interface IEstudante extends IPessoa{
    materias: string[]
}


const Vanessa: IPessoa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao2.Atriz
}


