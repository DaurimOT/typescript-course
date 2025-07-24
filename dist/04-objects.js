"use strict";
// Тема: Объекты в TypeScript!
// Согласно ресурсу https://learn.javascript.ru в JS существует 8 типов данных 7 из них называются примитивными, 
// по причине того, что они содержат только одно занчение пуст строка, число, бульевое значение 
// Примитивные типы (Number, String, Boolean, Undefined, Null, Symbol, BigInt).
// Объекты же способны хронить целые коллекции различных значении 
// и более сложных сущностей то есть другие объеты и функции. 
const userInformation = {
    name: 'Johnny Silverhand',
    age: 32,
    married: true,
    sayHello: function () {
        return (`Hello my name is ${this.name}. I am ${this.age}!`);
    },
    userWife: {
        name: 'Wifes name',
        // и так далее.
    }
};
const userMessage = userInformation.sayHello();
console.log(userMessage); // Выводит в лог Hello my name is Daurim. I am 32!
// Синтаксис и код в целом разбирать не будем, так как перед изучением TypeScript 
// Мы уже должны занть JavaScript довольно хорошо. 
// Перейдём к разбору объектов в TypeScript.
// Разберём следующий синтаксис:
const userInfo002 = { name: 'Johnny Silverhand', age: 32 };
// Объяснение:
// const userInfo002 — объявляем константу с именем userInfo002.
// : { name: string; age: number } — указываем явный тип объекта: 
// объект должен содержать два ключа — `name` (строка) и `age` (число).
// = { name: 'Johnny Silverhand', age: 32 } — присваиваем объект, соответствующий указанной структуре.
// Подобное примеру ниже, в JavaScript сработает нормально.
// let userInfo001 = {name: 'Johnny Silverhand', age: 32} // ВНИМАНИЕ!!! Подобный синтаксис допустим и в TypeScript за счет неявного присвоение типов данных.
// userInfo001 = {name: 'Arthur Morgan'}
// За счет срогой типизации в TypeScript нужно соблюдать типы даннх, количество пар ключей и значений. 
// Необязательные свойства
// TypeScript позволяет сделать свойства необязательными. 
// Для этого после названия свойства указывается знак вопроса ?
const userINfo003 = { name: 'Arthur Morgan' }; // за счет "?:" age не обязательное свойство и мы можем его игнорировать. Проверь убери "?" и данная строка вызовет ошибку.
console.log(userINfo003.age); // При обращении к не установленному свойству мы получим undefined.
// В следствии при работе с объектами, которые имеют не обязательные свойства мы можем совершать проверку.
if (userINfo003.age) {
    console.log(`Hello my name is ${userINfo003.name}! I am ${userINfo003.age}.`);
}
else {
    console.log(`Hello my name is ${userINfo003.name}!`);
}
// Объекты в функциях.
// Если мы передаём объект в функцию в качестве аргумента,
// необходимо явно указать структуру этого объекта в параметрах функции.
// Тип параметра user: { name: string; age: number } означает,
// что функция ожидает объект с двумя обязательными полями:
// - name: строка (string)
// - age: число (number)
// Также мы указываем тип возвращаемого значения функции — в данном случае `void`,
// что означает, что функция ничего не возвращает (она просто выполняет действие, например, логирует данные).
// Объявляем объект userInfo004 и явно указываем его тип — { name: string; age: number }.
// Затем передаём этот объект в функцию printUserInfo.
function printUserInfo(user) {
    console.log(`name: ${user.name}, age: ${user.age}`);
}
let userInfo004 = { age: 32, name: 'Johnny Silverhand' };
printUserInfo(userInfo004);
// Не маловажный момент, объекты передаваемые в качестве аргумента могут содержать больше свойств
// let userInfo004 = {age: 32, name: 'Johnny Silverhand', married: false, ...}
// Главное передоваемый объект должен содержать те свойства, 
// которые предусмотренны для прараметра функции в случее нашего примера выше это name: string, age: number.
// Объект, как результат функции. 
function userInfo005() {
    return { name: 'Arthur Morgan', age: 32 };
}
let user = userInfo005();
console.log(user);
// Разберём пример выше.
// Объявляем функцию с именем `userInfo005`.
// После скобок `()` указываем возвращаемый тип функции с помощью `: { name: string; age: number }`.
// Это означает, что функция должна вернуть объект, содержащий два свойства:
// - `name` типа `string`
// - `age` типа `number`
// В теле функции мы возвращаем объект: 
// { name: 'Arthur Morgan', age: 32 }, который полностью соответствует указанному типу.
// Затем мы вызываем эту функцию и сохраняем результат в переменной `user`.
// TypeScript автоматически выводит тип переменной `user` как { name: string; age: number }.
// Далее выводим содержимое объекта в консоль.
// Оператор in.
let JSilverhand = { name: 'Johnny Silverhand', age: 32 };
let AMorgan = { name: 'Arthur Morgan' };
function printUserInfo001(user) {
    if ('age' in user) {
        console.log(`name: ${user.name}, age: ${user.age}`);
    }
    else {
        console.log(`name: ${user.name}`);
    }
}
printUserInfo001(JSilverhand); // Вывод в лог name: Johnny Silverhand, age: 32
printUserInfo001(AMorgan); // Вывод в лог name: Arthur Morgan
// Декомпозиция объектов-параметров:
function printUserInfo002({ name, age }) {
    console.log(`name: ${name}, age: ${age}`); // Следует заметить разницу при десруктуризации код более короче.
    // Без структуризации в примерах выше console.log(`name: ${user.name}, age: ${user.age}`)
}
// Так же некоторые свойства могут быть опциональные и могут иметь значения по умолчанию.
// Если свойства имеют знаяения по умолчанию, то мы можем обойтись без проверок. 
function printUserInfo003({ name, age = 32 }) {
    // За счет значения по умочанию 
    console.log(`name: ${name}, age: ${age}`);
}
let object001 = { name: 'Arthur Morgan' };
printUserInfo003(object001);
// Type Aliases (Псевдонимы типов)
let user01 = { name: 'Johnny Silverhand', age: 33 };
let user02 = { name: 'Arthur Morgan', age: 32 };
let user03 = { name: 'Daurim Torehan', age: 31 };
// И получаем вот такую красоту :)
let user001 = { name: 'Johnny Silverhand', age: 33 };
let user002 = { name: 'Arthur Morgan', age: 32 };
let user003 = { name: 'Daurim Torehan', age: 31 };
// ✅ Пример 1: Создание объекта с использованием типа
const userData = { name: 'Arthur Morgan 0011', age: 32 };
// ✅ Пример 2: Передаём объект как аргумент функции
function printUserData(user) {
    return `name: ${user.name}, age: ${user.age}`;
}
console.log(printUserData(userData));
// ✅ Пример 3: Возвращаем объект как результат функции
function getUserData() {
    return { name: 'Johnny Silverhand', age: 33 };
}
console.log(getUserData());
// 🧠 Обратите внимание:
// Один и тот же псевдоним типа — `UserType01` — используется:
// 1. для создания объектов;
// 2. для типизации параметров функции;
// 3. для типизации возвращаемого значения функции.
//
// Это демонстрирует переиспользуемость типа и позволяет писать код по принципу DRY —
// без повторения одних и тех же структур в разных местах.
//# sourceMappingURL=04-objects.js.map