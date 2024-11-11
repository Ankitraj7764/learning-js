// const shape = {
//   radius: 10,
//   diameter() {
//     return this;
//   },
//   hello() {
//     let a = { name: "ddk" };

//     return function () {
//       return this;
//     };
//   },
// };

// console.log(shape.diameter());
// console.log(shape.hello()());

// const person = {
//   name: "Bob",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();

// const promise1 = new Promise((resolve, rej) =>
//   setTimeout(() => resolve("faill"), 4000)
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Data from API 2"), 10000)
// );
// const promise3 = new Promise((resolve, rej) =>
//   setTimeout(() => resolve("Data from API 3"), 5000)
// );

// Promise.([promise2, promise3, promise1])
//   .then((results) => console.log("All data fetched:", results))
//   .catch((error) => console.error("One of the promises failed:", error));
// let a = [1, 2, 3, 4];
// for (let i = 0; i < a.length; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
const a = (a = 1, b = 2) => {
  return a + b;
};
console.log(a(3, undefined));
