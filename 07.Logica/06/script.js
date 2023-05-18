// Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

const num = window.prompt(`Digite um número inteiro:`);
console.log(`Tabuada de ${num}`);
for (let i = 0; i <= 10; i++) {
  const result = num * i;
  console.log(`${num} x ${i} = ${result}`);
}
