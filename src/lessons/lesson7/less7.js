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

// Task 05
// Используя метод Apply реализовать свой собственный метод bind

Function.prototype.customBind = function (ctx, ...args) {
    const that = this;
  return function (...args2) {
      return that.apply(ctx, [...args, ...args2])
  }
}

Function.prototype.customBind2 = function (ctx, ...args) {
  ctx.___someValue___ = this;
    return function (...args2) {
      return ctx.___someValue___(...args, ...args2)
    }
}