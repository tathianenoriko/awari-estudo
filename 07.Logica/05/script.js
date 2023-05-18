// Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

for (let num = 1; num <= 10; num++) {
  console.log(`Tabuada de ${num}`);
  for (let cont = 0; cont <= 10; cont++) {
    const result = num * cont;
    console.log(`${num} x ${cont} = ${result}`);
  }
  console.log("");
}
