// Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

const idades = prompt(`Digite as idades separadas por vírgula:`);
const valor = idades.split(`,`);
console.log(`Idades: `, valor);

let total = 0;
for (let i = 0; i < valor.length; i++) {
  total += parseInt(valor[i]);
}

const media = total / valor.length;
console.log(`Média: `, media);
