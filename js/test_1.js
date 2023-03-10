"use strict";

// let result = условие ? значение1 : значение2;


/*  Цикл for

    for (начало; условие; шаг) {
        ... тело цикла ...
        }

  Выполнить начало
→ (Если условие == true → Выполнить тело, Выполнить шаг)
→ (Если условие == true → Выполнить тело, Выполнить шаг)
→ (Если условие == true → Выполнить тело, Выполнить шаг)
→ ...

while – Проверяет условие перед каждой итерацией.
do..while – Проверяет условие после каждой итерации.
for (;;) – Проверяет условие перед каждой итерацией,
 есть возможность задать дополнительные настройки.

 function имя(параметры) {
  ...тело...
}
*/

/* task_1

 Напишите функцию calculate, принимающую два параметра: a и b, а также оператор,
 представленный в виде строки op. Функция должна возвращать результат операции a и b
 в зависимости от значения op. Поддерживаются следующие операции: '+', '-', '*', '/'.
 Пример
 calculate(2, 3, '+') // returns 5

*/




// function getCalculate(a, b, c) {

//     return
// }


/* task_2

Напишите функцию с именем checkTemperature, которая принимает значение температуры в градусах Цельсия и возвращает строку, указывающую, является ли температура горячей, теплой или холодной. В качестве эталона используются следующие температуры:

Если температура выше 30, жарко.
Если температура между 15 и 30, это тепло.
Если температура ниже 15, холодно.

Пример
checkTemperature(32) // returns 'hot'
checkTemperature(20) // returns 'warm'
checkTemperature(10) // returns 'cold'
*/

// с помощью конструкции switch case
// let number = 10;

// function checkTemperature(temperature) {

//     switch (number) {
//         case 30:
//             console.log('hot');
//             break;

//         case 20:
//             console.log('warm');
//             break;
//         case 15:
//             console.log('cold');
//             break;
//         default:
//             console.log("Нет таких значений");
//     }
// }

// console.log(checkTemperature());

// правильно
/*
function checkTemperature(value) {

    let temperature = value;
    let message = (temperature < 15) ? 'cold' :
        (temperature < 30) ? 'warm' :
            'hot';
    console.log(message);
}

checkTemperature(13);
*/

// task_3

/*
Напишите функцию с именем getDataType, которая принимает значение параметра и возвращает строку, указывающую тип данных значения. Функция должна возвращать одну из следующих строк: строка, число, логическое значение, ноль, неопределенное значение или объект.

Пример
getDataType("Hello") // returns 'string'
getDataType(123) // returns 'number'
getDataType(true) // returns 'boolean'
getDataType(null) // returns 'null'
getDataType(undefined) // returns 'undefined'
getDataType({}) // returns 'object'
*/

// с помощью оператора typeof проверяем переданный параметр, если (if) параметр строка ("Hello"), возвращаем 'string"
// еще(else), если параметр число (number),возвращаем 'number и т д.

// function getDataType(value) {
//     if (typeof value === String) {
//         console.log('string');
//     } else if (typeof value === Number) {
//         console.log('number');
//     } else if (typeof value === Boolean) {
//         console.log('boolean');
//     } else if (typeof value === null) {
//         console.log('null');
//     } else if (typeof value === undefined) {
//         console.log('undefinde');
//     } else if (typeof value === Object) {
//         console.log('object');
//     }
// }

// function getDataType(value) {
//     value = 'sds'
//     if (typeof value === String) {
//         console.log('string');
//     } else (typeof value == Number);
//     console.log('number');



// }

// getDataType();


// function getDataType(value) {

//     if (typeof value === String) {
//         console.log('string');

//     } else (typeof value === Number)
//     console.log('number');

// }
// getDataType("14");

// let value = data;
// data = 14;
// function getDataType(value) {

//     switch (data) {
//         case String:
//             console.log('string');
//             break;

//         case Number:
//             console.log('number');
//     }
// }

// getDataType();
// }
// getDataType(14);


// почти правильно? не возвращает null
// function getDataType(value) {
//     console.log(typeof value)
// }

// getDataType({});


// function getDataType(value) {

//     switch (typeof value) {
//         case "string":
//             console.log('string');
//             break;

//         case "number":
//             console.log('number');
//             break

//         case "boolean":
//             console.log('boolean');
//             break
//     }
// }

// getDataType(true)

// function log() {
//     let i = 1
//     while (i) {
//         console.log()
//         i++
//     }
// }
// log();




// Объекты

// Пустой объект («пустой ящик») можно создать, используя один из двух вариантов синтаксиса:

// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {};  // синтаксис "литерал объекта"

// пример

// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30        // под ключом "age" хранится значение 30
//   };

// получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30

//Значение может быть любого типа. Давайте добавим свойство с логическим значением:
// user.isAdmin = true;

//Для удаления свойства мы можем использовать оператор delete:
// delete user.age;

// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };

// let user = {};

// присваивание значения свойству
// user["likes birds"] = true;

// получение значения свойства
// alert(user["likes birds"]); // true

