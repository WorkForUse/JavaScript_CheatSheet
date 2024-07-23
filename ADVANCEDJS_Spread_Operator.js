// function sum(name,...restValue){
//     console.log(restValue);

//     document.write(`Hello ${name} : `);

//     let sum = 0;
//     for(let i in restValue){
//         sum += restValue[i];
//     }

//     document.write(sum);
// }
// sum("Jack",10,20,30)

// function sum(name,...restValue){
//     console.log(restValue);

//     document.write(`Hello ${name} : `);

//     let sum = 0;
//     for(let i in restValue){
//         sum += restValue[i];
//     }

//     document.write(sum);
// }
// var arr = [10,20,30];
// sum("Jack", ...arr)

// var arr = [10,20,30,40];
// var arr2 = arr;
// var arr2 = [...arr]; // spread operator
// arr.push(90);
// console.log(arr2);
// console.log(...arr);
// console.log([...arr]);
// console.log(arr);

// simple concatination in js with concat method
// var arr1 = [10,20,30];
// var arr2 = [40,50];
// var arr3 = arr1.concat(arr2);
// work with spread operator
// var arr3 = [5,...arr1,...arr2,47];
// var arr3 = [...arr1,...arr2];
// console.log(arr3);

// working with object Spread Operator

// var obj1 = {
//     name : "Bing",
//     course : "Data-Science",
// };
// var obj2 = {
//     age : 25
// };
// var obj3 = {
//     city : "Kolachi"
// };
// var obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);