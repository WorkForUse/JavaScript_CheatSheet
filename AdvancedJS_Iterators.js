// // let numbers = [100,200,300];

// console.log(typeof numbers[Symbol.iterator]);

// // let iter = numbers[Symbol.iterator]();

// console.log(iter);
// ========================
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// ----------

// // iter.next();
// // iter.next();
// // console.log(iter.next().value);

// jaisay hi done ki value true hojae gi hum phir loop ko close bnd krsaktay hai jab tak false hai chalta rhay ga

// // console.log(iter.next().done);

// ============================================ 

// let numbers = [100,200,300,400,500];
// let iter = numbers[Symbol.iterator]();
// let result = iter.next();
// while(!result.done){
//     console.log(result.value);
//     result = iter.next();
// }

// ========= Work With String

// let Str = "Jackson Ville";
// let iter = Str[Symbol.iterator]();
// let result = iter.next();
// while(!result.done){
//     console.log(result.value);
//     result = iter.next();
// }

// Work with for of loop =========

// let str = "florida Well";
// for(let charac of str){
//     console.log(charac);
// }

// Created Own Iterators Method tutorial ========

function numberIteratorFunc(arr){
    var nextNum = 0;
    return {
        next(){
            if(nextNum < arr.length){
                return{
                    value : arr[nextNum++],
                    done : false
                }
            }else{
                return{
                    done : true
                }
            }
            
        }
    }
}

let nbr = [100,200,300,400,500];
let num = numberIteratorFunc(nbr);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

// jis ki value ko nhi print krna usko bss concole nhi krwana like this 
// console.log(num.next());
// num.next();
// num.next();
// num.next();
// num.next();
// console.log(num.next());
// ab yeah 4 nhi print hongay