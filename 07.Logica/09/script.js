// Faça um programa que receba a idade de dez pessoas, calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

const idades = prompt(`Digite as idades separadas por vírgula:`);
const valor = idades.split(`,`);
console.log(`Idades: `, valor);

let cont = 0;
for (let i = 0; i < valor.length; i++) {
  const maior = parseInt(valor[i]);
  if (maior >= 18) {
    cont++;
  }
}
console.log(`Maiores de idade: `, cont);
