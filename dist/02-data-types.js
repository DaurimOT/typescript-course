"use strict";
// Литеральные типы данных null, undefined, void, never
// Данная тема демонстрирует всю мощь и строгость TS.
// В данном примере переменной direction может быть присвоено только одно из следующих строковых значений:
// "left", "right", "up" или "down".
// Любое другое значение вызовет ошибку на этапе компиляции TypeScript.
let direction;
direction = "left"; // ✅ Разрешено — значение входит в список допустимых
// direction = "center"; // ❌ Ошибка — значение "center" не входит в разрешённый набор
// ❗ null и undefined — это и значения, и отдельные типы в TypeScript.
let b = undefined;
let b01 = null;
console.log(b, b01);
// 🔍 По умолчанию (если "strictNullChecks": false),
// null и undefined автоматически считаются допустимыми значениями для всех типов.
// let c: number = undefined; // ✅ Работает без ошибки при отключённой строгой проверке null
// console.log(c);
// ✅ Но если включить строгую проверку ("strictNullChecks": true), 
// TypeScript не разрешает присваивать null или undefined переменным других типов без явного указания.
let d = undefined; // ✅ OK
let e = null; // ✅ OK
let f = undefined; // ✅ OK
// 🔒 Это важно для безопасности типов. Например:
function calculateTotal(price, discount) {
    // discount может быть undefined, поэтому важно обрабатывать это явно:
    return price - (discount ?? 0);
}
// void используется, когда функция ничего не возвращает пример ниже.
function logMessage(message) {
    console.log(message);
}
logMessage('Hello World!!!');
// Тип данных never. Тип, представляющий невозможность: функция никогда не вернёт значение (например, выбрасывает ошибку или бесконечный цикл).
function throwError(msg) {
    throw new Error(msg);
}
function infiniteLoop() {
    while (true) { }
}
function handleStatus(status) {
    switch (status) {
        case "loading":
            return "Загрузка...";
        case "success":
            return "Готово!";
        case "error":
            return "Ошибка!";
        default:
            const _ = status; // ✅ TypeScript проверит, что сюда ничего не попадёт
            return _;
    }
}
// массивы, кортежи и перечисления (enum) 
// Объявления массива с типами.
let arr = [1, 2, 3];
let arr001 = ['a', 'b', 'c'];
// Второй способ.
let arr002 = [1, 2, 3];
let arr003 = ['a', 'b', 'c'];
// Для того, чтобы массив содержал данные нескольких типов нужно объявить массив следующим образом.
let mixetDataTypes = [1, 'a', 2, 'b', 3, 'c'];
// Кортежи, массив фиксированной длины и порядка типов. 
let userInfo = ['Daurim', 30];
// Нарушения порядка вызовет ошибку.
// let userInfo: [string, number] = [30, 'Daurim'];
// let userInfo: [string, number] = ['Daurim', 30, 40] 
// или let userInfo: [string, number] = ['Daurim', 'web-dev', 30] 
// Так же вызовет ошибку 
// enum — специальный тип, представляющий набор фиксированных именованных значений.
var Status001;
(function (Status001) {
    Status001[Status001["Todo"] = 0] = "Todo";
    Status001[Status001["InProgress"] = 1] = "InProgress";
    Status001[Status001["Done"] = 2] = "Done";
})(Status001 || (Status001 = {}));
let current = Status001.InProgress;
console.log(current); // 1
console.log(Status001.Done); // 2
// По умолчанию — значения начинаются с 0 и идут по порядку.
// Строковый тип enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
const userRole = Role.User;
console.log(userRole); // "USER"
// Когда использовать enum:
// Когда ты хочешь работать с ограниченным набором логически связанных значений.
// Когда важны имена этих значений.
// Когда удобно, чтобы значения были числовыми или строковыми.
// Альтернатива через union string literal (чаще применяется в современных проектах):
// type Status = "todo" | "in_progress" | "done";
// Это легче для типизации, компиляции, и работает лучше с type narrowing.
//# sourceMappingURL=02-data-types.js.map