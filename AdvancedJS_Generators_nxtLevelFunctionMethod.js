// Normal FUncion 

// function myfunc(){
//     console.log("Hello");
//     console.log("Hello2");
// }
// myfunc();

// Now Change Into Generator Function  ===============

// function* myfunc(){ <- 1st method
// // function *myfunc(){
// //    console.log("Hello");
// //     console.log("Hello2");
// // }
// // let g = myfunc();
// console.log(g);
// // console.log(g.next());

// =================== for the line control method we use this steps ============
// function *generatormyFunction(){
//     console.log('Fist Msg');
//     yield 'This is use for line control ▶ Message No One';
//     console.log('Second Msg')
//     yield 'This is use for line control ▶ Message No Two';
// }
// let gfunc = generatormyFunction();

// work with loop
// for(let value of gfunc){
//     console.log(value);
// }

// console.log(gfunc.next());
// console.log(gfunc.next());
// console.log(gfunc.next());
// console.log(gfunc.next().value);

// with different way ========================
// function *generateFunc(){
//     let nextNum = 300;
//     while(true){
//         yield(nextNum++);
//     }
// }
// let g = generateFunc();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

// =================================== 

// function *generateFunc(){
//     let nextNum = 300;
//     while(true){
//         yield(nextNum++);
//     }
// }
// let g = generateFunc();
// for(let vl of g){
//     if(vl > 311) break;
//     console.log(vl);
// }

// =================== different way ============ 

// function *generateFunc(){
//     let yArr = [yield,yield,yield];
    // console.log(`Result : ${yArr}`);
    // for the specific see use this
//     console.log(`Result : ${yArr[2]}`);
// }
// we can also use string 
// let g = generateFunc();
// g.next();
// g.next(500);
// g.next(600);
// g.next(700);

// ================================= 

// function* generateFunc(){
//     yield 55;
//     yield ['Node','Angular','React'];
// }
// let g = generateFunc();
// console.log(g.next());
// console.log(g.next());

// ============ Agar  aap ko values separetes krni hai to yeah methods use kro just * laga dayna hai yeild pr aur next aur utni baar use krdayna hai jitni values ho

// function* generateFunc(){
//     yield 55;
//     yield* ['Node','Angular','React'];
// }
// let g = generateFunc();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// ======================= With Spread Operator


// function* generateFunc(){
//     yield 'PortsGre';
//     yield 'SQL';
//     yield 'SQLLite';
//     yield 'MysQl';
// }
// let g = generateFunc();
// console.log(g.next());
// console.log([...g])

// function* generateFunc(){
//     yield 'PortsGre';
//     yield 'SQL';
//     yield 'SQLLite';
//     yield 'MysQl';
// }
// let g = generateFunc();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log([...g])

// With Return Method =====================>
//return may agay waali statement work krna stop hojae gi
// function* generateFunc(){
//     yield 'PortsGre';
//     yield 'SQL';
//     return;
//     yield 'SQLLite';
//     yield 'MysQl';
// }
// let g = generateFunc();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.return());