/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
 */
function isPrime(n) {
    for (u = 2; u < n; u++) {
        if (n % u === 0) {
            return false;
        }
    }
    return n > 1;
}


function primes(n) {
    const arr = [];
    for (i = 1; i <= n; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]