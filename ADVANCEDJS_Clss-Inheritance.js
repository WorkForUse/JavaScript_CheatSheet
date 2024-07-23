// class emp{
//     constructor(name){
//         console.log("Contstructor : Employee" + name);
//     }
// }

// class manager extends emp{
//     constructor(name){
//         super();
//         console.log("Contstructor : Manager" + name);
//     }
// }

// let a = new manager("Yahoo Baba");

// class emp{
//     constructor(name){
//         this.employee = name;
//         console.log("Contstructor : Employee" + name);
//     }
//     info(){
//         console.log("Employee Name : " + this.employee);
//     }
// }

// class manager extends emp{
    
// }

// let a = new manager("Yahoo Baba");

// a.info();


// class emp{
//     constructor(name){
//         this.employee = name;
//         console.log("Contstructor : Employee" + name);
//     }
//     info(){
//         console.log("Employee Name : " + this.employee);
//     }
// }

// class manager extends emp{
// info(){
//     console.log("Manager Name : " + this.employee);
// }
// }

// let a = new manager("Yahoo Baba");

// a.info();


// class emp{
//     constructor(name){
//         this.employee = name;
//         console.log("Contstructor : Employee" + name);
//     }
//     info(){
//         console.log("Employee Name : " + this.employee);
//     }
// }

// class manager extends emp{
// info(){
//     super.info();
//     console.log("Manager Name : " + this.employee);
// }
// }

// let a = new manager("Yahoo Baba");

// a.info();


// class emp{
//     constructor(name){
//         this.employee = name;
//         console.log("Contstructor : Employee" + name);
//     }
//     info(){
//         console.log("Employee Name : " + this.employee);
//     }
// }

// class manager extends emp{
// info(){
//     console.log("Manager Name : " + this.employee);
//     super.info();
// }
// }

// let a = new manager("Yahoo Baba");

// a.info();


// class emp{
//     constructor(name,age,salary){
//         this.employee = name;
//         this.employeeAge = age;
//         this.employeeSalary = salary;
//         console.log("Contstructor : Employee" + name);
//     }
//     info(){
//         document.write(`<h3>Employee Class</h3>
//                         Name : ${this.employee} <br>
//                         Age : ${this.employeeAge} <br>
//                         Salary : ${this.employeeSalary}`);
//     }
// }

// class manager extends emp{
// // info(){
// //     console.log("Manager Name : " + this.employee);
// //     super.info();
// // }
// }

// let a = new manager("Yahoo Baba",25,200000);

// a.info();


// class emp{
//     constructor(name,age,salary){
//         this.employee = name;
//         this.employeeAge = age;
//         this.employeeSalary = salary;
//         console.log("Contstructor : Employee" + name);
//     }
//     info(){
//         document.write(`<h3>Employee Class</h3>
//                         Name : ${this.employee} <br>
//                         Age : ${this.employeeAge} <br>
//                         Salary : ${this.employeeSalary}`);
//     }
// }

// class manager extends emp{
// // info(){
// //     console.log("Manager Name : " + this.employee);
// //     super.info();
// // }
// }

// let a = new manager("Yahoo Baba",25,200000);

// a.info();


class emp{
    constructor(name,age,salary){
        this.employee = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
        console.log("Contstructor : Employee" + name);
    }
    info(){
        document.write(`<h3>Employee Class</h3>
                        Name : ${this.employee} <br>
                        Age : ${this.employeeAge} <br>
                        Salary : ${this.employeeSalary}`);
    }
}

class manager extends emp{

    info(){

        let ta = 10000;
        let pa = 300;
        let totalSalary = this.employeeSalary + ta + pa;

        document.write(`<h3>Manager Class</h3>
                        Name : ${this.employee} <br>
                        Age : ${this.employeeAge} <br>
                        Salary : ${totalSalary}`);
    }
}

class test extends manager{
    
}

let a = new manager("Yahoo Baba",25,200000);
// let b = new emp("Babazzzz",215,200011100);

a.info();
// b.info();