// удаление свойства
// delete user["likes birds"];

// let user = {
//     name,  // тоже самое, что и name:name
//     age: 30
//   };


// Цикл "for..in"     !!!!!

// Синтаксис:

// for (key in object) {
// тело цикла выполняется для каждого свойства объекта
// }

// К примеру, давайте выведем все свойства объекта user:
/*
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  for (let key in user) {
     ключи
    alert( key );  // name, age, isAdmin
     значения ключей
    alert( user[key] ); // John, 30, true
  }
*/
// Значение this – это объект «перед точкой», который используется для вызова метода.

// это что такое? (.f это функция?)
// используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// function User(name) {
// this = {};  (неявно)

// добавляет свойства к this
//     this.name = name;
//     this.isAdmin = false;

// return this;  (неявно)
//   }

// let arr = ['Яблоко', { name: 'Джон' }, true, function () { alert('привет'); }];

// получить элемент с индексом 1 (объект) и затем показать его свойство
//alert(arr[1].name); // Джон

// Допустим, нам нужен последний элемент массива. применяем метод arr.at(i)

// let fruits = ["Apple", "Orange", "Plum"];
// то же самое, что и fruits[fruits.length-1]
// alert( fruits.at(-1) ); // Plum


// push добавляет элемент в конец.
// shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.

// push добавляет элемент в конец.
// pop удаляет последний элемент.


// Удаляет последний элемент из массива и возвращает его:

// let fruits = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits.pop() ); // удаляем "Груша" и выводим его
// alert( fruits ); // Яблоко, Апельсин

// Добавляет элемент в конец массива:

// let fruits = ["Яблоко", "Апельсин"];
// fruits.push("Груша");
// alert( fruits ); // Яблоко, Апельсин, Груша

// let fruits = ["Яблоко"];
// fruits.push("Апельсин", "Груша");
// alert(fruits);

// Методы push/pop выполняются быстро, а методы shift/unshift – медленно.


// Перебор элементов

// let arr = ["Яблоко", "Апельсин", "Груша"];
// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

// Но для массивов возможен и другой вариант цикла, for..of:

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// проходит по значениям
// for (let fruit of fruits) {
//   alert( fruit );
// }

// Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.

// Чтобы пройтись по элементам массива:

// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми

// все нафиг, используем splice
//arr.splice(start[, deleteCount, elem1, ..., elemN])

// Метод arr.slice
// Синтаксис:
// arr.slice([start], [end])

// Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

// Синтаксис:
// arr.forEach(function(item, index, array) {
// ... делать что-то с item
//   });


// indexOf/lastIndexOf и includes
// Например:

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true

// метод filter

//let results = arr.filter(function(item, index, array) {
// если `true` -- элемент добавляется к results и перебор продолжается
// возвращается пустой массив в случае, если ничего не найдено
//  });

// Преобразование массива c помощью метода map

// Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

// Синтаксис:

// let result = arr.map(function(item, index, array) {
// возвращается новое значение вместо элемента
// });

// метод sort

// Например, для сортировки чисел:

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr);  // 1, 2, 15

// split и join

// Метод str.split(delim) именно это и делает. Он разбивает строку
// на массив по заданному разделителю delim.

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }

// join делает противоположное

// reduce/reduceRight
// Когда нам нужно перебрать массив – мы можем использовать forEach, for или for..of.

// Когда нам нужно перебрать массив и вернуть данные для каждого элемента – мы можем использовать map.

// Методы arr.reduce и arr.reduceRight похожи на методы выше, но они немного сложнее. Они используются для вычисления единого значения на основе всего массива.

// Синтаксис:
// let value = arr.reduce(function(accumulator, item, index, array) {
// ...
//   }, [initial]);

// Аргументы:

// accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его позиция,
// array – сам массив.


// "Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива. Используйте функцию filter() для фильтрации массива."

// "Напишите функцию, которая принимает массив объектов (каждый объект имеет свойства 'name' и 'age') и возвращает новый массив, содержащий имена тех объектов, возраст которых больше или равен 25. Используйте функцию filter() и функцию map() для решения этой задачи."

// "Напишите функцию, которая принимает массив объектов (каждый объект имеет свойства 'name', 'age' и 'city') и возвращает объект, который содержит информацию о среднем возрасте людей из каждого города. Используйте функцию reduce() и функцию groupBy() для решения этой задачи."


