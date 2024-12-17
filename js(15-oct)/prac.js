// function aa() {
//   console.log("Hello from aa");
// }
// setTimeout(aa,2000);

// //IIFE
// (function (){
//   console.log("Second");
// })();

// let a = new function ("console.log("Hello from aa")");
// a();//this is constructor function 

// //this is arrow function
// let b= () => {
//   console.log("Third");
// }

// function rollnumber(){
//   console.log("first");
// }
// setTimeout(rollnumber,2000, 20210510514);

// function rollnumber(num){
//   console.log("Roll number", num);
// }
// setTimeout(rollnumber ,2000, 20210510515);

//call back hell

// function rollnumber(num,delay,nextrollnumber){
//   setTimeout(() => {
//     console.log("Roll number", num);
//     if (nextrollnumber) nextrollnumber();
//   },delay);
// }
// rollnumber(11212,1000,() => {
//   rollnumber(22334,3000,() => {
//     rollnumber(22334,5000,() => {
//       rollnumber(55667,1000,() => {
//         console.log("All roll numbers printed");
//       })
//     })
// });
// });



// Promise
// const promise = new Promise(function(resolve,reject){
//   console.log ("My first Promise")
//   //xresolve("Resolved");
//   reject("Rejected");
// });

// promise.then(() => {
//   console.log("My first then")
// }).catch(() => {
//   console.log("My first catch")
// });



// let promise1 = function getPromise() {
//   return new Promise((resolve, reject) => {
//     resolve("Promise resolved")
//   });
// }

// make call back hell roll number with the help of Promise
function getRoll(num,delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll number: ",num);
      resolve("sucessfully done");
    }, delay);
  });
}

getRoll(1,1000).then(() => {
  getRoll(2,2000).then(() => {
    getRoll(3,3000).then(() => {
      getRoll(4,4000).then(() => {
        getRoll(5,5000).then(() => {
          console.log("All roll numbers printed");
        });
      });
    });
  });
});