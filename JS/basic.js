console.log("Hello World");

let firstName="Subhash";
let lastName="Raaj"
console.log(firstName, lastName)

console.log(firstName+" "+lastName)

//Mathematical Calculation:

console.log(5*5)

let radius=5;
area=Math.PI*radius*radius
console.log(area)

//Boolean Expression:
console.log(5>10)

/* Data types
1.String
*/ 
let fname="Subhash Raaj K"
console.log(typeof fname)

//2. Integer
console.log(typeof radius)

//3.Boolean
let isFound=true;
console.log(typeof isFound);

//4.Null
let address=null;
console.log(typeof address);

//5.Undefined
let phoneNumber;
console.log(typeof phoneNumber);

//6.Object{
let person={
    firstName:"Subhash Raaj K",
    id:456132,
    age:22,
    isStudent:false,
    address:null,
};
console.log(person)
console.log(typeof person);

//7.Array 
let fruits=["apple", "mango", "orange", "papaya"]
console.log(fruits)
console.log(typeof fruits);

//8.Date Object
let currentDate=new Date();
console.log(currentDate)

//9.BigInt
    let largeNumber=12345678913564978651698495465498n;
    console.log(largeNumber);
    console.log(typeof largeNumber)


//Arithmetic Operators:
//1.Addition
let sum=4+5;
console.log(sum);

//2.subraction
let sub=7-3;
console.log(sub)

//3.Multiplication
let mul=8*5;
console.log(mul);

//4.Division
let div=56/5;
console.log(div)
console.log(Math.floor(div))
console.log(Math.ceil(div))
console.log(Math.round(div))

//5. Modulo (Remainder)
let rem=10%3;
console.log(rem);

//Increment ++
let num=5;
num++;
console.log(num)

//Decrement --
num--;
console.log(num)

//Exponentiation
let expo=5**2;
console.log(expo)

//Unary plus
let num1=+"55";
console.log(num1+2)

//Unary Negation
let num2=78;
let num3=-num2;
console.log(num3);

//Conditionals  
//If-Else Statement:
let a=10;
if(a>10){
    console.log("a is greater than 10.")
}
else{
    console.log("a is Lesser than 10.")
}

//If-else Else-if
let age=60;
if(age<18){
    console.log("Child");
}
else if(age>=18 && age<60){
    console.log("Adult");
}
else if(age>=60){
    console.log("Senior Citizen");
}

//Ternary Operator
let isRaining=true;
let weather=isRaining?"Take an Umberlla":"Enjoy the weather";
console.log(weather);

//Switch Statement:
let day=1;
let dayname;
switch(day){
    case 1:
        dayname="Monday";
        break;
    case 2:
        dayanme="Tuesday";
        break;
    case 3:
        dayname="Wednesday";
        break;
    case 4:
        dayname="thursday";
    default:
        dayname="Unknown Input";
}
console.log(dayname);

//Nested If:
let ab=5;
if(ab>0){
    if(ab%2==0){
        console.log("It is a positive Even number");
    }
    else{
        console.log("It is a positive Odd number");
    }
}

//Logical AND (&&) operator
//All the conditions should satisfy
let abc=120;
if(abc>0 && abc%2==0){
    console.log("Number is Okay with it");
}
else{
    console.log("Number is not okay with it");
}

//Logical OR (||) Operator
//Any iine of the condition should satisfy
let color="blue";
if(color=="blue"|| color=="red"){
    console.log("color is red or blue");
}

//Nullish Coalescing Operator (??)
//check if the value is null or not, 
//if it is null it will reoplace value with the given data.
let username=null;
let displayName=username??"Subhash Raaj K";
console.log(displayName);


