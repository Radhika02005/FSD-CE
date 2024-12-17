function orderFood(item,time) {
  return new Promise ((resolve,reject)=> {
    setTimeout(()=>{
      console.log(`Ordering ${item}...`);
      if(time>10){
        resolve(`You ordered ${item} and it will be ready in 10 minutes.`);
      }else{
        reject(`Sorry, we are unable to order ${item} due to the time constraint.`);
      }
    },time*1000);
  })
}

async function printOrderFood() {
  await orderFood('pizza',11);
  await orderFood('burger',12);
  console.log('All orders are completed.');
}

printOrderFood();