/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
 */

function factorial(n) {
    arrFactorial = [1, 1];
    let number = 0;
    for (i = 2; i <= n; i++) {
        number = i * arrFactorial[i - 1];
        arrFactorial.push(number);
    }

    return arrFactorial[n];

}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720