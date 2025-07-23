"use strict";
// Функции — это сердце любой программы. 
// В TypeScript они приобретают строгую структуру за счёт аннотаций типов.
// Типы параметров
function func001(name) {
    console.log(`Hello ${name}`);
}
// name: string обязательный параметр с типом string
// void функция ничего не возвращает
func001('Daurim!');
// Тип возвращаемого значения. После (...): мы указываем что функция будте возвращать значение с типом данных number 
function func002(a, b) {
    return a + b;
}
console.log(func002(2, 5));
// Не обязательные параметры (?:)
function func003(message, user) {
    console.log(`${message}${user ? 'from' + user : ''}`);
}
// log("Сохранено");           // OK
// log("Сохранено", "Даурим"); // OK
// user?: string — параметр может быть не передан.
// Тип — автоматически string | undefined
// Параметры по умолчанию
function greet(name = "Гость") {
    console.log(`Добро пожаловать, ${name}`);
}
greet(); // Добро пожаловать, Гость
// Типизация функции как переменной
const func004 = function (a, b) {
    return a + b;
};
// Или со стрелочной функцией
const func005 = (a, b) => a / b;
// Возврат void и never
// void — функция ничего не возвращает (например, логирование)
// never — функция никогда не завершится нормально (бесконечный цикл или throw)
function logError(msg) {
    console.error(msg);
}
function crash() {
    throw new Error("Критическая ошибка");
}
// Callback-функции с типами
function doSomething(callback) {
    callback(42);
}
doSomething((v) => console.log("Callback:", v));
//# sourceMappingURL=03-function.js.map