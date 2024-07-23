// Example One
// If we use var like this 
// a = 10;
// console.log(a);
// with strict mode
// "use strict"
// ❌ syntax 
// b = 10;
// console.log(b);
// ✔ Syntax 
// var b = 10;
// console.log(b);
// with function
// var a = 10;
// function test(){
//     b = 20;
// }
// test();
// what happened if we use strict in function { strict }
// now only b ka error ayega
//  a = 10;
// function test(){
//     "use strict"
//     b = 20;
// }
// test();
// WIth Parametter =======================
// ❌ syntax work krjaega liken jab strict mode lagay ga to error ayega yeah wala syntax
// function test(a,b,b){
//     console.log(a+b+b);
// }
// test(10,20,30);
"use strict";
// after strict this error show Duplicate parameter name not allowed let's correct this
// function test(a,b,b){
//     console.log(a+b+b);
// }
// test(10,20,30);
// function test(a,b,c){
//     console.log(a+b+c);
// }
// test(10,20,30);