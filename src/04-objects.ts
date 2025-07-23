// Объекты в ts
// Мы можем описывать тип объекта прямо в месте его объявления.

const user: {name: string, age: number} = {
    name: 'Daurim',
    age: 32,
}

console.log(user)

// Type Aliases (Псевдонимы типов)
// Создаём псевдоним типа с помощью type, чтобы переиспользовать и упростить:

type User = {
    name: string,
    age: number,
}

const admin: User = {
    name: 'Daurim',
    age: 32
}

// Когда использовать type:
// Хочешь создать новое имя для типа (включая Union/Intersection типов, дженерики и т.д.)
// Когда нужно использовать типы совместно с utility types (Partial<User>, Omit<User, 'age'> и т.п.)
// Когда нужно объединить типы с помощью &, |, typeof, keyof, и т.п.