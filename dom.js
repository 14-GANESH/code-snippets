// Prime Number Checker in JavaScript

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
let number = parseInt(prompt("Enter a number: "));

if (isPrime(number)) {
  console.log(number + " is a Prime number ");
  alert(number + " is a Prime number ");
} else {
  console.log(number + " is NOT a Prime number ");
  alert(number + " is NOT a Prime number ");
}
