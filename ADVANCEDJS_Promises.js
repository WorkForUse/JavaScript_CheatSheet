// let complete = true;
// let complete = false;

// let prom = new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am successfull");
//     }else{
//         reject("I am failed");
//     }
// });

// function prom(complete){
//    return new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am successfull");
//     }else{
//         reject("I am failed");
//     }
// }); 
// }

// // console.log(prom(true));
// console.log(prom(false));


// function prom(complete){
//    return new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am successfull");
//     }else{
//         reject("I am failed");
//     }
// }); 
// }

// let onfullfilment = (result) => {
//     console.log(result);
// }

// let onRejection = (failedError) => {
//     console.log(failedError);
// }

// prom(true).then(onfullfilment);
// prom(false).catch(onRejection);



// function prom(complete){
//    return new Promise(function(resolve,reject){
//     console.log("Fetching Data Please Wait...");
//     setTimeout(() => {
//         if(complete){
//             resolve("I am successfull");
//         }else{
//             reject("I am failed");
//         }
//     // }, 1000);
//     }, 3000);
// }); 
// }

// let onfullfilment = (result) => {
//     console.log(result);
// }

// let onRejection = (failedError) => {
//     console.log(failedError);
// }

// // prom(true).then(onfullfilment);
// // prom(false).catch(onRejection);
// // prom(true).then(onfullfilment);
// // prom(true).catch(onRejection);
// // prom(false).then(onfullfilment);
// // prom(false).catch(onRejection);
// prom(false).then(onfullfilment).catch(onRejection);

// function prom(complete){
// function prom(a,b){
//    return new Promise(function(resolve,reject){
//     console.log("Fetching Data Please Wait...");
//     var c = a / b;
//     setTimeout(() => {
        // if(complete){
        // if(c){
        // if(a,b){
            // resolve("I am successfull");
            // resolve(`Your answer : ${c}`);
        // }else{
            // reject("I am failed");
            // reject("Failed to Calculate");
        // }
    // }, 1000);
    // }, 3000);
//     }, 2000);
// }); 
// }

// prom(false).then((result) => {
//     console.log(result);
// }).catch((failedError) => {
//     console.log(failedError);
// });

// prom(true).then((result) => {
// prom(5,2).then((result) => {
// prom(5,0).then((result) => {
//     console.log(result);
// }).catch((failedError) => {
//     console.log(failedError);
// });

/////////////////// PROMISES . ALL /////////////////////

// let p1 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("The first promises work");
//         resolve(10);
//     },1 * 1000);
// })
// let p2 = new Promise((resolve,reject) => {
    //     setTimeout(()=>{
        //         // console.log("The Second promises work");
//         console.log("The Second promises failed");
//         // resolve(20);
//         reject("Failed");
//     },2 * 1000);
// })
// let p3 = new Promise((resolve,reject) => {
    //     setTimeout(()=>{
        //         console.log("The Third promises work");
        //         resolve(30);
        //     },3 * 1000);
        // })
        

let promiseCall = function(returnData,message) {
    return function(resolve,reject){
        setTimeout(()=>{
            console.log(`The ${message} promise has resolved`);
            resolve(returnData);
        },returnData * 100);
    }
};
        
let p1 = new Promise(promiseCall(10,"first"));
let p2 = new Promise(promiseCall(20,"Second"));
let p3 = new Promise(promiseCall(30,"third"));
let p4 = new Promise(function(resolve,reject){
    reject("THe 4th one Reject");
})

var total = 0;
Promise.all([p1,p2,p3]).then((result) => {

    for(var i in result) {
        total += result[i]
    }

    console.log(`Results: ${result}`);
    console.log(`Total: ${total}`);
}).catch((error) => {
    console.log(`Error : ${error}`);
})