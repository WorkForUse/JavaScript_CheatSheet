// you can make aray in objects and functions we can add for the function hum use krega permenant this keyword aur aap aik object may aur objects bhi bana saktay ho

// var a = {
//     fname : "Jack",
//     lname : "Oggy",
//     age : 23,
//     email : "zxy@gmail.com",
//     faxMovies : ['Dishom',"Punch","K"],
//     living : {
//         'city' : "karachi",
//         'country' : "Pakistan"
//     },
//     salary : function(){
//         return "25k";
//     },
//     fullname : function(){
//         return this.fname + " " + this.lname;
//     }
// }
// document.write(a.fullname());
// document.write(a.living.country);
// document.write(a.living.country,"<br>",a.living.city);
// document.write(a.salary())

// document.write(a);
// console.log(a);
// document.write(a.faxMovies);
// document.write(a.faxMovies[2]);

// 2nd method of Objects
// var person = new Object();

// person.firstName = 'Mr';
// person.lastname = 'Dot';
// person.country = "Italy";

// document.write(person.country);
// document.write(person['country']);

// Array of Objects
// var student = [
//     {
//         name : "Sam",
//         age : 23,
//     },
//     {
//         name : "Ralph",
//         age : 43,
//     },
//     {
//         name : "Ada",
//         age : 32,
//     }
// ];

// console.log(student);
// for(var i = 0; i < student.length; i++){
//     document.write(student[i].name + "<br>");
// }

// Const Variable  Objects

// const a = {
//     name : "Alpha",
//     age : 25
// };

// a.age = 23;
// document.write(a.name);

// for in loop use must for objects normaly

// var obj = {
//         fname : "Ada",
//         lname : "Jack",
//         age : 23,
// };

// for(let k in obj){
        // document.write(obj[k] + "<br>");
        // document.write(k + "~" + obj[k] + "<br>");
// }

// array map function method 

// var arr = [11,4,9,16];
// var arr = [
//         {f : "hash", alter : "Lodash"},
//         {f : "tag", alter : "Server"},
//         {f : "ONE", alter : "side"},
// ]

// var b = arr.map(testwork);

//   document.write(b);
//   function testwork(val){
        // return val * 10;
        // return val.f;
//         return val.f + "<br>" + val.alter;
//   }