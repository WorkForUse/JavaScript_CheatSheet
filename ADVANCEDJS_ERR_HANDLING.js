// try catch work synchronus we can not use setTimeout in try catch
// Aap Set Timeout kay andar try catch use krsaktay ho
// try{
//     console.log('Start of Try');
//     gfhfghfgh;
//     console.log('End of Try');
// }catch{
//     console.log('Error has occured');
// }

// 2nd Method

// try{
//     console.log('Start of Try');
//     gfhfghfgh;
//     console.log('End of Try');
// }catch(err){
//     console.log(err);
// }

// with setTimeout
// try {
//     setTimeout(function(){
//         bfdlkgjfd;
//     },1000)
// } catch (error) {
//     console.log(error);
// }

// use try Catch in setTimeout===========
// setTimeout(() => {
//     try {
//         fsdfkljsd;
//     } catch (error) {
//         console.log('Error........');
//     }
// }, 1000);

// ============== 
// try {
//     badlafsdj;
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// Errors ki Exercises==========================

// try {
//     sfsdfsd;
// } catch (error) {
//     if(error instanceof ReferenceError){
//         console.log('RefrenceError');
//     }else if(error instanceof TypeError){
//         console.log('TypeError');
//     }else{
//         console.log('Unknown Error');
//     }
// }

// Use Try Catch Use with JSON {}
// json.parse json ko object may convert krta hai
// json.stringrify yeah object ko json may convert krta hai
// try {
//     let json = '{ "name":"Hello Khatak","age":21}';
//     let user = JSON.parse(json);
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error);
// }

// here humnay apna own error banaya=========

// try {
//     let json = '{ "":"Hello Khatak","age":21}';
//     let user = JSON.parse(json);

//     if(!user.name){
//         throw new Error("Incomplete data : no name");
//     }

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error);
// }


// WORK with Finally ======================


try {
    let json = '{ "name":"Hello Khatak","age":21}';
    let user = JSON.parse(json);

    if(!user.name){
        throw new Error("Incomplete data : no name");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error);
}finally{
    console.log("Yeah Always chalayga")
}