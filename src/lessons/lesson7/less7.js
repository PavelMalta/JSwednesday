// console.log("Hello");
//
let obj = {name: 'Pasha'};
console.log(obj)

class Test {
    callTest() {

    }
}

let t1 = new Test();

console.dir(Test);
console.log(t1);

t1.__proto__.sayHi = function () {

}

let t2 = new Test();

console.log('t2 ', t2);
console.log(t2.sayHi === t1.sayHi);

// let obj = {
//     name: 'Eugene',
//     sayHi() {
//         console.log(this.name)
//     }
// }

// obj.__proto__.sayHi = function () {
//     console.log("Hi!")
// }

// console.log(t1.__proto__.__proto__)

Test.prototype.some = function () {

}
console.log(t1);