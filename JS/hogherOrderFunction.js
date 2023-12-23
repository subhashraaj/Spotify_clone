//Basic Function calling;

function callMe(a,b){
    return (a+b);
}

console.log(callMe(10,20));
console.log(callMe(10,-9));

let result=callMe(10,80);
console.log(result);

//Function expression

let callme=function x(){
    console.log("inside the function")
    return 10;
}
console.log(typeof callme);
    


//a function which calls or return another function is called higher order function.
function add(a){
    console.log("addition");
    a();
}
add(() =>{
    console.log("inside the function")
})
//Where as a id the callback function.
//And add is the higher order function.

//forEach Method
let arr=[10,20,30,10,40];

arr.forEach(() => {
    console.log("inside the function")
});


let arr1=[10,20];
arr1.forEach((element, index, list)=>{
    console.log(element, index, list);
    console.log("inside the function")
})


//Map methodfunction
//return another array with the sane length of original array
 let r1=arr.map(function(element,index,list){
    return element*index;
 });

 console.log(r1);
 //construct another array  of same length of even number should be doubled and odd number should be tripled.
 let arr2=[2,3,8,9]
 let r2= arr2.map((element)=>{
    return element%2==0 ? element*2 : element*3;
   
 });
 console.log(r2);


 //Filter Method
//it filters the element in the array
let r3=arr2.filter(e=>e%2==0);
console.log(r3);


