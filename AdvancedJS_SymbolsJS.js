// symbol use in document 

// let id = Symbol("Hello");
// console.log(id);
// alert(id.toString());

// normal exercise =============

// let id1 = Symbol("Hello");
// let id2 = Symbol("Hello");
// console.log(id1 == id2);

// let str1 = Symbol("Hello DashDot");
// let str2 = Symbol("Hello DashDot");
// console.log(str1 == str2);

// work with object ==========>

// let age = Symbol();
// let user = {
//     name: 'Ya Wo',
//     class : 'Btech',
//     [age] : 25
// };
// console.log(user);

// let age = Symbol("age");
// let user = {
//     name: 'Ya Wo',
//     class : 'Btech',
//     [age] : 25
// };
// console.log(user);

// let age = Symbol("age");
// let user = {
//     name: 'Ya Wo',
//     class : 'Btech',
// };
// user[age] = 25;
// console.log(user);
// // for the symbol use we use this => 
// console.log(user[age]);

// ========= work with loop ========== 
// Symbol ko for loop may use nhi krsaktay 

// let age = Symbol("age");
// let user = {
//     name: 'Ya Wo',
//     class : 'Btech',
// };
// user[age] = 25;
// for(let key in user){
//     console.log(key);
// }


// ============== with json 


// let age = Symbol("age");
// let user = {
//     name: 'Ya Wo',
//     class : 'Btech',
// };
// user[age] = 25;
// console.log(user);
// console.log(JSON.stringify(user));