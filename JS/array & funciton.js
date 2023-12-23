//FUNCTION
function greet(){
    console.log("Hello")
    console.log("Good Morning")
}

greet();
greet();

//passing of parameter
function greet2(name){
    console.log("Hello " + name + "!");
}

greet2("Subhash Raaj K")

//return Statement
function add(a,b){
    return (a+b)
}
let sum=add(50,60)
console.log(sum);

//Function expression

let hello=function(name){
    console.log("Hello, " + name);
}
hello("Subhash");

//Arrow function
let greet3=(name1)=>console.log("hello, "+ name1);
greet3("Subhash Raaj K");

let multiply=(a,b)=>a*b;
console.log(multiply(4,5));





//Creating Array
let empty=[];
let num=[1,2,3,4,5,6,7];
let fruits=["Apple","Mango","Orange"];
let complex=[
    1,
    "hello",
    true,
    {name:"subhash",id:136}
    ["hii","hello","gdmrg"]
];
console.log(empty)
console.log(num);
console.log(fruits)
console.log(complex);

//Accessing elements:
console.log(num[2]);
console.log(complex[1]);


//Modified Array elements
fruits[2]="kiwi";   
console.log(fruits);

//Array Length
console.log(fruits.length)

//Iterations over an array
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//Array methods and operations

//1.push method
//add element at the end
fruits.push("cherry")
console.log(fruits)

//2.pop method
//remove the last element
fruits.pop();
console.log(fruits);

//3.Unshift
//Add element in the front
fruits.unshift("cherry");
console.log(fruits)

//4.Shift
//Remove element from the front
fruits.shift();
console.log(fruits);

//5.concat()
let moreFruits=["Watermelon","Dragonfruit"]
newarr=fruits.concat    (moreFruits)
console.log(newarr);

//To find the acsii code for characters
let char="abC"
console.log(char.charCodeAt(2))

