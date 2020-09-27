/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
    let arr = str.toLowerCase().split(' ');

    let result = arr.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(' ');

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('Как дела? Как дела? Это новый кадиллак.')); // "Молодость Всё Простит"