"use strict";
// let myPromise = new Promise((resolve, reject) => {
//     console.log("Promise Pending")
//     setTimeout(() => {
//         resolve("Promise Success");
//     }, 2000);
// });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        let url = "https://jsonplaeholder.typicode.com/todos/1";
        console.log("Fetching data...");
        // Fetch the data directly without any artificial delay
        let fetchData = yield fetch(url);
        let result = yield fetchData.json();
        // Check result
        if (result === undefined) {
            console.log("Error");
        }
        else {
            console.log(result);
        }
    });
}
fetchData();
