let promise = new Promise((resolve,reject) => {
  resolve({ user: "AJ" , pass : "123445"});
})
// promise.then(
//   // () => {
//   //   console.log("Success");
//   //}
// 

promise.then((data) =>
{
  console.log(data);
  return data;
}).then(
(res) => {
  console.log(res.user);
}).catch(()=>
{
  console.log("Error");
}).finally(()=>
{
  console.log("Finally");
})

