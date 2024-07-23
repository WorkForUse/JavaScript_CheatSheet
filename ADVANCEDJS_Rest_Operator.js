// Normal function with multiple arguments
// function sum(){
//     console.log(arguments);

//     let sum = 0;
//     for(let i in arguments){
//         sum += arguments[i];
//     }
//     document.write(sum + "<br>");
// }
// sum(20,30,90);
// sum(35,45);

// working with rest operator

// function sum(name,living, ...pilss){
//     console.log(arguments);

//     document.write(`${name} + ${living}`);

//     let sum = 0;
//     for(let i in pilss){
//         sum += pilss[i];
//     }
//     document.write(sum + "<br>");
// }
// sum(20,30,90);
// sum("Alex Martin","Shoshone",20,30,90);
// sum(35,45);

// exercise
// const spce = (name,lastname,...work) =>{

//     document.write(name);
//     document.write(lastname);

//     let values = 10;
//     for(let i in work){
//         values -= work[i];
//     }
//     document.write(work + "<br>");
// }
// spce(20,50,205);
// spce("Wade","Barret",20,3,77);