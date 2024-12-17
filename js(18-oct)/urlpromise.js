let url =  'https://api.github.com/users/Radhika02005'
let b = fetch(url);
b.then((data) =>
{
  console.log(data)
  return data.json();
}).then((data)=>
{
  console.log(data);
}).catch(() =>
{
  console.log('Error fetching data');  // if the API call fails or returns an error status code, this will be logged.
}).finally(() => {
  console.log('Fetch operation completed');  // this will be logged regardless of whether the fetch operation was successful or not.
})

async function fetchh() {
  let url = 'https://api.github.com/users'
  let b = await fetch(url);
  let data = await b.json();
  console.log(data);
}

fetchh()