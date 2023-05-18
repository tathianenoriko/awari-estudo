// Faça um programa que mostre todos os números primos de 0 a 100.

function primo(num) {
  let divisor = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisor++;
    }
  }
  if (divisor == 2) {
    return true;
  } else {
    return false;
  }
}

for (let i = 1; i <= 100; i++) {
  if (primo(i)) {
    console.log(i);
  }
}
