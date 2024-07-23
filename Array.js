// var  arr = [10,20,30,40,50];
// document.write(arr);

// var a = new Array(10,20,30);
// document.write(a);

// multidimensional array

// var arr = [
//     [1,2,3,4,5,6,7,8,9],
//     [10,11,12,13,14,15],
//     [16,17,18,19,20,21],
//     [22,23,24,25,26,27],
//     [28,29,30,31,32,33],
// ]

// var arr = [
//     ["Harry",18,"male","B.com"],
//     ["Barry",21,"Female","C.com"],
//     ["Cherry",32,"male","D.com"],
//     ["Derry",46,"Female","E.com"],
// ];

// document.write(arr);
// with for loop
// for(let i = 0; i < 5; i++){
//     document.write(arr[i] + "<br>");
// }
// for(let i = 0; i < 4; i++){
//     document.write(arr[i] + "<br>");
// }

// work with nested loop with array
// for(var a = 0; a < 4; a++){
//     for (let b = 0; b < arr.length; b++) {
//         document.write(arr[a][b] + " ");        
//     }
//         document.write("<br>");
// }

// Js Modify & Delete Array

// array modify method 

// var arr = ["Jack","Bcom","VirtualCity"];
// arr[1] = "Dcom";
// document.write(arr);

// array delete method

// var arr = ["Jack","Bcom","VirtualCity"];
// delete arr[1]
// document.write(arr);

// Array Sort & Reverse

// var a = ["San","Ama","Rehman","Kar"];
// a.sort();
// document.write(a + "<br>");

// var a = ["San","Ama","Rehman","Kar"];
// a.reverse();
// document.write(a + "<br>");

// Array Pop & Push

// pop last waali value ko delete krdayta hai 
// var a = ["San","Ama","Rehman","Kar"];
// a.pop();
// document.write(a + "<br>");

// push last may new value add kardayta hai 
// var a = ["San","Ama","Rehman","Kar"];
// a.push("Alexiss");
// a.push("Maxwell","brandon","ThreeDotsKhan");
// document.write(a + "<br>");

// Array Shift & Unshift
// shift jo hai wo start may say remove krti hai
// unshift jo hai wo start may say add krti hai new value

// var a = ["Saa","Ray","Salman","Gooodwin"];
// a.shift();
// a.unshift("Onum");
// document.write(a+"<br>");

// Array Concat & Join

// concat merge krnay may kaam ata hai 2 strings ko 

// var a = ["Sallu","Manga","Concast","Delores"];
// var b = a.concat("Raess","Jack","ContactKhan");
// document.write(b);

// var a = ["Sallu","Manga","Concast","Delores"];
// var b = new Array("Raess","Jack","ContactKhan");
// var c = a.concat(b);
// document.write(c);

// var a = ["Sallu","Manga","Concast","Delores"];
// var b = new Array("Raess","Jack","ContactKhan");
// var d = ["Mobilekahn","Dotkey"];
// var c = a.concat(b,d);
// document.write(c);

// Join islye use hota hai kay array ki jitni bhi values hai un sb ko milla kr aik value bana dayta hai

// var a = ["Dot","Hash","Tag","Comma"];
// var b = a.join("///");
// document.write(b);

// -----right pattern ✅----
// var b = ["Play","Button","Bold"];
// c = b.join("~");
// document.write(c);
// -----------------

// Wrong pattern ❌ --------
// b.join("~!");
// document.write(b);
// ---------- ❌

// Array Slice & Splice

// slice(start,end)
// for example slice(1,2);
// yeah aap ko new array dayta hai // jo last waali value daalo gay wo nhi aye like uppr jaisay 2 daali hai us say pehlay waali value ayegi
// agar aap sirf(start)
// for example sirf start waali value daaltay hotu jaahn tk aap nay start wahan say new array ayega
// for example 

// var a = ["Aman","Rehman","Jaysoorya","MonikA","Farooq"];
// var b = a.slice(1);
// document.write(b);

// var a = ["a","b","c","d","e","f","g"];
// var b = a.slice(1,3);
// document.write(b);

          // -7  -6  -5  -4  -3  -2  -1
// var a = ["a","b","c","d","e","f","g"];
// var b = a.slice(-5,-1);
// document.write(b);
// output -> c,d,e,f

// aray splice say aap value add krsaktay ho
// splice(index,howmany,"new value",Delete)

