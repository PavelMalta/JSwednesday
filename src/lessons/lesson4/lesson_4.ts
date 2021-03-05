import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

//Task 1
// setTimeout( () => console.log(1), 0)
// console.log(2);
// (()=> console.log(3))();
// Promise.resolve(console.log(4))  // микро таска не создалась (синхронный код)
// 2 3 4 1

//Task 2
// new Promise( (res, rej) => {
//     console.log(1);
// });
// new Promise( (res, rej) => {
//     setTimeout(() => console.log(2), 0)
// });
// Promise.resolve(setTimeout(() => console.log(3), 0));
// console.log(4);
// Promise.reject(console.log(5));
// 1 4 5 2 3

//Task 3
// (function() {
//     setTimeout(() => console.log(1), 100);
// })();
// console.log(2);
// new Promise( (res, rej) => {
//     setTimeout(() => console.log(3), 50);
// })
// function f() {
//     console.log(4)
// }
// Promise.resolve(console.log(5));
// 2 5 3 1

//Task 4
// function f(num: number) {
//     console.log(num)
// };
// Promise.resolve(1)
//     .then(f);    //создалась микротаска т.к. отработал метод промиса
// (function (){
//     console.log(2)
// })();
// console.log(3);
// new Promise( (res,rej) => {
//     console.log(4);
// });
// setTimeout(f, 0, 5);
// 2 3 4 1 5

//Task 5
console.log(1);
function f() {
    console.log(2)
}
setTimeout( () => {
    console.log(3);
    let p = new Promise((res,rej) => {
        console.log(4);
        res();
    });
    p.then(()=>f())
}, 0);
let l = new Promise((res,rej) => {
    console.log(5);
    rej()
});
l.then(res => console.log(res)).catch(() => console.log(6));
console.log(7);
// 1 5 7 6 3 4 2

// just a plug
export default ()=>{};