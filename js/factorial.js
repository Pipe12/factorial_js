function factorial(number){
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

const numberToFactorial = 11;
const factorialNumber = factorial(numberToFactorial);

console.log("El factorial de " + numberToFactorial + " es igual a " + factorialNumber);
