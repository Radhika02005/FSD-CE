function getRoll(num,delay){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("Roll. No. is",num);
          resolve("Sucessfully Done");
      },delay);
  })
}

async function printRollnumbers() {
  await getRoll(1 , 1000);
  await getRoll(2, 2000);
  await getRoll(3, 3000);
}
printRollnumbers();