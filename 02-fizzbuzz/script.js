/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
 */

function fizzBuzz(num) {
    // Напишите код здесь
    for (let i = 1; i <= num; i++) {
        let message = '';
        if (i % 3 === 0) {
            message += 'fizz';
        }
        if (i % 5 === 0) {
            message += 'buzz';
        } else if (message === '') {
            message = i;
        }
        console.log(message);
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));