// Destructering array ===================

// let user = ["VOlks Wagen",25,"Kolachi"];

// let [name,age,city] = user;
// console.log(user);

// let user = ["VOlks Wagen", ,"Kolachi"];

// let [name,age = 15,city] = user;
// console.log(name);
// console.log(age);
// console.log(city);

// work with nested array 

// let user = ["VOlks Wagen", 22,"Kolachi",["Male",25000]];

// let [namE,age = 20, city , [gender,salary]] = user;

// console.log(namE);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);

// let user = ["VOlks Wagen", 22,"Kolachi"];

// let [namE,...restValue] = user;

// console.log(namE);
// console.log(restValue);

// ====== use destructering array with rest operator

// function user ([namE,age = 20,city]){
//     console.log(namE);
//     console.log(age);    
//     console.log(city);    
// }

// user(["Jack",22,"Kolachi"]);

// function user(){
//     return ["Yahoo",22,"Kolachi"]
// }

// let [name,age,city] = user();
// console.log(name);
// console.log(age);
// console.log(city);

//  Destructuring Object ================

// let user = {
//     name : "Jack",
//     age : 25,
//     city : "UnknownTown"
// }
// let {name,age,city} = user;
// console.log(name);
// console.log(age);
// console.log(city);

let user = {
    name : "Jack",
    age : 25,
    city : "UnknownTown"
}
let {name : n,age : a,city : ct} = user;
console.log(n);
console.log(a);
console.log(ct);