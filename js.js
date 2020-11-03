// task #1
//
// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// const array = [1,2,3,4,5];
// console.log(array);
//
// const array2 = ['a','b','c','d','e'];
// console.log(array2);
//
// const array3 = [1,2,'str',true,false];
// console.log(array3);
//
// const array4 = []
// array4.push('a','b','c','d');
// console.log(array4[2]);

// task #2
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <=10; i++) {
//     document.write('<div>block</div>')
// }
//


// task #3
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <=10; i++) {
//     document.write('<div>' + i + ' ' + 'block ' + '</div>')
// }

// task #4
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//
// while (i <= 10) {
//     document.write('<div>block</div>');
//     i++;
// }
//

// task #5
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i <= 10) {
//     document.write('<div>' + i + ' ' + 'block' + '</div>');
//     i++;
// }

// task #6
//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1,2,3,4,5,6,7,8,9,10];
//
// for (let i = 0; i <11; i++) {
//     console.log(array[i])
// }

// const array = [1,2,3,4,5,6,7,8,9,10];
//
// let i = 0;
// while (i <=10) {
//     console.log(array[i]);
//     i++;
// }


// task #7
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// const array = ['a','b','c','d','e','f','g','h','i','j']
//
// let i = 0;
// while (i < 10) {
//     console.log(array[i]);
//     i++;
// }

// task #8
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// const array = [1,2,3,4,'a','b','c','d',true,false]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// task #9
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// const array = [1,2,3,4,'a','b','c',false,true,false];
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean'){
//         console.log(array[i]);
//     }
// }

// task #10
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// const array = [1,2,3,4,'a','b','c',false,true,false]
//
// let i = 0;
// while (i < array.length) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i]);
//     }
//     i++;
// }

// task #11
//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const array = [1,2,3,4,'a','b','c',false,true,false];
// let i = 0;
// while (i < array.length) {
//     if (typeof array[i] === 'string'){
//         console.log(array[i]);
//     }
//     i++;
// }

// task #12
//Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// const array = [];
// array.splice(0, 0,'a','b','c','d');
// array.splice(4,0,1,2,3);
// array.splice(7,0,true,false,true)
//
// for (let i =0; i < array.length; i++ ) {
//     console.log(array[i]);
// }

// task #13
//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// task #14
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i)
// }

// task #15
//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i)
// }

// task #16
//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i)
// }

// task #17
//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2) {
//         console.log(i);
//         document.write(i);
//     }
// }

// task #18
//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let min = 1; min < 3; min++) {
//     for (let sec = 1; sec < 60; sec++){
//         console.log(sec);
//     }
//     console.log(min + 'min');
// }

// task #19
//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hour = 1; hour < 3; hour++) {
//     for (let min = 1; min < 60; min++){
//         for (let sec = 1; sec < 60; sec++) {
//             console.log(sec);
//         }
//         console.log(min + 'min');
//     }
//     console.log(hour + 'hour');
//     if (hour === 2) {
//         for (let min = 1; min <= 20; min++) {
//             for (let sec = 1; sec < 60; sec++) {
//                 console.log(sec);
//             }
//             console.log(min + 'min');
//         }
//     }
// }