// var a = ["Sam","Hulk","DollarCook","CookerView"];
        // index,howmany wants delete,"new value"
// a.splice(2,0,"Neha","Ana");
// document.write(a);
        // 0     1        2             3
// var a = ["Sam","Hulk","DollarCook","CookerView"];
            // 2        after that two 3 add
// a.splice(2,0,"Neha","Ana",3);
// document.write(a);

// var a = ["Sam","Hulk","DollarCook","CookerView"];
// a.splice(1,2,"Jackson","Ville");
// document.write(a);

// var a = ["Sam","Hulk","DollarCook","CookerView"];
//      index,delete <- howmany
// a.splice(0,2);
// document.write(a);

//             0       1       2             3
//            -4      -3      -2            -1
// var a = ["Sam","Hulk","DollarCook","CookerView"];
//      index,delete <- howmany
// a.splice(-2,2,"BookView","Azone");
// document.write(a);

// isArray Method of Array
// just this method is checker
// is say pata lgta hai kay value array hai kay nhi

// for example
// var a = [1,2,3,4,];
// var a = "sam";
// if(Array.isArray(a)){
//     document.write("This is an Array");
// }else{
//     document.write("This is not an array");
// }

// var a = ["S","Splus","Dot","Tag"];
// var a = 23;
// var b = Array.isArray(a)
// document.write(b + "<br>");

// Array indexOf & lastIndexOf

// indexOf("Search item", Start)
// var arr = ["GO","Julie","AutoCad","Photoshop","Illustrator","Dreamviewer","Lodash"];
// var b = arr.indexOf("Photoshop",2);
// document.write(b);

// lastIndexOf() same work bs last say start hoga
// var a = ["a","b","c","d","e","f","g","h"];
// var c = a.lastIndexOf("b");
// var c = a.lastIndexOf("b",4);
// document.write(c);

// Array Includes METHODS
// includes("Search item") <- syntax 
// for the searching use hota hai
// return may true return krayga agar value find hojae
// else false return krega agar value find nhi hoti

// var a = ["Sam","Kello","Riot","Dash"];
// var b = a.includes("Riot");
// document.write(b);

// Array Some & Every Methods
// some(this will always return true or false same as includes)

// function checkAdult(agE){
//    return agE >= 18;
// }

// one value ko check krta hai yeah
// var ages = [10,13,18,20];
// var b = ages.some(checkAdult); // <- functions checkAdult
// document.write(b);

// yeah hr value ko check krega
// function checkAdult(agE){
//    return agE >= 18;
// }

// var ages = [21,19,18,20];
// var b = ages.every(checkAdult); // <- functions checkAdult
// document.write(b);

// Array find & findIndex

// array find specific value ko sirf check krta hai 
// work same as some() but yeah specific value ko sirf check krta hai syntax -> find(FunctionName)

// var ages = [10,23,19,20];
// var b = ages.find(checkAdultValue);

// function checkAdultValue(aGe){
//         return aGe >= 19;
// }
// document.write(b);
// result 23 aya

// findIndex work same as find but yeah index return krta hai 

// var ages = [10,23,19,20];
// var b = ages.findIndex(checkAdultValue);

// function checkAdultValue(aGe){
//         return aGe >= 19;
// }
// document.write(b);
// result 1 aya 

// Array Filter Method()
// yeah hamay wo value return krega jo valid ho
// example ages >= 18 to array may hai 10,23,9,20
// to yeah hamay 23 20 return krega
// filter(functionName) <- synxtax

// var age = [10,12,19,20];
// var b = age.filter(filterkrdo);
// function filterkrdo(checkkaro){
//         return checkkaro >= 18;
// }
// document.write(b);

// Array toString, valueOf & fill Methods

// toString() this is work for array to string

// var a = ["RasoolKhan","Manga","Jack"];
// a.toString();
// document.write(a);

// valueOf() return yeah bilkul array ki value return krta hai this is default function

// var a = [1,2,3,4,5];
// document.write(a.valueOf());

// fill() agar aap same value use krna chahtay ho like static 
// for example
// var a = [1,2,3,4,5,6];
// a.fill("MongooseDa");
// document.write(a);

// return output iska yeah aya 
// MongooseDa,MongooseDa,MongooseDa,MongooseDa,MongooseDa,MongooseDa

// forEach Loop
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

// Const Variable with Array
// const a =["Altamash","Almas"];
// a[0] = "Alpha";
// document.write(a);

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

