// Old MEthod

// let name = "Alex";
// let course = "Btech";

// var obj = {
//     name : name,
//     course : course,
// }
// console.log(obj);

// new method

// let name = "Alex";
// let course = "Btech";

// var obj = {
//     name,
//     course,
// }
// console.log(obj);

// use as a property 

// let n = "name";

// var obj = {
//     [n] : "Alex",
//     course : "Btech",
// }
// // console.log(obj);
// console.log(obj.name);

// use with arithmetic operator

// let n = "student";

// var obj = {
//     [n + "name"] : "Alex",
//     course : "Btech",
// }
// console.log(obj);

// let n = "student";

// var obj = {
//     [n + "name"] : "Alex",
//     course : "Btech",
//     detail : function(){
//         return `${this.studentname} is student of ${this.course}`
//     }
// }
// console.log(obj);
// console.log(obj.detail());


// let n = "student";

// var obj = {
//     [n + "name"] : "Alex",
//     course : "Btech",
//     // detail(){
//     'detail show'(){
//         return `${this.studentname} is student of ${this.course}`
//     }
// }
// console.log(obj);
// console.log(obj['detail']()); // new method ES6
// console.log(obj['detail show']()); // new method ES6
// console.log(obj.detail());

// value return as a object ============

let fname = "Jack";
let lname = "Maroon";
let course = "Btech";
function student(fname,Lname,course){
    let flName = fname + " " + Lname;
    return {flName,course};
}
// console.log(student(name1,course1));
let s = student(fname,lname,course)
console.log(s.flName);
console.log(s.course);