// Задача:
// Дан массив объектов, каждый из которых содержит информацию о книге (название, автор, жанр, количество страниц).
// Необходимо написать функцию, которая будет выполнять следующие действия:
// 1. Фильтрация массива, оставляя только книги жанра "фантастика"
// 2. Сортировка массива по названию книги в алфавитном порядке
// 3. Группировка книг по автору, создание нового объекта, где ключ это автор, а значение это массив книг этого автора
// 4. Подсчет суммарного количества страниц для каждого автора
// 5. Вывод списка авторов в порядке убывания количества страниц их книг.
// function books(arr) {
// // your code here
// }
// let booksArray = [
// {name: "Harry Potter", author: "J.K. Rowling", genre: "fantasy", pages: 400},
// {name: "1984", author: "George Orwell", genre: "dystopian", pages: 300},
// {name: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "comedy", pages: 200},
// {name: "Dune", author: "Frank Herbert", genre: "science fiction", pages: 500},
// {name: "Ender's Game",author: "Orson Scott Card", genre: "science fiction", pages: 400},
// {name: "The Foundation", author: "Isaac Asimov", genre: "science fiction", pages: 600},
// {name: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "fantasy", pages: 800},
// {name: "The Martian", author: "Andy Weir", genre: "science fiction", pages: 400},
// {name: "The Hunger Games", author: "Suzanne Collins", genre: "dystopian", pages: 300},
// {name: "Brave New World", author: "Aldous Huxley", genre: "dystopian", pages: 350}
// ]
// console.log(books(booksArray))
// Вывод должен быть таким:
// [
// {author: "J.R.R. Tolkien", pages: 800},
// {author: "Isaac Asimov", pages: 600},
// {author: "Frank Herbert", pages: 500},
// {author: "Orson Scott Card", pages: 400},
// {author: "Andy Weir", pages: 400},
// {author: "J.K. Rowling", pages: 400},
// {author: "Suzanne Collins", pages: 300},
// {author: "Aldous Huxley", pages: 350},
// {author: "George Orwell", pages: 300},
// {author: "Douglas Adams", pages: 200}
// ]

//  не вышло
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = arr.filter(item => item.id % 2 == 0);
// alert(arr2);

// task_1
// получилось
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = arr.filter(function (number) {
//     return number % 2 == 0;
// });
// alert(arr2);

// // task_2
// const arr = [
//     { name: "Samuel", age: "18" },
//     { name: "Jeremiah", age: "30" },
//     { name: "Ophilia", age: "25" },
//     { name: "Donald", age: "15" },
// ];

// const arr2 = [];

// function arrAge() {
//     // let someArr = arr.filter(item => item.age = 25);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].age >= 25) {
//             arr2.push(i)
//         };
//         return arr2;

//     }
// };



// let booksArray = [
//     { name: "Harry Potter", author: "J.K. Rowling", genre: "fantasy", pages: 400 },
//     { name: "1984", author: "George Orwell", genre: "dystopian", pages: 300 },
//     { name: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "comedy", pages: 200 },
//     { name: "Dune", author: "Frank Herbert", genre: "science fiction", pages: 500 },
//     { name: "Ender's Game", author: "Orson Scott Card", genre: "science fiction", pages: 400 },
//     { name: "The Foundation", author: "Isaac Asimov", genre: "science fiction", pages: 600 },
//     { name: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "fantasy", pages: 800 },
//     { name: "The Martian", author: "Andy Weir", genre: "science fiction", pages: 400 },
//     { name: "The Hunger Games", author: "Suzanne Collins", genre: "dystopian", pages: 300 },
//     { name: "Brave New World", author: "Aldous Huxley", genre: "dystopian", pages: 350 }
// ];

// function books() {
//     let newArray = [];
//     booksArray.filter(y => y.genre === 'fantasy');
//     // return author , pages ????
//     return newArray;
//     // отсортировать в алфавитном порядке
//     console.log(booksArray.sort());

// }
// books(booksArray);
// console.log(booksArray.sort());

// // task_2
// const arr = [
//     { name: "Samuel", age: "18" },
//     { name: "Jeremiah", age: "30" },
//     { name: "Ophilia", age: "25" },
//     { name: "Donald", age: "15" },
// ];

// function sortArr(array) {
//     return array.filter(element => Number(element.age) >= 25)
// };

// console.log(sortArr(arr))


// 5.1-5.9 что такое функции что такое стрелочные функции/ что такое массивы. 2 15 2 16 2 17

// let arr = [
//   { name: "Samuel", city: "NewYork", age: "18" },
//   { name: "Jeremiah", city: "Moskow", age: "30" },
//   { name: "Ophilia", city: "SaintPeterburg", age: "25" },
//   { name: "Donald", city: "Nongorod", age: "15" },
//   { name: "Donald", city: "NewYork", age: "45" },
//   { name: "Donald", city: "NewYork", age: "33" },
//   { name: "Donald", city: "NewYork", age: "12" },
//   { name: "Donald", city: "NewYork", age: "78" },
// ];
// // Напишите функцию, которая принимает массив объектов (каждый объект имеет свойства 'name', 'age' и 'city') и возвращает объект, который содержит информацию о среднем возрасте   из каждого города. Используйте функцию reduce() и функцию groupBy() для решения этой задачи.

// function staticAge(array) {
//   const newObj = {};
//   const set = new Set
//   array.map(element => {
//     set.add(element.city)
//   })

//   set.forEach((value) => {
//     let count = 0
//     array.map(element => {
//       if (element.city === value) {
//         count += +element.age
//       }
//     })

//     newObj.value = count
//   });
//   return newObj;
// }
// console.log(staticAge(arr));