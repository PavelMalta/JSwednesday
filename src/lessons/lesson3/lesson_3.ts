import {rejects} from "assert";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


let p = new Promise((resolve, reject) => {
    let a = 10;
    let b = 15;
    console.log(a + b);
    setTimeout(() => {
        resolve();
    }, 1000);
    // ajax(fetch, axios)...
    reject();
}) //микротаска не создастся

//Promise methods: then(); catch(); finally()

let promise = new Promise((resolve, rejects) => {
    // ajax
    resolve(10)
})
promise.then(res => {
    //ajax
    return //ajax result
}, err => {
}).then(res2 => {
}, err => {
})

let testPromise = new Promise((res, rej) => {
    // ajax
    rej(10)
})
testPromise
    .then(res => {
    }, err => {
        let a = 100500
        throw 50  // в следующем then попадаем в ветку err
    })
    .then(res2 => {
        console.log(res2)
    }, err2 => {
        console.log(err2)
    })


p.then().catch()  // микротаска создастся только при обращении в then или catch

// just a plug
export default () => {
};