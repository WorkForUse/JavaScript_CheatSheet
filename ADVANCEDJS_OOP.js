// class hello{
//     message(){
//         console.log("Hello Everyone");
//     }
//     work(){
//         console.log("Road Runner");
//     }
// }
// const a = new hello();
// a.message();
// a.work();

// class student{
//     constructor(){
//         console.log("COnstructor work good")
//     }
// }
// let a = new student();

// class student{
//     constructor(name){
//         this.stname = name;
//         console.log("COnstructor work good")
//     }
//     hello(){
//         console.log("Hello " + this.stname);
//     }
// }
// // let a = new student();
// // a.name = "Marshall";
// let a = new student("Yahoo baba");
// a.hello();

class student{
    constructor(name,age){
        this.stname = name;
        this.stage = age;
        console.log("COnstructor work good")
    }
    hello(){
        // console.log("Hello " + this.stname + "You age is " + this.stage);
        // console.log(`Hello ${this.stname} Your age is ${this.stage}`);
        document.write(`Hello ${this.stname} Your age is ${this.stage}`);
    }
    static staticmethod(){
        console.log("Static function work good")
    }
}
// let a = new student();
// a.name = "Marshall";
let a = new student("Yahoo baba",25);
let b = new student("Xynus",22);
a.hello();
b.hello();
student.staticmethod();