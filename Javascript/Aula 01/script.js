console.log("Olá alunos")

// Variaveis: Alocando uma informação num espaço da mémoria
// String
var nome = "lucas"
var sobrenome = "silva"
var nomeCompleto = nome + sobrenome
// Number
let idade = 18

// Boolean
const temPussyNaDIck = false

function Pessoas(ID,nome, idade){
    this.ID = ID;
    this.nome = nome;
    this.idade = idade;
}
var cadastradas = [new Pessoas(0,'Fabio',19)];

var preco = 25
var quantidade = 5
var desconto = 10


// Contatenação

var sobrenome, cidade, ano

sobrenome = "Greenyard"
cidade = "Curitiba"
ano = 2005

console.log(`Meu nome é ${nome} ${sobrenome}, eu moro`)

