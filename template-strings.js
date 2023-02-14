const nome = "Renato";
const idade = 2023-1999;
const cidadeNascimento = "São Paulo";


// const apresentacao = "Meu nome é " + nome + ", minha cidade é " + idade + "e nasci na cidade de" + cidadeNascimento;


// Template String
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}`;

// console.log(apresentacao)

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

// console.log(pedido)

dad = 14;
brother = 16;
acess = 'Liberado';
notAcess = 'Não liberado';
denied = 'entrar';

const disneyLand = `Um menor de idade deve ${denied} sempre acompanhado de um maior de idade: ${dad >= 18 || brother >= 18 ? acess : notAcess }`;

console.log(disneyLand)