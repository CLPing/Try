//
// const windowInfo=new Object();
// windowInfo.width=function(){
//     return 1200;
// };
// windowInfo.height=function(){
//     return 800;
// };
// windowInfo.x=function(){
//     return 0;
// };
// windowInfo.y=function(){
//     return 0;
// };
// module.export=windowInfo;
class windInfo{
    constructor (){
        this.width=1080;
        this.height=3840;
    }
    static ss(){
        return "q23423";
    }
    getWidth(){
        return this.width;
    }

}

class wind extends windInfo{
    constructor(){
        super();
        this.x=0;
        this.y=0;
    }
}
let test1=new windInfo();
let test2=new wind();

//console.log("wind static="+wind.ss());
//console.log("wind x="+test2.getWidth());
//console.log(test1.height);
//console.log(windInfo.ss());
//console.log(test1.getWidth());

const map=new Map();
map.set("a",213);
map.set("b",214);
//console.log(map.get("a"));
for(let i of map.keys()){
//console.log(i);
}
for(let i of map.values()){
//console.log(i);
}

//String to array
 var a1=Array.from("asb");
 //console.log(a1);


 var a3=Array.from({length: 5}, (v, k) => k);
 //console.log(a3);


/*
let const var
*/
const obj1={
a:1,
b:2
};
const obj2={
a:3,
b:4
}


 for(var s of a3){
    var a=1;
    let b=2;
    const c=2;

 };

 if(true){
 var c=1;
 let d=2;
 const e=2;
 }else {

 }



// console.log(a);
// console.log(b);
// console.log(c);

console.log(new Date("Mon Aug 22 2016 18:20:21 GMT+0800 (CST)").getValue());