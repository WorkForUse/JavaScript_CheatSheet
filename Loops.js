// While loop 

// var a = 1;
// while (a <= 10) {
//     document.write("Hello Everyone<br>");
//     a++;
// }

// let i = 0;
// while (i < 10) {
//     document.write(i+"<br>");
//     i++;
// }

// Do While Loop

// var a = 1;
// do{
//     document.write("Hello Everyone<br>");
//     a++;
// }while (a <= 10)

// let i = 0;
// do{
//     document.write(i+"<br>");
//     i++;
// }while (i < 10)

// For Loop 

// for(let i = 10; i > 0; i--){
//     document.write(i+"<br>");
// }

// for(let i = 0; i < 10; i++){
//     document.write(i+"<br>");
// }

// use for loop with break and continue
// continue say agay ki statement nhi ayegi
// break say agay ki saari statement nhi ayegi
// yeah dono sirf loop kay lye hi work krtay hai 

// for(let i = 0; i < 10; i++){
//     if(i == 3){
//         document.write("Lumber 3"+"<br>");
//         // continue;
//         // break;
//     }
//     document.write(i+"<br>");
// }

// Find Even & Odd Numbers with Loops

// for the even we use this statement 👇

// for(let i = 0; i < 100; i++){
//     if(i % 2 == 0){
//         document.write(i + "<br>");
//     }
// }

// for the Odd we use this statement 👇

// for(let i = 0; i < 100; i++){
//     if(i % 2 != 0){
//         document.write(i + "<br>");
//     }
// }

// Nested Loop

// for(let i = 1; i <= 100; i = i + 10){
//     for(let j = i; j < i+10; j = j + 1){
//         document.write(j +" ");
//     }
//     document.write("<br>");
// }

// for(let i = 1; i <= 5; i++){
//     for(let v = 1; v <= i; v++){
//         document.write(v + " ");
//     }
//     document.write("<br>");
// }

// for(let a = 1; a <= 5; a++){
//     for(let b = 1; b <= a; b++){
//         document.write(a + " ");
//     }
//     document.write("<br>");
// }

// for(let a = 10; a >= 0; a--){
//     for(let b = 10; b >= a; b--){
//         document.write(a + " ");
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }

// for(let a = 10; a >= 1; a--){
//     for(let b = 1; b <= a; b++){
//         document.write(a + " ");
//     }
//     document.write("<br>");
// }

// // forEach Loop
// foreach work same as for loop but yeah function kay torr pr work hota hai with array 
// syntax a.forEach(function{
        // statement;
// })

// var a = [1,2,3,4,5,6,7,8,9,10];
// var a = ["a","c","Vw"];
// a.forEach(function(value,index){
//         // document.write(value + "<br>");
//         document.write(index + value + "<br>");
// })

// 2nd method of using for Each

// var a = [1,2,3,4,5,6,7];
// a.forEach(loopUSes);
// function loopUSes(index,value){
//         document.write("yeah values hai " + value + " ");
//         document.write("<br>");
//         document.write("yeah indexes hai " + index + " ");
// }

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