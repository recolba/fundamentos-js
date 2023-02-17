// Declaração de Função - normal
// function teste(nome) {
//     // Bloco de Notas
// }

// Arrow Function 
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(soma(2, 2))
console.log(apresentarArrow("Renato"))

// Arrow Function com + de 1 linha de instrução

const somaNumPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 10";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumPequenos(10, 9))

// Hoisting: arrow function se comporta como expressão

// operador maior ou igual que
// >= 