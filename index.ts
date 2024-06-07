// let myPromise = new Promise((resolve, reject) => {
//     console.log("Promise Pending")
//     setTimeout(() => {
//         resolve("Promise Success");
//     }, 2000);
// });

// myPromise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// let url = "https://jsonplaceholder.typicode.com/todos/1"

// console.log(fetch(url))
// fetch(url)
// .then((res)=> console.log(res))
// .then((res) => res.json())
// .then((res) => console.log(res))
// .catch((err) => console.log(err))


async function fetchData() {
    let url = "https://jsonplaeholder.typicode.com/todos/1";
    
    console.log("Fetching data...");
    
    // Fetch the data directly without any artificial delay
    let fetchData = await fetch(url);
    let result = await fetchData.json();
    
    // Check result
    if (result === undefined) {
        console.log("Error");
    } else {
        console.log(result);
    }
}

fetchData();