// function soma() {
//     return 2 + 2;
// }

// console.log(soma())


function soma(x, y) {
    return x + y;
}

// console.log(soma(2,2))


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

// console.log(nomeIdade("Renato", 23))

function mult(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(mult(soma(2,3)))

