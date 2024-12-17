function roll(num,delay){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          reject(num);
      },delay)
  })
}
roll(123,4000).then(() =>{
  roll(123,4000).then(() =>{
      
  console.log("hello");
  })
}).catch(()=>{
  console.log("catch says hello!");
})