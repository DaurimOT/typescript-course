// Шаг первый. Команда для установки tsc компилятора npm install -g typescript
// Команда для проверки tsc -v 


// Шаг второй. Создать в корне проекта файл tsconfig.json
// Внести в файл tsconfig.json базовую конфигурацию.
// {
//   "compilerOptions": {

//      Компилировать до версии "ES2020".
//     "target": "ES2020",

//      Выбираем систему модулей в моем случае (CommonJS - для Node.js).
//     "module": "CommonJS",

//      Обознаяаем директорию с исходным кодом.
//     "rootDir": "./src",

//      Здесь мы указываем директорию, в которой будет размещен уже готорый скомпилированный js код.
//     "outDir": "./dist",

//      Подключаем строгую проверку "use strict"
//     "strict": true,

//      Разрешаем import fs from 'fs' для CommonJS
//     "esModuleInterop": true,

//      Следит за регистром в названиях файлов (важно под Linux)
//     "forceConsistentCasingInFileNames": true,

//      Пропустить проверку типов .d.ts из node_modules
//     "skipLibCheck": true,

//      Позволяет отлаживать исходный TypeScript-код и 
//      В случае ошибок — stack trace указывает на строки в TS-файлах, а не JS
//     "sourceMap": true

//   },

//   "include": ["src"]
// }

// Для проверки компиляции сделаем простой вывод в консоль console.log('Learning TS') и зпаустим команду node dist/data-types.js
